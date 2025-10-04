# Three.js Completions Examples

This document provides examples of how the autocomplete extension works in Nova.

## Basic Scene Setup

```javascript
import * as THREE from 'three';

// Type "THREE." and you'll see all available classes
const scene = new THREE.Scene();

// Autocomplete will suggest camera types after "THREE."
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
);

// Renderer suggestions
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## Creating Meshes with Autocomplete

```javascript
// Geometry completions - type "THREE.Box" to see BoxGeometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material completions - shows all material types
const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    metalness: 0.5,
    roughness: 0.5
});

// Mesh creation
const cube = new THREE.Mesh(geometry, material);

// Method completions - type "scene." to see methods
scene.add(cube);

// Property completions - type "cube." to see properties
cube.position.set(0, 0, 0);
cube.rotation.x = Math.PI / 4;
cube.scale.set(1, 1, 1);
```

## Lighting Examples

```javascript
// Ambient light
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Directional light with shadow support
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Point light
const pointLight = new THREE.PointLight(0xff0000, 1, 100);
pointLight.position.set(0, 2, 0);
scene.add(pointLight);

// Spot light
const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(10, 10, 10);
spotLight.angle = Math.PI / 6;
scene.add(spotLight);
```

## Loading External Models

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Type "new THREE.LoadingManager" for loading manager
const loadingManager = new THREE.LoadingManager();

// GLTF Loader with autocomplete
const gltfLoader = new GLTFLoader(loadingManager);

gltfLoader.load(
    'model.gltf',
    (gltf) => {
        scene.add(gltf.scene);
    },
    (progress) => {
        console.log((progress.loaded / progress.total) * 100 + '% loaded');
    },
    (error) => {
        console.error('Error loading model:', error);
    }
);

// Texture loader
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('texture.jpg');
```

## Using Controls

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Type "new THREE.OrbitControls" (if using from THREE namespace)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 1;
controls.maxDistance = 100;
```

## Animation Loop

```javascript
// Clock for timing
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    
    // Rotate cube
    cube.rotation.x += delta;
    cube.rotation.y += delta * 0.5;
    
    // Update controls if using OrbitControls
    // controls.update();
    
    renderer.render(scene, camera);
}

animate();
```

## Advanced: Using Raycaster for Interaction

```javascript
// Raycaster for mouse picking
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);
    
    if (intersects.length > 0) {
        console.log('Intersected:', intersects[0].object);
    }
}

window.addEventListener('mousemove', onMouseMove);
```

## Working with Geometries

```javascript
// Various geometry types with autocomplete
const sphere = new THREE.SphereGeometry(1, 32, 32);
const plane = new THREE.PlaneGeometry(10, 10);
const cylinder = new THREE.CylinderGeometry(1, 1, 2, 32);
const torus = new THREE.TorusGeometry(1, 0.4, 16, 100);
const cone = new THREE.ConeGeometry(1, 2, 32);

// Custom buffer geometry
const bufferGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    -1.0, -1.0, 1.0,
    1.0, -1.0, 1.0,
    1.0, 1.0, 1.0
]);
bufferGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
```

## Using Helpers

```javascript
// Axes helper (red = X, green = Y, blue = Z)
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Grid helper
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// Camera helper
const cameraHelper = new THREE.CameraHelper(camera);
scene.add(cameraHelper);

// Directional light helper
const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
scene.add(dirLightHelper);
```

## ES6 Import Syntax

```javascript
// Named imports with autocomplete
import { 
    Scene, 
    PerspectiveCamera, 
    WebGLRenderer,
    BoxGeometry,
    MeshStandardMaterial,
    Mesh,
    DirectionalLight,
    AmbientLight
} from 'three';

// Create scene without THREE namespace
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer();
```

## Constants and Enums

```javascript
// Texture wrapping modes
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

// Texture filters
texture.magFilter = THREE.LinearFilter;
texture.minFilter = THREE.LinearMipmapLinearFilter;

// Material side
material.side = THREE.DoubleSide;

// Blending modes
material.blending = THREE.AdditiveBlending;

// Tone mapping
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

// Shadow map types
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Color spaces
renderer.outputColorSpace = THREE.SRGBColorSpace;
```

## Tips for Best Autocomplete Experience

1. **Use the THREE namespace**: Type `THREE.` to see all available classes and constants
2. **After 'new' keyword**: The extension suggests constructable classes
3. **In import statements**: Get suggestions for what you can import from 'three'
4. **Method chaining**: Type `.` after an object to see available methods
5. **Constructor hints**: See parameter names when creating new objects

## Keyboard Shortcuts in Nova

- **Trigger autocomplete**: `Esc` or `Ctrl+Space`
- **Accept completion**: `Tab` or `Enter`
- **Navigate suggestions**: `↑` `↓` arrow keys
- **View documentation**: Hover over a completion item

## Troubleshooting

### Completions Not Appearing?

1. **Check if the extension is enabled**:
   - Go to **Nova > Extensions**
   - Ensure "Three.js Completions" is active

2. **Verify file type**:
   - Make sure you're working with a `.js` or `.ts` file

3. **Check configuration**:
   - Open **Nova > Preferences > Extensions > Three.js Completions**
   - Ensure "Enable Three.js Completions" is checked

4. **Reload extension**:
   - Go to **Extensions > Deactivate Extensions**
   - Then **Extensions > Activate Extensions**

### Extension Not Loading?

- Check the **Extension Console** (View > Show Extension Console) for error messages
- Ensure you have the latest version of Nova installed

---

For more examples and detailed documentation, visit:
- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [Three.js Manual](https://threejs.org/manual/)