# Installation Guide - Three.js Completions for Nova

## Prerequisites

- **Nova Editor**: Version 11.0 or later
- **macOS**: 10.15 (Catalina) or later

## Installation Methods

### Method 1: Developer Installation (For Testing)

This method is perfect for testing the extension before publishing or for local development.

1. **Enable Extension Development in Nova**:
   ```
   Nova > Preferences > General
   ☑ Show extension development items in Extensions menu
   ```

2. **Open Extension Folder**:
   - Open the `three` folder in Nova (the one containing `extension.json`)

3. **Activate as Extension**:
   ```
   Extensions > Activate Project as Extension
   ```

4. **Verify Installation**:
   - Open a JavaScript or TypeScript file
   - Type `THREE.` and you should see autocomplete suggestions
   - Check: `Extensions > Extension Library > Installed` to see the extension listed

### Method 2: Manual Installation (Production Use)

For permanent installation without development mode:

1. **Prepare Extension**:
   - Rename the folder to `ThreeJS.novaextension` (if not already named with `.novaextension`)
   - Or compress the contents into a `.novaextension` package

2. **Install Extension**:
   - Double-click the `.novaextension` file
   - Or copy to: `~/Library/Application Support/Nova/Extensions/`

3. **Restart Nova** (if needed)

### Method 3: From Extension Library (When Published)

Once submitted to the Nova Extension Library:

1. Open Nova
2. Go to: `Extensions > Extension Library...`
3. Search for "Three.js Completions"
4. Click **Install**

## Packaging for Distribution

To create a distributable extension package:

### Option A: Using Nova's Built-in Packager

1. Open the extension project in Nova
2. Go to: `Extensions > Submit to the Extension Library...`
3. Follow the submission wizard

### Option B: Manual Packaging

1. **Rename the folder** to include `.novaextension` extension:
   ```bash
   cd /Users/matt/Downloads/2025-10-02/
   mv three ThreeJS.novaextension
   ```

2. **Verify structure**:
   ```
   ThreeJS.novaextension/
   ├── extension.json
   ├── Scripts/
   │   ├── main.js
   │   └── threejs-completions.js
   ├── README.md
   ├── CHANGELOG.md
   ├── LICENSE
   └── EXAMPLES.md
   ```

3. **Test the package**:
   - Double-click `ThreeJS.novaextension`
   - Nova should prompt to install it

4. **Create a distributable archive** (optional):
   ```bash
   zip -r ThreeJS.novaextension.zip ThreeJS.novaextension/
   ```

## Verification Steps

After installation, verify the extension is working:

### 1. Check Extension Status
```
Extensions > Extension Library > Installed
```
Look for "Three.js Completions" in the list.

### 2. Test Autocomplete

Create a new JavaScript file (`test.js`) and type:

```javascript
import * as THREE from 'three';

const scene = new THREE.
```

You should see autocomplete suggestions when you type `THREE.`

### 3. Check Extension Console

If something isn't working:

```
View > Show Extension Console
```

Look for any error messages from "Three.js Completions".

### 4. Test Different Contexts

- **After THREE namespace**: `THREE.` → Should show classes and constants
- **After new keyword**: `new THREE.` → Should show constructable classes
- **In import statement**: `import { } from 'three'` → Should show importable items
- **Method access**: `scene.` → Should show methods like `add()`, `remove()`, etc.

## Configuration

Access extension settings:

```
Nova > Preferences > Extensions > Three.js Completions
```

Available settings:
- **Enable Three.js Completions**: Toggle autocomplete on/off

## Troubleshooting

### Extension Not Appearing

**Problem**: Extension doesn't show up in Extensions menu

**Solutions**:
1. Verify folder structure is correct
2. Check that `extension.json` is valid JSON
3. Ensure Nova version is 11.0 or later
4. Try restarting Nova

### Autocomplete Not Working

**Problem**: No suggestions appear when typing

**Solutions**:
1. Check file extension is `.js` or `.ts`
2. Verify extension is enabled in preferences
3. Try triggering manually with `Esc` or `Ctrl+Space`
4. Check Extension Console for errors
5. Reload extensions: `Extensions > Deactivate Extensions` → `Extensions > Activate Extensions`

### Console Errors

**Problem**: Errors in Extension Console

**Common Issues**:
- **"Cannot find module"**: Check that `threejs-completions.js` exists in `Scripts/` folder
- **"registerCompletionAssistant failed"**: Ensure syntax name matches ('javascript', 'typescript')
- **JSON parse error**: Validate `extension.json` syntax

### Permission Issues

**Problem**: Extension won't install due to permissions

**Solutions**:
```bash
# Fix permissions on Extensions directory
chmod -R 755 ~/Library/Application\ Support/Nova/Extensions/

# Or install as user
cp -R ThreeJS.novaextension ~/Library/Application\ Support/Nova/Extensions/
```

## Uninstallation

To remove the extension:

### From Nova UI:
1. `Extensions > Extension Library > Installed`
2. Find "Three.js Completions"
3. Click **Uninstall**

### Manual Removal:
```bash
rm -rf ~/Library/Application\ Support/Nova/Extensions/ThreeJS.novaextension
```

Then restart Nova.

## Updating the Extension

### As Developer:
1. Make changes to the extension files
2. Save all changes
3. The extension will reload automatically in development mode
4. Or manually: `Extensions > Deactivate Extensions` → `Extensions > Activate Extensions`

### As User (when updates are available):
1. `Extensions > Extension Library > Updates`
2. Click **Update** next to "Three.js Completions"

## Publishing to Extension Library

To submit your extension to Nova's official Extension Library:

1. **Prepare Extension**:
   - Ensure all files are complete
   - Test thoroughly
   - Update version in `extension.json`
   - Write clear CHANGELOG

2. **Submit**:
   - Open extension project in Nova
   - `Extensions > Submit to the Extension Library...`
   - Follow the submission process
   - Provide required information

3. **Review Process**:
   - Panic will review your submission
   - May request changes
   - Once approved, it will be available in the Extension Library

## Support

If you encounter issues:

1. **Check Documentation**: Read README.md and EXAMPLES.md
2. **Extension Console**: View logs for error messages
3. **GitHub Issues**: Report bugs on the project repository
4. **Nova Forums**: Ask questions at [devforum.nova.app](https://devforum.nova.app/)

## Resources

- **Nova Extension Documentation**: https://docs.nova.app/extensions/
- **Nova API Reference**: https://docs.nova.app/api-reference/
- **Three.js Documentation**: https://threejs.org/docs/
- **This Extension**: See README.md for features and usage

---

**Happy coding with Three.js in Nova!** 🎨✨


