# Quick Start Guide - Three.js Completions for Nova

Get up and running with Three.js autocomplete in Nova in less than 5 minutes!

## 🚀 Installation (30 seconds)

### For Immediate Testing:

1. Open Nova
2. Go to `Nova > Preferences > General`
3. Check: ☑ **Show extension development items in Extensions menu**
4. Open this folder in Nova
5. Click `Extensions > Activate Project as Extension`
6. Done! ✅

### For Permanent Installation:

```bash
# In Terminal, run from the parent directory:
cd /Users/matt/Downloads/2025-10-02/
mv three ThreeJS.novaextension

# Then double-click ThreeJS.novaextension in Finder
```

## ⚡ Quick Test (1 minute)

1. Create a new file: `test.js`
2. Type this:

```javascript
import * as THREE from 'three';

const scene = new THREE.
```

3. After typing `THREE.` you should see autocomplete suggestions! 🎉

## 🎯 What You Get

### 100+ Classes Including:
- **Core**: Scene, Camera, WebGLRenderer, Mesh
- **Geometries**: Box, Sphere, Plane, Cylinder, Torus (+20 more)
- **Materials**: Standard, Physical, Phong, Lambert, Toon (+10 more)
- **Lights**: Ambient, Directional, Point, Spot, Hemisphere
- **Math**: Vector2/3/4, Matrix3/4, Quaternion, Color
- **Loaders**: GLTF, Texture, Cube, OBJ, FBX
- **Controls**: Orbit, Trackball, Fly, FirstPerson
- **Helpers**: Axes, Grid, Camera, Light helpers
- **Animation**: Mixer, Clip, Action
- **And much more!**

## 💡 Usage Tips

### Get Completions After:

1. **`THREE.`** → See all classes and constants
   ```javascript
   const camera = new THREE.PerspectiveCamera()
   ```

2. **`new THREE.`** → See constructable classes
   ```javascript
   const mesh = new THREE.Mesh()
   ```

3. **`import { } from 'three'`** → See importable items
   ```javascript
   import { Scene, Mesh } from 'three'
   ```

4. **Object methods** → Type `.` after any object
   ```javascript
   scene.add()
   cube.position.set()
   ```

### Keyboard Shortcuts:

- **Trigger**: `Esc` or `Ctrl+Space`
- **Accept**: `Tab` or `Enter`
- **Navigate**: `↑` `↓` arrows

## 📝 Basic Example

Copy this into a `.js` file to see the extension in action:

```javascript
import * as THREE from 'three';

// Type "THREE." after each "new" to see suggestions
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
```

## 🔧 Settings

Configure in: `Nova > Preferences > Extensions > Three.js Completions`

- **Enable Three.js Completions**: Toggle on/off

## ❓ Not Working?

### Quick Fixes:

1. **Check file type**: Must be `.js` or `.ts`
2. **Trigger manually**: Press `Esc` or `Ctrl+Space`
3. **Reload extension**: 
   - `Extensions > Deactivate Extensions`
   - `Extensions > Activate Extensions`
4. **Check console**: `View > Show Extension Console`

### Still stuck?

- Read: `INSTALL.md` for detailed troubleshooting
- View: `EXAMPLES.md` for more usage examples
- Check: Extension Console for error messages

## 📚 Learn More

- **README.md** - Full feature list
- **EXAMPLES.md** - Comprehensive usage examples
- **INSTALL.md** - Detailed installation & troubleshooting
- **CHANGELOG.md** - Version history

## 🎓 Resources

- [Three.js Docs](https://threejs.org/docs/)
- [Nova Docs](https://docs.nova.app/)
- [Three.js Examples](https://threejs.org/examples/)

---

**That's it! Start typing `THREE.` and enjoy autocomplete! 🚀**

Questions? Check the other documentation files in this folder.


