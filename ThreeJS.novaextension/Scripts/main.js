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
};

exports.deactivate = function() {
    console.log('Three.js Completions Extension Deactivated');
};

