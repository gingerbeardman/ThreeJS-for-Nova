**Three.js for Nova** is a comprehensive autocomplete extension that provides intelligent code completion for the popular 3D graphics library.

## Features

- 🤖 **Auto-generated** directly from @types/three TypeScript definitions!
- 📈 **Comprehensive autocomplete** for 100+ Three.js classes
- 🎯 **Context-aware suggestions**—shows relevant completions based on your code context
- 🎨 **Color picker support**—visual color pickers for all Three.js color formats
- 📚 **Detailed documentation**—each completion includes descriptions and parameter info
- 🚀 **Support for modern Three.js**—includes latest classes and methods
- 💡 **ES6 imports**—autocomplete for import statements
- ⚡ **Fast and lightweight**—minimal performance impact

## Supported Three.js Features

### Core Classes
- Scene, Camera (Perspective, Orthographic)
- WebGLRenderer, WebGPURenderer
- Object3D, Mesh, Group, Line, Points, Sprite

### Geometries
- BoxGeometry, SphereGeometry, PlaneGeometry, CylinderGeometry
- TorusGeometry, TorusKnotGeometry, and many more
- BufferGeometry and custom geometry support

### Materials
- MeshStandardMaterial, MeshPhysicalMaterial, MeshBasicMaterial
- MeshPhongMaterial, MeshLambertMaterial, MeshToonMaterial
- ShaderMaterial, RawShaderMaterial, and more

### Lights
- AmbientLight, DirectionalLight, PointLight, SpotLight
- HemisphereLight, RectAreaLight

### Textures & Loaders
- TextureLoader, CubeTextureLoader, GLTFLoader
- Various texture types (Canvas, Video, Data, Compressed)

### Math Utilities
- Vector2, Vector3, Vector4
- Matrix3, Matrix4
- Quaternion, Euler
- Color, Ray, Plane, Sphere, Box3

### Controls & Helpers
- OrbitControls, TrackballControls, FlyControls
- AxesHelper, GridHelper, CameraHelper
- Light helpers and geometry helpers

### Animation
- AnimationMixer, AnimationClip, AnimationAction
- KeyframeTrack

### And Much More!
- Audio (Audio, PositionalAudio, AudioListener)
- Curves (Bezier, Catmull-Rom, Spline)
- Raycaster, Clock, LOD, Skeleton

## Usage

Once installed, the extension will automatically provide autocomplete suggestions when you're working with Three.js:

### Example 1: Using THREE namespace
```javascript
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// Type "THREE." to see all available classes and constants
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
```

### Example 2: ES6 Imports
```javascript
// Type after "from 'three'" to get import suggestions
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
```

### Example 3: Methods and Properties
```javascript
// After typing a dot after an object, get method suggestions
scene.add(cube);
cube.position.set(0, 0, 0);
cube.rotation.x = Math.PI / 4;
```

### Example 4: Color Picker
```javascript
// Click on any Three.js color value to open a visual color picker

// Hexadecimal formats
const material = new THREE.MeshBasicMaterial({ color: 0x669966 });
const light = new THREE.AmbientLight(0xffffff);

// HSL format (Three.js 0-1 range)
const color = new THREE.Color().setHSL(0.15, 0.7, 0.8);

// RGB format (Three.js 0-1 range)
const color2 = new THREE.Color().setRGB(1, 0.5, 0);

// setHex method
const color3 = new THREE.Color().setHex(0xff0000);

// Constructor formats:

// Numeric RGB (0-1 range)
const color4 = new THREE.Color(1, 0, 0);

// Hex string
const color5 = new THREE.Color('#ff0000');
const color6 = new THREE.Color('#f00');

// RGB string
const color7 = new THREE.Color("rgb(255, 0, 0)");
const color8 = new THREE.Color("rgb(100%, 0%, 0%)");

// HSL string
const color9 = new THREE.Color("hsl(0, 100%, 50%)");

// CSS color names (140 X11 color names supported)
const color10 = new THREE.Color('red');
const color11 = new THREE.Color('skyblue');

// setStyle method (supports hex, rgb, hsl, and color names)
const color12 = new THREE.Color().setStyle('#ff0000');
const color13 = new THREE.Color().setStyle('red');
const color14 = new THREE.Color().setStyle('rgb(255, 0, 0)');
const color15 = new THREE.Color().setStyle('hsl(0, 100%, 50%)');

// setColorName method
const color16 = new THREE.Color().setColorName('red');
```

**All formats preserve their original style when unchanged and intelligently convert when edited:**
- Hex formats preserve uppercase/lowercase
- RGB percentage vs. numeric format is preserved
- Color names map to the nearest CSS color name when changed
- Three.js format (0-1 range) vs CSS format is automatically detected

## Configuration

You can configure the extension in Nova's preferences:

- **Enable Three.js Completions**: Toggle autocomplete on/off

## Compatibility

- **Nova**: 11.0 or later
- **Three.js**: r158 and later (compatible with most recent versions)
- **Languages**: JavaScript, TypeScript, HTML

## Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js GitHub](https://github.com/mrdoob/three.js)

## License

MIT License - See LICENSE file for details

## Respect

🫂 Thanks to the Three.js community.

3️⃣ Three.js is created and maintained by [Ricardo Cabello "Mr.doob"](https://github.com/mrdoob) and the [Three.js contributors](https://github.com/mrdoob/three.js/graphs/contributors).

## Support

If you encounter any problems [please open an issue on GitHub](https://github.com/gingerbeardman/ThreeJS-for-Nova/issues).
