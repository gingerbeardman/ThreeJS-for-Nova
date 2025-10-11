// Three.js Completions Extension for Nova
// Provides intelligent autocomplete for Three.js library

const threeJsCompletions = require('./threejs-completions.js');

class ThreeJSCompletionsProvider {
    constructor() {
        this.initializeCompletions();
        // Track variable types for context-aware completions
        this.variableTypes = new Map();
    }

    initializeCompletions() {
        // Initialize completion items from the completions data
        this.threeClasses = threeJsCompletions.classes;
        this.threeMethods = threeJsCompletions.methods;
        this.threeConstants = threeJsCompletions.constants;
        this.threeProperties = threeJsCompletions.properties;

        // Build a lookup map for quick class lookups
        this.classMap = new Map();
        this.threeClasses.forEach(cls => {
            this.classMap.set(cls.name, cls);
        });
    }

    // Parse document to track variable types
    trackVariableTypes(editor) {
        const fullText = editor.document.getTextInRange(new Range(0, editor.document.length));
        this.variableTypes.clear();

        // Match: const varName = new THREE.ClassName(
        // Match: const varName = new ClassName(
        const newPatterns = [
            /(?:const|let|var)\s+(\w+)\s*=\s*new\s+THREE\.(\w+)/g,
            /(?:const|let|var)\s+(\w+)\s*=\s*new\s+(\w+)/g
        ];

        for (const pattern of newPatterns) {
            let match;
            while ((match = pattern.exec(fullText)) !== null) {
                const varName = match[1];
                const className = match[2];
                if (this.classMap.has(className)) {
                    this.variableTypes.set(varName, className);
                }
            }
        }

        // Match: import { Scene, Camera } from 'three';
        // Then: const scene = new Scene()
        const importMatch = fullText.match(/import\s*\{([^}]+)\}\s*from\s*['"]three['"]/);
        if (importMatch) {
            const imports = importMatch[1].split(',').map(s => s.trim());
            imports.forEach(className => {
                // Match usage: const varName = new ImportedClass(
                const usagePattern = new RegExp(`(?:const|let|var)\\s+(\\w+)\\s*=\\s*new\\s+${className}`, 'g');
                let usageMatch;
                while ((usageMatch = usagePattern.exec(fullText)) !== null) {
                    this.variableTypes.set(usageMatch[1], className);
                }
            });
        }
    }
    
    provideCompletionItems(editor, context) {
        // Check if completions are enabled
        const enabled = nova.config.get('threejs.enableCompletions', 'boolean');
        if (!enabled) {
            return [];
        }

        // Track variable types in the document
        this.trackVariableTypes(editor);

        const items = [];
        const lineText = editor.getTextInRange(new Range(context.position - 100, context.position));

        // Detect if we're typing after "THREE."
        const afterThreeDot = /THREE\.\w*$/.test(lineText);

        // Detect if we're in an import statement
        const inImport = /from\s+['"]three['"]/.test(lineText) || /import\s+.*three/.test(lineText);

        if (afterThreeDot) {
            // Provide Three.js classes and constants after "THREE."
            items.push(...this.createClassCompletions());
            items.push(...this.createConstantCompletions());
        } else if (inImport) {
            // Provide ES6 import completions
            items.push(...this.createImportCompletions());
        } else if (/new\s+\w*$/.test(lineText)) {
            // Suggest Three.js classes after "new "
            items.push(...this.createClassCompletions());
        }

        // Check for method/property completions on specific instances
        const methodMatch = lineText.match(/(\w+)\.\w*$/);
        if (methodMatch && !afterThreeDot) {
            const varName = methodMatch[1];
            const className = this.variableTypes.get(varName);

            if (className) {
                // We know the type! Provide type-specific completions
                items.push(...this.createMethodCompletions(className));
                items.push(...this.createPropertyCompletions(className));
            } else {
                // Fallback to common methods
                items.push(...this.createMethodCompletions('common'));
                items.push(...this.createPropertyCompletions('common'));
            }
        }

        return items;
    }
    
    createClassCompletions() {
        return this.threeClasses.map(cls => {
            const item = new CompletionItem(cls.name, CompletionItemKind.Class);
            item.detail = cls.detail || 'Three.js Class';
            item.documentation = cls.documentation || '';
            item.insertText = cls.name;
            
            if (cls.constructor) {
                item.insertText = `${cls.name}(${cls.constructor})`;
            }
            
            return item;
        });
    }
    
    createConstantCompletions() {
        return this.threeConstants.map(constant => {
            const item = new CompletionItem(constant.name, CompletionItemKind.Constant);
            item.detail = constant.detail || 'Three.js Constant';
            item.documentation = constant.documentation || '';
            item.insertText = constant.name;
            return item;
        });
    }
    
    createMethodCompletions(className) {
        const methods = this.threeMethods[className] || this.threeMethods.common || [];

        // If we have a specific class, also include inherited methods
        let allMethods = [...methods];
        if (className !== 'common' && this.classMap.has(className)) {
            const cls = this.classMap.get(className);
            // Add common Object3D methods for 3D objects
            if (cls.extends === 'Object3D' || this.isDescendantOf(className, 'Object3D')) {
                allMethods = [...allMethods, ...this.threeMethods.common];
            }
        }

        return allMethods.map(method => {
            const item = new CompletionItem(method.name, CompletionItemKind.Method);
            item.detail = method.detail || 'Three.js Method';
            item.documentation = method.documentation || '';
            item.insertText = `${method.name}(${method.params || ''})`;
            return item;
        });
    }

    createPropertyCompletions(className) {
        const properties = this.threeProperties[className] || this.threeProperties.common || [];

        // If we have a specific class, also include inherited properties
        let allProperties = [...properties];
        if (className !== 'common' && this.classMap.has(className)) {
            const cls = this.classMap.get(className);
            // Add common Object3D properties for 3D objects
            if (cls.extends === 'Object3D' || this.isDescendantOf(className, 'Object3D')) {
                allProperties = [...allProperties, ...this.threeProperties.common];
            }
        }

        return allProperties.map(prop => {
            const item = new CompletionItem(prop.name, CompletionItemKind.Property);
            item.detail = prop.detail || prop.type || 'Three.js Property';
            item.documentation = prop.documentation || '';
            item.insertText = prop.name;
            return item;
        });
    }

    // Check if a class descends from a parent class
    isDescendantOf(className, parentClassName) {
        let current = this.classMap.get(className);
        const visited = new Set();

        while (current && current.extends && !visited.has(current.name)) {
            visited.add(current.name);
            if (current.extends === parentClassName) {
                return true;
            }
            current = this.classMap.get(current.extends);
        }

        return false;
    }
    
    createImportCompletions() {
        return this.threeClasses.map(cls => {
            const item = new CompletionItem(cls.name, CompletionItemKind.Class);
            item.detail = `Import ${cls.name} from three`;
            item.documentation = cls.documentation || '';
            item.insertText = cls.name;
            return item;
        });
    }
}

// Three.js Color Assistant
// Provides color picker support for Three.js hex colors (0xRRGGBB) and HSL colors (setHSL)
class ThreeJSColorAssistant {
    provideColors(editor, context) {
        try {
            const colors = [];
            
            // Scan the entire document for color values
            // Note: Nova manages when to call this, typically not on every keystroke
            const text = editor.document.getTextInRange(new Range(0, editor.document.length));
            
            // Match Three.js hex color format: 0x669966
            const hexRegex = /\b(0x[0-9A-Fa-f]{6})\b/g;
            let match;
            
            while ((match = hexRegex.exec(text)) !== null) {
                const hexValue = match[1].substring(2); // Remove "0x" prefix
                
                // Convert hex to RGB (0-255 to 0-1 range)
                const r = parseInt(hexValue.substring(0, 2), 16) / 255;
                const g = parseInt(hexValue.substring(2, 4), 16) / 255;
                const b = parseInt(hexValue.substring(4, 6), 16) / 255;
                
                const color = new Color('rgb', [r, g, b, 1.0]);
                const range = new Range(match.index, match.index + match[0].length);
                
                colors.push(new ColorInformation(range, color));
            }
            
            // Match Three.js HSL colors: setHSL(0.15, 0.7, 0.8)
            const hslRegex = /setHSL\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/g;
            
            while ((match = hslRegex.exec(text)) !== null) {
                const h = parseFloat(match[1]);
                const s = parseFloat(match[2]);
                const l = parseFloat(match[3]);
                
                // Three.js HSL: 0-1, Nova HSL: h=0-360, s,l=0-1
                const color = new Color('hsl', [h * 360, s, l, 1.0]);
                const range = new Range(match.index, match.index + match[0].length);
                
                colors.push(new ColorInformation(range, color));
            }
            
            return colors;
        } catch (error) {
            console.error('ThreeJS Color Assistant Error:', error);
            return [];
        }
    }
    
    // Convert edited color back to Three.js format
    provideColorPresentations(color, editor, context) {
        try {
            const originalText = editor.document.getTextInRange(context.range);
            
            // Determine if we're working with HSL or hex format
            if (originalText.startsWith('setHSL')) {
                // Convert back to HSL format (Nova: h=0-360, s,l=0-1 → Three.js: all 0-1)
                const h = (color.components[0] / 360).toFixed(2);
                const s = color.components[1].toFixed(2);
                const l = color.components[2].toFixed(2);
                
                return [new ColorPresentation(`setHSL(${h}, ${s}, ${l})`)];
            } else {
                // Convert RGB to hex format (0xRRGGBB)
                const r = Math.round(color.components[0] * 255);
                const g = Math.round(color.components[1] * 255);
                const b = Math.round(color.components[2] * 255);
                
                const hex = [r, g, b]
                    .map(c => c.toString(16).toUpperCase().padStart(2, '0'))
                    .join('');
                
                return [new ColorPresentation(`0x${hex}`)];
            }
        } catch (error) {
            console.error('ThreeJS Color Assistant Error:', error);
            return [];
        }
    }
}

exports.activate = function() {
    console.log('Three.js Completions Extension Activated');

    // Register completion provider for JavaScript
    nova.assistants.registerCompletionAssistant('javascript', new ThreeJSCompletionsProvider(), {
        syntax: 'javascript',
        triggerChars: new Charset('.')
    });

    // Register completion provider for TypeScript
    nova.assistants.registerCompletionAssistant('typescript', new ThreeJSCompletionsProvider(), {
        syntax: 'typescript',
        triggerChars: new Charset('.')
    });

    // Register color assistant for JavaScript and TypeScript
    const colorAssistant = new ThreeJSColorAssistant();
    nova.assistants.registerColorAssistant('javascript', colorAssistant);
    nova.assistants.registerColorAssistant('typescript', colorAssistant);
};

exports.deactivate = function() {
    console.log('Three.js Completions Extension Deactivated');
};
