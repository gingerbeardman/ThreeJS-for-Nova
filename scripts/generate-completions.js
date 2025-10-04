#!/usr/bin/env node

/**
 * Generate Three.js completions from TypeScript definitions
 *
 * This script:
 * 1. Downloads the latest @types/three package
 * 2. Parses the TypeScript definition files
 * 3. Extracts classes, methods, properties, and constants
 * 4. Generates a completions data file for the Nova extension
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const TEMP_DIR = '/tmp/three-types-generator';
const OUTPUT_FILE = path.join(__dirname, '../ThreeJS.novaextension/Scripts/threejs-completions.js');

// Ensure temp directory exists
if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
}

console.log('Downloading @types/three...');
execSync(`cd ${TEMP_DIR} && npm pack @types/three 2>/dev/null`, { stdio: 'inherit' });

console.log('Extracting package...');
const tarball = fs.readdirSync(TEMP_DIR).find(f => f.endsWith('.tgz'));
execSync(`cd ${TEMP_DIR} && tar -xzf ${tarball}`, { stdio: 'inherit' });

const typesDir = path.join(TEMP_DIR, 'three/src');

// Data structures to hold parsed information
const classes = [];
const methods = { common: [] };
const properties = { common: [] };
const constants = [];

// Helper function to extract documentation from JSDoc comments
function extractDocs(content, className) {
    const classMatch = content.match(new RegExp(`\\/\\*\\*[\\s\\S]*?\\*\\/\\s*export class ${className}`, 'm'));
    if (!classMatch) return null;

    const jsdocMatch = classMatch[0].match(/\/\*\*([\s\S]*?)\*\//);
    if (!jsdocMatch) return null;

    const jsdoc = jsdocMatch[1];
    const lines = jsdoc.split('\n').map(l => l.trim().replace(/^\* ?/, '')).filter(l => l && !l.startsWith('@'));
    return lines.join(' ').trim();
}

// Helper function to extract constructor parameters
function extractConstructor(content, className) {
    const constructorMatch = content.match(new RegExp(`constructor\\(([^)]*)\\)`, 'm'));
    if (!constructorMatch) return '';

    const params = constructorMatch[1].split(',').map(p => {
        const name = p.trim().split(':')[0].replace('?', '').trim();
        return name;
    }).filter(Boolean);

    return params.join(', ');
}

// Helper function to extract methods from a class
function extractMethods(content, className) {
    const methodMatches = content.matchAll(/^\s{4}(\w+)\([^)]*\):/gm);
    const methods = [];

    for (const match of methodMatches) {
        const methodName = match[1];
        if (methodName !== 'constructor' && !methodName.startsWith('_')) {
            methods.push(methodName);
        }
    }

    return methods;
}

// Helper function to extract properties from a class
function extractProperties(content, className) {
    const propertyMatches = content.matchAll(/^\s{4}(\w+):\s*([^;]+);/gm);
    const properties = [];

    for (const match of propertyMatches) {
        const propName = match[1];
        const propType = match[2].trim();
        if (!propName.startsWith('_') && propName !== 'type' && !propName.startsWith('is')) {
            properties.push({ name: propName, type: propType });
        }
    }

    return properties;
}

// Process a single .d.ts file
function processFile(filePath, category) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.d.ts');

    // Match class declarations
    const classMatches = content.matchAll(/export class (\w+)( extends (\w+))?/g);

    for (const match of classMatches) {
        const className = match[1];
        const extendsClass = match[3] || null;

        const docs = extractDocs(content, className);
        const constructor = extractConstructor(content, className);
        const classMethods = extractMethods(content, className);
        const classProperties = extractProperties(content, className);

        classes.push({
            name: className,
            detail: `THREE.${className}`,
            documentation: docs || `Three.js ${category} class`,
            constructor: constructor,
            extends: extendsClass,
            category: category
        });

        // Store methods for this class
        if (classMethods.length > 0) {
            methods[className] = classMethods.map(m => ({
                name: m,
                detail: `${className}.${m}()`,
                documentation: `Method of ${className}`
            }));
        }

        // Store properties for this class
        if (classProperties.length > 0) {
            properties[className] = classProperties.map(p => ({
                name: p.name,
                type: p.type,
                detail: `${className}.${p.name}`,
                documentation: `Property of ${className}`
            }));
        }
    }

    // Match constant declarations
    const constMatches = content.matchAll(/export const (\w+):/g);
    for (const match of constMatches) {
        constants.push({
            name: match[1],
            detail: `THREE.${match[1]}`,
            documentation: `Three.js constant`
        });
    }
}

// Recursively process directory
function processDirectory(dir, category) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            processDirectory(fullPath, entry.name);
        } else if (entry.isFile() && entry.name.endsWith('.d.ts') && !entry.name.includes('Three.')) {
            processFile(fullPath, category);
        }
    }
}

console.log('Parsing TypeScript definitions...');

// Process each major category
const categories = ['cameras', 'geometries', 'materials', 'lights', 'loaders', 'math', 'objects', 'scenes', 'textures', 'helpers', 'animation', 'audio', 'core', 'extras'];

for (const category of categories) {
    const categoryPath = path.join(typesDir, category);
    if (fs.existsSync(categoryPath)) {
        processDirectory(categoryPath, category);
    }
}

// Also process renderers
const renderersPath = path.join(typesDir, 'renderers');
if (fs.existsSync(renderersPath)) {
    const files = ['WebGLRenderer.d.ts', 'WebGL1Renderer.d.ts'];
    for (const file of files) {
        const filePath = path.join(renderersPath, file);
        if (fs.existsSync(filePath)) {
            processFile(filePath, 'renderers');
        }
    }
}

// Add common Object3D methods that most classes inherit
methods.common = [
    { name: 'add', params: '...objects', detail: 'Add objects as children', documentation: 'Adds object as child of this object' },
    { name: 'remove', params: '...objects', detail: 'Remove objects', documentation: 'Removes object as child of this object' },
    { name: 'clear', params: '', detail: 'Clear children', documentation: 'Removes all child objects' },
    { name: 'getObjectById', params: 'id', detail: 'Get object by ID', documentation: 'Searches through object and its children' },
    { name: 'getObjectByName', params: 'name', detail: 'Get object by name', documentation: 'Searches through object and its children' },
    { name: 'traverse', params: 'callback', detail: 'Traverse hierarchy', documentation: 'Executes callback on this object and descendants' },
    { name: 'clone', params: 'recursive', detail: 'Clone object', documentation: 'Returns a clone of this object' },
    { name: 'copy', params: 'source, recursive', detail: 'Copy object', documentation: 'Copies the given object into this object' }
];

// Common properties
properties.common = [
    { name: 'position', type: 'Vector3', detail: 'Object position', documentation: 'Object\'s local position' },
    { name: 'rotation', type: 'Euler', detail: 'Object rotation', documentation: 'Object\'s local rotation' },
    { name: 'scale', type: 'Vector3', detail: 'Object scale', documentation: 'Object\'s local scale' },
    { name: 'quaternion', type: 'Quaternion', detail: 'Object quaternion', documentation: 'Object\'s local rotation as quaternion' },
    { name: 'visible', type: 'boolean', detail: 'Visibility', documentation: 'Object gets rendered if true' },
    { name: 'castShadow', type: 'boolean', detail: 'Cast shadow', documentation: 'Whether object casts shadows' },
    { name: 'receiveShadow', type: 'boolean', detail: 'Receive shadow', documentation: 'Whether material receives shadows' }
];

// Generate output file
console.log('Generating completions file...');
console.log(`Found ${classes.length} classes, ${Object.keys(methods).length} method groups, ${constants.length} constants`);

const output = `// Comprehensive Three.js completion data
// Auto-generated from @types/three TypeScript definitions
// Generated on: ${new Date().toISOString()}

exports.classes = ${JSON.stringify(classes, null, 2)};

exports.methods = ${JSON.stringify(methods, null, 2)};

exports.properties = ${JSON.stringify(properties, null, 2)};

exports.constants = ${JSON.stringify(constants, null, 2)};
`;

fs.writeFileSync(OUTPUT_FILE, output);
console.log(`✓ Completions written to ${OUTPUT_FILE}`);

// Cleanup
console.log('Cleaning up...');
execSync(`rm -rf ${TEMP_DIR}`, { stdio: 'inherit' });

console.log('✓ Done!');
