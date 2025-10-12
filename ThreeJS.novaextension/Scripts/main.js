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
    // Convert HSL (0-1 range) to RGB (0-1 range)
    hslToRgb(h, s, l) {
        let r, g, b;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return { r, g, b };
    }

    // Convert RGB (0-1 range) to HSL (0-1 range)
    rgbToHsl(r, g, b) {
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;
        let h, s, l;

        l = (max + min) / 2;

        if (delta === 0) {
            h = 0;
            s = 0;
        } else {
            s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

            if (max === r) {
                h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
            } else if (max === g) {
                h = ((b - r) / delta + 2) / 6;
            } else {
                h = ((r - g) / delta + 4) / 6;
            }
        }

        return { h, s, l };
    }

    // Trim trailing zeroes from number string
    trimTrailingZeroes(numStr) {
        if (!numStr.includes('.')) return numStr;
        return numStr.replace(/\.?0+$/, '') || '0';
    }

    // Find nearest CSS color name for given RGB values (0-255)
    findNearestColorName(r, g, b) {
        const colors = {
            aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255],
            aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220],
            bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42],
            burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255],
            darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0],
            darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255],
            gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128],
            green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128],
            honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92],
            indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140],
            lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50],
            linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128],
            oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35],
            orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185],
            peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221],
            powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153],
            red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45],
            silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205],
            slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250],
            springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140],
            teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71],
            turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179],
            white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        };

        let nearestName = 'black';
        let minDistance = Infinity;

        for (const [name, rgb] of Object.entries(colors)) {
            // Calculate Euclidean distance in RGB space
            const distance = Math.sqrt(
                Math.pow(r - rgb[0], 2) +
                Math.pow(g - rgb[1], 2) +
                Math.pow(b - rgb[2], 2)
            );

            if (distance < minDistance) {
                minDistance = distance;
                nearestName = name;
            }
        }

        return nearestName;
    }

    // Convert CSS color name to RGB (0-1 range)
    // Supports all 140 X11 color names supported by Three.js
    cssColorNameToRgb(name) {
        const colors = {
            aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255],
            aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220],
            bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42],
            burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255],
            darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0],
            darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255],
            gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128],
            green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128],
            honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92],
            indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140],
            lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50],
            linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128],
            oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35],
            orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185],
            peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221],
            powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153],
            red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45],
            silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205],
            slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250],
            springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140],
            teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71],
            turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179],
            white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        };

        const rgb255 = colors[name.toLowerCase()];
        if (rgb255) {
            return {
                r: rgb255[0] / 255,
                g: rgb255[1] / 255,
                b: rgb255[2] / 255
            };
        }
        return null;
    }

    // Check if a given index is inside a JavaScript comment
    isInComment(text, index) {
        // Find all single-line comments
        const singleLineCommentRegex = /\/\/.*/g;
        let match;
        while ((match = singleLineCommentRegex.exec(text)) !== null) {
            if (index >= match.index && index < match.index + match[0].length) {
                return true;
            }
        }

        // Find all multi-line comments
        const multiLineCommentRegex = /\/\*[\s\S]*?\*\//g;
        while ((match = multiLineCommentRegex.exec(text)) !== null) {
            if (index >= match.index && index < match.index + match[0].length) {
                return true;
            }
        }

        return false;
    }

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
                // Skip if this match is inside a comment
                if (this.isInComment(text, match.index)) {
                    continue;
                }

                const hexValue = match[1].substring(2); // Remove "0x" prefix

                // Store original hex values to preserve them exactly when unchanged
                const originalHex = hexValue.toUpperCase();

                // Convert hex to RGB (0-255 to 0-1 range)
                const r = parseInt(hexValue.substring(0, 2), 16) / 255;
                const g = parseInt(hexValue.substring(2, 4), 16) / 255;
                const b = parseInt(hexValue.substring(4, 6), 16) / 255;

                const color = new Color('rgb', [r, g, b, 1.0]);
                const range = new Range(match.index, match.index + match[0].length);

                colors.push(new ColorInformation(range, color));
            }

            // Match Three.js RGB colors: setRGB(r, g, b) where r,g,b are 0-1 or 0-255
            const rgbFuncRegex = /setRGB\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/g;
            while ((match = rgbFuncRegex.exec(text)) !== null) {
                if (this.isInComment(text, match.index)) continue;
                let r = parseFloat(match[1]);
                let g = parseFloat(match[2]);
                let b = parseFloat(match[3]);
                // Normalize if values look like 0-255
                if (r > 1 || g > 1 || b > 1) {
                    r = r / 255; g = g / 255; b = b / 255;
                }
                const color = new Color('rgb', [r, g, b, 1.0]);
                const range = new Range(match.index, match.index + match[0].length);
                colors.push(new ColorInformation(range, color));
            }

            // Match numeric RGB constructor: new Color(r, g, b) or new THREE.Color(r, g, b)
            const ctorRgbRegex = /new\s+(?:THREE\.)?Color\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/g;
            while ((match = ctorRgbRegex.exec(text)) !== null) {
                if (this.isInComment(text, match.index)) continue;
                let r = parseFloat(match[1]);
                let g = parseFloat(match[2]);
                let b = parseFloat(match[3]);
                if (r > 1 || g > 1 || b > 1) {
                    r = r / 255; g = g / 255; b = b / 255;
                }
                const color = new Color('rgb', [r, g, b, 1.0]);
                const range = new Range(match.index, match.index + match[0].length);
                colors.push(new ColorInformation(range, color));
            }

            // Match hex string in Color()/setStyle(): Color('#669966') or setStyle('#669966')
            // Must match the full "new THREE.Color(...)" wrapper if present
            const styleHexRegex = /(new\s+(?:THREE\.)?)?(?:setStyle|Color)\s*\(\s*(['"])(#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}))\2\s*\)/g;
            while ((match = styleHexRegex.exec(text)) !== null) {
                if (this.isInComment(text, match.index)) continue;
                let hex = match[3]; // '#RGB' or '#RRGGBB'
                if (hex.length === 4) {
                    // Expand #RGB to #RRGGBB
                    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
                }
                const r = parseInt(hex.substring(1, 3), 16) / 255;
                const g = parseInt(hex.substring(3, 5), 16) / 255;
                const b = parseInt(hex.substring(5, 7), 16) / 255;
                const color = new Color('rgb', [r, g, b, 1.0]);
                const range = new Range(match.index, match.index + match[0].length);
                colors.push(new ColorInformation(range, color));
            }
            
            // Match Three.js HSL colors: setHSL(0.15, 0.7, 0.8)
            const hslRegex = /setHSL\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/g;

            while ((match = hslRegex.exec(text)) !== null) {
                if (this.isInComment(text, match.index)) continue;
                const h = parseFloat(match[1]);
                const s = parseFloat(match[2]);
                const l = parseFloat(match[3]);

                // Three.js HSL: 0-1 range for all components
                // Nova expects RGB format (0-1 range), so convert HSL to RGB
                const rgb = this.hslToRgb(h, s, l);
                const color = new Color('rgb', [rgb.r, rgb.g, rgb.b, 1.0]);
                const range = new Range(match.index, match.index + match[0].length);

                colors.push(new ColorInformation(range, color));
            }

            // Match setHex(): setHex(0x669966)
            const setHexRegex = /setHex\s*\(\s*(0x[0-9A-Fa-f]{6})\s*\)/g;
            while ((match = setHexRegex.exec(text)) !== null) {
                if (this.isInComment(text, match.index)) continue;
                const hexValue = match[1].substring(2);
                const r = parseInt(hexValue.substring(0, 2), 16) / 255;
                const g = parseInt(hexValue.substring(2, 4), 16) / 255;
                const b = parseInt(hexValue.substring(4, 6), 16) / 255;
                const color = new Color('rgb', [r, g, b, 1.0]);
                const range = new Range(match.index, match.index + match[0].length);
                colors.push(new ColorInformation(range, color));
            }

            // Match CSS rgb() strings in setStyle() or Color(): rgb(255, 0, 0) or rgb(100%, 0%, 0%)
            // Must match the full "new THREE.Color(...)" wrapper if present
            const rgbCssRegex = /(new\s+(?:THREE\.)?)?(?:setStyle|Color)\s*\(\s*(['"])rgb\s*\(\s*([^)]+)\)\2\s*\)/g;
            while ((match = rgbCssRegex.exec(text)) !== null) {
                if (this.isInComment(text, match.index)) continue;
                const values = match[3].split(',').map(v => v.trim());
                if (values.length === 3) {
                    let r, g, b;
                    if (values[0].includes('%')) {
                        // Percentage values
                        r = parseFloat(values[0]) / 100;
                        g = parseFloat(values[1]) / 100;
                        b = parseFloat(values[2]) / 100;
                    } else {
                        // 0-255 values
                        r = parseFloat(values[0]) / 255;
                        g = parseFloat(values[1]) / 255;
                        b = parseFloat(values[2]) / 255;
                    }
                    const color = new Color('rgb', [r, g, b, 1.0]);
                    const range = new Range(match.index, match.index + match[0].length);
                    colors.push(new ColorInformation(range, color));
                }
            }

            // Match CSS hsl() strings in setStyle() or Color(): hsl(0, 100%, 50%)
            // Must match the full "new THREE.Color(...)" wrapper if present
            const hslCssRegex = /(new\s+(?:THREE\.)?)?(?:setStyle|Color)\s*\(\s*(['"])hsl\s*\(\s*([^)]+)\)\2\s*\)/g;
            while ((match = hslCssRegex.exec(text)) !== null) {
                if (this.isInComment(text, match.index)) continue;
                const values = match[3].split(',').map(v => v.trim());
                if (values.length === 3) {
                    // CSS HSL: h=0-360, s,l=0-100%
                    const h = parseFloat(values[0]) / 360; // Convert to 0-1
                    const s = parseFloat(values[1]) / 100; // Convert % to 0-1
                    const l = parseFloat(values[2]) / 100; // Convert % to 0-1
                    const rgb = this.hslToRgb(h, s, l);
                    const color = new Color('rgb', [rgb.r, rgb.g, rgb.b, 1.0]);
                    const range = new Range(match.index, match.index + match[0].length);
                    colors.push(new ColorInformation(range, color));
                }
            }

            // Match CSS color names in setStyle(), setColorName(), or Color(): 'red', 'skyblue', etc.
            // Must match the full "new THREE.Color(...)" wrapper if present
            const colorNameRegex = /(new\s+(?:THREE\.)?)?(?:setStyle|setColorName|Color)\s*\(\s*(['"])([a-z]+)\2\s*\)/gi;
            while ((match = colorNameRegex.exec(text)) !== null) {
                if (this.isInComment(text, match.index)) continue;
                const colorName = match[3].toLowerCase();
                const rgb = this.cssColorNameToRgb(colorName);
                if (rgb) {
                    const color = new Color('rgb', [rgb.r, rgb.g, rgb.b, 1.0]);
                    const range = new Range(match.index, match.index + match[0].length);
                    colors.push(new ColorInformation(range, color));
                }
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
            
            // Determine if we're working with HSL, RGB, constructor, or hex format
            if (originalText.startsWith('setHSL')) {
                // Parse the original HSL values from the text
                const hslMatch = originalText.match(/setHSL\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)/);

                if (hslMatch) {
                    const origH = parseFloat(hslMatch[1]);
                    const origS = parseFloat(hslMatch[2]);
                    const origL = parseFloat(hslMatch[3]);

                    // Convert picker's RGB color to HSL (Three.js uses 0-1 range)
                    const r = color.components[0];
                    const g = color.components[1];
                    const b = color.components[2];

                    const hsl = this.rgbToHsl(r, g, b);

                    // Check if color changed (with tolerance for floating point)
                    const changed = Math.abs(origH - hsl.h) > 0.001 ||
                                  Math.abs(origS - hsl.s) > 0.001 ||
                                  Math.abs(origL - hsl.l) > 0.001;

                    if (changed) {
                        // Color changed, use new values with appropriate precision and trim trailing zeroes
                        const h = this.trimTrailingZeroes(hsl.h.toFixed(3));
                        const s = this.trimTrailingZeroes(hsl.s.toFixed(3));
                        const l = this.trimTrailingZeroes(hsl.l.toFixed(3));
                        return [new ColorPresentation(`setHSL(${h}, ${s}, ${l})`)];
                    } else {
                        // Color unchanged, preserve original text exactly
                        return [new ColorPresentation(originalText)];
                    }
                }

                // Fallback if parsing failed
                return [new ColorPresentation(originalText)];
            } else if (/^setRGB\s*\(/.test(originalText)) {
                // Return in setRGB format
                // Prefer RGB components; if picker is HSL, convert
                let r, g, b;
                if (color.format === 'rgb') {
                    r = color.components[0];
                    g = color.components[1];
                    b = color.components[2];
                } else {
                    // HSL to RGB
                    const h = color.components[0] / 360; const s = color.components[1]; const l = color.components[2];
                    const hue2rgb = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1/6) return p + (q - p) * 6 * t; if (t < 1/2) return q; if (t < 2/3) return p + (q - p) * (2/3 - t) * 6; return p; };
                    let q = l < 0.5 ? l * (1 + s) : l + s - l * s; let p = 2 * l - q;
                    r = hue2rgb(p, q, h + 1/3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1/3);
                }
                const rr = this.trimTrailingZeroes(r.toFixed(2));
                const gg = this.trimTrailingZeroes(g.toFixed(2));
                const bb = this.trimTrailingZeroes(b.toFixed(2));
                return [new ColorPresentation(`setRGB(${rr}, ${gg}, ${bb})`)];
            } else if (/^new\s+(?:THREE\.)?Color\s*\(/.test(originalText)) {
                // Preserve constructor style
                const ctorPrefixMatch = originalText.match(/^new\s+((?:THREE\.)?)Color/);
                const prefix = ctorPrefixMatch ? ctorPrefixMatch[1] : '';

                // Handle string hex constructor FIRST (before color names)
                const stringHexMatch = originalText.match(/Color\s*\(\s*(['"])#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})\1\s*\)/);
                if (stringHexMatch) {
                    const quote = stringHexMatch[1];
                    const originalHex = stringHexMatch[2];

                    // Check if unchanged
                    const r = Math.round(color.components[0] * 255);
                    const g = Math.round(color.components[1] * 255);
                    const b = Math.round(color.components[2] * 255);

                    // Parse original hex (might be 3 or 6 char)
                    let origR, origG, origB;
                    if (originalHex.length === 3) {
                        origR = parseInt(originalHex[0] + originalHex[0], 16);
                        origG = parseInt(originalHex[1] + originalHex[1], 16);
                        origB = parseInt(originalHex[2] + originalHex[2], 16);
                    } else {
                        origR = parseInt(originalHex.substring(0, 2), 16);
                        origG = parseInt(originalHex.substring(2, 4), 16);
                        origB = parseInt(originalHex.substring(4, 6), 16);
                    }

                    if (r === origR && g === origG && b === origB) {
                        return [new ColorPresentation(originalText)];
                    }

                    // Color changed, preserve hex string format and case
                    const isUpperCase = originalHex === originalHex.toUpperCase();
                    let hex = `${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
                    hex = isUpperCase ? hex.toUpperCase() : hex.toLowerCase();
                    return [new ColorPresentation(`new ${prefix}Color(${quote}#${hex}${quote})`)];
                }

                // Handle rgb() or hsl() string constructor - must come before numeric constructor
                const rgbHslStringMatch = originalText.match(/Color\s*\(\s*(['"])(?:rgb|hsl)\s*\(/);
                if (rgbHslStringMatch) {
                    const quote = rgbHslStringMatch[1];
                    if (originalText.includes('rgb(')) {
                        // Check if original was percentage-based
                        const rgbMatch = originalText.match(/rgb\s*\(\s*([^)]+)\)/);
                        const isPercentage = rgbMatch && rgbMatch[1].includes('%');

                        if (isPercentage) {
                            const r = Math.round(color.components[0] * 100);
                            const g = Math.round(color.components[1] * 100);
                            const b = Math.round(color.components[2] * 100);
                            return [new ColorPresentation(`new ${prefix}Color(${quote}rgb(${r}%, ${g}%, ${b}%)${quote})`)];
                        } else {
                            const r = Math.round(color.components[0] * 255);
                            const g = Math.round(color.components[1] * 255);
                            const b = Math.round(color.components[2] * 255);
                            return [new ColorPresentation(`new ${prefix}Color(${quote}rgb(${r}, ${g}, ${b})${quote})`)];
                        }
                    } else {
                        const hsl = this.rgbToHsl(color.components[0], color.components[1], color.components[2]);
                        const h = Math.round(hsl.h * 360);
                        const s = Math.round(hsl.s * 100);
                        const l = Math.round(hsl.l * 100);
                        return [new ColorPresentation(`new ${prefix}Color(${quote}hsl(${h}, ${s}%, ${l}%)${quote})`)];
                    }
                }

                // Handle color name constructor (AFTER hex and rgb/hsl checks)
                const colorNameCtorMatch = originalText.match(/Color\s*\(\s*(['"])([a-z]+)\1\s*\)/i);
                if (colorNameCtorMatch) {
                    const origName = colorNameCtorMatch[2].toLowerCase();
                    const origRgb = this.cssColorNameToRgb(origName);
                    if (origRgb) {
                        const r = Math.round(color.components[0] * 255);
                        const g = Math.round(color.components[1] * 255);
                        const b = Math.round(color.components[2] * 255);
                        const origR = Math.round(origRgb.r * 255);
                        const origG = Math.round(origRgb.g * 255);
                        const origB = Math.round(origRgb.b * 255);
                        if (r === origR && g === origG && b === origB) {
                            return [new ColorPresentation(originalText)];
                        }
                        // Color changed, map to nearest color name
                        const quote = colorNameCtorMatch[1];
                        const nearestName = this.findNearestColorName(r, g, b);
                        return [new ColorPresentation(`new ${prefix}Color(${quote}${nearestName}${quote})`)];
                    }
                }

                // Handle numeric RGB constructor (emit as numeric RGB)
                let r, g, b;
                if (color.format === 'rgb') {
                    r = color.components[0]; g = color.components[1]; b = color.components[2];
                } else {
                    const h = color.components[0] / 360; const s = color.components[1]; const l = color.components[2];
                    const hue2rgb = (p, q, t) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1/6) return p + (q - p) * 6 * t; if (t < 1/2) return q; if (t < 2/3) return p + (q - p) * (2/3 - t) * 6; return p; };
                    let q = l < 0.5 ? l * (1 + s) : l + s - l * s; let p = 2 * l - q;
                    r = hue2rgb(p, q, h + 1/3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1/3);
                }
                const rr = this.trimTrailingZeroes(r.toFixed(2));
                const gg = this.trimTrailingZeroes(g.toFixed(2));
                const bb = this.trimTrailingZeroes(b.toFixed(2));
                return [new ColorPresentation(`new ${prefix}Color(${rr}, ${gg}, ${bb})`)];
            } else if (/^setStyle\s*\(/.test(originalText)) {
                // Determine original format inside setStyle
                const styleQuote = originalText.match(/setStyle\s*\(\s*(['"])/);
                const quote = styleQuote ? styleQuote[1] : '"';

                // Check if it was a color name
                const colorNameMatch = originalText.match(/setStyle\s*\(\s*['"]([a-z]+)['"]\s*\)/i);
                if (colorNameMatch) {
                    // Keep as color name if unchanged
                    const origName = colorNameMatch[1].toLowerCase();
                    const origRgb = this.cssColorNameToRgb(origName);
                    if (origRgb) {
                        const r = Math.round(color.components[0] * 255);
                        const g = Math.round(color.components[1] * 255);
                        const b = Math.round(color.components[2] * 255);
                        const origR = Math.round(origRgb.r * 255);
                        const origG = Math.round(origRgb.g * 255);
                        const origB = Math.round(origRgb.b * 255);
                        if (r === origR && g === origG && b === origB) {
                            return [new ColorPresentation(originalText)];
                        }
                        // Color changed - map to nearest color name
                        const nearestName = this.findNearestColorName(r, g, b);
                        return [new ColorPresentation(`setStyle(${quote}${nearestName}${quote})`)];
                    }
                }

                // Check if it was rgb() or hsl()
                if (originalText.includes('rgb(') || originalText.includes('hsl(')) {
                    // Convert back to original format
                    if (originalText.includes('rgb(')) {
                        // Check if original was percentage-based
                        const rgbMatch = originalText.match(/rgb\s*\(\s*([^)]+)\)/);
                        const isPercentage = rgbMatch && rgbMatch[1].includes('%');

                        if (isPercentage) {
                            const r = Math.round(color.components[0] * 100);
                            const g = Math.round(color.components[1] * 100);
                            const b = Math.round(color.components[2] * 100);
                            return [new ColorPresentation(`setStyle(${quote}rgb(${r}%, ${g}%, ${b}%)${quote})`)];
                        } else {
                            const r = Math.round(color.components[0] * 255);
                            const g = Math.round(color.components[1] * 255);
                            const b = Math.round(color.components[2] * 255);
                            return [new ColorPresentation(`setStyle(${quote}rgb(${r}, ${g}, ${b})${quote})`)];
                        }
                    } else {
                        const hsl = this.rgbToHsl(color.components[0], color.components[1], color.components[2]);
                        const h = Math.round(hsl.h * 360);
                        const s = Math.round(hsl.s * 100);
                        const l = Math.round(hsl.l * 100);
                        return [new ColorPresentation(`setStyle(${quote}hsl(${h}, ${s}%, ${l}%)${quote})`)];
                    }
                }

                // Check if it was originally a hex value
                const hexStyleMatch = originalText.match(/setStyle\s*\(\s*['"]#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})['"]\s*\)/);
                if (hexStyleMatch) {
                    const originalHex = hexStyleMatch[1];
                    const r = Math.round(color.components[0] * 255);
                    const g = Math.round(color.components[1] * 255);
                    const b = Math.round(color.components[2] * 255);

                    // Parse original to check if unchanged
                    let origR, origG, origB;
                    if (originalHex.length === 3) {
                        origR = parseInt(originalHex[0] + originalHex[0], 16);
                        origG = parseInt(originalHex[1] + originalHex[1], 16);
                        origB = parseInt(originalHex[2] + originalHex[2], 16);
                    } else {
                        origR = parseInt(originalHex.substring(0, 2), 16);
                        origG = parseInt(originalHex.substring(2, 4), 16);
                        origB = parseInt(originalHex.substring(4, 6), 16);
                    }

                    if (r === origR && g === origG && b === origB) {
                        return [new ColorPresentation(originalText)];
                    }

                    // Preserve case from original
                    const isUpperCase = originalHex === originalHex.toUpperCase();
                    let hex = `${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
                    hex = isUpperCase ? hex.toUpperCase() : hex.toLowerCase();
                    return [new ColorPresentation(`setStyle(${quote}#${hex}${quote})`)];
                }

                // Default fallback to hex (shouldn't normally reach here)
                const r = Math.round(color.components[0] * 255);
                const g = Math.round(color.components[1] * 255);
                const b = Math.round(color.components[2] * 255);
                const hex = `${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
                return [new ColorPresentation(`setStyle(${quote}#${hex}${quote})`)];
            } else if (/^setColorName\s*\(/.test(originalText)) {
                // setColorName('red') - preserve color name when changed too
                const colorNameMatch = originalText.match(/setColorName\s*\(\s*(['"])([a-z]+)\1\s*\)/i);
                if (colorNameMatch) {
                    const origName = colorNameMatch[1].toLowerCase();
                    const origRgb = this.cssColorNameToRgb(origName);
                    if (origRgb) {
                        const r = Math.round(color.components[0] * 255);
                        const g = Math.round(color.components[1] * 255);
                        const b = Math.round(color.components[2] * 255);
                        const origR = Math.round(origRgb.r * 255);
                        const origG = Math.round(origRgb.g * 255);
                        const origB = Math.round(origRgb.b * 255);
                        if (r === origR && g === origG && b === origB) {
                            return [new ColorPresentation(originalText)];
                        }
                    }
                }
                // Color changed - map to nearest color name
                const r = Math.round(color.components[0] * 255);
                const g = Math.round(color.components[1] * 255);
                const b = Math.round(color.components[2] * 255);
                const nearestName = this.findNearestColorName(r, g, b);
                const quote = colorNameMatch ? colorNameMatch[1] : "'";
                return [new ColorPresentation(`setColorName(${quote}${nearestName}${quote})`)];
            } else if (/^setHex\s*\(/.test(originalText)) {
                // setHex(0xRRGGBB) - preserve case
                const hexMatch = originalText.match(/setHex\s*\(\s*0x([0-9A-Fa-f]{6})\s*\)/);
                if (hexMatch) {
                    const originalHex = hexMatch[1];
                    const r = Math.round(color.components[0] * 255);
                    const g = Math.round(color.components[1] * 255);
                    const b = Math.round(color.components[2] * 255);

                    // Check if unchanged
                    const origR = parseInt(originalHex.substring(0, 2), 16);
                    const origG = parseInt(originalHex.substring(2, 4), 16);
                    const origB = parseInt(originalHex.substring(4, 6), 16);

                    if (r === origR && g === origG && b === origB) {
                        return [new ColorPresentation(originalText)];
                    }

                    // Preserve case
                    const isUpperCase = originalHex === originalHex.toUpperCase();
                    let hex = [r, g, b]
                        .map(c => c.toString(16).padStart(2, '0'))
                        .join('');
                    hex = isUpperCase ? hex.toUpperCase() : hex.toLowerCase();
                    return [new ColorPresentation(`setHex(0x${hex})`)];
                }

                // Fallback
                const r = Math.round(color.components[0] * 255);
                const g = Math.round(color.components[1] * 255);
                const b = Math.round(color.components[2] * 255);
                const hex = [r, g, b]
                    .map(c => c.toString(16).toUpperCase().padStart(2, '0'))
                    .join('');
                return [new ColorPresentation(`setHex(0x${hex})`)];
            } else {
                // Parse original hex value to check if color changed
                const originalHexMatch = originalText.match(/0x([0-9A-Fa-f]{6})/);

                if (originalHexMatch) {
                    const originalHex = originalHexMatch[1];
                    const origR = parseInt(originalHex.substring(0, 2), 16);
                    const origG = parseInt(originalHex.substring(2, 4), 16);
                    const origB = parseInt(originalHex.substring(4, 6), 16);

                    // Convert current color to hex with proper rounding
                    const r = Math.round(color.components[0] * 255);
                    const g = Math.round(color.components[1] * 255);
                    const b = Math.round(color.components[2] * 255);

                    // If unchanged, preserve original formatting (case)
                    if (r === origR && g === origG && b === origB) {
                        return [new ColorPresentation(originalText)];
                    }

                    // Color changed, preserve case from original
                    const isUpperCase = originalHex === originalHex.toUpperCase();
                    let hex = [r, g, b]
                        .map(c => c.toString(16).padStart(2, '0'))
                        .join('');
                    hex = isUpperCase ? hex.toUpperCase() : hex.toLowerCase();

                    return [new ColorPresentation(`0x${hex}`)];
                } else {
                    // Fallback for unexpected format (default to uppercase)
                    const r = Math.round(color.components[0] * 255);
                    const g = Math.round(color.components[1] * 255);
                    const b = Math.round(color.components[2] * 255);

                    const hex = [r, g, b]
                        .map(c => c.toString(16).toUpperCase().padStart(2, '0'))
                        .join('');

                    return [new ColorPresentation(`0x${hex}`)];
                }
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
