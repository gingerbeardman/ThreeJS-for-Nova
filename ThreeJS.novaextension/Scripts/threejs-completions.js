// Comprehensive Three.js completion data
// Auto-generated from @types/three TypeScript definitions
// Generated on: 2025-10-04T14:17:17.098Z

exports.classes = [
  {
    "name": "ArrayCamera",
    "detail": "THREE.ArrayCamera",
    "documentation": "{@link ArrayCamera} can be used in order to efficiently render a scene with a predefined set of cameras This is an important performance aspect for rendering VR scenes. An instance of {@link ArrayCamera} always has an array of sub cameras It's mandatory to define for each sub camera the `viewport` property which determines the part of the viewport that is rendered with this camera.",
    "constructor": "cameras",
    "extends": "PerspectiveCamera",
    "category": "cameras"
  },
  {
    "name": "Camera",
    "detail": "THREE.Camera",
    "documentation": "Abstract base class for cameras This class should always be inherited when you build a new camera.",
    "constructor": "",
    "extends": "Object3D",
    "category": "cameras"
  },
  {
    "name": "CubeCamera",
    "detail": "THREE.CubeCamera",
    "documentation": "Creates **6** {@link THREE.PerspectiveCamera | cameras} that render to a {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget}. ```typescript // Create cube render target const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } ); // Create cube camera const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget ); scene.add( cubeCamera ); // Create car const chromeMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: cubeRenderTarget.texture } ); const car = new THREE.Mesh( carGeometry, chromeMaterial ); scene.add( car ); // Update the render target cube car.visible = false; cubeCamera.position.copy( car.position ); cubeCamera.update( renderer, scene ); // Render the scene car.visible = true; renderer.render( scene, camera ); ```",
    "constructor": "near, far, renderTarget",
    "extends": "Object3D",
    "category": "cameras"
  },
  {
    "name": "OrthographicCamera",
    "detail": "THREE.OrthographicCamera",
    "documentation": "Camera that uses {@link https://en.wikipedia.org/wiki/Orthographic_projection | orthographic projection}. In this projection mode, an object's size in the rendered image stays constant regardless of its distance from the camera. This can be useful for rendering 2D scenes and UI elements, amongst other things. ```typescript const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000); scene.add(camera); ```",
    "constructor": "left, right, top, bottom, near, far",
    "extends": "Camera",
    "category": "cameras"
  },
  {
    "name": "PerspectiveCamera",
    "detail": "THREE.PerspectiveCamera",
    "documentation": "Camera that uses {@link https://en.wikipedia.org/wiki/Perspective_(graphical) | perspective projection}. This projection mode is designed to mimic the way the human eye sees It is the most common projection mode used for rendering a 3D scene. ```typescript const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000); scene.add(camera); ```",
    "constructor": "fov, aspect, near, far",
    "extends": "Camera",
    "category": "cameras"
  },
  {
    "name": "StereoCamera",
    "detail": "THREE.StereoCamera",
    "documentation": "Dual {@link PerspectiveCamera | PerspectiveCamera}s used for effects such as {@link https://en.wikipedia.org/wiki/Anaglyph_3D | 3D Anaglyph} or {@link https://en.wikipedia.org/wiki/parallax_barrier | Parallax Barrier}.",
    "constructor": "",
    "extends": "Camera",
    "category": "cameras"
  },
  {
    "name": "BoxGeometry",
    "detail": "THREE.BoxGeometry",
    "documentation": "{@link BoxGeometry} is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth' ```typescript const geometry = new THREE.BoxGeometry(1, 1, 1); const material = new THREE.MeshBasicMaterial({     color: 0x00ff00 }); const cube = new THREE.Mesh(geometry, material); scene.add(cube); ```",
    "constructor": "width, height, depth, widthSegments, heightSegments, depthSegments",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "CapsuleGeometry",
    "detail": "THREE.CapsuleGeometry",
    "documentation": "{@link CapsuleGeometry} is a geometry class for a capsule with given radii and height ```typescript const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8); const material = new THREE.MeshBasicMaterial({     color: 0x00ff00 }); const capsule = new THREE.Mesh(geometry, material); scene.add(capsule); ```",
    "constructor": "radius, height, capSegments, radialSegments, heightSegments",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "CircleGeometry",
    "detail": "THREE.CircleGeometry",
    "documentation": "{@link CircleGeometry} is a simple shape of Euclidean geometry It is constructed from a number of triangular segments that are oriented around a central point and extend as far out as a given radius It is built counter-clockwise from a start angle and a given central angle It can also be used to create regular polygons, where the number of segments determines the number of sides. ```typescript const geometry = new THREE.CircleGeometry(5, 32); const material = new THREE.MeshBasicMaterial({     color: 0xffff00 }); const circle = new THREE.Mesh(geometry, material); scene.add(circle); ```",
    "constructor": "radius, segments, thetaStart, thetaLength",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "ConeGeometry",
    "detail": "THREE.ConeGeometry",
    "documentation": "A class for generating cone geometries. ```typescript const geometry = new THREE.ConeGeometry(5, 20, 32); const material = new THREE.MeshBasicMaterial({     color: 0xffff00 }); const cone = new THREE.Mesh(geometry, material); scene.add(cone); ```",
    "constructor": "radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength",
    "extends": "CylinderGeometry",
    "category": "geometries"
  },
  {
    "name": "CylinderGeometry",
    "detail": "THREE.CylinderGeometry",
    "documentation": "A class for generating cylinder geometries. ```typescript const geometry = new THREE.CylinderGeometry(5, 5, 20, 32); const material = new THREE.MeshBasicMaterial({     color: 0xffff00 }); const cylinder = new THREE.Mesh(geometry, material); scene.add(cylinder); ```",
    "constructor": "radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "DodecahedronGeometry",
    "detail": "THREE.DodecahedronGeometry",
    "documentation": "A class for generating a dodecahedron geometries.",
    "constructor": "radius, detail",
    "extends": "PolyhedronGeometry",
    "category": "geometries"
  },
  {
    "name": "EdgesGeometry",
    "detail": "THREE.EdgesGeometry",
    "documentation": "This can be used as a helper object to view the edges of a {@link THREE.BufferGeometry | geometry}. ```typescript const geometry = new THREE.BoxGeometry(100, 100, 100); const edges = new THREE.EdgesGeometry(geometry); const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({     color: 0xffffff })); scene.add(line); ```",
    "constructor": "geometry, thresholdAngle",
    "extends": null,
    "category": "geometries"
  },
  {
    "name": "ExtrudeGeometry",
    "detail": "THREE.ExtrudeGeometry",
    "documentation": "Number of points on the curves. Expects a `Integer`.",
    "constructor": "shapes, options",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "IcosahedronGeometry",
    "detail": "THREE.IcosahedronGeometry",
    "documentation": "A class for generating an icosahedron geometry.",
    "constructor": "radius, detail",
    "extends": "PolyhedronGeometry",
    "category": "geometries"
  },
  {
    "name": "LatheGeometry",
    "detail": "THREE.LatheGeometry",
    "documentation": "Creates meshes with axial symmetry like vases The lathe rotates around the Y axis. ```typescript const points = []; for (let i = 0; i & lt; 10; i++) {     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2)); } const geometry = new THREE.LatheGeometry(points); const material = new THREE.MeshBasicMaterial({     color: 0xffff00 }); const lathe = new THREE.Mesh(geometry, material); scene.add(lathe); ```",
    "constructor": "points, segments, phiStart, phiLength",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "OctahedronGeometry",
    "detail": "THREE.OctahedronGeometry",
    "documentation": "A class for generating an octahedron geometry.",
    "constructor": "radius, detail",
    "extends": "PolyhedronGeometry",
    "category": "geometries"
  },
  {
    "name": "PlaneGeometry",
    "detail": "THREE.PlaneGeometry",
    "documentation": "A class for generating plane geometries. ```typescript const geometry = new THREE.PlaneGeometry(1, 1); const material = new THREE.MeshBasicMaterial({     color: 0xffff00,     side: THREE.DoubleSide }); const plane = new THREE.Mesh(geometry, material); scene.add(plane); ```",
    "constructor": "width, height, widthSegments, heightSegments",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "PolyhedronGeometry",
    "detail": "THREE.PolyhedronGeometry",
    "documentation": "A polyhedron is a solid in three dimensions with flat faces This class will take an array of vertices, project them onto a sphere, and then divide them up to the desired level of detail This class is used by {@link THREE.DodecahedronGeometry | DodecahedronGeometry}, {@link THREE.IcosahedronGeometry | IcosahedronGeometry}, {@link THREE.OctahedronGeometry | OctahedronGeometry}, and {@link THREE.TetrahedronGeometry | TetrahedronGeometry} to generate their respective geometries. ```typescript const verticesOfCube = [-1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, ]; const indicesOfFaces = [ 2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2, 3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4]; const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 6, 2); ```",
    "constructor": "vertices, indices, radius, detail",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "RingGeometry",
    "detail": "THREE.RingGeometry",
    "documentation": "A class for generating a two-dimensional ring geometry. ```typescript const geometry = new THREE.RingGeometry(1, 5, 32); const material = new THREE.MeshBasicMaterial({     color: 0xffff00,     side: THREE.DoubleSide }); const mesh = new THREE.Mesh(geometry, material); scene.add(mesh); ```",
    "constructor": "innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "ShapeGeometry",
    "detail": "THREE.ShapeGeometry",
    "documentation": "Creates an one-sided polygonal geometry from one or more path shapes. ```typescript const x = 0, y = 0; const heartShape = new THREE.Shape(); heartShape.moveTo(x + 5, y + 5); heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y); heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7); heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19); heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7); heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y); heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5); const geometry = new THREE.ShapeGeometry(heartShape); const material = new THREE.MeshBasicMaterial({     color: 0x00ff00 }); const mesh = new THREE.Mesh(geometry, material); scene.add(mesh); ```",
    "constructor": "shapes, curveSegments",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "SphereGeometry",
    "detail": "THREE.SphereGeometry",
    "documentation": "A class for generating sphere geometries. ```typescript const geometry = new THREE.SphereGeometry(15, 32, 16); const material = new THREE.MeshBasicMaterial({     color: 0xffff00 }); const sphere = new THREE.Mesh(geometry, material); scene.add(sphere); ```",
    "constructor": "radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "TetrahedronGeometry",
    "detail": "THREE.TetrahedronGeometry",
    "documentation": "A class for generating a tetrahedron geometries.",
    "constructor": "radius, detail",
    "extends": "PolyhedronGeometry",
    "category": "geometries"
  },
  {
    "name": "TorusGeometry",
    "detail": "THREE.TorusGeometry",
    "documentation": "A class for generating torus geometries. ```typescript const geometry = new THREE.TorusGeometry(10, 3, 16, 100); const material = new THREE.MeshBasicMaterial({     color: 0xffff00 }); const torus = new THREE.Mesh(geometry, material); scene.add(torus); ```",
    "constructor": "radius, tube, radialSegments, tubularSegments, arc",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "TorusKnotGeometry",
    "detail": "THREE.TorusKnotGeometry",
    "documentation": "Creates a torus knot, the particular shape of which is defined by a pair of coprime integers, p and q If p and q are not coprime, the result will be a torus link. ```typescript const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16); const material = new THREE.MeshBasicMaterial({     color: 0xffff00 }); const torusKnot = new THREE.Mesh(geometry, material); scene.add(torusKnot); ```",
    "constructor": "radius, tube, tubularSegments, radialSegments, p, q",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "TubeGeometry",
    "detail": "THREE.TubeGeometry",
    "documentation": "Creates a tube that extrudes along a 3d curve. ```typescript class CustomSinCurve extends THREE.Curve {     constructor(scale = 1) {         super();         this.scale = scale;     }     getPoint(t, optionalTarget = new THREE.Vector3()) {         const tx = t * 3 - 1.5;         const ty = Math.sin(2 * Math.PI * t);         const tz = 0;         return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);     } } const path = new CustomSinCurve(10); const geometry = new THREE.TubeGeometry(path, 20, 2, 8, false); const material = new THREE.MeshBasicMaterial({     color: 0x00ff00 }); const mesh = new THREE.Mesh(geometry, material); scene.add(mesh); ```",
    "constructor": "scale = 1",
    "extends": "BufferGeometry",
    "category": "geometries"
  },
  {
    "name": "WireframeGeometry",
    "detail": "THREE.WireframeGeometry",
    "documentation": "This can be used as a helper object to view a {@link BufferGeometry | geometry} as a wireframe. ```typescript const geometry = new THREE.SphereGeometry(100, 100, 100); const wireframe = new THREE.WireframeGeometry(geometry); const line = new THREE.LineSegments(wireframe); line.material.depthTest = false; line.material.opacity = 0.25; line.material.transparent = true; scene.add(line); ```",
    "constructor": "geometry",
    "extends": null,
    "category": "geometries"
  },
  {
    "name": "LineBasicMaterial",
    "detail": "THREE.LineBasicMaterial",
    "documentation": "Color of the material.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "LineDashedMaterial",
    "detail": "THREE.LineDashedMaterial",
    "documentation": "The scale of the dashed part of a line.",
    "constructor": "parameters",
    "extends": "LineBasicMaterial",
    "category": "materials"
  },
  {
    "name": "Material",
    "detail": "THREE.Material",
    "documentation": "The name of the material.",
    "constructor": "",
    "extends": "EventDispatcher",
    "category": "materials"
  },
  {
    "name": "MeshBasicMaterial",
    "detail": "THREE.MeshBasicMaterial",
    "documentation": "Color of the material.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "MeshDepthMaterial",
    "detail": "THREE.MeshDepthMaterial",
    "documentation": "Type for depth packing.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "MeshDistanceMaterial",
    "detail": "THREE.MeshDistanceMaterial",
    "documentation": "The color map. May optionally include an alpha channel, typically combined with {@link Material#transparent} or {@link Material#alphaTest}.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "MeshLambertMaterial",
    "detail": "THREE.MeshLambertMaterial",
    "documentation": "Color of the material.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "MeshMatcapMaterial",
    "detail": "THREE.MeshMatcapMaterial",
    "documentation": "Color of the material.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "MeshNormalMaterial",
    "detail": "THREE.MeshNormalMaterial",
    "documentation": "The texture to create a bump map. The black and white values map to the perceived depth in relation to the lights. Bump doesn't actually affect the geometry of the object, only the lighting. If a normal map is defined this will be ignored.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "MeshPhongMaterial",
    "detail": "THREE.MeshPhongMaterial",
    "documentation": "Color of the material.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "MeshPhysicalMaterial",
    "detail": "THREE.MeshPhysicalMaterial",
    "documentation": "The rotation of the anisotropy in tangent, bitangent space, measured in radians counter-clockwise from the tangent. When `anisotropyMap` is present, this property provides additional rotation to the vectors in the texture.",
    "constructor": "parameters",
    "extends": "MeshStandardMaterial",
    "category": "materials"
  },
  {
    "name": "MeshStandardMaterial",
    "detail": "THREE.MeshStandardMaterial",
    "documentation": "Color of the material.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "MeshToonMaterial",
    "detail": "THREE.MeshToonMaterial",
    "documentation": "Color of the material.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "PointsMaterial",
    "detail": "THREE.PointsMaterial",
    "documentation": "Color of the material.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "RawShaderMaterial",
    "detail": "THREE.RawShaderMaterial",
    "documentation": "This class works just like {@link ShaderMaterial}, except that definitions of built-in uniforms and attributes are not automatically prepended to the GLSL shader code. `RawShaderMaterial` can only be used with {@link WebGLRenderer}.",
    "constructor": "",
    "extends": "ShaderMaterial",
    "category": "materials"
  },
  {
    "name": "ShaderMaterial",
    "detail": "THREE.ShaderMaterial",
    "documentation": "Defines custom constants using `#define` directives within the GLSL code for both the vertex shader and the fragment shader; each key/value pair yields another directive. ```js defines: { \tFOO: 15, \tBAR: true } ``` Yields the lines: ``` #define FOO 15 #define BAR true ```",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "ShadowMaterial",
    "detail": "THREE.ShadowMaterial",
    "documentation": "Color of the material.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "SpriteMaterial",
    "detail": "THREE.SpriteMaterial",
    "documentation": "Color of the material.",
    "constructor": "parameters",
    "extends": "Material",
    "category": "materials"
  },
  {
    "name": "AmbientLight",
    "detail": "THREE.AmbientLight",
    "documentation": "This light globally illuminates all objects in the scene equally. ```typescript const light = new THREE.AmbientLight(0x404040); // soft white light scene.add(light); ```",
    "constructor": "color, intensity",
    "extends": "Light",
    "category": "lights"
  },
  {
    "name": "DirectionalLight",
    "detail": "THREE.DirectionalLight",
    "documentation": "A light that gets emitted in a specific direction This light will behave as though it is infinitely far away and the rays produced from it are all parallel The common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel. A common point of confusion for directional lights is that setting the rotation has no effect This is because three.js's {@link DirectionalLight} is the equivalent to what is often called a 'Target Direct Light' in other applications. This means that its direction is calculated as pointing from the light's {@link THREE.Object3D.position | position} to the {@link THREE.DirectionalLight.target | target}'s position (as opposed to a 'Free Direct Light' that just has a rotation component). See the {@link THREE.DirectionalLight.target | target} property below for details on updating the target. ```typescript // White directional light at half intensity shining from the top. const {@link DirectionalLight} = new THREE.DirectionalLight(0xffffff, 0.5); scene.add(directionalLight); ```",
    "constructor": "color, intensity",
    "extends": "Light",
    "category": "lights"
  },
  {
    "name": "DirectionalLightShadow",
    "detail": "THREE.DirectionalLightShadow",
    "documentation": "This is used internally by {@link DirectionalLight | DirectionalLights} for calculating shadows. Unlike the other shadow classes, this uses an {@link THREE.OrthographicCamera | OrthographicCamera} to calculate the shadows, rather than a {@link THREE.PerspectiveCamera | PerspectiveCamera} This is because light rays from a {@link THREE.DirectionalLight | DirectionalLight} are parallel. ```typescript //Create a WebGLRenderer and turn on shadows in the renderer const renderer = new THREE.WebGLRenderer(); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap //Create a DirectionalLight and turn on shadows for the light const light = new THREE.DirectionalLight(0xffffff, 1); light.position.set(0, 1, 0); //default; light shining from top light.castShadow = true; // default false scene.add(light); //Set up shadow properties for the light light.shadow.mapSize.width = 512; // default light.shadow.mapSize.height = 512; // default light.shadow.camera.near = 0.5; // default light.shadow.camera.far = 500; // default //Create a sphere that cast shadows (but does not receive them) const sphereGeometry = new THREE.SphereGeometry(5, 32, 32); const sphereMaterial = new THREE.MeshStandardMaterial({     color: 0xff0000 }); const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial); sphere.castShadow = true; //default is false sphere.receiveShadow = false; //default scene.add(sphere); //Create a plane that receives shadows (but does not cast them) const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32); const planeMaterial = new THREE.MeshStandardMaterial({     color: 0x00ff00 }) const plane = new THREE.Mesh(planeGeometry, planeMaterial); plane.receiveShadow = true; scene.add(plane); //Create a helper for the shadow camera (optional) const helper = new THREE.CameraHelper(light.shadow.camera); scene.add(helper); ```",
    "constructor": "",
    "extends": "LightShadow",
    "category": "lights"
  },
  {
    "name": "HemisphereLight",
    "detail": "THREE.HemisphereLight",
    "documentation": "A light source positioned directly above the scene, with color fading from the sky color to the ground color. ```typescript const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1); scene.add(light); ```",
    "constructor": "skyColor, groundColor, intensity",
    "extends": "Light",
    "category": "lights"
  },
  {
    "name": "LightProbe",
    "detail": "THREE.LightProbe",
    "documentation": "Light probes are an alternative way of adding light to a 3D scene. Unlike classical light sources (e.g directional, point or spot lights), light probes do not emit light Instead they store information about light passing through 3D space During rendering, the light that hits a 3D object is approximated by using the data from the light probe. Light probes are usually created from (radiance) environment maps The class {@link THREE.LightProbeGenerator | LightProbeGenerator} can be used to create light probes from instances of {@link THREE.CubeTexture | CubeTexture} or {@link THREE.WebGLCubeRenderTarget | WebGLCubeRenderTarget} However, light estimation data could also be provided in other forms e.g by WebXR This enables the rendering of augmented reality content that reacts to real world lighting. The current probe implementation in three.js supports so-called diffuse light probes This type of light probe is functionally equivalent to an irradiance environment map.",
    "constructor": "sh, intensity",
    "extends": "Light",
    "category": "lights"
  },
  {
    "name": "LightShadow",
    "detail": "THREE.LightShadow",
    "documentation": "Serves as a base class for the other shadow classes.",
    "constructor": "camera",
    "extends": null,
    "category": "lights"
  },
  {
    "name": "PointLight",
    "detail": "THREE.PointLight",
    "documentation": "A light that gets emitted from a single point in all directions A common use case for this is to replicate the light emitted from a bare lightbulb. ```typescript const light = new THREE.PointLight(0xff0000, 1, 100); light.position.set(50, 50, 50); scene.add(light); ```",
    "constructor": "color, intensity, distance, decay",
    "extends": "Light",
    "category": "lights"
  },
  {
    "name": "PointLightShadow",
    "detail": "THREE.PointLightShadow",
    "documentation": "Shadow for {@link THREE.PointLight | PointLight}",
    "constructor": "",
    "extends": "LightShadow",
    "category": "lights"
  },
  {
    "name": "RectAreaLight",
    "detail": "THREE.RectAreaLight",
    "documentation": "{@link RectAreaLight} emits light uniformly across the face a rectangular plane This light type can be used to simulate light sources such as bright windows or strip lighting. Important Notes:  - There is no shadow support.  - Only {@link MeshStandardMaterial | MeshStandardMaterial} and {@link MeshPhysicalMaterial | MeshPhysicalMaterial} are supported.  - You have to include {@link https://threejs.org/examples/jsm/lights/RectAreaLightUniformsLib.js | RectAreaLightUniformsLib} into your scene and call `init()`. ```typescript const width = 10; const height = 10; const intensity = 1; const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height); rectLight.position.set(5, 5, 0); rectLight.lookAt(0, 0, 0); scene.add(rectLight) const rectLightHelper = new RectAreaLightHelper(rectLight); rectLight.add(rectLightHelper); ```",
    "constructor": "color, intensity, width, height",
    "extends": "Light",
    "category": "lights"
  },
  {
    "name": "SpotLight",
    "detail": "THREE.SpotLight",
    "documentation": "This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets. ```typescript // white {@link SpotLight} shining from the side, modulated by a texture, casting a shadow const {@link SpotLight} = new THREE.SpotLight(0xffffff); spotLight.position.set(100, 1000, 100); spotLight.map = new THREE.TextureLoader().load(url); spotLight.castShadow = true; spotLight.shadow.mapSize.width = 1024; spotLight.shadow.mapSize.height = 1024; spotLight.shadow.camera.near = 500; spotLight.shadow.camera.far = 4000; spotLight.shadow.camera.fov = 30; scene.add(spotLight); ```",
    "constructor": "color, intensity, distance, angle, penumbra, decay",
    "extends": "Light",
    "category": "lights"
  },
  {
    "name": "SpotLightShadow",
    "detail": "THREE.SpotLightShadow",
    "documentation": "This is used internally by {@link SpotLight | SpotLights} for calculating shadows. ```typescript //Create a WebGLRenderer and turn on shadows in the renderer const renderer = new THREE.WebGLRenderer(); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap //Create a SpotLight and turn on shadows for the light const light = new THREE.SpotLight(0xffffff); light.castShadow = true; // default false scene.add(light); //Set up shadow properties for the light light.shadow.mapSize.width = 512; // default light.shadow.mapSize.height = 512; // default light.shadow.camera.near = 0.5; // default light.shadow.camera.far = 500; // default light.shadow.focus = 1; // default //Create a sphere that cast shadows (but does not receive them) const sphereGeometry = new THREE.SphereGeometry(5, 32, 32); const sphereMaterial = new THREE.MeshStandardMaterial({     color: 0xff0000 }); const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial); sphere.castShadow = true; //default is false sphere.receiveShadow = false; //default scene.add(sphere); //Create a plane that receives shadows (but does not cast them) const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32); const planeMaterial = new THREE.MeshStandardMaterial({     color: 0x00ff00 }) const plane = new THREE.Mesh(planeGeometry, planeMaterial); plane.receiveShadow = true; scene.add(plane); //Create a helper for the shadow camera (optional) const helper = new THREE.CameraHelper(light.shadow.camera); scene.add(helper); ```",
    "constructor": "",
    "extends": "LightShadow",
    "category": "lights"
  },
  {
    "name": "AnimationLoader",
    "detail": "THREE.AnimationLoader",
    "documentation": "Three.js loaders class",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "AudioLoader",
    "detail": "THREE.AudioLoader",
    "documentation": "Three.js loaders class",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "BufferGeometryLoader",
    "detail": "THREE.BufferGeometryLoader",
    "documentation": "Three.js loaders class",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "CompressedTextureLoader",
    "detail": "THREE.CompressedTextureLoader",
    "documentation": "Three.js loaders class",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "CubeTextureLoader",
    "detail": "THREE.CubeTextureLoader",
    "documentation": "Three.js loaders class",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "DataTextureLoader",
    "detail": "THREE.DataTextureLoader",
    "documentation": "Three.js loaders class",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "FileLoader",
    "detail": "THREE.FileLoader",
    "documentation": "Three.js loaders class",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "ImageBitmapLoader",
    "detail": "THREE.ImageBitmapLoader",
    "documentation": "Three.js loaders class",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "ImageLoader",
    "detail": "THREE.ImageLoader",
    "documentation": "A loader for loading an image. Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "Loader",
    "detail": "THREE.Loader",
    "documentation": "Base class for implementing loaders.",
    "constructor": "manager",
    "extends": null,
    "category": "loaders"
  },
  {
    "name": "LoaderUtils",
    "detail": "THREE.LoaderUtils",
    "documentation": "Three.js loaders class",
    "constructor": "",
    "extends": null,
    "category": "loaders"
  },
  {
    "name": "MaterialLoader",
    "detail": "THREE.MaterialLoader",
    "documentation": "Three.js loaders class",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "ObjectLoader",
    "detail": "THREE.ObjectLoader",
    "documentation": "Three.js loaders class",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "TextureLoader",
    "detail": "THREE.TextureLoader",
    "documentation": "Class for loading a texture. Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.",
    "constructor": "manager",
    "extends": "Loader",
    "category": "loaders"
  },
  {
    "name": "Box2",
    "detail": "THREE.Box2",
    "documentation": "Three.js math class",
    "constructor": "min, max",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Box3",
    "detail": "THREE.Box3",
    "documentation": "Three.js math class",
    "constructor": "min, max",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Color",
    "detail": "THREE.Color",
    "documentation": "Class representing a color. A Color instance is represented by RGB components in the linear <i>working color space</i>, which defaults to `LinearSRGBColorSpace`. Inputs conventionally using `SRGBColorSpace` (such as hexadecimals and CSS strings) are converted to the working color space automatically. ``` // converted automatically from SRGBColorSpace to LinearSRGBColorSpace const color = new THREE.Color().setHex( 0x112233 ); ``` Source color spaces may be specified explicitly, to ensure correct conversions. ``` // assumed already LinearSRGBColorSpace; no conversion const color = new THREE.Color().setRGB( 0.5, 0.5, 0.5 ); // converted explicitly from SRGBColorSpace to LinearSRGBColorSpace const color = new THREE.Color().setRGB( 0.5, 0.5, 0.5, SRGBColorSpace ); ``` If THREE.ColorManagement is disabled, no conversions occur. For details, see <i>Color management</i>. Iterating through a Color instance will yield its components (r, g, b) in the corresponding order.",
    "constructor": "color",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Cylindrical",
    "detail": "THREE.Cylindrical",
    "documentation": "Three.js math class",
    "constructor": "radius, theta, y",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Euler",
    "detail": "THREE.Euler",
    "documentation": "Three.js math class",
    "constructor": "x, y, z, order",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Frustum",
    "detail": "THREE.Frustum",
    "documentation": "Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.",
    "constructor": "p0, p1, p2, p3, p4, p5",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Line3",
    "detail": "THREE.Line3",
    "documentation": "Three.js math class",
    "constructor": "start, end",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Matrix2",
    "detail": "THREE.Matrix2",
    "documentation": "A class representing a 2x2 {@link https://en.wikipedia.org/wiki/Matrix_(mathematics) matrix}. const m = new Matrix2();",
    "constructor": "",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Matrix3",
    "detail": "THREE.Matrix3",
    "documentation": "Three.js math class",
    "constructor": "",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Matrix4",
    "detail": "THREE.Matrix4",
    "documentation": "A 4x4 Matrix. // Simple rig for rotating around 3 axes const m = new THREE.Matrix4(); const m1 = new THREE.Matrix4(); const m2 = new THREE.Matrix4(); const m3 = new THREE.Matrix4(); const alpha = 0; const beta = Math.PI; const gamma = Math.PI/2; m1.makeRotationX( alpha ); m2.makeRotationY( beta ); m3.makeRotationZ( gamma ); m.multiplyMatrices( m1, m2 ); m.multiply( m3 );",
    "constructor": "",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Plane",
    "detail": "THREE.Plane",
    "documentation": "Three.js math class",
    "constructor": "normal, constant",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Quaternion",
    "detail": "THREE.Quaternion",
    "documentation": "Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages. const quaternion = new THREE.Quaternion(); quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 ); const vector = new THREE.Vector3( 1, 0, 0 ); vector.applyQuaternion( quaternion );",
    "constructor": "x, y, z, w",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Ray",
    "detail": "THREE.Ray",
    "documentation": "Three.js math class",
    "constructor": "origin, direction",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Sphere",
    "detail": "THREE.Sphere",
    "documentation": "Three.js math class",
    "constructor": "center, radius",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Spherical",
    "detail": "THREE.Spherical",
    "documentation": "Three.js math class",
    "constructor": "radius, phi, theta",
    "extends": null,
    "category": "math"
  },
  {
    "name": "SphericalHarmonics3",
    "detail": "THREE.SphericalHarmonics3",
    "documentation": "Three.js math class",
    "constructor": "",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Triangle",
    "detail": "THREE.Triangle",
    "documentation": "Three.js math class",
    "constructor": "a, b, c",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Vector2",
    "detail": "THREE.Vector2",
    "documentation": "2D vector.",
    "constructor": "x, y",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Vector3",
    "detail": "THREE.Vector3",
    "documentation": "3D vector. see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js} const a = new THREE.Vector3( 1, 0, 0 ); const b = new THREE.Vector3( 0, 1, 0 ); const c = new THREE.Vector3(); c.crossVectors( a, b );",
    "constructor": "x, y, z",
    "extends": null,
    "category": "math"
  },
  {
    "name": "Vector4",
    "detail": "THREE.Vector4",
    "documentation": "4D vector.",
    "constructor": "x, y, z, w",
    "extends": null,
    "category": "math"
  },
  {
    "name": "CubicInterpolant",
    "detail": "THREE.CubicInterpolant",
    "documentation": "Three.js interpolants class",
    "constructor": "parameterPositions, samplesValues, sampleSize, resultBuffer",
    "extends": "Interpolant",
    "category": "interpolants"
  },
  {
    "name": "DiscreteInterpolant",
    "detail": "THREE.DiscreteInterpolant",
    "documentation": "Three.js interpolants class",
    "constructor": "parameterPositions, samplesValues, sampleSize, resultBuffer",
    "extends": "Interpolant",
    "category": "interpolants"
  },
  {
    "name": "LinearInterpolant",
    "detail": "THREE.LinearInterpolant",
    "documentation": "Three.js interpolants class",
    "constructor": "parameterPositions, samplesValues, sampleSize, resultBuffer",
    "extends": "Interpolant",
    "category": "interpolants"
  },
  {
    "name": "QuaternionLinearInterpolant",
    "detail": "THREE.QuaternionLinearInterpolant",
    "documentation": "Three.js interpolants class",
    "constructor": "parameterPositions, samplesValues, sampleSize, resultBuffer",
    "extends": "Interpolant",
    "category": "interpolants"
  },
  {
    "name": "Bone",
    "detail": "THREE.Bone",
    "documentation": "A {@link Bone} which is part of a {@link THREE.Skeleton | Skeleton} The skeleton in turn is used by the {@link THREE.SkinnedMesh | SkinnedMesh} Bones are almost identical to a blank {@link THREE.Object3D | Object3D}. ```typescript const root = new THREE.Bone(); const child = new THREE.Bone(); root.add(child); child.position.y = 5; ```",
    "constructor": "",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "Group",
    "detail": "THREE.Group",
    "documentation": "Its purpose is to make working with groups of objects syntactically clearer. ```typescript const geometry = new THREE.BoxGeometry(1, 1, 1); const material = new THREE.MeshBasicMaterial({     color: 0x00ff00 }); const cubeA = new THREE.Mesh(geometry, material); cubeA.position.set(100, 100, 0); const cubeB = new THREE.Mesh(geometry, material); cubeB.position.set(-100, -100, 0); //create a {@link Group} and add the two cubes //These cubes can now be rotated / scaled etc as a {@link Group}  * const {@link Group} = new THREE.Group(); group.add(cubeA); group.add(cubeB); scene.add(group); ```",
    "constructor": "",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "InstancedMesh",
    "detail": "THREE.InstancedMesh",
    "documentation": "A special version of {@link THREE.Mesh | Mesh} with instanced rendering support Use {@link InstancedMesh} if you have to render a large number of objects with the same geometry and material(s) but with different world transformations The usage of {@link InstancedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.",
    "constructor": "geometry, material, count",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "LOD",
    "detail": "THREE.LOD",
    "documentation": "Every level is associated with an object, and rendering can be switched between them at the distances specified Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail) and one for close up (high detail). const lod = new THREE.LOD(); const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); //Create spheres with 3 levels of detail and create new {@link LOD} levels for them for (let i = 0; i & lt; 3; i++) {     const geometry = new THREE.IcosahedronGeometry(10, 3 - i)     const mesh = new THREE.Mesh(geometry, material);     lod.addLevel(mesh, i * 75); } scene.add(lod);",
    "constructor": "",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "Line",
    "detail": "THREE.Line",
    "documentation": "A continuous line. This is nearly the same as {@link THREE.LineSegments | LineSegments}, the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP} instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINES} ```typescript const material = new THREE.LineBasicMaterial({     color: 0x0000ff }); const points = []; points.push(new THREE.Vector3(-10, 0, 0)); points.push(new THREE.Vector3(0, 10, 0)); points.push(new THREE.Vector3(10, 0, 0)); const geometry = new THREE.BufferGeometry().setFromPoints(points); const {@link Line} = new THREE.Line(geometry, material); scene.add(line); ```",
    "constructor": "geometry, material",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "LineLoop",
    "detail": "THREE.LineLoop",
    "documentation": "A continuous line that connects back to the start. This is nearly the same as {@link THREE.Line | Line}, the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_LOOP} instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP}, which draws a straight line to the next vertex, and connects the last vertex back to the first.",
    "constructor": "geometry, material",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "LineSegments",
    "detail": "THREE.LineSegments",
    "documentation": "A series of lines drawn between pairs of vertices. This is nearly the same as {@link THREE.Line | Line}, the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINES} instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.LINE_STRIP}.",
    "constructor": "geometry, material",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "Mesh",
    "detail": "THREE.Mesh",
    "documentation": "Class representing triangular {@link https://en.wikipedia.org/wiki/Polygon_mesh | polygon mesh} based objects. Also serves as a base for other classes such as {@link THREE.SkinnedMesh | SkinnedMesh},  {@link THREE.InstancedMesh | InstancedMesh}. ```typescript const geometry = new THREE.BoxGeometry(1, 1, 1); const material = new THREE.MeshBasicMaterial({     color: 0xffff00 }); const {@link Mesh} = new THREE.Mesh(geometry, material); scene.add(mesh); ```",
    "constructor": "geometry, material",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "Points",
    "detail": "THREE.Points",
    "documentation": "A class for displaying {@link Points} The {@link Points} are rendered by the {@link THREE.WebGLRenderer | WebGLRenderer} using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements | gl.POINTS}.",
    "constructor": "geometry, material",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "Skeleton",
    "detail": "THREE.Skeleton",
    "documentation": "Use an array of {@link Bone | bones} to create a {@link Skeleton} that can be used by a {@link THREE.SkinnedMesh | SkinnedMesh}. ```typescript // Create a simple \"arm\" const bones = []; const shoulder = new THREE.Bone(); const elbow = new THREE.Bone(); const hand = new THREE.Bone(); shoulder.add(elbow); elbow.add(hand); bones.push(shoulder); bones.push(elbow); bones.push(hand); shoulder.position.y = -5; elbow.position.y = 0; hand.position.y = 5; const armSkeleton = new THREE.Skeleton(bones); See the[page: SkinnedMesh] page for an example of usage with standard[page: BufferGeometry]. ```",
    "constructor": "bones, boneInverses",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "SkinnedMesh",
    "detail": "THREE.SkinnedMesh",
    "documentation": "A mesh that has a {@link THREE.Skeleton | Skeleton} with {@link Bone | bones} that can then be used to animate the vertices of the geometry. ```typescript const geometry = new THREE.CylinderGeometry(5, 5, 5, 5, 15, 5, 30); // create the skin indices and skin weights manually // (typically a loader would read this data from a 3D model for you) const position = geometry.attributes.position; const vertex = new THREE.Vector3(); const skinIndices = []; const skinWeights = []; for (let i = 0; i & lt; position.count; i++) {     vertex.fromBufferAttribute(position, i);     // compute skinIndex and skinWeight based on some configuration data     const y = (vertex.y + sizing.halfHeight);     const skinIndex = Math.floor(y / sizing.segmentHeight);     const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;     skinIndices.push(skinIndex, skinIndex + 1, 0, 0);     skinWeights.push(1 - skinWeight, skinWeight, 0, 0); } geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4)); geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4)); // create skinned mesh and skeleton const mesh = new THREE.SkinnedMesh(geometry, material); const skeleton = new THREE.Skeleton(bones); // see example from THREE.Skeleton const rootBone = skeleton.bones[0]; mesh.add(rootBone); // bind the skeleton to the mesh mesh.bind(skeleton); // move the bones and manipulate the model skeleton.bones[0].rotation.x = -0.1; skeleton.bones[1].rotation.x = 0.2; ```",
    "constructor": "geometry, material, useVertexTexture",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "Sprite",
    "detail": "THREE.Sprite",
    "documentation": "A {@link Sprite} is a plane that always faces towards the camera, generally with a partially transparent texture applied. ```typescript const map = new THREE.TextureLoader().load('sprite.png'); const material = new THREE.SpriteMaterial({     map: map }); const {@link Sprite} = new THREE.Sprite(material); scene.add(sprite); ```",
    "constructor": "material",
    "extends": null,
    "category": "objects"
  },
  {
    "name": "Fog",
    "detail": "THREE.Fog",
    "documentation": "This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.  @example ```typescript const scene = new THREE.Scene(); scene.fog = new THREE.Fog(0xcccccc, 10, 15); ```",
    "constructor": "color, near, far",
    "extends": null,
    "category": "scenes"
  },
  {
    "name": "FogExp2",
    "detail": "THREE.FogExp2",
    "documentation": "This class contains the parameters that define exponential squared fog, which gives a clear view near the camera and a faster than exponentially densening fog farther from the camera. ```typescript const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0xcccccc, 0.002); ```",
    "constructor": "color, density",
    "extends": null,
    "category": "scenes"
  },
  {
    "name": "Scene",
    "detail": "THREE.Scene",
    "documentation": "Scenes allow you to set up what and where is to be rendered by three.js This is where you place objects, lights and cameras.",
    "constructor": "",
    "extends": "Object3D",
    "category": "scenes"
  },
  {
    "name": "CanvasTexture",
    "detail": "THREE.CanvasTexture",
    "documentation": "Creates a texture from a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas | canvas element}. This is almost the same as the base {@link Texture | Texture} class, except that it sets {@link Texture.needsUpdate | needsUpdate} to `true` immediately.",
    "constructor": "canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy",
    "extends": "Texture",
    "category": "textures"
  },
  {
    "name": "CompressedArrayTexture",
    "detail": "THREE.CompressedArrayTexture",
    "documentation": "Creates an texture 2D array based on data in compressed form, for example from a {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.",
    "constructor": "mipmaps, width, height, depth, format, type",
    "extends": "CompressedTexture",
    "category": "textures"
  },
  {
    "name": "CompressedCubeTexture",
    "detail": "THREE.CompressedCubeTexture",
    "documentation": "Three.js textures class",
    "constructor": "images, format, type",
    "extends": "CompressedTexture",
    "category": "textures"
  },
  {
    "name": "CompressedTexture",
    "detail": "THREE.CompressedTexture",
    "documentation": "Creates a texture based on data in compressed form, for example from a {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.",
    "constructor": "mipmaps, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, colorSpace",
    "extends": "Texture",
    "category": "textures"
  },
  {
    "name": "CubeTexture",
    "detail": "THREE.CubeTexture",
    "documentation": "Creates a cube texture made up of six images. {@link CubeTexture} is almost equivalent in functionality and usage to {@link Texture}. The only differences are that the images are an array of _6_ images as opposed to a single image, and the mapping options are {@link THREE.CubeReflectionMapping} (default) or {@link THREE.CubeRefractionMapping} ```typescript const loader = new THREE.CubeTextureLoader(); loader.setPath('textures/cube/pisa/'); const textureCube = loader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']); const material = new THREE.MeshBasicMaterial({     color: 0xffffff,     envMap: textureCube }); ```",
    "constructor": "images, // HTMLImageElement or HTMLCanvasElement\n        mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace",
    "extends": "Texture",
    "category": "textures"
  },
  {
    "name": "Data3DTexture",
    "detail": "THREE.Data3DTexture",
    "documentation": "Creates a three-dimensional texture from raw data, with parameters to divide it into width, height, and depth ```typescript This creates a[name] with repeating data, 0 to 255 // create a buffer with some data const sizeX = 64; const sizeY = 64; const sizeZ = 64; const data = new Uint8Array(sizeX * sizeY * sizeZ); let i = 0; for (let z = 0; z & lt; sizeZ; z++) {     for (let y = 0; y & lt; sizeY; y++) {         for (let x = 0; x & lt; sizeX; x++) {             data[i] = i % 256;             i++;         }     } } // use the buffer to create the texture const texture = new THREE.Data3DTexture(data, sizeX, sizeY, sizeZ); texture.needsUpdate = true; ```",
    "constructor": "data, width, height, depth",
    "extends": "Texture",
    "category": "textures"
  },
  {
    "name": "DataArrayTexture",
    "detail": "THREE.DataArrayTexture",
    "documentation": "Creates an array of textures directly from raw data, width and height and depth ```typescript This creates a[name] where each texture has a different color. // create a buffer with color data const width = 512; const height = 512; const depth = 100; const size = width * height; const data = new Uint8Array(4 * size * depth); for (let i = 0; i & lt; depth; i++) {     const color = new THREE.Color(Math.random(), Math.random(), Math.random());     const r = Math.floor(color.r * 255);     const g = Math.floor(color.g * 255);     const b = Math.floor(color.b * 255);     for (let j = 0; j & lt; size; j++) {         const stride = (i * size + j) * 4;         data[stride] = r;         data[stride + 1] = g;         data[stride + 2] = b;         data[stride + 3] = 255;     } } // used the buffer to create a [name] const texture = new THREE.DataArrayTexture(data, width, height, depth); texture.needsUpdate = true; ```",
    "constructor": "data, width, height, depth",
    "extends": "Texture",
    "category": "textures"
  },
  {
    "name": "DataTexture",
    "detail": "THREE.DataTexture",
    "documentation": "Creates a texture directly from raw data, width and height. ```typescript // create a buffer with color data const width = 512; const height = 512; const size = width * height; const data = new Uint8Array(4 * size); const color = new THREE.Color(0xffffff); const r = Math.floor(color.r * 255); const g = Math.floor(color.g * 255); const b = Math.floor(color.b * 255); for (let i = 0; i & lt; size; i++) {     const stride = i * 4;     data[stride] = r;     data[stride + 1] = g;     data[stride + 2] = b;     data[stride + 3] = 255; } // used the buffer to create a [name] const texture = new THREE.DataTexture(data, width, height); texture.needsUpdate = true; ```",
    "constructor": "data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, colorSpace",
    "extends": "Texture",
    "category": "textures"
  },
  {
    "name": "DepthTexture",
    "detail": "THREE.DepthTexture",
    "documentation": "This class can be used to automatically save the depth information of a rendering into a texture",
    "constructor": "width, height, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, format, depth",
    "extends": "Texture",
    "category": "textures"
  },
  {
    "name": "FramebufferTexture",
    "detail": "THREE.FramebufferTexture",
    "documentation": "This class can only be used in combination with {@link THREE.WebGLRenderer.copyFramebufferToTexture | WebGLRenderer.copyFramebufferToTexture()}. ```typescript const pixelRatio = window.devicePixelRatio; const textureSize = 128 * pixelRatio; // instantiate a framebuffer texture const frameTexture = new FramebufferTexture( textureSize, textureSize, RGBAFormat ); // calculate start position for copying part of the frame data const vector = new Vector2(); vector.x = ( window.innerWidth * pixelRatio / 2 ) - ( textureSize / 2 ); vector.y = ( window.innerHeight * pixelRatio / 2 ) - ( textureSize / 2 ); // render the scene renderer.clear(); renderer.render( scene, camera ); // copy part of the rendered frame into the framebuffer texture renderer.copyFramebufferToTexture( frameTexture, vector ); ```",
    "constructor": "width, height",
    "extends": "Texture",
    "category": "textures"
  },
  {
    "name": "SourceJSON",
    "detail": "THREE.SourceJSON",
    "documentation": "Three.js textures class",
    "constructor": "data",
    "extends": null,
    "category": "textures"
  },
  {
    "name": "Source",
    "detail": "THREE.Source",
    "documentation": "Represents the data {@link Source} of a texture.",
    "constructor": "data",
    "extends": null,
    "category": "textures"
  },
  {
    "name": "Texture",
    "detail": "THREE.Texture",
    "documentation": "Shim for OffscreenCanvas.",
    "constructor": "image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, colorSpace",
    "extends": "EventDispatcher",
    "category": "textures"
  },
  {
    "name": "VideoTexture",
    "detail": "THREE.VideoTexture",
    "documentation": "Creates a texture for use with a video. Note: After the initial use of a texture, the video cannot be changed Instead, call {@link dispose | .dispose()} on the texture and instantiate a new one. ```typescript // assuming you have created a HTML video element with id=\"video\" const video = document.getElementById('video'); const texture = new THREE.VideoTexture(video); ```",
    "constructor": "video, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy",
    "extends": "Texture",
    "category": "textures"
  },
  {
    "name": "ArrowHelper",
    "detail": "THREE.ArrowHelper",
    "documentation": "An 3D arrow object for visualizing directions. ```typescript const dir = new THREE.Vector3(1, 2, 0); //normalize the direction vector (convert to vector of length 1) dir.normalize(); const origin = new THREE.Vector3(0, 0, 0); const length = 1; const hex = 0xffff00; const {@link ArrowHelper} = new THREE.ArrowHelper(dir, origin, length, hex); scene.add(arrowHelper); ```",
    "constructor": "dir, origin, length, color, headLength, headWidth",
    "extends": "Object3D",
    "category": "helpers"
  },
  {
    "name": "AxesHelper",
    "detail": "THREE.AxesHelper",
    "documentation": "An axis object to visualize the 3 axes in a simple way. The X axis is red The Y axis is green The Z axis is blue. ```typescript const {@link AxesHelper} = new THREE.AxesHelper(5); scene.add(axesHelper); ```",
    "constructor": "size",
    "extends": "LineSegments",
    "category": "helpers"
  },
  {
    "name": "Box3Helper",
    "detail": "THREE.Box3Helper",
    "documentation": "Helper object to visualize a {@link THREE.Box3 | Box3}. ```typescript const box = new THREE.Box3(); box.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(2, 1, 3)); const helper = new THREE.Box3Helper(box, 0xffff00); scene.add(helper); ```",
    "constructor": "box, color",
    "extends": "LineSegments",
    "category": "helpers"
  },
  {
    "name": "BoxHelper",
    "detail": "THREE.BoxHelper",
    "documentation": "Helper object to graphically show the world-axis-aligned bounding box around an object The actual bounding box is handled with {@link THREE.Box3 | Box3}, this is just a visual helper for debugging It can be automatically resized with the {@link THREE.BoxHelper.update | BoxHelper.update} method when the object it's created from is transformed Note that the object must have a {@link THREE.BufferGeometry | BufferGeometry} for this to work, so it won't work with {@link Sprite | Sprites}. ```typescript const sphere = new THREE.SphereGeometry(); const object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial(0xff0000)); const box = new THREE.BoxHelper(object, 0xffff00); scene.add(box); ```",
    "constructor": "object, color",
    "extends": "LineSegments",
    "category": "helpers"
  },
  {
    "name": "CameraHelper",
    "detail": "THREE.CameraHelper",
    "documentation": "This helps with visualizing what a camera contains in its frustum It visualizes the frustum of a camera using a {@link THREE.LineSegments | LineSegments}. ```typescript const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); const helper = new THREE.CameraHelper(camera); scene.add(helper); ```",
    "constructor": "camera",
    "extends": "LineSegments",
    "category": "helpers"
  },
  {
    "name": "DirectionalLightHelper",
    "detail": "THREE.DirectionalLightHelper",
    "documentation": "Helper object to assist with visualizing a {@link THREE.DirectionalLight | DirectionalLight}'s effect on the scene This consists of plane and a line representing the light's position and direction. ```typescript const light = new THREE.DirectionalLight(0xFFFFFF); scene.add(light); const helper = new THREE.DirectionalLightHelper(light, 5); scene.add(helper); ```",
    "constructor": "light, size, color",
    "extends": "Object3D",
    "category": "helpers"
  },
  {
    "name": "GridHelper",
    "detail": "THREE.GridHelper",
    "documentation": "The {@link GridHelper} is an object to define grids Grids are two-dimensional arrays of lines. ```typescript const size = 10; const divisions = 10; const {@link GridHelper} = new THREE.GridHelper(size, divisions); scene.add(gridHelper); ```",
    "constructor": "size, divisions, color1, color2",
    "extends": "LineSegments",
    "category": "helpers"
  },
  {
    "name": "HemisphereLightHelper",
    "detail": "THREE.HemisphereLightHelper",
    "documentation": "Creates a visual aid consisting of a spherical {@link THREE.Mesh | Mesh} for a {@link THREE.HemisphereLight | HemisphereLight}. ```typescript const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1); const helper = new THREE.HemisphereLightHelper(light, 5); scene.add(helper); ```",
    "constructor": "light, size, color",
    "extends": "Object3D",
    "category": "helpers"
  },
  {
    "name": "PlaneHelper",
    "detail": "THREE.PlaneHelper",
    "documentation": "Helper object to visualize a {@link THREE.Plane | Plane}. ```typescript const plane = new THREE.Plane(new THREE.Vector3(1, 1, 0.2), 3); const helper = new THREE.PlaneHelper(plane, 1, 0xffff00); scene.add(helper); ```",
    "constructor": "plane, size, hex",
    "extends": "LineSegments",
    "category": "helpers"
  },
  {
    "name": "PointLightHelper",
    "detail": "THREE.PointLightHelper",
    "documentation": "This displays a helper object consisting of a spherical {@link THREE.Mesh | Mesh} for visualizing a {@link THREE.PointLight | PointLight}. ```typescript const pointLight = new THREE.PointLight(0xff0000, 1, 100); pointLight.position.set(10, 10, 10); scene.add(pointLight); const sphereSize = 1; const {@link PointLightHelper} = new THREE.PointLightHelper(pointLight, sphereSize); scene.add(pointLightHelper); ```",
    "constructor": "light, sphereSize, color",
    "extends": "Object3D",
    "category": "helpers"
  },
  {
    "name": "PolarGridHelper",
    "detail": "THREE.PolarGridHelper",
    "documentation": "The {@link PolarGridHelper} is an object to define polar grids Grids are two-dimensional arrays of lines. ```typescript const radius = 10; const sectors = 16; const rings = 8; const divisions = 64; const helper = new THREE.PolarGridHelper(radius, sectors, rings, divisions); scene.add(helper); ```",
    "constructor": "radius, radials, circles, divisions, color1, color2",
    "extends": "LineSegments",
    "category": "helpers"
  },
  {
    "name": "SpotLightHelper",
    "detail": "THREE.SpotLightHelper",
    "documentation": "This displays a cone shaped helper object for a {@link THREE.SpotLight | SpotLight}. ```typescript const spotLight = new THREE.SpotLight(0xffffff); spotLight.position.set(10, 10, 10); scene.add(spotLight); const {@link SpotLightHelper} = new THREE.SpotLightHelper(spotLight); scene.add(spotLightHelper); ```",
    "constructor": "light, color",
    "extends": "Object3D",
    "category": "helpers"
  },
  {
    "name": "AnimationAction",
    "detail": "THREE.AnimationAction",
    "documentation": "An instance of `AnimationAction` schedules the playback of an animation which is stored in {@link AnimationClip}.",
    "constructor": "mixer, clip, localRoot, blendMode",
    "extends": null,
    "category": "animation"
  },
  {
    "name": "AnimationClip",
    "detail": "THREE.AnimationClip",
    "documentation": "A reusable set of keyframe tracks which represent an animation.",
    "constructor": "name, duration, tracks, blendMode",
    "extends": null,
    "category": "animation"
  },
  {
    "name": "AnimationMixer",
    "detail": "THREE.AnimationMixer",
    "documentation": "`AnimationMixer` is a player for animations on a particular object in the scene. When multiple objects in the scene are animated independently, one `AnimationMixer` may be used for each object.",
    "constructor": "root",
    "extends": "EventDispatcher",
    "category": "animation"
  },
  {
    "name": "AnimationObjectGroup",
    "detail": "THREE.AnimationObjectGroup",
    "documentation": "A group of objects that receives a shared animation state. Usage: - Add objects you would otherwise pass as 'root' to the constructor or the .clipAction method of AnimationMixer. - Instead pass this object as 'root'. - You can also add and remove objects later when the mixer is running. Note: - Objects of this class appear as one object to the mixer, so cache control of the individual objects must be done on the group. Limitation: - The animated properties must be compatible among the all objects in the group. - A single property can either be controlled through a target group or directly, but not both.",
    "constructor": "...args",
    "extends": null,
    "category": "animation"
  },
  {
    "name": "AnimationUtils",
    "detail": "THREE.AnimationUtils",
    "documentation": "Converts an array to a specific type.",
    "constructor": "",
    "extends": null,
    "category": "animation"
  },
  {
    "name": "KeyframeTrack",
    "detail": "THREE.KeyframeTrack",
    "documentation": "Represents s a timed sequence of keyframes, which are composed of lists of times and related values, and which are used to animate a specific property of an object.",
    "constructor": "name, times, values, interpolation",
    "extends": null,
    "category": "animation"
  },
  {
    "name": "PropertyBinding",
    "detail": "THREE.PropertyBinding",
    "documentation": "This holds a reference to a real property in the scene graph; used internally.",
    "constructor": "rootNode, path, parsedPath",
    "extends": null,
    "category": "animation"
  },
  {
    "name": "PropertyMixer",
    "detail": "THREE.PropertyMixer",
    "documentation": "Buffered scene graph property that allows weighted accumulation; used internally.",
    "constructor": "binding, typeName, valueSize",
    "extends": null,
    "category": "animation"
  },
  {
    "name": "BooleanKeyframeTrack",
    "detail": "THREE.BooleanKeyframeTrack",
    "documentation": "A track for boolean keyframe values.",
    "constructor": "name, times, values",
    "extends": "KeyframeTrack",
    "category": "tracks"
  },
  {
    "name": "ColorKeyframeTrack",
    "detail": "THREE.ColorKeyframeTrack",
    "documentation": "A track for color keyframe values.",
    "constructor": "name, times, values, interpolation",
    "extends": "KeyframeTrack",
    "category": "tracks"
  },
  {
    "name": "NumberKeyframeTrack",
    "detail": "THREE.NumberKeyframeTrack",
    "documentation": "A track for numeric keyframe values.",
    "constructor": "name, times, values, interpolation",
    "extends": "KeyframeTrack",
    "category": "tracks"
  },
  {
    "name": "QuaternionKeyframeTrack",
    "detail": "THREE.QuaternionKeyframeTrack",
    "documentation": "A track for Quaternion keyframe values.",
    "constructor": "name, times, values, interpolation",
    "extends": "KeyframeTrack",
    "category": "tracks"
  },
  {
    "name": "StringKeyframeTrack",
    "detail": "THREE.StringKeyframeTrack",
    "documentation": "A track for string keyframe values.",
    "constructor": "name, times, values",
    "extends": "KeyframeTrack",
    "category": "tracks"
  },
  {
    "name": "VectorKeyframeTrack",
    "detail": "THREE.VectorKeyframeTrack",
    "documentation": "A track for vector keyframe values.",
    "constructor": "name, times, values, interpolation",
    "extends": "KeyframeTrack",
    "category": "tracks"
  },
  {
    "name": "Audio",
    "detail": "THREE.Audio",
    "documentation": "Create a non-positional ( global ) {@link Audio} object. This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web {@link Audio} API}. ```typescript // create an AudioListener and add it to the camera const listener = new THREE.AudioListener(); camera.add(listener); // create a global {@link Audio} source const sound = new THREE.Audio(listener); // load a sound and set it as the {@link Audio} object's buffer const audioLoader = new THREE.AudioLoader(); audioLoader.load('sounds/ambient.ogg', function (buffer) {     sound.setBuffer(buffer);     sound.setLoop(true);     sound.setVolume(0.5);     sound.play(); }); ```",
    "constructor": "listener",
    "extends": null,
    "category": "audio"
  },
  {
    "name": "AudioAnalyser",
    "detail": "THREE.AudioAnalyser",
    "documentation": "Create a {@link AudioAnalyser} object, which uses an {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode | AnalyserNode} to analyse audio data. This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}. ```typescript // create an AudioListener and add it to the camera const listener = new THREE.AudioListener(); camera.add(listener); // create an Audio source const sound = new THREE.Audio(listener); // load a sound and set it as the Audio object's buffer const audioLoader = new THREE.AudioLoader(); audioLoader.load('sounds/ambient.ogg', function (buffer) {     sound.setBuffer(buffer);     sound.setLoop(true);     sound.setVolume(0.5);     sound.play(); }); // create an AudioAnalyser, passing in the sound and desired fftSize const analyser = new THREE.AudioAnalyser(sound, 32); // get the average frequency of the sound const data = analyser.getAverageFrequency(); ```",
    "constructor": "audio, fftSize",
    "extends": null,
    "category": "audio"
  },
  {
    "name": "AudioListener",
    "detail": "THREE.AudioListener",
    "documentation": "The {@link AudioListener} represents a virtual {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioListener | listener} of the all positional and non-positional audio effects in the scene. A three.js application usually creates a single instance of {@link AudioListener}  * @remarks It is a mandatory constructor parameter for audios entities like {@link Audio | Audio} and {@link PositionalAudio | PositionalAudio}. In most cases, the listener object is a child of the camera So the 3D transformation of the camera represents the 3D transformation of the listener. ```typescript // create an {@link AudioListener} and add it to the camera const listener = new THREE.AudioListener(); camera.add(listener); // create a global audio source const sound = new THREE.Audio(listener); // load a sound and set it as the Audio object's buffer const audioLoader = new THREE.AudioLoader(); audioLoader.load('sounds/ambient.ogg', function (buffer) {     sound.setBuffer(buffer);     sound.setLoop(true);     sound.setVolume(0.5);     sound.play(); }); ```",
    "constructor": "",
    "extends": "Object3D",
    "category": "audio"
  },
  {
    "name": "PositionalAudio",
    "detail": "THREE.PositionalAudio",
    "documentation": "Create a positional audio object. This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}. ```typescript // create an AudioListener and add it to the camera const listener = new THREE.AudioListener(); camera.add(listener); // create the {@link PositionalAudio} object (passing in the listener) const sound = new THREE.PositionalAudio(listener); // load a sound and set it as the {@link PositionalAudio} object's buffer const audioLoader = new THREE.AudioLoader(); audioLoader.load('sounds/song.ogg', function (buffer) {     sound.setBuffer(buffer);     sound.setRefDistance(20);     sound.play(); }); // create an object for the sound to play from const sphere = new THREE.SphereGeometry(20, 32, 16); const material = new THREE.MeshPhongMaterial({     color: 0xff2200 }); const mesh = new THREE.Mesh(sphere, material); scene.add(mesh); // finally add the sound to the mesh mesh.add(sound); ```",
    "constructor": "listener",
    "extends": "Audio",
    "category": "audio"
  },
  {
    "name": "BufferAttribute",
    "detail": "THREE.BufferAttribute",
    "documentation": "This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on {@link THREE.Vector2.fromBufferAttribute | Vector2}, {@link THREE.Vector3.fromBufferAttribute | Vector3}, {@link THREE.Vector4.fromBufferAttribute | Vector4}, and {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.",
    "constructor": "array, itemSize, normalized",
    "extends": null,
    "category": "core"
  },
  {
    "name": "Int8BufferAttribute",
    "detail": "THREE.Int8BufferAttribute",
    "documentation": "This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on {@link THREE.Vector2.fromBufferAttribute | Vector2}, {@link THREE.Vector3.fromBufferAttribute | Vector3}, {@link THREE.Vector4.fromBufferAttribute | Vector4}, and {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.",
    "constructor": "array, itemSize, normalized",
    "extends": "BufferAttribute",
    "category": "core"
  },
  {
    "name": "Uint8BufferAttribute",
    "detail": "THREE.Uint8BufferAttribute",
    "documentation": "This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on {@link THREE.Vector2.fromBufferAttribute | Vector2}, {@link THREE.Vector3.fromBufferAttribute | Vector3}, {@link THREE.Vector4.fromBufferAttribute | Vector4}, and {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.",
    "constructor": "array, itemSize, normalized",
    "extends": "BufferAttribute",
    "category": "core"
  },
  {
    "name": "Uint8ClampedBufferAttribute",
    "detail": "THREE.Uint8ClampedBufferAttribute",
    "documentation": "This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on {@link THREE.Vector2.fromBufferAttribute | Vector2}, {@link THREE.Vector3.fromBufferAttribute | Vector3}, {@link THREE.Vector4.fromBufferAttribute | Vector4}, and {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.",
    "constructor": "array, itemSize, normalized",
    "extends": "BufferAttribute",
    "category": "core"
  },
  {
    "name": "Int16BufferAttribute",
    "detail": "THREE.Int16BufferAttribute",
    "documentation": "This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on {@link THREE.Vector2.fromBufferAttribute | Vector2}, {@link THREE.Vector3.fromBufferAttribute | Vector3}, {@link THREE.Vector4.fromBufferAttribute | Vector4}, and {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.",
    "constructor": "array, itemSize, normalized",
    "extends": "BufferAttribute",
    "category": "core"
  },
  {
    "name": "Uint16BufferAttribute",
    "detail": "THREE.Uint16BufferAttribute",
    "documentation": "This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on {@link THREE.Vector2.fromBufferAttribute | Vector2}, {@link THREE.Vector3.fromBufferAttribute | Vector3}, {@link THREE.Vector4.fromBufferAttribute | Vector4}, and {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.",
    "constructor": "array, itemSize, normalized",
    "extends": "BufferAttribute",
    "category": "core"
  },
  {
    "name": "Int32BufferAttribute",
    "detail": "THREE.Int32BufferAttribute",
    "documentation": "This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on {@link THREE.Vector2.fromBufferAttribute | Vector2}, {@link THREE.Vector3.fromBufferAttribute | Vector3}, {@link THREE.Vector4.fromBufferAttribute | Vector4}, and {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.",
    "constructor": "array, itemSize, normalized",
    "extends": "BufferAttribute",
    "category": "core"
  },
  {
    "name": "Uint32BufferAttribute",
    "detail": "THREE.Uint32BufferAttribute",
    "documentation": "This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on {@link THREE.Vector2.fromBufferAttribute | Vector2}, {@link THREE.Vector3.fromBufferAttribute | Vector3}, {@link THREE.Vector4.fromBufferAttribute | Vector4}, and {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.",
    "constructor": "array, itemSize, normalized",
    "extends": "BufferAttribute",
    "category": "core"
  },
  {
    "name": "Float16BufferAttribute",
    "detail": "THREE.Float16BufferAttribute",
    "documentation": "This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on {@link THREE.Vector2.fromBufferAttribute | Vector2}, {@link THREE.Vector3.fromBufferAttribute | Vector3}, {@link THREE.Vector4.fromBufferAttribute | Vector4}, and {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.",
    "constructor": "array, itemSize, normalized",
    "extends": "BufferAttribute",
    "category": "core"
  },
  {
    "name": "Float32BufferAttribute",
    "detail": "THREE.Float32BufferAttribute",
    "documentation": "This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes ) associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on {@link THREE.Vector2.fromBufferAttribute | Vector2}, {@link THREE.Vector3.fromBufferAttribute | Vector3}, {@link THREE.Vector4.fromBufferAttribute | Vector4}, and {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.",
    "constructor": "array, itemSize, normalized",
    "extends": "BufferAttribute",
    "category": "core"
  },
  {
    "name": "BufferGeometry",
    "detail": "THREE.BufferGeometry",
    "documentation": "Specifies the first element in this draw call – the first vertex for non-indexed geometry, otherwise the first triangle index.",
    "constructor": "",
    "extends": null,
    "category": "core"
  },
  {
    "name": "Clock",
    "detail": "THREE.Clock",
    "documentation": "Object for keeping track of time. This uses [performance.now]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance/now}.",
    "constructor": "autoStart",
    "extends": null,
    "category": "core"
  },
  {
    "name": "EventDispatcher",
    "detail": "THREE.EventDispatcher",
    "documentation": "The minimal basic Event that can be dispatched by a {@link EventDispatcher<>}.",
    "constructor": "",
    "extends": null,
    "category": "core"
  },
  {
    "name": "GLBufferAttribute",
    "detail": "THREE.GLBufferAttribute",
    "documentation": "This buffer attribute class does not construct a VBO. Instead, it uses whatever VBO is passed in constructor and can later be altered via the {@link buffer | .buffer} property. It is required to pass additional params alongside the VBO Those are: the GL context, the GL data type, the number of components per vertex, the number of bytes per component, and the number of vertices. The most common use case for this class is when some kind of GPGPU calculation interferes or even produces the VBOs in question.",
    "constructor": "buffer, type, itemSize, elementSize, count, normalized",
    "extends": null,
    "category": "core"
  },
  {
    "name": "InstancedBufferAttribute",
    "detail": "THREE.InstancedBufferAttribute",
    "documentation": "An instanced version of {@link THREE.BufferAttribute | BufferAttribute}.",
    "constructor": "array, itemSize, normalized, meshPerAttribute",
    "extends": "BufferAttribute",
    "category": "core"
  },
  {
    "name": "InstancedBufferGeometry",
    "detail": "THREE.InstancedBufferGeometry",
    "documentation": "An instanced version of {@link THREE.BufferGeometry | BufferGeometry}.",
    "constructor": "",
    "extends": "BufferGeometry",
    "category": "core"
  },
  {
    "name": "InstancedInterleavedBuffer",
    "detail": "THREE.InstancedInterleavedBuffer",
    "documentation": "An instanced version of {@link THREE.InterleavedBuffer | InterleavedBuffer}.",
    "constructor": "array, stride, meshPerAttribute",
    "extends": "InterleavedBuffer",
    "category": "core"
  },
  {
    "name": "InterleavedBuffer",
    "detail": "THREE.InterleavedBuffer",
    "documentation": "**\"Interleaved\"** means that multiple attributes, possibly of different types, (e.g., _position, normal, uv, color_) are packed into a single array buffer. An introduction into interleaved arrays can be found here: {@link https://blog.tojicode.com/2011/05/interleaved-array-basics.html | Interleaved array basics}",
    "constructor": "array, stride",
    "extends": null,
    "category": "core"
  },
  {
    "name": "InterleavedBufferAttribute",
    "detail": "THREE.InterleavedBufferAttribute",
    "documentation": "Three.js core class",
    "constructor": "interleavedBuffer, itemSize, offset, normalized",
    "extends": null,
    "category": "core"
  },
  {
    "name": "Layers",
    "detail": "THREE.Layers",
    "documentation": "A {@link THREE.Layers | Layers} object assigns an {@link THREE.Object3D | Object3D} to 1 or more of 32 layers numbered `0` to `31` - internally the layers are stored as a {@link https://en.wikipedia.org/wiki/Mask_(computing) | bit mask}, and by default all Object3Ds are a member of layer `0`. This can be used to control visibility - an object must share a layer with a {@link Camera | camera} to be visible when that camera's view is rendered. All classes that inherit from {@link THREE.Object3D | Object3D} have an {@link THREE.Object3D.layers | Object3D.layers} property which is an instance of this class.",
    "constructor": "",
    "extends": null,
    "category": "core"
  },
  {
    "name": "Object3D",
    "detail": "THREE.Object3D",
    "documentation": "Fires when the object has been added to its parent object.",
    "constructor": "",
    "extends": null,
    "category": "core"
  },
  {
    "name": "Raycaster",
    "detail": "THREE.Raycaster",
    "documentation": "Distance between the origin of the ray and the intersection",
    "constructor": "origin, direction, near, far",
    "extends": null,
    "category": "core"
  },
  {
    "name": "RenderTarget",
    "detail": "THREE.RenderTarget",
    "documentation": "Three.js core class",
    "constructor": "width, height, options",
    "extends": null,
    "category": "core"
  },
  {
    "name": "Uniform",
    "detail": "THREE.Uniform",
    "documentation": "Uniforms are global GLSL variables. They are passed to shader programs. When declaring a uniform of a {@link THREE.ShaderMaterial | ShaderMaterial}, it is declared by value or by object. ```typescript uniforms: {     time: {         value: 1.0     },     resolution: new Uniform(new Vector2()) }; ```",
    "constructor": "value",
    "extends": null,
    "category": "core"
  },
  {
    "name": "UniformsGroup",
    "detail": "THREE.UniformsGroup",
    "documentation": "Three.js core class",
    "constructor": "",
    "extends": "EventDispatcher",
    "category": "core"
  },
  {
    "name": "PMREMGenerator",
    "detail": "THREE.PMREMGenerator",
    "documentation": "This class generates a Prefiltered, Mipmapped Radiance Environment Map (PMREM) from a cubeMap environment texture. This allows different levels of blur to be quickly accessed based on material roughness Unlike a traditional mipmap chain, it only goes down to the LOD_MIN level (above), and then creates extra even more filtered 'mips' at the same LOD_MIN resolution, associated with higher roughness levels In this way we maintain resolution to smoothly interpolate diffuse lighting while limiting sampling computation. Note: The minimum {@link THREE.MeshStandardMaterial | MeshStandardMaterial}'s roughness depends on the size of the provided texture If your render has small dimensions or the shiny parts have a lot of curvature, you may still be able to get away with a smaller texture size. | texture size | minimum roughness  | |--------------|--------------------| | 16           | 0.21               | | 32           | 0.15               | | 64           | 0.11               | | 128          | 0.076              | | 256          | 0.054              | | 512          | 0.038              | | 1024         | 0.027              |",
    "constructor": "renderer",
    "extends": null,
    "category": "extras"
  },
  {
    "name": "ShapeUtils",
    "detail": "THREE.ShapeUtils",
    "documentation": "A class containing utility functions for shapes.",
    "constructor": "",
    "extends": null,
    "category": "extras"
  },
  {
    "name": "CurvePath",
    "detail": "THREE.CurvePath",
    "documentation": "Curved Path - a curve path is simply a array of connected curves, but retains the api of a curve. A {@link CurvePath} is simply an array of connected curves, but retains the api of a curve.",
    "constructor": "",
    "extends": null,
    "category": "core"
  },
  {
    "name": "Path",
    "detail": "THREE.Path",
    "documentation": "A 2D {@link Path} representation. The class provides methods for creating paths and contours of 2D shapes similar to the 2D Canvas API. ```typescript const {@link Path} = new THREE.Path(); path.lineTo(0, 0.8); path.quadraticCurveTo(0, 1, 0.2, 1); path.lineTo(1, 1); const points = path.getPoints(); const geometry = new THREE.BufferGeometry().setFromPoints(points); const material = new THREE.LineBasicMaterial({     color: 0xffffff }); const line = new THREE.Line(geometry, material); scene.add(line); ```",
    "constructor": "points",
    "extends": "CurvePath",
    "category": "core"
  },
  {
    "name": "Shape",
    "detail": "THREE.Shape",
    "documentation": "Defines an arbitrary 2d {@link Shape} plane using paths with optional holes It can be used with {@link THREE.ExtrudeGeometry | ExtrudeGeometry}, {@link THREE.ShapeGeometry | ShapeGeometry}, to get points, or to get triangulated faces. ```typescript const heartShape = new THREE.Shape(); heartShape.moveTo(25, 25); heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0); heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35); heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95); heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35); heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0); heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25); const extrudeSettings = {     depth: 8,     bevelEnabled: true,     bevelSegments: 2,     steps: 2,     bevelSize: 1,     bevelThickness: 1 }; const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings); const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial()); ```",
    "constructor": "points",
    "extends": "Path",
    "category": "core"
  },
  {
    "name": "ShapePath",
    "detail": "THREE.ShapePath",
    "documentation": "This class is used to convert a series of shapes to an array of {@link THREE.Path | Path's}, for example an SVG shape to a path.",
    "constructor": "",
    "extends": null,
    "category": "core"
  },
  {
    "name": "ArcCurve",
    "detail": "THREE.ArcCurve",
    "documentation": "Alias for {@link THREE.EllipseCurve | EllipseCurve}.",
    "constructor": "aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise",
    "extends": "EllipseCurve",
    "category": "curves"
  },
  {
    "name": "CatmullRomCurve3",
    "detail": "THREE.CatmullRomCurve3",
    "documentation": "Create a smooth **3D** spline curve from a series of points using the {@link https://en.wikipedia.org/wiki/Centripetal_Catmull-Rom_spline | Catmull-Rom} algorithm. ```typescript //Create a closed wavey loop const curve = new THREE.CatmullRomCurve3([ new THREE.Vector3(-10, 0, 10), new THREE.Vector3(-5, 5, 5), new THREE.Vector3(0, 0, 0), new THREE.Vector3(5, -5, 5), new THREE.Vector3(10, 0, 10)]); const points = curve.getPoints(50); const geometry = new THREE.BufferGeometry().setFromPoints(points); const material = new THREE.LineBasicMaterial({     color: 0xff0000 }); // Create the final object to add to the scene const curveObject = new THREE.Line(geometry, material); ```",
    "constructor": "points, closed, curveType, tension",
    "extends": "Curve",
    "category": "curves"
  },
  {
    "name": "CubicBezierCurve",
    "detail": "THREE.CubicBezierCurve",
    "documentation": "Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve}, defined by a start point, endpoint and two control points. ```typescript const curve = new THREE.CubicBezierCurve( new THREE.Vector2(-10, 0), new THREE.Vector2(-5, 15), new THREE.Vector2(20, 15), new THREE.Vector2(10, 0)); const points = curve.getPoints(50); const geometry = new THREE.BufferGeometry().setFromPoints(points); const material = new THREE.LineBasicMaterial({     color: 0xff0000 }); // Create the final object to add to the scene const curveObject = new THREE.Line(geometry, material); ```",
    "constructor": "v0, v1, v2, v3",
    "extends": "Curve",
    "category": "curves"
  },
  {
    "name": "CubicBezierCurve3",
    "detail": "THREE.CubicBezierCurve3",
    "documentation": "Create a smooth **3D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve}, defined by a start point, endpoint and two control points. ```typescript const curve = new THREE.CubicBezierCurve( new THREE.Vector2(-10, 0), new THREE.Vector2(-5, 15), new THREE.Vector2(20, 15), new THREE.Vector2(10, 0)); const points = curve.getPoints(50); const geometry = new THREE.BufferGeometry().setFromPoints(points); const material = new THREE.LineBasicMaterial({     color: 0xff0000 }); // Create the final object to add to the scene const curveObject = new THREE.Line(geometry, material); ```",
    "constructor": "v0, v1, v2, v3",
    "extends": "Curve",
    "category": "curves"
  },
  {
    "name": "EllipseCurve",
    "detail": "THREE.EllipseCurve",
    "documentation": "Creates a 2d curve in the shape of an ellipse Setting the {@link xRadius} equal to the {@link yRadius} will result in a circle. ```typescript const curve = new THREE.EllipseCurve(   0,  0,  // ax, aY   10, 10, // xRadius, yRadius   0,  2 * Math.PI, // aStartAngle, aEndAngle   false,  // aClockwise   0       // aRotation   ); const points = curve.getPoints(50); const geometry = new THREE.BufferGeometry().setFromPoints(points); const material = new THREE.LineBasicMaterial({ color: 0xff0000 }); // Create the final object to add to the scene const ellipse = new THREE.Line(geometry, material); ```",
    "constructor": "aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation",
    "extends": "Curve",
    "category": "curves"
  },
  {
    "name": "LineCurve",
    "detail": "THREE.LineCurve",
    "documentation": "A curve representing a **2D** line segment.",
    "constructor": "v1, v2",
    "extends": "Curve",
    "category": "curves"
  },
  {
    "name": "LineCurve3",
    "detail": "THREE.LineCurve3",
    "documentation": "A curve representing a **3D** line segment.",
    "constructor": "v1, v2",
    "extends": "Curve",
    "category": "curves"
  },
  {
    "name": "QuadraticBezierCurve",
    "detail": "THREE.QuadraticBezierCurve",
    "documentation": "Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve}, defined by a start point, end point and a single control point. ```typescript const curve = new THREE.QuadraticBezierCurve( new THREE.Vector2(-10, 0), new THREE.Vector2(20, 15), new THREE.Vector2(10, 0)); const points = curve.getPoints(50); const geometry = new THREE.BufferGeometry().setFromPoints(points); const material = new THREE.LineBasicMaterial({     color: 0xff0000 }); // Create the final object to add to the scene const curveObject = new THREE.Line(geometry, material); ```",
    "constructor": "v0, v1, v2",
    "extends": "Curve",
    "category": "curves"
  },
  {
    "name": "QuadraticBezierCurve3",
    "detail": "THREE.QuadraticBezierCurve3",
    "documentation": "Create a smooth **3D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve}, defined by a start point, end point and a single control point. ```typescript const curve = new THREE.QuadraticBezierCurve3( new THREE.Vector3(-10, 0, 0), new THREE.Vector3(20, 15, 0), new THREE.Vector3(10, 0, 0)); const points = curve.getPoints(50); const geometry = new THREE.BufferGeometry().setFromPoints(points); const material = new THREE.LineBasicMaterial({     color: 0xff0000 }); // Create the final object to add to the scene const curveObject = new THREE.Line(geometry, material); ```",
    "constructor": "v0, v1, v2",
    "extends": "Curve",
    "category": "curves"
  },
  {
    "name": "SplineCurve",
    "detail": "THREE.SplineCurve",
    "documentation": "Create a smooth **2D** spline curve from a series of points. ```typescript // Create a sine-like wave const curve = new THREE.SplineCurve([ new THREE.Vector2(-10, 0), new THREE.Vector2(-5, 5), new THREE.Vector2(0, 0), new THREE.Vector2(5, -5), new THREE.Vector2(10, 0)]); const points = curve.getPoints(50); const geometry = new THREE.BufferGeometry().setFromPoints(points); const material = new THREE.LineBasicMaterial({     color: 0xff0000 }); // Create the final object to add to the scene const splineObject = new THREE.Line(geometry, material); ```",
    "constructor": "points",
    "extends": "Curve",
    "category": "curves"
  },
  {
    "name": "WebGLRenderer",
    "detail": "THREE.WebGLRenderer",
    "documentation": "A Canvas where the renderer draws its output.",
    "constructor": "parameters",
    "extends": null,
    "category": "renderers"
  }
];

exports.methods = {
  "common": [
    {
      "name": "add",
      "params": "...objects",
      "detail": "Add objects as children",
      "documentation": "Adds object as child of this object"
    },
    {
      "name": "remove",
      "params": "...objects",
      "detail": "Remove objects",
      "documentation": "Removes object as child of this object"
    },
    {
      "name": "clear",
      "params": "",
      "detail": "Clear children",
      "documentation": "Removes all child objects"
    },
    {
      "name": "getObjectById",
      "params": "id",
      "detail": "Get object by ID",
      "documentation": "Searches through object and its children"
    },
    {
      "name": "getObjectByName",
      "params": "name",
      "detail": "Get object by name",
      "documentation": "Searches through object and its children"
    },
    {
      "name": "traverse",
      "params": "callback",
      "detail": "Traverse hierarchy",
      "documentation": "Executes callback on this object and descendants"
    },
    {
      "name": "clone",
      "params": "recursive",
      "detail": "Clone object",
      "documentation": "Returns a clone of this object"
    },
    {
      "name": "copy",
      "params": "source, recursive",
      "detail": "Copy object",
      "documentation": "Copies the given object into this object"
    }
  ],
  "Camera": [
    {
      "name": "getWorldDirection",
      "detail": "Camera.getWorldDirection()",
      "documentation": "Method of Camera"
    }
  ],
  "CubeCamera": [
    {
      "name": "getRenderTarget",
      "detail": "CubeCamera.getRenderTarget()",
      "documentation": "Method of CubeCamera"
    },
    {
      "name": "getActiveCubeFace",
      "detail": "CubeCamera.getActiveCubeFace()",
      "documentation": "Method of CubeCamera"
    },
    {
      "name": "getActiveMipmapLevel",
      "detail": "CubeCamera.getActiveMipmapLevel()",
      "documentation": "Method of CubeCamera"
    },
    {
      "name": "setRenderTarget",
      "detail": "CubeCamera.setRenderTarget()",
      "documentation": "Method of CubeCamera"
    },
    {
      "name": "render",
      "detail": "CubeCamera.render()",
      "documentation": "Method of CubeCamera"
    },
    {
      "name": "updateCoordinateSystem",
      "detail": "CubeCamera.updateCoordinateSystem()",
      "documentation": "Method of CubeCamera"
    },
    {
      "name": "update",
      "detail": "CubeCamera.update()",
      "documentation": "Method of CubeCamera"
    }
  ],
  "OrthographicCamera": [
    {
      "name": "updateProjectionMatrix",
      "detail": "OrthographicCamera.updateProjectionMatrix()",
      "documentation": "Method of OrthographicCamera"
    },
    {
      "name": "setViewOffset",
      "detail": "OrthographicCamera.setViewOffset()",
      "documentation": "Method of OrthographicCamera"
    },
    {
      "name": "clearViewOffset",
      "detail": "OrthographicCamera.clearViewOffset()",
      "documentation": "Method of OrthographicCamera"
    },
    {
      "name": "toJSON",
      "detail": "OrthographicCamera.toJSON()",
      "documentation": "Method of OrthographicCamera"
    }
  ],
  "PerspectiveCamera": [
    {
      "name": "getFocalLength",
      "detail": "PerspectiveCamera.getFocalLength()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "setFocalLength",
      "detail": "PerspectiveCamera.setFocalLength()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "getEffectiveFOV",
      "detail": "PerspectiveCamera.getEffectiveFOV()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "getFilmWidth",
      "detail": "PerspectiveCamera.getFilmWidth()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "getFilmHeight",
      "detail": "PerspectiveCamera.getFilmHeight()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "getViewBounds",
      "detail": "PerspectiveCamera.getViewBounds()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "getViewSize",
      "detail": "PerspectiveCamera.getViewSize()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "setViewOffset",
      "detail": "PerspectiveCamera.setViewOffset()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "clearViewOffset",
      "detail": "PerspectiveCamera.clearViewOffset()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "updateProjectionMatrix",
      "detail": "PerspectiveCamera.updateProjectionMatrix()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "setLens",
      "detail": "PerspectiveCamera.setLens()",
      "documentation": "Method of PerspectiveCamera"
    },
    {
      "name": "toJSON",
      "detail": "PerspectiveCamera.toJSON()",
      "documentation": "Method of PerspectiveCamera"
    }
  ],
  "StereoCamera": [
    {
      "name": "update",
      "detail": "StereoCamera.update()",
      "documentation": "Method of StereoCamera"
    }
  ],
  "ExtrudeGeometry": [
    {
      "name": "generateTopUV",
      "detail": "ExtrudeGeometry.generateTopUV()",
      "documentation": "Method of ExtrudeGeometry"
    },
    {
      "name": "generateSideWallUV",
      "detail": "ExtrudeGeometry.generateSideWallUV()",
      "documentation": "Method of ExtrudeGeometry"
    },
    {
      "name": "addShape",
      "detail": "ExtrudeGeometry.addShape()",
      "documentation": "Method of ExtrudeGeometry"
    }
  ],
  "LineBasicMaterial": [
    {
      "name": "setValues",
      "detail": "LineBasicMaterial.setValues()",
      "documentation": "Method of LineBasicMaterial"
    }
  ],
  "LineDashedMaterial": [
    {
      "name": "setValues",
      "detail": "LineDashedMaterial.setValues()",
      "documentation": "Method of LineDashedMaterial"
    }
  ],
  "Material": [
    {
      "name": "onBeforeRender",
      "detail": "Material.onBeforeRender()",
      "documentation": "Method of Material"
    },
    {
      "name": "onBeforeCompile",
      "detail": "Material.onBeforeCompile()",
      "documentation": "Method of Material"
    },
    {
      "name": "customProgramCacheKey",
      "detail": "Material.customProgramCacheKey()",
      "documentation": "Method of Material"
    },
    {
      "name": "setValues",
      "detail": "Material.setValues()",
      "documentation": "Method of Material"
    },
    {
      "name": "toJSON",
      "detail": "Material.toJSON()",
      "documentation": "Method of Material"
    },
    {
      "name": "clone",
      "detail": "Material.clone()",
      "documentation": "Method of Material"
    },
    {
      "name": "copy",
      "detail": "Material.copy()",
      "documentation": "Method of Material"
    },
    {
      "name": "dispose",
      "detail": "Material.dispose()",
      "documentation": "Method of Material"
    }
  ],
  "MeshBasicMaterial": [
    {
      "name": "setValues",
      "detail": "MeshBasicMaterial.setValues()",
      "documentation": "Method of MeshBasicMaterial"
    }
  ],
  "MeshDepthMaterial": [
    {
      "name": "setValues",
      "detail": "MeshDepthMaterial.setValues()",
      "documentation": "Method of MeshDepthMaterial"
    }
  ],
  "MeshDistanceMaterial": [
    {
      "name": "setValues",
      "detail": "MeshDistanceMaterial.setValues()",
      "documentation": "Method of MeshDistanceMaterial"
    }
  ],
  "MeshLambertMaterial": [
    {
      "name": "setValues",
      "detail": "MeshLambertMaterial.setValues()",
      "documentation": "Method of MeshLambertMaterial"
    }
  ],
  "MeshMatcapMaterial": [
    {
      "name": "setValues",
      "detail": "MeshMatcapMaterial.setValues()",
      "documentation": "Method of MeshMatcapMaterial"
    }
  ],
  "MeshNormalMaterial": [
    {
      "name": "setValues",
      "detail": "MeshNormalMaterial.setValues()",
      "documentation": "Method of MeshNormalMaterial"
    }
  ],
  "MeshPhongMaterial": [
    {
      "name": "setValues",
      "detail": "MeshPhongMaterial.setValues()",
      "documentation": "Method of MeshPhongMaterial"
    }
  ],
  "MeshPhysicalMaterial": [
    {
      "name": "setValues",
      "detail": "MeshPhysicalMaterial.setValues()",
      "documentation": "Method of MeshPhysicalMaterial"
    }
  ],
  "MeshStandardMaterial": [
    {
      "name": "setValues",
      "detail": "MeshStandardMaterial.setValues()",
      "documentation": "Method of MeshStandardMaterial"
    }
  ],
  "MeshToonMaterial": [
    {
      "name": "setValues",
      "detail": "MeshToonMaterial.setValues()",
      "documentation": "Method of MeshToonMaterial"
    }
  ],
  "PointsMaterial": [
    {
      "name": "setValues",
      "detail": "PointsMaterial.setValues()",
      "documentation": "Method of PointsMaterial"
    }
  ],
  "ShaderMaterial": [
    {
      "name": "setValues",
      "detail": "ShaderMaterial.setValues()",
      "documentation": "Method of ShaderMaterial"
    },
    {
      "name": "toJSON",
      "detail": "ShaderMaterial.toJSON()",
      "documentation": "Method of ShaderMaterial"
    }
  ],
  "ShadowMaterial": [
    {
      "name": "setValues",
      "detail": "ShadowMaterial.setValues()",
      "documentation": "Method of ShadowMaterial"
    }
  ],
  "SpriteMaterial": [
    {
      "name": "setValues",
      "detail": "SpriteMaterial.setValues()",
      "documentation": "Method of SpriteMaterial"
    }
  ],
  "DirectionalLight": [
    {
      "name": "dispose",
      "detail": "DirectionalLight.dispose()",
      "documentation": "Method of DirectionalLight"
    }
  ],
  "LightProbe": [
    {
      "name": "fromJSON",
      "detail": "LightProbe.fromJSON()",
      "documentation": "Method of LightProbe"
    }
  ],
  "LightShadow": [
    {
      "name": "getViewportCount",
      "detail": "LightShadow.getViewportCount()",
      "documentation": "Method of LightShadow"
    },
    {
      "name": "copy",
      "detail": "LightShadow.copy()",
      "documentation": "Method of LightShadow"
    },
    {
      "name": "clone",
      "detail": "LightShadow.clone()",
      "documentation": "Method of LightShadow"
    },
    {
      "name": "toJSON",
      "detail": "LightShadow.toJSON()",
      "documentation": "Method of LightShadow"
    },
    {
      "name": "getFrustum",
      "detail": "LightShadow.getFrustum()",
      "documentation": "Method of LightShadow"
    },
    {
      "name": "updateMatrices",
      "detail": "LightShadow.updateMatrices()",
      "documentation": "Method of LightShadow"
    },
    {
      "name": "getViewport",
      "detail": "LightShadow.getViewport()",
      "documentation": "Method of LightShadow"
    },
    {
      "name": "getFrameExtents",
      "detail": "LightShadow.getFrameExtents()",
      "documentation": "Method of LightShadow"
    },
    {
      "name": "dispose",
      "detail": "LightShadow.dispose()",
      "documentation": "Method of LightShadow"
    }
  ],
  "AnimationLoader": [
    {
      "name": "parse",
      "detail": "AnimationLoader.parse()",
      "documentation": "Method of AnimationLoader"
    }
  ],
  "BufferGeometryLoader": [
    {
      "name": "parse",
      "detail": "BufferGeometryLoader.parse()",
      "documentation": "Method of BufferGeometryLoader"
    }
  ],
  "FileLoader": [
    {
      "name": "setResponseType",
      "detail": "FileLoader.setResponseType()",
      "documentation": "Method of FileLoader"
    },
    {
      "name": "setMimeType",
      "detail": "FileLoader.setMimeType()",
      "documentation": "Method of FileLoader"
    }
  ],
  "ImageBitmapLoader": [
    {
      "name": "setOptions",
      "detail": "ImageBitmapLoader.setOptions()",
      "documentation": "Method of ImageBitmapLoader"
    }
  ],
  "Loader": [
    {
      "name": "setCrossOrigin",
      "detail": "Loader.setCrossOrigin()",
      "documentation": "Method of Loader"
    },
    {
      "name": "setWithCredentials",
      "detail": "Loader.setWithCredentials()",
      "documentation": "Method of Loader"
    },
    {
      "name": "setPath",
      "detail": "Loader.setPath()",
      "documentation": "Method of Loader"
    },
    {
      "name": "setResourcePath",
      "detail": "Loader.setResourcePath()",
      "documentation": "Method of Loader"
    },
    {
      "name": "setRequestHeader",
      "detail": "Loader.setRequestHeader()",
      "documentation": "Method of Loader"
    },
    {
      "name": "abort",
      "detail": "Loader.abort()",
      "documentation": "Method of Loader"
    }
  ],
  "MaterialLoader": [
    {
      "name": "parse",
      "detail": "MaterialLoader.parse()",
      "documentation": "Method of MaterialLoader"
    },
    {
      "name": "setTextures",
      "detail": "MaterialLoader.setTextures()",
      "documentation": "Method of MaterialLoader"
    },
    {
      "name": "createMaterialFromType",
      "detail": "MaterialLoader.createMaterialFromType()",
      "documentation": "Method of MaterialLoader"
    }
  ],
  "ObjectLoader": [
    {
      "name": "parseAsync",
      "detail": "ObjectLoader.parseAsync()",
      "documentation": "Method of ObjectLoader"
    },
    {
      "name": "parseGeometries",
      "detail": "ObjectLoader.parseGeometries()",
      "documentation": "Method of ObjectLoader"
    },
    {
      "name": "parseMaterials",
      "detail": "ObjectLoader.parseMaterials()",
      "documentation": "Method of ObjectLoader"
    },
    {
      "name": "parseAnimations",
      "detail": "ObjectLoader.parseAnimations()",
      "documentation": "Method of ObjectLoader"
    },
    {
      "name": "parseImagesAsync",
      "detail": "ObjectLoader.parseImagesAsync()",
      "documentation": "Method of ObjectLoader"
    },
    {
      "name": "parseTextures",
      "detail": "ObjectLoader.parseTextures()",
      "documentation": "Method of ObjectLoader"
    },
    {
      "name": "parseObject",
      "detail": "ObjectLoader.parseObject()",
      "documentation": "Method of ObjectLoader"
    }
  ],
  "Box2": [
    {
      "name": "set",
      "detail": "Box2.set()",
      "documentation": "Method of Box2"
    },
    {
      "name": "setFromPoints",
      "detail": "Box2.setFromPoints()",
      "documentation": "Method of Box2"
    },
    {
      "name": "setFromCenterAndSize",
      "detail": "Box2.setFromCenterAndSize()",
      "documentation": "Method of Box2"
    },
    {
      "name": "clone",
      "detail": "Box2.clone()",
      "documentation": "Method of Box2"
    },
    {
      "name": "copy",
      "detail": "Box2.copy()",
      "documentation": "Method of Box2"
    },
    {
      "name": "makeEmpty",
      "detail": "Box2.makeEmpty()",
      "documentation": "Method of Box2"
    },
    {
      "name": "isEmpty",
      "detail": "Box2.isEmpty()",
      "documentation": "Method of Box2"
    },
    {
      "name": "getCenter",
      "detail": "Box2.getCenter()",
      "documentation": "Method of Box2"
    },
    {
      "name": "getSize",
      "detail": "Box2.getSize()",
      "documentation": "Method of Box2"
    },
    {
      "name": "expandByPoint",
      "detail": "Box2.expandByPoint()",
      "documentation": "Method of Box2"
    },
    {
      "name": "expandByVector",
      "detail": "Box2.expandByVector()",
      "documentation": "Method of Box2"
    },
    {
      "name": "expandByScalar",
      "detail": "Box2.expandByScalar()",
      "documentation": "Method of Box2"
    },
    {
      "name": "containsPoint",
      "detail": "Box2.containsPoint()",
      "documentation": "Method of Box2"
    },
    {
      "name": "containsBox",
      "detail": "Box2.containsBox()",
      "documentation": "Method of Box2"
    },
    {
      "name": "getParameter",
      "detail": "Box2.getParameter()",
      "documentation": "Method of Box2"
    },
    {
      "name": "intersectsBox",
      "detail": "Box2.intersectsBox()",
      "documentation": "Method of Box2"
    },
    {
      "name": "clampPoint",
      "detail": "Box2.clampPoint()",
      "documentation": "Method of Box2"
    },
    {
      "name": "distanceToPoint",
      "detail": "Box2.distanceToPoint()",
      "documentation": "Method of Box2"
    },
    {
      "name": "intersect",
      "detail": "Box2.intersect()",
      "documentation": "Method of Box2"
    },
    {
      "name": "union",
      "detail": "Box2.union()",
      "documentation": "Method of Box2"
    },
    {
      "name": "translate",
      "detail": "Box2.translate()",
      "documentation": "Method of Box2"
    },
    {
      "name": "equals",
      "detail": "Box2.equals()",
      "documentation": "Method of Box2"
    },
    {
      "name": "empty",
      "detail": "Box2.empty()",
      "documentation": "Method of Box2"
    },
    {
      "name": "isIntersectionBox",
      "detail": "Box2.isIntersectionBox()",
      "documentation": "Method of Box2"
    }
  ],
  "Box3": [
    {
      "name": "set",
      "detail": "Box3.set()",
      "documentation": "Method of Box3"
    },
    {
      "name": "setFromArray",
      "detail": "Box3.setFromArray()",
      "documentation": "Method of Box3"
    },
    {
      "name": "setFromBufferAttribute",
      "detail": "Box3.setFromBufferAttribute()",
      "documentation": "Method of Box3"
    },
    {
      "name": "setFromPoints",
      "detail": "Box3.setFromPoints()",
      "documentation": "Method of Box3"
    },
    {
      "name": "setFromCenterAndSize",
      "detail": "Box3.setFromCenterAndSize()",
      "documentation": "Method of Box3"
    },
    {
      "name": "setFromObject",
      "detail": "Box3.setFromObject()",
      "documentation": "Method of Box3"
    },
    {
      "name": "clone",
      "detail": "Box3.clone()",
      "documentation": "Method of Box3"
    },
    {
      "name": "copy",
      "detail": "Box3.copy()",
      "documentation": "Method of Box3"
    },
    {
      "name": "makeEmpty",
      "detail": "Box3.makeEmpty()",
      "documentation": "Method of Box3"
    },
    {
      "name": "isEmpty",
      "detail": "Box3.isEmpty()",
      "documentation": "Method of Box3"
    },
    {
      "name": "getCenter",
      "detail": "Box3.getCenter()",
      "documentation": "Method of Box3"
    },
    {
      "name": "getSize",
      "detail": "Box3.getSize()",
      "documentation": "Method of Box3"
    },
    {
      "name": "expandByPoint",
      "detail": "Box3.expandByPoint()",
      "documentation": "Method of Box3"
    },
    {
      "name": "expandByVector",
      "detail": "Box3.expandByVector()",
      "documentation": "Method of Box3"
    },
    {
      "name": "expandByScalar",
      "detail": "Box3.expandByScalar()",
      "documentation": "Method of Box3"
    },
    {
      "name": "expandByObject",
      "detail": "Box3.expandByObject()",
      "documentation": "Method of Box3"
    },
    {
      "name": "containsPoint",
      "detail": "Box3.containsPoint()",
      "documentation": "Method of Box3"
    },
    {
      "name": "containsBox",
      "detail": "Box3.containsBox()",
      "documentation": "Method of Box3"
    },
    {
      "name": "getParameter",
      "detail": "Box3.getParameter()",
      "documentation": "Method of Box3"
    },
    {
      "name": "intersectsBox",
      "detail": "Box3.intersectsBox()",
      "documentation": "Method of Box3"
    },
    {
      "name": "intersectsSphere",
      "detail": "Box3.intersectsSphere()",
      "documentation": "Method of Box3"
    },
    {
      "name": "intersectsPlane",
      "detail": "Box3.intersectsPlane()",
      "documentation": "Method of Box3"
    },
    {
      "name": "intersectsTriangle",
      "detail": "Box3.intersectsTriangle()",
      "documentation": "Method of Box3"
    },
    {
      "name": "clampPoint",
      "detail": "Box3.clampPoint()",
      "documentation": "Method of Box3"
    },
    {
      "name": "distanceToPoint",
      "detail": "Box3.distanceToPoint()",
      "documentation": "Method of Box3"
    },
    {
      "name": "getBoundingSphere",
      "detail": "Box3.getBoundingSphere()",
      "documentation": "Method of Box3"
    },
    {
      "name": "intersect",
      "detail": "Box3.intersect()",
      "documentation": "Method of Box3"
    },
    {
      "name": "union",
      "detail": "Box3.union()",
      "documentation": "Method of Box3"
    },
    {
      "name": "applyMatrix4",
      "detail": "Box3.applyMatrix4()",
      "documentation": "Method of Box3"
    },
    {
      "name": "translate",
      "detail": "Box3.translate()",
      "documentation": "Method of Box3"
    },
    {
      "name": "equals",
      "detail": "Box3.equals()",
      "documentation": "Method of Box3"
    },
    {
      "name": "empty",
      "detail": "Box3.empty()",
      "documentation": "Method of Box3"
    },
    {
      "name": "isIntersectionBox",
      "detail": "Box3.isIntersectionBox()",
      "documentation": "Method of Box3"
    },
    {
      "name": "isIntersectionSphere",
      "detail": "Box3.isIntersectionSphere()",
      "documentation": "Method of Box3"
    },
    {
      "name": "toJSON",
      "detail": "Box3.toJSON()",
      "documentation": "Method of Box3"
    },
    {
      "name": "fromJSON",
      "detail": "Box3.fromJSON()",
      "documentation": "Method of Box3"
    }
  ],
  "Color": [
    {
      "name": "set",
      "detail": "Color.set()",
      "documentation": "Method of Color"
    },
    {
      "name": "setFromVector3",
      "detail": "Color.setFromVector3()",
      "documentation": "Method of Color"
    },
    {
      "name": "setScalar",
      "detail": "Color.setScalar()",
      "documentation": "Method of Color"
    },
    {
      "name": "setHex",
      "detail": "Color.setHex()",
      "documentation": "Method of Color"
    },
    {
      "name": "setRGB",
      "detail": "Color.setRGB()",
      "documentation": "Method of Color"
    },
    {
      "name": "setHSL",
      "detail": "Color.setHSL()",
      "documentation": "Method of Color"
    },
    {
      "name": "setStyle",
      "detail": "Color.setStyle()",
      "documentation": "Method of Color"
    },
    {
      "name": "setColorName",
      "detail": "Color.setColorName()",
      "documentation": "Method of Color"
    },
    {
      "name": "clone",
      "detail": "Color.clone()",
      "documentation": "Method of Color"
    },
    {
      "name": "copy",
      "detail": "Color.copy()",
      "documentation": "Method of Color"
    },
    {
      "name": "copySRGBToLinear",
      "detail": "Color.copySRGBToLinear()",
      "documentation": "Method of Color"
    },
    {
      "name": "copyLinearToSRGB",
      "detail": "Color.copyLinearToSRGB()",
      "documentation": "Method of Color"
    },
    {
      "name": "convertSRGBToLinear",
      "detail": "Color.convertSRGBToLinear()",
      "documentation": "Method of Color"
    },
    {
      "name": "convertLinearToSRGB",
      "detail": "Color.convertLinearToSRGB()",
      "documentation": "Method of Color"
    },
    {
      "name": "getHex",
      "detail": "Color.getHex()",
      "documentation": "Method of Color"
    },
    {
      "name": "getHexString",
      "detail": "Color.getHexString()",
      "documentation": "Method of Color"
    },
    {
      "name": "getHSL",
      "detail": "Color.getHSL()",
      "documentation": "Method of Color"
    },
    {
      "name": "getRGB",
      "detail": "Color.getRGB()",
      "documentation": "Method of Color"
    },
    {
      "name": "getStyle",
      "detail": "Color.getStyle()",
      "documentation": "Method of Color"
    },
    {
      "name": "offsetHSL",
      "detail": "Color.offsetHSL()",
      "documentation": "Method of Color"
    },
    {
      "name": "add",
      "detail": "Color.add()",
      "documentation": "Method of Color"
    },
    {
      "name": "addColors",
      "detail": "Color.addColors()",
      "documentation": "Method of Color"
    },
    {
      "name": "addScalar",
      "detail": "Color.addScalar()",
      "documentation": "Method of Color"
    },
    {
      "name": "applyMatrix3",
      "detail": "Color.applyMatrix3()",
      "documentation": "Method of Color"
    },
    {
      "name": "sub",
      "detail": "Color.sub()",
      "documentation": "Method of Color"
    },
    {
      "name": "multiply",
      "detail": "Color.multiply()",
      "documentation": "Method of Color"
    },
    {
      "name": "multiplyScalar",
      "detail": "Color.multiplyScalar()",
      "documentation": "Method of Color"
    },
    {
      "name": "lerp",
      "detail": "Color.lerp()",
      "documentation": "Method of Color"
    },
    {
      "name": "lerpColors",
      "detail": "Color.lerpColors()",
      "documentation": "Method of Color"
    },
    {
      "name": "lerpHSL",
      "detail": "Color.lerpHSL()",
      "documentation": "Method of Color"
    },
    {
      "name": "equals",
      "detail": "Color.equals()",
      "documentation": "Method of Color"
    },
    {
      "name": "fromArray",
      "detail": "Color.fromArray()",
      "documentation": "Method of Color"
    },
    {
      "name": "toArray",
      "detail": "Color.toArray()",
      "documentation": "Method of Color"
    },
    {
      "name": "toArray",
      "detail": "Color.toArray()",
      "documentation": "Method of Color"
    },
    {
      "name": "toJSON",
      "detail": "Color.toJSON()",
      "documentation": "Method of Color"
    },
    {
      "name": "fromBufferAttribute",
      "detail": "Color.fromBufferAttribute()",
      "documentation": "Method of Color"
    }
  ],
  "Cylindrical": [
    {
      "name": "clone",
      "detail": "Cylindrical.clone()",
      "documentation": "Method of Cylindrical"
    },
    {
      "name": "copy",
      "detail": "Cylindrical.copy()",
      "documentation": "Method of Cylindrical"
    },
    {
      "name": "set",
      "detail": "Cylindrical.set()",
      "documentation": "Method of Cylindrical"
    },
    {
      "name": "setFromVector3",
      "detail": "Cylindrical.setFromVector3()",
      "documentation": "Method of Cylindrical"
    },
    {
      "name": "setFromCartesianCoords",
      "detail": "Cylindrical.setFromCartesianCoords()",
      "documentation": "Method of Cylindrical"
    }
  ],
  "Euler": [
    {
      "name": "set",
      "detail": "Euler.set()",
      "documentation": "Method of Euler"
    },
    {
      "name": "clone",
      "detail": "Euler.clone()",
      "documentation": "Method of Euler"
    },
    {
      "name": "copy",
      "detail": "Euler.copy()",
      "documentation": "Method of Euler"
    },
    {
      "name": "setFromRotationMatrix",
      "detail": "Euler.setFromRotationMatrix()",
      "documentation": "Method of Euler"
    },
    {
      "name": "setFromQuaternion",
      "detail": "Euler.setFromQuaternion()",
      "documentation": "Method of Euler"
    },
    {
      "name": "setFromVector3",
      "detail": "Euler.setFromVector3()",
      "documentation": "Method of Euler"
    },
    {
      "name": "reorder",
      "detail": "Euler.reorder()",
      "documentation": "Method of Euler"
    },
    {
      "name": "equals",
      "detail": "Euler.equals()",
      "documentation": "Method of Euler"
    },
    {
      "name": "fromArray",
      "detail": "Euler.fromArray()",
      "documentation": "Method of Euler"
    },
    {
      "name": "toArray",
      "detail": "Euler.toArray()",
      "documentation": "Method of Euler"
    }
  ],
  "Frustum": [
    {
      "name": "set",
      "detail": "Frustum.set()",
      "documentation": "Method of Frustum"
    },
    {
      "name": "clone",
      "detail": "Frustum.clone()",
      "documentation": "Method of Frustum"
    },
    {
      "name": "copy",
      "detail": "Frustum.copy()",
      "documentation": "Method of Frustum"
    },
    {
      "name": "setFromProjectionMatrix",
      "detail": "Frustum.setFromProjectionMatrix()",
      "documentation": "Method of Frustum"
    },
    {
      "name": "intersectsObject",
      "detail": "Frustum.intersectsObject()",
      "documentation": "Method of Frustum"
    },
    {
      "name": "intersectsSprite",
      "detail": "Frustum.intersectsSprite()",
      "documentation": "Method of Frustum"
    },
    {
      "name": "intersectsSphere",
      "detail": "Frustum.intersectsSphere()",
      "documentation": "Method of Frustum"
    },
    {
      "name": "intersectsBox",
      "detail": "Frustum.intersectsBox()",
      "documentation": "Method of Frustum"
    },
    {
      "name": "containsPoint",
      "detail": "Frustum.containsPoint()",
      "documentation": "Method of Frustum"
    }
  ],
  "Line3": [
    {
      "name": "set",
      "detail": "Line3.set()",
      "documentation": "Method of Line3"
    },
    {
      "name": "clone",
      "detail": "Line3.clone()",
      "documentation": "Method of Line3"
    },
    {
      "name": "copy",
      "detail": "Line3.copy()",
      "documentation": "Method of Line3"
    },
    {
      "name": "getCenter",
      "detail": "Line3.getCenter()",
      "documentation": "Method of Line3"
    },
    {
      "name": "delta",
      "detail": "Line3.delta()",
      "documentation": "Method of Line3"
    },
    {
      "name": "distanceSq",
      "detail": "Line3.distanceSq()",
      "documentation": "Method of Line3"
    },
    {
      "name": "distance",
      "detail": "Line3.distance()",
      "documentation": "Method of Line3"
    },
    {
      "name": "at",
      "detail": "Line3.at()",
      "documentation": "Method of Line3"
    },
    {
      "name": "closestPointToPointParameter",
      "detail": "Line3.closestPointToPointParameter()",
      "documentation": "Method of Line3"
    },
    {
      "name": "closestPointToPoint",
      "detail": "Line3.closestPointToPoint()",
      "documentation": "Method of Line3"
    },
    {
      "name": "distanceSqToLine3",
      "detail": "Line3.distanceSqToLine3()",
      "documentation": "Method of Line3"
    },
    {
      "name": "applyMatrix4",
      "detail": "Line3.applyMatrix4()",
      "documentation": "Method of Line3"
    },
    {
      "name": "equals",
      "detail": "Line3.equals()",
      "documentation": "Method of Line3"
    }
  ],
  "Matrix2": [
    {
      "name": "identity",
      "detail": "Matrix2.identity()",
      "documentation": "Method of Matrix2"
    },
    {
      "name": "fromArray",
      "detail": "Matrix2.fromArray()",
      "documentation": "Method of Matrix2"
    },
    {
      "name": "set",
      "detail": "Matrix2.set()",
      "documentation": "Method of Matrix2"
    }
  ],
  "Matrix3": [
    {
      "name": "set",
      "detail": "Matrix3.set()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "identity",
      "detail": "Matrix3.identity()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "copy",
      "detail": "Matrix3.copy()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "extractBasis",
      "detail": "Matrix3.extractBasis()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "setFromMatrix4",
      "detail": "Matrix3.setFromMatrix4()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "multiply",
      "detail": "Matrix3.multiply()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "premultiply",
      "detail": "Matrix3.premultiply()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "multiplyMatrices",
      "detail": "Matrix3.multiplyMatrices()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "multiplyScalar",
      "detail": "Matrix3.multiplyScalar()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "determinant",
      "detail": "Matrix3.determinant()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "invert",
      "detail": "Matrix3.invert()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "transpose",
      "detail": "Matrix3.transpose()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "getNormalMatrix",
      "detail": "Matrix3.getNormalMatrix()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "transposeIntoArray",
      "detail": "Matrix3.transposeIntoArray()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "setUvTransform",
      "detail": "Matrix3.setUvTransform()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "scale",
      "detail": "Matrix3.scale()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "rotate",
      "detail": "Matrix3.rotate()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "translate",
      "detail": "Matrix3.translate()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "makeTranslation",
      "detail": "Matrix3.makeTranslation()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "makeTranslation",
      "detail": "Matrix3.makeTranslation()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "makeRotation",
      "detail": "Matrix3.makeRotation()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "makeScale",
      "detail": "Matrix3.makeScale()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "equals",
      "detail": "Matrix3.equals()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "fromArray",
      "detail": "Matrix3.fromArray()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "toArray",
      "detail": "Matrix3.toArray()",
      "documentation": "Method of Matrix3"
    },
    {
      "name": "clone",
      "detail": "Matrix3.clone()",
      "documentation": "Method of Matrix3"
    }
  ],
  "Matrix4": [
    {
      "name": "set",
      "detail": "Matrix4.set()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "identity",
      "detail": "Matrix4.identity()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "clone",
      "detail": "Matrix4.clone()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "copy",
      "detail": "Matrix4.copy()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "copyPosition",
      "detail": "Matrix4.copyPosition()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "setFromMatrix3",
      "detail": "Matrix4.setFromMatrix3()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "extractBasis",
      "detail": "Matrix4.extractBasis()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeBasis",
      "detail": "Matrix4.makeBasis()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "extractRotation",
      "detail": "Matrix4.extractRotation()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeRotationFromEuler",
      "detail": "Matrix4.makeRotationFromEuler()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeRotationFromQuaternion",
      "detail": "Matrix4.makeRotationFromQuaternion()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "lookAt",
      "detail": "Matrix4.lookAt()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "multiply",
      "detail": "Matrix4.multiply()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "premultiply",
      "detail": "Matrix4.premultiply()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "multiplyMatrices",
      "detail": "Matrix4.multiplyMatrices()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "multiplyScalar",
      "detail": "Matrix4.multiplyScalar()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "determinant",
      "detail": "Matrix4.determinant()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "transpose",
      "detail": "Matrix4.transpose()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "setPosition",
      "detail": "Matrix4.setPosition()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "setPosition",
      "detail": "Matrix4.setPosition()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "invert",
      "detail": "Matrix4.invert()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "scale",
      "detail": "Matrix4.scale()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "getMaxScaleOnAxis",
      "detail": "Matrix4.getMaxScaleOnAxis()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeTranslation",
      "detail": "Matrix4.makeTranslation()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeTranslation",
      "detail": "Matrix4.makeTranslation()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeRotationX",
      "detail": "Matrix4.makeRotationX()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeRotationY",
      "detail": "Matrix4.makeRotationY()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeRotationZ",
      "detail": "Matrix4.makeRotationZ()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeRotationAxis",
      "detail": "Matrix4.makeRotationAxis()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeScale",
      "detail": "Matrix4.makeScale()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeShear",
      "detail": "Matrix4.makeShear()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "compose",
      "detail": "Matrix4.compose()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "decompose",
      "detail": "Matrix4.decompose()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makePerspective",
      "detail": "Matrix4.makePerspective()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "makeOrthographic",
      "detail": "Matrix4.makeOrthographic()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "equals",
      "detail": "Matrix4.equals()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "fromArray",
      "detail": "Matrix4.fromArray()",
      "documentation": "Method of Matrix4"
    },
    {
      "name": "toArray",
      "detail": "Matrix4.toArray()",
      "documentation": "Method of Matrix4"
    }
  ],
  "Plane": [
    {
      "name": "set",
      "detail": "Plane.set()",
      "documentation": "Method of Plane"
    },
    {
      "name": "setComponents",
      "detail": "Plane.setComponents()",
      "documentation": "Method of Plane"
    },
    {
      "name": "setFromNormalAndCoplanarPoint",
      "detail": "Plane.setFromNormalAndCoplanarPoint()",
      "documentation": "Method of Plane"
    },
    {
      "name": "setFromCoplanarPoints",
      "detail": "Plane.setFromCoplanarPoints()",
      "documentation": "Method of Plane"
    },
    {
      "name": "clone",
      "detail": "Plane.clone()",
      "documentation": "Method of Plane"
    },
    {
      "name": "copy",
      "detail": "Plane.copy()",
      "documentation": "Method of Plane"
    },
    {
      "name": "normalize",
      "detail": "Plane.normalize()",
      "documentation": "Method of Plane"
    },
    {
      "name": "negate",
      "detail": "Plane.negate()",
      "documentation": "Method of Plane"
    },
    {
      "name": "distanceToPoint",
      "detail": "Plane.distanceToPoint()",
      "documentation": "Method of Plane"
    },
    {
      "name": "distanceToSphere",
      "detail": "Plane.distanceToSphere()",
      "documentation": "Method of Plane"
    },
    {
      "name": "projectPoint",
      "detail": "Plane.projectPoint()",
      "documentation": "Method of Plane"
    },
    {
      "name": "intersectLine",
      "detail": "Plane.intersectLine()",
      "documentation": "Method of Plane"
    },
    {
      "name": "intersectsLine",
      "detail": "Plane.intersectsLine()",
      "documentation": "Method of Plane"
    },
    {
      "name": "intersectsBox",
      "detail": "Plane.intersectsBox()",
      "documentation": "Method of Plane"
    },
    {
      "name": "intersectsSphere",
      "detail": "Plane.intersectsSphere()",
      "documentation": "Method of Plane"
    },
    {
      "name": "coplanarPoint",
      "detail": "Plane.coplanarPoint()",
      "documentation": "Method of Plane"
    },
    {
      "name": "applyMatrix4",
      "detail": "Plane.applyMatrix4()",
      "documentation": "Method of Plane"
    },
    {
      "name": "translate",
      "detail": "Plane.translate()",
      "documentation": "Method of Plane"
    },
    {
      "name": "equals",
      "detail": "Plane.equals()",
      "documentation": "Method of Plane"
    },
    {
      "name": "isIntersectionLine",
      "detail": "Plane.isIntersectionLine()",
      "documentation": "Method of Plane"
    }
  ],
  "Quaternion": [
    {
      "name": "set",
      "detail": "Quaternion.set()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "clone",
      "detail": "Quaternion.clone()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "copy",
      "detail": "Quaternion.copy()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "setFromEuler",
      "detail": "Quaternion.setFromEuler()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "setFromAxisAngle",
      "detail": "Quaternion.setFromAxisAngle()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "setFromRotationMatrix",
      "detail": "Quaternion.setFromRotationMatrix()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "setFromUnitVectors",
      "detail": "Quaternion.setFromUnitVectors()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "angleTo",
      "detail": "Quaternion.angleTo()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "rotateTowards",
      "detail": "Quaternion.rotateTowards()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "identity",
      "detail": "Quaternion.identity()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "invert",
      "detail": "Quaternion.invert()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "conjugate",
      "detail": "Quaternion.conjugate()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "dot",
      "detail": "Quaternion.dot()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "lengthSq",
      "detail": "Quaternion.lengthSq()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "length",
      "detail": "Quaternion.length()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "normalize",
      "detail": "Quaternion.normalize()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "multiply",
      "detail": "Quaternion.multiply()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "premultiply",
      "detail": "Quaternion.premultiply()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "multiplyQuaternions",
      "detail": "Quaternion.multiplyQuaternions()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "slerp",
      "detail": "Quaternion.slerp()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "slerpQuaternions",
      "detail": "Quaternion.slerpQuaternions()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "equals",
      "detail": "Quaternion.equals()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "fromArray",
      "detail": "Quaternion.fromArray()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "toArray",
      "detail": "Quaternion.toArray()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "toArray",
      "detail": "Quaternion.toArray()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "toArray",
      "detail": "Quaternion.toArray()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "toJSON",
      "detail": "Quaternion.toJSON()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "fromBufferAttribute",
      "detail": "Quaternion.fromBufferAttribute()",
      "documentation": "Method of Quaternion"
    },
    {
      "name": "random",
      "detail": "Quaternion.random()",
      "documentation": "Method of Quaternion"
    }
  ],
  "Ray": [
    {
      "name": "set",
      "detail": "Ray.set()",
      "documentation": "Method of Ray"
    },
    {
      "name": "clone",
      "detail": "Ray.clone()",
      "documentation": "Method of Ray"
    },
    {
      "name": "copy",
      "detail": "Ray.copy()",
      "documentation": "Method of Ray"
    },
    {
      "name": "at",
      "detail": "Ray.at()",
      "documentation": "Method of Ray"
    },
    {
      "name": "lookAt",
      "detail": "Ray.lookAt()",
      "documentation": "Method of Ray"
    },
    {
      "name": "recast",
      "detail": "Ray.recast()",
      "documentation": "Method of Ray"
    },
    {
      "name": "closestPointToPoint",
      "detail": "Ray.closestPointToPoint()",
      "documentation": "Method of Ray"
    },
    {
      "name": "distanceToPoint",
      "detail": "Ray.distanceToPoint()",
      "documentation": "Method of Ray"
    },
    {
      "name": "distanceSqToPoint",
      "detail": "Ray.distanceSqToPoint()",
      "documentation": "Method of Ray"
    },
    {
      "name": "distanceSqToSegment",
      "detail": "Ray.distanceSqToSegment()",
      "documentation": "Method of Ray"
    },
    {
      "name": "intersectSphere",
      "detail": "Ray.intersectSphere()",
      "documentation": "Method of Ray"
    },
    {
      "name": "intersectsSphere",
      "detail": "Ray.intersectsSphere()",
      "documentation": "Method of Ray"
    },
    {
      "name": "distanceToPlane",
      "detail": "Ray.distanceToPlane()",
      "documentation": "Method of Ray"
    },
    {
      "name": "intersectPlane",
      "detail": "Ray.intersectPlane()",
      "documentation": "Method of Ray"
    },
    {
      "name": "intersectsPlane",
      "detail": "Ray.intersectsPlane()",
      "documentation": "Method of Ray"
    },
    {
      "name": "intersectBox",
      "detail": "Ray.intersectBox()",
      "documentation": "Method of Ray"
    },
    {
      "name": "intersectsBox",
      "detail": "Ray.intersectsBox()",
      "documentation": "Method of Ray"
    },
    {
      "name": "intersectTriangle",
      "detail": "Ray.intersectTriangle()",
      "documentation": "Method of Ray"
    },
    {
      "name": "applyMatrix4",
      "detail": "Ray.applyMatrix4()",
      "documentation": "Method of Ray"
    },
    {
      "name": "equals",
      "detail": "Ray.equals()",
      "documentation": "Method of Ray"
    },
    {
      "name": "isIntersectionBox",
      "detail": "Ray.isIntersectionBox()",
      "documentation": "Method of Ray"
    },
    {
      "name": "isIntersectionPlane",
      "detail": "Ray.isIntersectionPlane()",
      "documentation": "Method of Ray"
    },
    {
      "name": "isIntersectionSphere",
      "detail": "Ray.isIntersectionSphere()",
      "documentation": "Method of Ray"
    }
  ],
  "Sphere": [
    {
      "name": "set",
      "detail": "Sphere.set()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "setFromPoints",
      "detail": "Sphere.setFromPoints()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "clone",
      "detail": "Sphere.clone()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "copy",
      "detail": "Sphere.copy()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "expandByPoint",
      "detail": "Sphere.expandByPoint()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "isEmpty",
      "detail": "Sphere.isEmpty()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "makeEmpty",
      "detail": "Sphere.makeEmpty()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "containsPoint",
      "detail": "Sphere.containsPoint()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "distanceToPoint",
      "detail": "Sphere.distanceToPoint()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "intersectsSphere",
      "detail": "Sphere.intersectsSphere()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "intersectsBox",
      "detail": "Sphere.intersectsBox()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "intersectsPlane",
      "detail": "Sphere.intersectsPlane()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "clampPoint",
      "detail": "Sphere.clampPoint()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "getBoundingBox",
      "detail": "Sphere.getBoundingBox()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "applyMatrix4",
      "detail": "Sphere.applyMatrix4()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "translate",
      "detail": "Sphere.translate()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "equals",
      "detail": "Sphere.equals()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "union",
      "detail": "Sphere.union()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "empty",
      "detail": "Sphere.empty()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "toJSON",
      "detail": "Sphere.toJSON()",
      "documentation": "Method of Sphere"
    },
    {
      "name": "fromJSON",
      "detail": "Sphere.fromJSON()",
      "documentation": "Method of Sphere"
    }
  ],
  "Spherical": [
    {
      "name": "set",
      "detail": "Spherical.set()",
      "documentation": "Method of Spherical"
    },
    {
      "name": "clone",
      "detail": "Spherical.clone()",
      "documentation": "Method of Spherical"
    },
    {
      "name": "copy",
      "detail": "Spherical.copy()",
      "documentation": "Method of Spherical"
    },
    {
      "name": "makeSafe",
      "detail": "Spherical.makeSafe()",
      "documentation": "Method of Spherical"
    },
    {
      "name": "setFromVector3",
      "detail": "Spherical.setFromVector3()",
      "documentation": "Method of Spherical"
    },
    {
      "name": "setFromCartesianCoords",
      "detail": "Spherical.setFromCartesianCoords()",
      "documentation": "Method of Spherical"
    }
  ],
  "SphericalHarmonics3": [
    {
      "name": "set",
      "detail": "SphericalHarmonics3.set()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "zero",
      "detail": "SphericalHarmonics3.zero()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "add",
      "detail": "SphericalHarmonics3.add()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "addScaledSH",
      "detail": "SphericalHarmonics3.addScaledSH()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "scale",
      "detail": "SphericalHarmonics3.scale()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "lerp",
      "detail": "SphericalHarmonics3.lerp()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "equals",
      "detail": "SphericalHarmonics3.equals()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "copy",
      "detail": "SphericalHarmonics3.copy()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "clone",
      "detail": "SphericalHarmonics3.clone()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "fromArray",
      "detail": "SphericalHarmonics3.fromArray()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "toArray",
      "detail": "SphericalHarmonics3.toArray()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "toArray",
      "detail": "SphericalHarmonics3.toArray()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "getAt",
      "detail": "SphericalHarmonics3.getAt()",
      "documentation": "Method of SphericalHarmonics3"
    },
    {
      "name": "getIrradianceAt",
      "detail": "SphericalHarmonics3.getIrradianceAt()",
      "documentation": "Method of SphericalHarmonics3"
    }
  ],
  "Triangle": [
    {
      "name": "set",
      "detail": "Triangle.set()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "setFromPointsAndIndices",
      "detail": "Triangle.setFromPointsAndIndices()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "setFromAttributeAndIndices",
      "detail": "Triangle.setFromAttributeAndIndices()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "clone",
      "detail": "Triangle.clone()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "copy",
      "detail": "Triangle.copy()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "getArea",
      "detail": "Triangle.getArea()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "getMidpoint",
      "detail": "Triangle.getMidpoint()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "getNormal",
      "detail": "Triangle.getNormal()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "getPlane",
      "detail": "Triangle.getPlane()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "getBarycoord",
      "detail": "Triangle.getBarycoord()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "getInterpolation",
      "detail": "Triangle.getInterpolation()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "getInterpolation",
      "detail": "Triangle.getInterpolation()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "getInterpolation",
      "detail": "Triangle.getInterpolation()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "containsPoint",
      "detail": "Triangle.containsPoint()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "intersectsBox",
      "detail": "Triangle.intersectsBox()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "isFrontFacing",
      "detail": "Triangle.isFrontFacing()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "closestPointToPoint",
      "detail": "Triangle.closestPointToPoint()",
      "documentation": "Method of Triangle"
    },
    {
      "name": "equals",
      "detail": "Triangle.equals()",
      "documentation": "Method of Triangle"
    }
  ],
  "Vector2": [
    {
      "name": "set",
      "detail": "Vector2.set()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "setScalar",
      "detail": "Vector2.setScalar()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "setX",
      "detail": "Vector2.setX()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "setY",
      "detail": "Vector2.setY()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "setComponent",
      "detail": "Vector2.setComponent()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "getComponent",
      "detail": "Vector2.getComponent()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "clone",
      "detail": "Vector2.clone()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "copy",
      "detail": "Vector2.copy()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "add",
      "detail": "Vector2.add()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "addScalar",
      "detail": "Vector2.addScalar()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "addVectors",
      "detail": "Vector2.addVectors()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "addScaledVector",
      "detail": "Vector2.addScaledVector()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "sub",
      "detail": "Vector2.sub()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "subScalar",
      "detail": "Vector2.subScalar()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "subVectors",
      "detail": "Vector2.subVectors()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "multiply",
      "detail": "Vector2.multiply()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "multiplyScalar",
      "detail": "Vector2.multiplyScalar()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "divide",
      "detail": "Vector2.divide()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "divideScalar",
      "detail": "Vector2.divideScalar()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "applyMatrix3",
      "detail": "Vector2.applyMatrix3()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "min",
      "detail": "Vector2.min()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "max",
      "detail": "Vector2.max()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "clamp",
      "detail": "Vector2.clamp()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "clampScalar",
      "detail": "Vector2.clampScalar()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "clampLength",
      "detail": "Vector2.clampLength()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "floor",
      "detail": "Vector2.floor()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "ceil",
      "detail": "Vector2.ceil()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "round",
      "detail": "Vector2.round()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "roundToZero",
      "detail": "Vector2.roundToZero()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "negate",
      "detail": "Vector2.negate()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "dot",
      "detail": "Vector2.dot()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "cross",
      "detail": "Vector2.cross()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "lengthSq",
      "detail": "Vector2.lengthSq()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "length",
      "detail": "Vector2.length()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "manhattanLength",
      "detail": "Vector2.manhattanLength()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "normalize",
      "detail": "Vector2.normalize()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "angle",
      "detail": "Vector2.angle()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "angleTo",
      "detail": "Vector2.angleTo()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "distanceTo",
      "detail": "Vector2.distanceTo()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "distanceToSquared",
      "detail": "Vector2.distanceToSquared()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "manhattanDistanceTo",
      "detail": "Vector2.manhattanDistanceTo()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "setLength",
      "detail": "Vector2.setLength()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "lerp",
      "detail": "Vector2.lerp()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "lerpVectors",
      "detail": "Vector2.lerpVectors()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "equals",
      "detail": "Vector2.equals()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "fromArray",
      "detail": "Vector2.fromArray()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "toArray",
      "detail": "Vector2.toArray()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "toArray",
      "detail": "Vector2.toArray()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "toArray",
      "detail": "Vector2.toArray()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "fromBufferAttribute",
      "detail": "Vector2.fromBufferAttribute()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "rotateAround",
      "detail": "Vector2.rotateAround()",
      "documentation": "Method of Vector2"
    },
    {
      "name": "random",
      "detail": "Vector2.random()",
      "documentation": "Method of Vector2"
    }
  ],
  "Vector3": [
    {
      "name": "set",
      "detail": "Vector3.set()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setScalar",
      "detail": "Vector3.setScalar()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setX",
      "detail": "Vector3.setX()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setY",
      "detail": "Vector3.setY()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setZ",
      "detail": "Vector3.setZ()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setComponent",
      "detail": "Vector3.setComponent()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "getComponent",
      "detail": "Vector3.getComponent()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "clone",
      "detail": "Vector3.clone()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "copy",
      "detail": "Vector3.copy()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "add",
      "detail": "Vector3.add()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "addScalar",
      "detail": "Vector3.addScalar()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "addVectors",
      "detail": "Vector3.addVectors()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "addScaledVector",
      "detail": "Vector3.addScaledVector()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "sub",
      "detail": "Vector3.sub()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "subScalar",
      "detail": "Vector3.subScalar()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "subVectors",
      "detail": "Vector3.subVectors()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "multiply",
      "detail": "Vector3.multiply()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "multiplyScalar",
      "detail": "Vector3.multiplyScalar()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "multiplyVectors",
      "detail": "Vector3.multiplyVectors()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "applyEuler",
      "detail": "Vector3.applyEuler()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "applyAxisAngle",
      "detail": "Vector3.applyAxisAngle()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "applyMatrix3",
      "detail": "Vector3.applyMatrix3()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "Vector3.applyNormalMatrix()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "applyMatrix4",
      "detail": "Vector3.applyMatrix4()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "applyQuaternion",
      "detail": "Vector3.applyQuaternion()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "project",
      "detail": "Vector3.project()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "unproject",
      "detail": "Vector3.unproject()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "transformDirection",
      "detail": "Vector3.transformDirection()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "divide",
      "detail": "Vector3.divide()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "divideScalar",
      "detail": "Vector3.divideScalar()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "min",
      "detail": "Vector3.min()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "max",
      "detail": "Vector3.max()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "clamp",
      "detail": "Vector3.clamp()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "clampScalar",
      "detail": "Vector3.clampScalar()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "clampLength",
      "detail": "Vector3.clampLength()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "floor",
      "detail": "Vector3.floor()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "ceil",
      "detail": "Vector3.ceil()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "round",
      "detail": "Vector3.round()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "roundToZero",
      "detail": "Vector3.roundToZero()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "negate",
      "detail": "Vector3.negate()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "dot",
      "detail": "Vector3.dot()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "lengthSq",
      "detail": "Vector3.lengthSq()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "length",
      "detail": "Vector3.length()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "manhattanLength",
      "detail": "Vector3.manhattanLength()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "normalize",
      "detail": "Vector3.normalize()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setLength",
      "detail": "Vector3.setLength()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "lerp",
      "detail": "Vector3.lerp()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "lerpVectors",
      "detail": "Vector3.lerpVectors()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "cross",
      "detail": "Vector3.cross()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "crossVectors",
      "detail": "Vector3.crossVectors()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "projectOnVector",
      "detail": "Vector3.projectOnVector()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "projectOnPlane",
      "detail": "Vector3.projectOnPlane()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "reflect",
      "detail": "Vector3.reflect()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "angleTo",
      "detail": "Vector3.angleTo()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "distanceTo",
      "detail": "Vector3.distanceTo()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "distanceToSquared",
      "detail": "Vector3.distanceToSquared()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "manhattanDistanceTo",
      "detail": "Vector3.manhattanDistanceTo()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setFromSpherical",
      "detail": "Vector3.setFromSpherical()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setFromSphericalCoords",
      "detail": "Vector3.setFromSphericalCoords()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setFromCylindrical",
      "detail": "Vector3.setFromCylindrical()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setFromCylindricalCoords",
      "detail": "Vector3.setFromCylindricalCoords()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setFromMatrixPosition",
      "detail": "Vector3.setFromMatrixPosition()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setFromMatrixScale",
      "detail": "Vector3.setFromMatrixScale()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setFromMatrixColumn",
      "detail": "Vector3.setFromMatrixColumn()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setFromMatrix3Column",
      "detail": "Vector3.setFromMatrix3Column()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setFromEuler",
      "detail": "Vector3.setFromEuler()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "setFromColor",
      "detail": "Vector3.setFromColor()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "equals",
      "detail": "Vector3.equals()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "fromArray",
      "detail": "Vector3.fromArray()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "toArray",
      "detail": "Vector3.toArray()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "toArray",
      "detail": "Vector3.toArray()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "toArray",
      "detail": "Vector3.toArray()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "fromBufferAttribute",
      "detail": "Vector3.fromBufferAttribute()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "random",
      "detail": "Vector3.random()",
      "documentation": "Method of Vector3"
    },
    {
      "name": "randomDirection",
      "detail": "Vector3.randomDirection()",
      "documentation": "Method of Vector3"
    }
  ],
  "Vector4": [
    {
      "name": "set",
      "detail": "Vector4.set()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "setScalar",
      "detail": "Vector4.setScalar()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "setX",
      "detail": "Vector4.setX()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "setY",
      "detail": "Vector4.setY()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "setZ",
      "detail": "Vector4.setZ()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "setW",
      "detail": "Vector4.setW()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "setComponent",
      "detail": "Vector4.setComponent()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "getComponent",
      "detail": "Vector4.getComponent()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "clone",
      "detail": "Vector4.clone()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "copy",
      "detail": "Vector4.copy()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "add",
      "detail": "Vector4.add()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "addScalar",
      "detail": "Vector4.addScalar()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "addVectors",
      "detail": "Vector4.addVectors()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "addScaledVector",
      "detail": "Vector4.addScaledVector()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "sub",
      "detail": "Vector4.sub()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "subScalar",
      "detail": "Vector4.subScalar()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "subVectors",
      "detail": "Vector4.subVectors()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "multiply",
      "detail": "Vector4.multiply()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "multiplyScalar",
      "detail": "Vector4.multiplyScalar()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "applyMatrix4",
      "detail": "Vector4.applyMatrix4()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "divide",
      "detail": "Vector4.divide()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "divideScalar",
      "detail": "Vector4.divideScalar()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "setAxisAngleFromQuaternion",
      "detail": "Vector4.setAxisAngleFromQuaternion()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "setAxisAngleFromRotationMatrix",
      "detail": "Vector4.setAxisAngleFromRotationMatrix()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "setFromMatrixPosition",
      "detail": "Vector4.setFromMatrixPosition()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "min",
      "detail": "Vector4.min()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "max",
      "detail": "Vector4.max()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "clamp",
      "detail": "Vector4.clamp()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "clampScalar",
      "detail": "Vector4.clampScalar()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "floor",
      "detail": "Vector4.floor()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "ceil",
      "detail": "Vector4.ceil()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "round",
      "detail": "Vector4.round()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "roundToZero",
      "detail": "Vector4.roundToZero()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "negate",
      "detail": "Vector4.negate()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "dot",
      "detail": "Vector4.dot()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "lengthSq",
      "detail": "Vector4.lengthSq()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "length",
      "detail": "Vector4.length()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "manhattanLength",
      "detail": "Vector4.manhattanLength()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "normalize",
      "detail": "Vector4.normalize()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "setLength",
      "detail": "Vector4.setLength()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "lerp",
      "detail": "Vector4.lerp()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "lerpVectors",
      "detail": "Vector4.lerpVectors()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "equals",
      "detail": "Vector4.equals()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "fromArray",
      "detail": "Vector4.fromArray()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "toArray",
      "detail": "Vector4.toArray()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "toArray",
      "detail": "Vector4.toArray()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "toArray",
      "detail": "Vector4.toArray()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "fromBufferAttribute",
      "detail": "Vector4.fromBufferAttribute()",
      "documentation": "Method of Vector4"
    },
    {
      "name": "random",
      "detail": "Vector4.random()",
      "documentation": "Method of Vector4"
    }
  ],
  "CubicInterpolant": [
    {
      "name": "interpolate_",
      "detail": "CubicInterpolant.interpolate_()",
      "documentation": "Method of CubicInterpolant"
    }
  ],
  "DiscreteInterpolant": [
    {
      "name": "interpolate_",
      "detail": "DiscreteInterpolant.interpolate_()",
      "documentation": "Method of DiscreteInterpolant"
    }
  ],
  "LinearInterpolant": [
    {
      "name": "interpolate_",
      "detail": "LinearInterpolant.interpolate_()",
      "documentation": "Method of LinearInterpolant"
    }
  ],
  "QuaternionLinearInterpolant": [
    {
      "name": "interpolate_",
      "detail": "QuaternionLinearInterpolant.interpolate_()",
      "documentation": "Method of QuaternionLinearInterpolant"
    }
  ],
  "InstancedMesh": [
    {
      "name": "computeBoundingBox",
      "detail": "InstancedMesh.computeBoundingBox()",
      "documentation": "Method of InstancedMesh"
    },
    {
      "name": "computeBoundingSphere",
      "detail": "InstancedMesh.computeBoundingSphere()",
      "documentation": "Method of InstancedMesh"
    },
    {
      "name": "getColorAt",
      "detail": "InstancedMesh.getColorAt()",
      "documentation": "Method of InstancedMesh"
    },
    {
      "name": "setColorAt",
      "detail": "InstancedMesh.setColorAt()",
      "documentation": "Method of InstancedMesh"
    },
    {
      "name": "getMatrixAt",
      "detail": "InstancedMesh.getMatrixAt()",
      "documentation": "Method of InstancedMesh"
    },
    {
      "name": "getMorphAt",
      "detail": "InstancedMesh.getMorphAt()",
      "documentation": "Method of InstancedMesh"
    },
    {
      "name": "setMatrixAt",
      "detail": "InstancedMesh.setMatrixAt()",
      "documentation": "Method of InstancedMesh"
    },
    {
      "name": "setMorphAt",
      "detail": "InstancedMesh.setMorphAt()",
      "documentation": "Method of InstancedMesh"
    },
    {
      "name": "dispose",
      "detail": "InstancedMesh.dispose()",
      "documentation": "Method of InstancedMesh"
    },
    {
      "name": "toJSON",
      "detail": "InstancedMesh.toJSON()",
      "documentation": "Method of InstancedMesh"
    }
  ],
  "LOD": [
    {
      "name": "addLevel",
      "detail": "LOD.addLevel()",
      "documentation": "Method of LOD"
    },
    {
      "name": "removeLevel",
      "detail": "LOD.removeLevel()",
      "documentation": "Method of LOD"
    },
    {
      "name": "getCurrentLevel",
      "detail": "LOD.getCurrentLevel()",
      "documentation": "Method of LOD"
    },
    {
      "name": "getObjectForDistance",
      "detail": "LOD.getObjectForDistance()",
      "documentation": "Method of LOD"
    },
    {
      "name": "update",
      "detail": "LOD.update()",
      "documentation": "Method of LOD"
    },
    {
      "name": "toJSON",
      "detail": "LOD.toJSON()",
      "documentation": "Method of LOD"
    }
  ],
  "Line": [
    {
      "name": "computeLineDistances",
      "detail": "Line.computeLineDistances()",
      "documentation": "Method of Line"
    },
    {
      "name": "updateMorphTargets",
      "detail": "Line.updateMorphTargets()",
      "documentation": "Method of Line"
    }
  ],
  "Mesh": [
    {
      "name": "updateMorphTargets",
      "detail": "Mesh.updateMorphTargets()",
      "documentation": "Method of Mesh"
    },
    {
      "name": "getVertexPosition",
      "detail": "Mesh.getVertexPosition()",
      "documentation": "Method of Mesh"
    },
    {
      "name": "toJSON",
      "detail": "Mesh.toJSON()",
      "documentation": "Method of Mesh"
    }
  ],
  "Points": [
    {
      "name": "updateMorphTargets",
      "detail": "Points.updateMorphTargets()",
      "documentation": "Method of Points"
    }
  ],
  "Skeleton": [
    {
      "name": "init",
      "detail": "Skeleton.init()",
      "documentation": "Method of Skeleton"
    },
    {
      "name": "calculateInverses",
      "detail": "Skeleton.calculateInverses()",
      "documentation": "Method of Skeleton"
    },
    {
      "name": "computeBoneTexture",
      "detail": "Skeleton.computeBoneTexture()",
      "documentation": "Method of Skeleton"
    },
    {
      "name": "pose",
      "detail": "Skeleton.pose()",
      "documentation": "Method of Skeleton"
    },
    {
      "name": "update",
      "detail": "Skeleton.update()",
      "documentation": "Method of Skeleton"
    },
    {
      "name": "clone",
      "detail": "Skeleton.clone()",
      "documentation": "Method of Skeleton"
    },
    {
      "name": "getBoneByName",
      "detail": "Skeleton.getBoneByName()",
      "documentation": "Method of Skeleton"
    },
    {
      "name": "dispose",
      "detail": "Skeleton.dispose()",
      "documentation": "Method of Skeleton"
    },
    {
      "name": "toJSON",
      "detail": "Skeleton.toJSON()",
      "documentation": "Method of Skeleton"
    },
    {
      "name": "fromJSON",
      "detail": "Skeleton.fromJSON()",
      "documentation": "Method of Skeleton"
    }
  ],
  "SkinnedMesh": [
    {
      "name": "bind",
      "detail": "SkinnedMesh.bind()",
      "documentation": "Method of SkinnedMesh"
    },
    {
      "name": "computeBoundingBox",
      "detail": "SkinnedMesh.computeBoundingBox()",
      "documentation": "Method of SkinnedMesh"
    },
    {
      "name": "computeBoundingSphere",
      "detail": "SkinnedMesh.computeBoundingSphere()",
      "documentation": "Method of SkinnedMesh"
    },
    {
      "name": "pose",
      "detail": "SkinnedMesh.pose()",
      "documentation": "Method of SkinnedMesh"
    },
    {
      "name": "normalizeSkinWeights",
      "detail": "SkinnedMesh.normalizeSkinWeights()",
      "documentation": "Method of SkinnedMesh"
    },
    {
      "name": "applyBoneTransform",
      "detail": "SkinnedMesh.applyBoneTransform()",
      "documentation": "Method of SkinnedMesh"
    },
    {
      "name": "toJSON",
      "detail": "SkinnedMesh.toJSON()",
      "documentation": "Method of SkinnedMesh"
    }
  ],
  "Fog": [
    {
      "name": "clone",
      "detail": "Fog.clone()",
      "documentation": "Method of Fog"
    },
    {
      "name": "toJSON",
      "detail": "Fog.toJSON()",
      "documentation": "Method of Fog"
    }
  ],
  "FogExp2": [
    {
      "name": "clone",
      "detail": "FogExp2.clone()",
      "documentation": "Method of FogExp2"
    },
    {
      "name": "toJSON",
      "detail": "FogExp2.toJSON()",
      "documentation": "Method of FogExp2"
    }
  ],
  "Scene": [
    {
      "name": "toJSON",
      "detail": "Scene.toJSON()",
      "documentation": "Method of Scene"
    }
  ],
  "CompressedArrayTexture": [
    {
      "name": "addLayerUpdate",
      "detail": "CompressedArrayTexture.addLayerUpdate()",
      "documentation": "Method of CompressedArrayTexture"
    },
    {
      "name": "clearLayoutUpdates",
      "detail": "CompressedArrayTexture.clearLayoutUpdates()",
      "documentation": "Method of CompressedArrayTexture"
    }
  ],
  "DataArrayTexture": [
    {
      "name": "addLayerUpdate",
      "detail": "DataArrayTexture.addLayerUpdate()",
      "documentation": "Method of DataArrayTexture"
    },
    {
      "name": "clearLayoutUpdates",
      "detail": "DataArrayTexture.clearLayoutUpdates()",
      "documentation": "Method of DataArrayTexture"
    }
  ],
  "SourceJSON": [
    {
      "name": "getSize",
      "detail": "SourceJSON.getSize()",
      "documentation": "Method of SourceJSON"
    },
    {
      "name": "toJSON",
      "detail": "SourceJSON.toJSON()",
      "documentation": "Method of SourceJSON"
    }
  ],
  "Source": [
    {
      "name": "getSize",
      "detail": "Source.getSize()",
      "documentation": "Method of Source"
    },
    {
      "name": "toJSON",
      "detail": "Source.toJSON()",
      "documentation": "Method of Source"
    }
  ],
  "Texture": [
    {
      "name": "transformUv",
      "detail": "Texture.transformUv()",
      "documentation": "Method of Texture"
    },
    {
      "name": "updateMatrix",
      "detail": "Texture.updateMatrix()",
      "documentation": "Method of Texture"
    },
    {
      "name": "addUpdateRange",
      "detail": "Texture.addUpdateRange()",
      "documentation": "Method of Texture"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "Texture.clearUpdateRanges()",
      "documentation": "Method of Texture"
    },
    {
      "name": "clone",
      "detail": "Texture.clone()",
      "documentation": "Method of Texture"
    },
    {
      "name": "copy",
      "detail": "Texture.copy()",
      "documentation": "Method of Texture"
    },
    {
      "name": "setValues",
      "detail": "Texture.setValues()",
      "documentation": "Method of Texture"
    },
    {
      "name": "toJSON",
      "detail": "Texture.toJSON()",
      "documentation": "Method of Texture"
    },
    {
      "name": "dispose",
      "detail": "Texture.dispose()",
      "documentation": "Method of Texture"
    }
  ],
  "VideoTexture": [
    {
      "name": "update",
      "detail": "VideoTexture.update()",
      "documentation": "Method of VideoTexture"
    }
  ],
  "ArrowHelper": [
    {
      "name": "setColor",
      "detail": "ArrowHelper.setColor()",
      "documentation": "Method of ArrowHelper"
    },
    {
      "name": "setDirection",
      "detail": "ArrowHelper.setDirection()",
      "documentation": "Method of ArrowHelper"
    },
    {
      "name": "setLength",
      "detail": "ArrowHelper.setLength()",
      "documentation": "Method of ArrowHelper"
    },
    {
      "name": "dispose",
      "detail": "ArrowHelper.dispose()",
      "documentation": "Method of ArrowHelper"
    }
  ],
  "AxesHelper": [
    {
      "name": "setColors",
      "detail": "AxesHelper.setColors()",
      "documentation": "Method of AxesHelper"
    },
    {
      "name": "dispose",
      "detail": "AxesHelper.dispose()",
      "documentation": "Method of AxesHelper"
    }
  ],
  "Box3Helper": [
    {
      "name": "dispose",
      "detail": "Box3Helper.dispose()",
      "documentation": "Method of Box3Helper"
    }
  ],
  "BoxHelper": [
    {
      "name": "update",
      "detail": "BoxHelper.update()",
      "documentation": "Method of BoxHelper"
    },
    {
      "name": "setFromObject",
      "detail": "BoxHelper.setFromObject()",
      "documentation": "Method of BoxHelper"
    },
    {
      "name": "dispose",
      "detail": "BoxHelper.dispose()",
      "documentation": "Method of BoxHelper"
    }
  ],
  "CameraHelper": [
    {
      "name": "setColors",
      "detail": "CameraHelper.setColors()",
      "documentation": "Method of CameraHelper"
    },
    {
      "name": "update",
      "detail": "CameraHelper.update()",
      "documentation": "Method of CameraHelper"
    },
    {
      "name": "dispose",
      "detail": "CameraHelper.dispose()",
      "documentation": "Method of CameraHelper"
    }
  ],
  "DirectionalLightHelper": [
    {
      "name": "update",
      "detail": "DirectionalLightHelper.update()",
      "documentation": "Method of DirectionalLightHelper"
    },
    {
      "name": "dispose",
      "detail": "DirectionalLightHelper.dispose()",
      "documentation": "Method of DirectionalLightHelper"
    }
  ],
  "GridHelper": [
    {
      "name": "dispose",
      "detail": "GridHelper.dispose()",
      "documentation": "Method of GridHelper"
    }
  ],
  "HemisphereLightHelper": [
    {
      "name": "update",
      "detail": "HemisphereLightHelper.update()",
      "documentation": "Method of HemisphereLightHelper"
    },
    {
      "name": "dispose",
      "detail": "HemisphereLightHelper.dispose()",
      "documentation": "Method of HemisphereLightHelper"
    }
  ],
  "PlaneHelper": [
    {
      "name": "dispose",
      "detail": "PlaneHelper.dispose()",
      "documentation": "Method of PlaneHelper"
    }
  ],
  "PointLightHelper": [
    {
      "name": "update",
      "detail": "PointLightHelper.update()",
      "documentation": "Method of PointLightHelper"
    },
    {
      "name": "dispose",
      "detail": "PointLightHelper.dispose()",
      "documentation": "Method of PointLightHelper"
    }
  ],
  "PolarGridHelper": [
    {
      "name": "dispose",
      "detail": "PolarGridHelper.dispose()",
      "documentation": "Method of PolarGridHelper"
    }
  ],
  "SpotLightHelper": [
    {
      "name": "update",
      "detail": "SpotLightHelper.update()",
      "documentation": "Method of SpotLightHelper"
    },
    {
      "name": "dispose",
      "detail": "SpotLightHelper.dispose()",
      "documentation": "Method of SpotLightHelper"
    }
  ],
  "AnimationAction": [
    {
      "name": "play",
      "detail": "AnimationAction.play()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "stop",
      "detail": "AnimationAction.stop()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "reset",
      "detail": "AnimationAction.reset()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "isRunning",
      "detail": "AnimationAction.isRunning()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "isScheduled",
      "detail": "AnimationAction.isScheduled()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "startAt",
      "detail": "AnimationAction.startAt()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "setLoop",
      "detail": "AnimationAction.setLoop()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "setEffectiveWeight",
      "detail": "AnimationAction.setEffectiveWeight()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "getEffectiveWeight",
      "detail": "AnimationAction.getEffectiveWeight()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "fadeIn",
      "detail": "AnimationAction.fadeIn()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "fadeOut",
      "detail": "AnimationAction.fadeOut()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "crossFadeFrom",
      "detail": "AnimationAction.crossFadeFrom()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "crossFadeTo",
      "detail": "AnimationAction.crossFadeTo()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "stopFading",
      "detail": "AnimationAction.stopFading()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "setEffectiveTimeScale",
      "detail": "AnimationAction.setEffectiveTimeScale()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "getEffectiveTimeScale",
      "detail": "AnimationAction.getEffectiveTimeScale()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "setDuration",
      "detail": "AnimationAction.setDuration()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "syncWith",
      "detail": "AnimationAction.syncWith()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "halt",
      "detail": "AnimationAction.halt()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "warp",
      "detail": "AnimationAction.warp()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "stopWarping",
      "detail": "AnimationAction.stopWarping()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "getMixer",
      "detail": "AnimationAction.getMixer()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "getClip",
      "detail": "AnimationAction.getClip()",
      "documentation": "Method of AnimationAction"
    },
    {
      "name": "getRoot",
      "detail": "AnimationAction.getRoot()",
      "documentation": "Method of AnimationAction"
    }
  ],
  "AnimationClip": [
    {
      "name": "resetDuration",
      "detail": "AnimationClip.resetDuration()",
      "documentation": "Method of AnimationClip"
    },
    {
      "name": "trim",
      "detail": "AnimationClip.trim()",
      "documentation": "Method of AnimationClip"
    },
    {
      "name": "validate",
      "detail": "AnimationClip.validate()",
      "documentation": "Method of AnimationClip"
    },
    {
      "name": "optimize",
      "detail": "AnimationClip.optimize()",
      "documentation": "Method of AnimationClip"
    },
    {
      "name": "clone",
      "detail": "AnimationClip.clone()",
      "documentation": "Method of AnimationClip"
    },
    {
      "name": "toJSON",
      "detail": "AnimationClip.toJSON()",
      "documentation": "Method of AnimationClip"
    }
  ],
  "AnimationMixer": [
    {
      "name": "clipAction",
      "detail": "AnimationMixer.clipAction()",
      "documentation": "Method of AnimationMixer"
    },
    {
      "name": "clipAction",
      "detail": "AnimationMixer.clipAction()",
      "documentation": "Method of AnimationMixer"
    },
    {
      "name": "existingAction",
      "detail": "AnimationMixer.existingAction()",
      "documentation": "Method of AnimationMixer"
    },
    {
      "name": "stopAllAction",
      "detail": "AnimationMixer.stopAllAction()",
      "documentation": "Method of AnimationMixer"
    },
    {
      "name": "update",
      "detail": "AnimationMixer.update()",
      "documentation": "Method of AnimationMixer"
    },
    {
      "name": "setTime",
      "detail": "AnimationMixer.setTime()",
      "documentation": "Method of AnimationMixer"
    },
    {
      "name": "getRoot",
      "detail": "AnimationMixer.getRoot()",
      "documentation": "Method of AnimationMixer"
    },
    {
      "name": "uncacheClip",
      "detail": "AnimationMixer.uncacheClip()",
      "documentation": "Method of AnimationMixer"
    },
    {
      "name": "uncacheRoot",
      "detail": "AnimationMixer.uncacheRoot()",
      "documentation": "Method of AnimationMixer"
    },
    {
      "name": "uncacheAction",
      "detail": "AnimationMixer.uncacheAction()",
      "documentation": "Method of AnimationMixer"
    }
  ],
  "AnimationObjectGroup": [
    {
      "name": "add",
      "detail": "AnimationObjectGroup.add()",
      "documentation": "Method of AnimationObjectGroup"
    },
    {
      "name": "remove",
      "detail": "AnimationObjectGroup.remove()",
      "documentation": "Method of AnimationObjectGroup"
    },
    {
      "name": "uncache",
      "detail": "AnimationObjectGroup.uncache()",
      "documentation": "Method of AnimationObjectGroup"
    }
  ],
  "KeyframeTrack": [
    {
      "name": "InterpolantFactoryMethodDiscrete",
      "detail": "KeyframeTrack.InterpolantFactoryMethodDiscrete()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "InterpolantFactoryMethodLinear",
      "detail": "KeyframeTrack.InterpolantFactoryMethodLinear()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "InterpolantFactoryMethodSmooth",
      "detail": "KeyframeTrack.InterpolantFactoryMethodSmooth()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "setInterpolation",
      "detail": "KeyframeTrack.setInterpolation()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "getInterpolation",
      "detail": "KeyframeTrack.getInterpolation()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "getValueSize",
      "detail": "KeyframeTrack.getValueSize()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "shift",
      "detail": "KeyframeTrack.shift()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "scale",
      "detail": "KeyframeTrack.scale()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "trim",
      "detail": "KeyframeTrack.trim()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "validate",
      "detail": "KeyframeTrack.validate()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "optimize",
      "detail": "KeyframeTrack.optimize()",
      "documentation": "Method of KeyframeTrack"
    },
    {
      "name": "clone",
      "detail": "KeyframeTrack.clone()",
      "documentation": "Method of KeyframeTrack"
    }
  ],
  "PropertyBinding": [
    {
      "name": "bind",
      "detail": "PropertyBinding.bind()",
      "documentation": "Method of PropertyBinding"
    },
    {
      "name": "unbind",
      "detail": "PropertyBinding.unbind()",
      "documentation": "Method of PropertyBinding"
    }
  ],
  "PropertyMixer": [
    {
      "name": "accumulate",
      "detail": "PropertyMixer.accumulate()",
      "documentation": "Method of PropertyMixer"
    },
    {
      "name": "accumulateAdditive",
      "detail": "PropertyMixer.accumulateAdditive()",
      "documentation": "Method of PropertyMixer"
    },
    {
      "name": "apply",
      "detail": "PropertyMixer.apply()",
      "documentation": "Method of PropertyMixer"
    },
    {
      "name": "saveOriginalState",
      "detail": "PropertyMixer.saveOriginalState()",
      "documentation": "Method of PropertyMixer"
    },
    {
      "name": "restoreOriginalState",
      "detail": "PropertyMixer.restoreOriginalState()",
      "documentation": "Method of PropertyMixer"
    }
  ],
  "Audio": [
    {
      "name": "getOutput",
      "detail": "Audio.getOutput()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setNodeSource",
      "detail": "Audio.setNodeSource()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setMediaElementSource",
      "detail": "Audio.setMediaElementSource()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setMediaStreamSource",
      "detail": "Audio.setMediaStreamSource()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setBuffer",
      "detail": "Audio.setBuffer()",
      "documentation": "Method of Audio"
    },
    {
      "name": "play",
      "detail": "Audio.play()",
      "documentation": "Method of Audio"
    },
    {
      "name": "pause",
      "detail": "Audio.pause()",
      "documentation": "Method of Audio"
    },
    {
      "name": "stop",
      "detail": "Audio.stop()",
      "documentation": "Method of Audio"
    },
    {
      "name": "onEnded",
      "detail": "Audio.onEnded()",
      "documentation": "Method of Audio"
    },
    {
      "name": "connect",
      "detail": "Audio.connect()",
      "documentation": "Method of Audio"
    },
    {
      "name": "disconnect",
      "detail": "Audio.disconnect()",
      "documentation": "Method of Audio"
    },
    {
      "name": "getDetune",
      "detail": "Audio.getDetune()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setDetune",
      "detail": "Audio.setDetune()",
      "documentation": "Method of Audio"
    },
    {
      "name": "getFilter",
      "detail": "Audio.getFilter()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setFilter",
      "detail": "Audio.setFilter()",
      "documentation": "Method of Audio"
    },
    {
      "name": "getFilters",
      "detail": "Audio.getFilters()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setFilters",
      "detail": "Audio.setFilters()",
      "documentation": "Method of Audio"
    },
    {
      "name": "getPlaybackRate",
      "detail": "Audio.getPlaybackRate()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setPlaybackRate",
      "detail": "Audio.setPlaybackRate()",
      "documentation": "Method of Audio"
    },
    {
      "name": "getLoop",
      "detail": "Audio.getLoop()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setLoop",
      "detail": "Audio.setLoop()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setLoopStart",
      "detail": "Audio.setLoopStart()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setLoopEnd",
      "detail": "Audio.setLoopEnd()",
      "documentation": "Method of Audio"
    },
    {
      "name": "getVolume",
      "detail": "Audio.getVolume()",
      "documentation": "Method of Audio"
    },
    {
      "name": "setVolume",
      "detail": "Audio.setVolume()",
      "documentation": "Method of Audio"
    }
  ],
  "AudioAnalyser": [
    {
      "name": "getFrequencyData",
      "detail": "AudioAnalyser.getFrequencyData()",
      "documentation": "Method of AudioAnalyser"
    },
    {
      "name": "getAverageFrequency",
      "detail": "AudioAnalyser.getAverageFrequency()",
      "documentation": "Method of AudioAnalyser"
    }
  ],
  "AudioListener": [
    {
      "name": "getInput",
      "detail": "AudioListener.getInput()",
      "documentation": "Method of AudioListener"
    },
    {
      "name": "removeFilter",
      "detail": "AudioListener.removeFilter()",
      "documentation": "Method of AudioListener"
    },
    {
      "name": "getFilter",
      "detail": "AudioListener.getFilter()",
      "documentation": "Method of AudioListener"
    },
    {
      "name": "setFilter",
      "detail": "AudioListener.setFilter()",
      "documentation": "Method of AudioListener"
    },
    {
      "name": "getMasterVolume",
      "detail": "AudioListener.getMasterVolume()",
      "documentation": "Method of AudioListener"
    },
    {
      "name": "setMasterVolume",
      "detail": "AudioListener.setMasterVolume()",
      "documentation": "Method of AudioListener"
    }
  ],
  "PositionalAudio": [
    {
      "name": "getOutput",
      "detail": "PositionalAudio.getOutput()",
      "documentation": "Method of PositionalAudio"
    },
    {
      "name": "getRefDistance",
      "detail": "PositionalAudio.getRefDistance()",
      "documentation": "Method of PositionalAudio"
    },
    {
      "name": "setRefDistance",
      "detail": "PositionalAudio.setRefDistance()",
      "documentation": "Method of PositionalAudio"
    },
    {
      "name": "getRolloffFactor",
      "detail": "PositionalAudio.getRolloffFactor()",
      "documentation": "Method of PositionalAudio"
    },
    {
      "name": "setRolloffFactor",
      "detail": "PositionalAudio.setRolloffFactor()",
      "documentation": "Method of PositionalAudio"
    },
    {
      "name": "getDistanceModel",
      "detail": "PositionalAudio.getDistanceModel()",
      "documentation": "Method of PositionalAudio"
    },
    {
      "name": "setDistanceModel",
      "detail": "PositionalAudio.setDistanceModel()",
      "documentation": "Method of PositionalAudio"
    },
    {
      "name": "getMaxDistance",
      "detail": "PositionalAudio.getMaxDistance()",
      "documentation": "Method of PositionalAudio"
    },
    {
      "name": "setMaxDistance",
      "detail": "PositionalAudio.setMaxDistance()",
      "documentation": "Method of PositionalAudio"
    },
    {
      "name": "setDirectionalCone",
      "detail": "PositionalAudio.setDirectionalCone()",
      "documentation": "Method of PositionalAudio"
    }
  ],
  "BufferAttribute": [
    {
      "name": "setUsage",
      "detail": "BufferAttribute.setUsage()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "addUpdateRange",
      "detail": "BufferAttribute.addUpdateRange()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "BufferAttribute.clearUpdateRanges()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "clone",
      "detail": "BufferAttribute.clone()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "copy",
      "detail": "BufferAttribute.copy()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "copyAt",
      "detail": "BufferAttribute.copyAt()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "copyArray",
      "detail": "BufferAttribute.copyArray()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "applyMatrix3",
      "detail": "BufferAttribute.applyMatrix3()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "applyMatrix4",
      "detail": "BufferAttribute.applyMatrix4()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "BufferAttribute.applyNormalMatrix()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "BufferAttribute.transformDirection()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "set",
      "detail": "BufferAttribute.set()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "BufferAttribute.getComponent()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "BufferAttribute.setComponent()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "getX",
      "detail": "BufferAttribute.getX()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "setX",
      "detail": "BufferAttribute.setX()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "getY",
      "detail": "BufferAttribute.getY()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "setY",
      "detail": "BufferAttribute.setY()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "BufferAttribute.getZ()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "BufferAttribute.setZ()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "getW",
      "detail": "BufferAttribute.getW()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "setW",
      "detail": "BufferAttribute.setW()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "BufferAttribute.setXY()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "BufferAttribute.setXYZ()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "BufferAttribute.setXYZW()",
      "documentation": "Method of BufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "BufferAttribute.toJSON()",
      "documentation": "Method of BufferAttribute"
    }
  ],
  "Int8BufferAttribute": [
    {
      "name": "setUsage",
      "detail": "Int8BufferAttribute.setUsage()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "addUpdateRange",
      "detail": "Int8BufferAttribute.addUpdateRange()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "Int8BufferAttribute.clearUpdateRanges()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "clone",
      "detail": "Int8BufferAttribute.clone()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "copy",
      "detail": "Int8BufferAttribute.copy()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "copyAt",
      "detail": "Int8BufferAttribute.copyAt()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "copyArray",
      "detail": "Int8BufferAttribute.copyArray()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "applyMatrix3",
      "detail": "Int8BufferAttribute.applyMatrix3()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "applyMatrix4",
      "detail": "Int8BufferAttribute.applyMatrix4()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "Int8BufferAttribute.applyNormalMatrix()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "Int8BufferAttribute.transformDirection()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "set",
      "detail": "Int8BufferAttribute.set()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "Int8BufferAttribute.getComponent()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "Int8BufferAttribute.setComponent()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "getX",
      "detail": "Int8BufferAttribute.getX()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "setX",
      "detail": "Int8BufferAttribute.setX()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "getY",
      "detail": "Int8BufferAttribute.getY()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "setY",
      "detail": "Int8BufferAttribute.setY()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "Int8BufferAttribute.getZ()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "Int8BufferAttribute.setZ()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "getW",
      "detail": "Int8BufferAttribute.getW()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "setW",
      "detail": "Int8BufferAttribute.setW()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "Int8BufferAttribute.setXY()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "Int8BufferAttribute.setXYZ()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "Int8BufferAttribute.setXYZW()",
      "documentation": "Method of Int8BufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "Int8BufferAttribute.toJSON()",
      "documentation": "Method of Int8BufferAttribute"
    }
  ],
  "Uint8BufferAttribute": [
    {
      "name": "setUsage",
      "detail": "Uint8BufferAttribute.setUsage()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "addUpdateRange",
      "detail": "Uint8BufferAttribute.addUpdateRange()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "Uint8BufferAttribute.clearUpdateRanges()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "clone",
      "detail": "Uint8BufferAttribute.clone()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "copy",
      "detail": "Uint8BufferAttribute.copy()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "copyAt",
      "detail": "Uint8BufferAttribute.copyAt()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "copyArray",
      "detail": "Uint8BufferAttribute.copyArray()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "applyMatrix3",
      "detail": "Uint8BufferAttribute.applyMatrix3()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "applyMatrix4",
      "detail": "Uint8BufferAttribute.applyMatrix4()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "Uint8BufferAttribute.applyNormalMatrix()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "Uint8BufferAttribute.transformDirection()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "set",
      "detail": "Uint8BufferAttribute.set()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "Uint8BufferAttribute.getComponent()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "Uint8BufferAttribute.setComponent()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "getX",
      "detail": "Uint8BufferAttribute.getX()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "setX",
      "detail": "Uint8BufferAttribute.setX()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "getY",
      "detail": "Uint8BufferAttribute.getY()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "setY",
      "detail": "Uint8BufferAttribute.setY()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "Uint8BufferAttribute.getZ()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "Uint8BufferAttribute.setZ()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "getW",
      "detail": "Uint8BufferAttribute.getW()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "setW",
      "detail": "Uint8BufferAttribute.setW()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "Uint8BufferAttribute.setXY()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "Uint8BufferAttribute.setXYZ()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "Uint8BufferAttribute.setXYZW()",
      "documentation": "Method of Uint8BufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "Uint8BufferAttribute.toJSON()",
      "documentation": "Method of Uint8BufferAttribute"
    }
  ],
  "Uint8ClampedBufferAttribute": [
    {
      "name": "setUsage",
      "detail": "Uint8ClampedBufferAttribute.setUsage()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "addUpdateRange",
      "detail": "Uint8ClampedBufferAttribute.addUpdateRange()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "Uint8ClampedBufferAttribute.clearUpdateRanges()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "clone",
      "detail": "Uint8ClampedBufferAttribute.clone()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "copy",
      "detail": "Uint8ClampedBufferAttribute.copy()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "copyAt",
      "detail": "Uint8ClampedBufferAttribute.copyAt()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "copyArray",
      "detail": "Uint8ClampedBufferAttribute.copyArray()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "applyMatrix3",
      "detail": "Uint8ClampedBufferAttribute.applyMatrix3()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "applyMatrix4",
      "detail": "Uint8ClampedBufferAttribute.applyMatrix4()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "Uint8ClampedBufferAttribute.applyNormalMatrix()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "Uint8ClampedBufferAttribute.transformDirection()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "set",
      "detail": "Uint8ClampedBufferAttribute.set()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "Uint8ClampedBufferAttribute.getComponent()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "Uint8ClampedBufferAttribute.setComponent()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "getX",
      "detail": "Uint8ClampedBufferAttribute.getX()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "setX",
      "detail": "Uint8ClampedBufferAttribute.setX()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "getY",
      "detail": "Uint8ClampedBufferAttribute.getY()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "setY",
      "detail": "Uint8ClampedBufferAttribute.setY()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "Uint8ClampedBufferAttribute.getZ()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "Uint8ClampedBufferAttribute.setZ()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "getW",
      "detail": "Uint8ClampedBufferAttribute.getW()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "setW",
      "detail": "Uint8ClampedBufferAttribute.setW()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "Uint8ClampedBufferAttribute.setXY()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "Uint8ClampedBufferAttribute.setXYZ()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "Uint8ClampedBufferAttribute.setXYZW()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "Uint8ClampedBufferAttribute.toJSON()",
      "documentation": "Method of Uint8ClampedBufferAttribute"
    }
  ],
  "Int16BufferAttribute": [
    {
      "name": "setUsage",
      "detail": "Int16BufferAttribute.setUsage()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "addUpdateRange",
      "detail": "Int16BufferAttribute.addUpdateRange()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "Int16BufferAttribute.clearUpdateRanges()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "clone",
      "detail": "Int16BufferAttribute.clone()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "copy",
      "detail": "Int16BufferAttribute.copy()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "copyAt",
      "detail": "Int16BufferAttribute.copyAt()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "copyArray",
      "detail": "Int16BufferAttribute.copyArray()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "applyMatrix3",
      "detail": "Int16BufferAttribute.applyMatrix3()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "applyMatrix4",
      "detail": "Int16BufferAttribute.applyMatrix4()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "Int16BufferAttribute.applyNormalMatrix()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "Int16BufferAttribute.transformDirection()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "set",
      "detail": "Int16BufferAttribute.set()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "Int16BufferAttribute.getComponent()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "Int16BufferAttribute.setComponent()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "getX",
      "detail": "Int16BufferAttribute.getX()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "setX",
      "detail": "Int16BufferAttribute.setX()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "getY",
      "detail": "Int16BufferAttribute.getY()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "setY",
      "detail": "Int16BufferAttribute.setY()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "Int16BufferAttribute.getZ()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "Int16BufferAttribute.setZ()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "getW",
      "detail": "Int16BufferAttribute.getW()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "setW",
      "detail": "Int16BufferAttribute.setW()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "Int16BufferAttribute.setXY()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "Int16BufferAttribute.setXYZ()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "Int16BufferAttribute.setXYZW()",
      "documentation": "Method of Int16BufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "Int16BufferAttribute.toJSON()",
      "documentation": "Method of Int16BufferAttribute"
    }
  ],
  "Uint16BufferAttribute": [
    {
      "name": "setUsage",
      "detail": "Uint16BufferAttribute.setUsage()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "addUpdateRange",
      "detail": "Uint16BufferAttribute.addUpdateRange()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "Uint16BufferAttribute.clearUpdateRanges()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "clone",
      "detail": "Uint16BufferAttribute.clone()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "copy",
      "detail": "Uint16BufferAttribute.copy()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "copyAt",
      "detail": "Uint16BufferAttribute.copyAt()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "copyArray",
      "detail": "Uint16BufferAttribute.copyArray()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "applyMatrix3",
      "detail": "Uint16BufferAttribute.applyMatrix3()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "applyMatrix4",
      "detail": "Uint16BufferAttribute.applyMatrix4()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "Uint16BufferAttribute.applyNormalMatrix()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "Uint16BufferAttribute.transformDirection()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "set",
      "detail": "Uint16BufferAttribute.set()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "Uint16BufferAttribute.getComponent()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "Uint16BufferAttribute.setComponent()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "getX",
      "detail": "Uint16BufferAttribute.getX()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "setX",
      "detail": "Uint16BufferAttribute.setX()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "getY",
      "detail": "Uint16BufferAttribute.getY()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "setY",
      "detail": "Uint16BufferAttribute.setY()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "Uint16BufferAttribute.getZ()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "Uint16BufferAttribute.setZ()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "getW",
      "detail": "Uint16BufferAttribute.getW()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "setW",
      "detail": "Uint16BufferAttribute.setW()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "Uint16BufferAttribute.setXY()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "Uint16BufferAttribute.setXYZ()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "Uint16BufferAttribute.setXYZW()",
      "documentation": "Method of Uint16BufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "Uint16BufferAttribute.toJSON()",
      "documentation": "Method of Uint16BufferAttribute"
    }
  ],
  "Int32BufferAttribute": [
    {
      "name": "setUsage",
      "detail": "Int32BufferAttribute.setUsage()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "addUpdateRange",
      "detail": "Int32BufferAttribute.addUpdateRange()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "Int32BufferAttribute.clearUpdateRanges()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "clone",
      "detail": "Int32BufferAttribute.clone()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "copy",
      "detail": "Int32BufferAttribute.copy()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "copyAt",
      "detail": "Int32BufferAttribute.copyAt()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "copyArray",
      "detail": "Int32BufferAttribute.copyArray()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "applyMatrix3",
      "detail": "Int32BufferAttribute.applyMatrix3()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "applyMatrix4",
      "detail": "Int32BufferAttribute.applyMatrix4()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "Int32BufferAttribute.applyNormalMatrix()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "Int32BufferAttribute.transformDirection()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "set",
      "detail": "Int32BufferAttribute.set()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "Int32BufferAttribute.getComponent()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "Int32BufferAttribute.setComponent()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "getX",
      "detail": "Int32BufferAttribute.getX()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "setX",
      "detail": "Int32BufferAttribute.setX()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "getY",
      "detail": "Int32BufferAttribute.getY()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "setY",
      "detail": "Int32BufferAttribute.setY()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "Int32BufferAttribute.getZ()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "Int32BufferAttribute.setZ()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "getW",
      "detail": "Int32BufferAttribute.getW()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "setW",
      "detail": "Int32BufferAttribute.setW()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "Int32BufferAttribute.setXY()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "Int32BufferAttribute.setXYZ()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "Int32BufferAttribute.setXYZW()",
      "documentation": "Method of Int32BufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "Int32BufferAttribute.toJSON()",
      "documentation": "Method of Int32BufferAttribute"
    }
  ],
  "Uint32BufferAttribute": [
    {
      "name": "setUsage",
      "detail": "Uint32BufferAttribute.setUsage()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "addUpdateRange",
      "detail": "Uint32BufferAttribute.addUpdateRange()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "Uint32BufferAttribute.clearUpdateRanges()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "clone",
      "detail": "Uint32BufferAttribute.clone()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "copy",
      "detail": "Uint32BufferAttribute.copy()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "copyAt",
      "detail": "Uint32BufferAttribute.copyAt()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "copyArray",
      "detail": "Uint32BufferAttribute.copyArray()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "applyMatrix3",
      "detail": "Uint32BufferAttribute.applyMatrix3()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "applyMatrix4",
      "detail": "Uint32BufferAttribute.applyMatrix4()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "Uint32BufferAttribute.applyNormalMatrix()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "Uint32BufferAttribute.transformDirection()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "set",
      "detail": "Uint32BufferAttribute.set()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "Uint32BufferAttribute.getComponent()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "Uint32BufferAttribute.setComponent()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "getX",
      "detail": "Uint32BufferAttribute.getX()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "setX",
      "detail": "Uint32BufferAttribute.setX()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "getY",
      "detail": "Uint32BufferAttribute.getY()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "setY",
      "detail": "Uint32BufferAttribute.setY()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "Uint32BufferAttribute.getZ()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "Uint32BufferAttribute.setZ()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "getW",
      "detail": "Uint32BufferAttribute.getW()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "setW",
      "detail": "Uint32BufferAttribute.setW()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "Uint32BufferAttribute.setXY()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "Uint32BufferAttribute.setXYZ()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "Uint32BufferAttribute.setXYZW()",
      "documentation": "Method of Uint32BufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "Uint32BufferAttribute.toJSON()",
      "documentation": "Method of Uint32BufferAttribute"
    }
  ],
  "Float16BufferAttribute": [
    {
      "name": "setUsage",
      "detail": "Float16BufferAttribute.setUsage()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "addUpdateRange",
      "detail": "Float16BufferAttribute.addUpdateRange()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "Float16BufferAttribute.clearUpdateRanges()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "clone",
      "detail": "Float16BufferAttribute.clone()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "copy",
      "detail": "Float16BufferAttribute.copy()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "copyAt",
      "detail": "Float16BufferAttribute.copyAt()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "copyArray",
      "detail": "Float16BufferAttribute.copyArray()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "applyMatrix3",
      "detail": "Float16BufferAttribute.applyMatrix3()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "applyMatrix4",
      "detail": "Float16BufferAttribute.applyMatrix4()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "Float16BufferAttribute.applyNormalMatrix()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "Float16BufferAttribute.transformDirection()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "set",
      "detail": "Float16BufferAttribute.set()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "Float16BufferAttribute.getComponent()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "Float16BufferAttribute.setComponent()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "getX",
      "detail": "Float16BufferAttribute.getX()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "setX",
      "detail": "Float16BufferAttribute.setX()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "getY",
      "detail": "Float16BufferAttribute.getY()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "setY",
      "detail": "Float16BufferAttribute.setY()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "Float16BufferAttribute.getZ()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "Float16BufferAttribute.setZ()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "getW",
      "detail": "Float16BufferAttribute.getW()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "setW",
      "detail": "Float16BufferAttribute.setW()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "Float16BufferAttribute.setXY()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "Float16BufferAttribute.setXYZ()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "Float16BufferAttribute.setXYZW()",
      "documentation": "Method of Float16BufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "Float16BufferAttribute.toJSON()",
      "documentation": "Method of Float16BufferAttribute"
    }
  ],
  "Float32BufferAttribute": [
    {
      "name": "setUsage",
      "detail": "Float32BufferAttribute.setUsage()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "addUpdateRange",
      "detail": "Float32BufferAttribute.addUpdateRange()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "Float32BufferAttribute.clearUpdateRanges()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "clone",
      "detail": "Float32BufferAttribute.clone()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "copy",
      "detail": "Float32BufferAttribute.copy()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "copyAt",
      "detail": "Float32BufferAttribute.copyAt()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "copyArray",
      "detail": "Float32BufferAttribute.copyArray()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "applyMatrix3",
      "detail": "Float32BufferAttribute.applyMatrix3()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "applyMatrix4",
      "detail": "Float32BufferAttribute.applyMatrix4()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "Float32BufferAttribute.applyNormalMatrix()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "Float32BufferAttribute.transformDirection()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "set",
      "detail": "Float32BufferAttribute.set()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "Float32BufferAttribute.getComponent()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "Float32BufferAttribute.setComponent()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "getX",
      "detail": "Float32BufferAttribute.getX()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "setX",
      "detail": "Float32BufferAttribute.setX()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "getY",
      "detail": "Float32BufferAttribute.getY()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "setY",
      "detail": "Float32BufferAttribute.setY()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "Float32BufferAttribute.getZ()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "Float32BufferAttribute.setZ()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "getW",
      "detail": "Float32BufferAttribute.getW()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "setW",
      "detail": "Float32BufferAttribute.setW()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "Float32BufferAttribute.setXY()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "Float32BufferAttribute.setXYZ()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "Float32BufferAttribute.setXYZW()",
      "documentation": "Method of Float32BufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "Float32BufferAttribute.toJSON()",
      "documentation": "Method of Float32BufferAttribute"
    }
  ],
  "BufferGeometry": [
    {
      "name": "getIndex",
      "detail": "BufferGeometry.getIndex()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "setIndex",
      "detail": "BufferGeometry.setIndex()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "setIndirect",
      "detail": "BufferGeometry.setIndirect()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "getIndirect",
      "detail": "BufferGeometry.getIndirect()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "deleteAttribute",
      "detail": "BufferGeometry.deleteAttribute()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "hasAttribute",
      "detail": "BufferGeometry.hasAttribute()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "addGroup",
      "detail": "BufferGeometry.addGroup()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "clearGroups",
      "detail": "BufferGeometry.clearGroups()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "setDrawRange",
      "detail": "BufferGeometry.setDrawRange()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "applyMatrix4",
      "detail": "BufferGeometry.applyMatrix4()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "applyQuaternion",
      "detail": "BufferGeometry.applyQuaternion()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "rotateX",
      "detail": "BufferGeometry.rotateX()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "rotateY",
      "detail": "BufferGeometry.rotateY()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "rotateZ",
      "detail": "BufferGeometry.rotateZ()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "translate",
      "detail": "BufferGeometry.translate()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "scale",
      "detail": "BufferGeometry.scale()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "lookAt",
      "detail": "BufferGeometry.lookAt()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "center",
      "detail": "BufferGeometry.center()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "setFromPoints",
      "detail": "BufferGeometry.setFromPoints()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "computeBoundingBox",
      "detail": "BufferGeometry.computeBoundingBox()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "computeBoundingSphere",
      "detail": "BufferGeometry.computeBoundingSphere()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "computeTangents",
      "detail": "BufferGeometry.computeTangents()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "computeVertexNormals",
      "detail": "BufferGeometry.computeVertexNormals()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "normalizeNormals",
      "detail": "BufferGeometry.normalizeNormals()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "toNonIndexed",
      "detail": "BufferGeometry.toNonIndexed()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "toJSON",
      "detail": "BufferGeometry.toJSON()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "clone",
      "detail": "BufferGeometry.clone()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "copy",
      "detail": "BufferGeometry.copy()",
      "documentation": "Method of BufferGeometry"
    },
    {
      "name": "dispose",
      "detail": "BufferGeometry.dispose()",
      "documentation": "Method of BufferGeometry"
    }
  ],
  "Clock": [
    {
      "name": "start",
      "detail": "Clock.start()",
      "documentation": "Method of Clock"
    },
    {
      "name": "stop",
      "detail": "Clock.stop()",
      "documentation": "Method of Clock"
    },
    {
      "name": "getElapsedTime",
      "detail": "Clock.getElapsedTime()",
      "documentation": "Method of Clock"
    },
    {
      "name": "getDelta",
      "detail": "Clock.getDelta()",
      "documentation": "Method of Clock"
    }
  ],
  "GLBufferAttribute": [
    {
      "name": "setBuffer",
      "detail": "GLBufferAttribute.setBuffer()",
      "documentation": "Method of GLBufferAttribute"
    },
    {
      "name": "setType",
      "detail": "GLBufferAttribute.setType()",
      "documentation": "Method of GLBufferAttribute"
    },
    {
      "name": "setItemSize",
      "detail": "GLBufferAttribute.setItemSize()",
      "documentation": "Method of GLBufferAttribute"
    },
    {
      "name": "setCount",
      "detail": "GLBufferAttribute.setCount()",
      "documentation": "Method of GLBufferAttribute"
    }
  ],
  "InstancedBufferGeometry": [
    {
      "name": "copy",
      "detail": "InstancedBufferGeometry.copy()",
      "documentation": "Method of InstancedBufferGeometry"
    }
  ],
  "InterleavedBuffer": [
    {
      "name": "set",
      "detail": "InterleavedBuffer.set()",
      "documentation": "Method of InterleavedBuffer"
    },
    {
      "name": "setUsage",
      "detail": "InterleavedBuffer.setUsage()",
      "documentation": "Method of InterleavedBuffer"
    },
    {
      "name": "addUpdateRange",
      "detail": "InterleavedBuffer.addUpdateRange()",
      "documentation": "Method of InterleavedBuffer"
    },
    {
      "name": "clearUpdateRanges",
      "detail": "InterleavedBuffer.clearUpdateRanges()",
      "documentation": "Method of InterleavedBuffer"
    },
    {
      "name": "copy",
      "detail": "InterleavedBuffer.copy()",
      "documentation": "Method of InterleavedBuffer"
    },
    {
      "name": "copyAt",
      "detail": "InterleavedBuffer.copyAt()",
      "documentation": "Method of InterleavedBuffer"
    },
    {
      "name": "clone",
      "detail": "InterleavedBuffer.clone()",
      "documentation": "Method of InterleavedBuffer"
    },
    {
      "name": "toJSON",
      "detail": "InterleavedBuffer.toJSON()",
      "documentation": "Method of InterleavedBuffer"
    }
  ],
  "InterleavedBufferAttribute": [
    {
      "name": "applyMatrix4",
      "detail": "InterleavedBufferAttribute.applyMatrix4()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "applyNormalMatrix",
      "detail": "InterleavedBufferAttribute.applyNormalMatrix()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "transformDirection",
      "detail": "InterleavedBufferAttribute.transformDirection()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "getComponent",
      "detail": "InterleavedBufferAttribute.getComponent()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "setComponent",
      "detail": "InterleavedBufferAttribute.setComponent()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "getX",
      "detail": "InterleavedBufferAttribute.getX()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "setX",
      "detail": "InterleavedBufferAttribute.setX()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "getY",
      "detail": "InterleavedBufferAttribute.getY()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "setY",
      "detail": "InterleavedBufferAttribute.setY()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "getZ",
      "detail": "InterleavedBufferAttribute.getZ()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "setZ",
      "detail": "InterleavedBufferAttribute.setZ()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "getW",
      "detail": "InterleavedBufferAttribute.getW()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "setW",
      "detail": "InterleavedBufferAttribute.setW()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "setXY",
      "detail": "InterleavedBufferAttribute.setXY()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "setXYZ",
      "detail": "InterleavedBufferAttribute.setXYZ()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "setXYZW",
      "detail": "InterleavedBufferAttribute.setXYZW()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "clone",
      "detail": "InterleavedBufferAttribute.clone()",
      "documentation": "Method of InterleavedBufferAttribute"
    },
    {
      "name": "toJSON",
      "detail": "InterleavedBufferAttribute.toJSON()",
      "documentation": "Method of InterleavedBufferAttribute"
    }
  ],
  "Layers": [
    {
      "name": "set",
      "detail": "Layers.set()",
      "documentation": "Method of Layers"
    },
    {
      "name": "enable",
      "detail": "Layers.enable()",
      "documentation": "Method of Layers"
    },
    {
      "name": "enableAll",
      "detail": "Layers.enableAll()",
      "documentation": "Method of Layers"
    },
    {
      "name": "toggle",
      "detail": "Layers.toggle()",
      "documentation": "Method of Layers"
    },
    {
      "name": "disable",
      "detail": "Layers.disable()",
      "documentation": "Method of Layers"
    },
    {
      "name": "disableAll",
      "detail": "Layers.disableAll()",
      "documentation": "Method of Layers"
    },
    {
      "name": "test",
      "detail": "Layers.test()",
      "documentation": "Method of Layers"
    },
    {
      "name": "isEnabled",
      "detail": "Layers.isEnabled()",
      "documentation": "Method of Layers"
    }
  ],
  "Object3D": [
    {
      "name": "onBeforeShadow",
      "detail": "Object3D.onBeforeShadow()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "onAfterShadow",
      "detail": "Object3D.onAfterShadow()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "onBeforeRender",
      "detail": "Object3D.onBeforeRender()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "onAfterRender",
      "detail": "Object3D.onAfterRender()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "applyMatrix4",
      "detail": "Object3D.applyMatrix4()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "applyQuaternion",
      "detail": "Object3D.applyQuaternion()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "setRotationFromAxisAngle",
      "detail": "Object3D.setRotationFromAxisAngle()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "setRotationFromEuler",
      "detail": "Object3D.setRotationFromEuler()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "setRotationFromMatrix",
      "detail": "Object3D.setRotationFromMatrix()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "setRotationFromQuaternion",
      "detail": "Object3D.setRotationFromQuaternion()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "rotateOnAxis",
      "detail": "Object3D.rotateOnAxis()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "rotateOnWorldAxis",
      "detail": "Object3D.rotateOnWorldAxis()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "rotateX",
      "detail": "Object3D.rotateX()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "rotateY",
      "detail": "Object3D.rotateY()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "rotateZ",
      "detail": "Object3D.rotateZ()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "translateOnAxis",
      "detail": "Object3D.translateOnAxis()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "translateX",
      "detail": "Object3D.translateX()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "translateY",
      "detail": "Object3D.translateY()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "translateZ",
      "detail": "Object3D.translateZ()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "localToWorld",
      "detail": "Object3D.localToWorld()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "worldToLocal",
      "detail": "Object3D.worldToLocal()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "lookAt",
      "detail": "Object3D.lookAt()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "lookAt",
      "detail": "Object3D.lookAt()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "add",
      "detail": "Object3D.add()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "remove",
      "detail": "Object3D.remove()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "removeFromParent",
      "detail": "Object3D.removeFromParent()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "clear",
      "detail": "Object3D.clear()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "attach",
      "detail": "Object3D.attach()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "getObjectById",
      "detail": "Object3D.getObjectById()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "getObjectByName",
      "detail": "Object3D.getObjectByName()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "getObjectByProperty",
      "detail": "Object3D.getObjectByProperty()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "getObjectsByProperty",
      "detail": "Object3D.getObjectsByProperty()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "getWorldPosition",
      "detail": "Object3D.getWorldPosition()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "getWorldQuaternion",
      "detail": "Object3D.getWorldQuaternion()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "getWorldScale",
      "detail": "Object3D.getWorldScale()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "getWorldDirection",
      "detail": "Object3D.getWorldDirection()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "raycast",
      "detail": "Object3D.raycast()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "updateMatrix",
      "detail": "Object3D.updateMatrix()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "updateMatrixWorld",
      "detail": "Object3D.updateMatrixWorld()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "updateWorldMatrix",
      "detail": "Object3D.updateWorldMatrix()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "toJSON",
      "detail": "Object3D.toJSON()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "clone",
      "detail": "Object3D.clone()",
      "documentation": "Method of Object3D"
    },
    {
      "name": "copy",
      "detail": "Object3D.copy()",
      "documentation": "Method of Object3D"
    }
  ],
  "Raycaster": [
    {
      "name": "set",
      "detail": "Raycaster.set()",
      "documentation": "Method of Raycaster"
    },
    {
      "name": "setFromCamera",
      "detail": "Raycaster.setFromCamera()",
      "documentation": "Method of Raycaster"
    },
    {
      "name": "setFromXRController",
      "detail": "Raycaster.setFromXRController()",
      "documentation": "Method of Raycaster"
    }
  ],
  "RenderTarget": [
    {
      "name": "setSize",
      "detail": "RenderTarget.setSize()",
      "documentation": "Method of RenderTarget"
    },
    {
      "name": "clone",
      "detail": "RenderTarget.clone()",
      "documentation": "Method of RenderTarget"
    },
    {
      "name": "copy",
      "detail": "RenderTarget.copy()",
      "documentation": "Method of RenderTarget"
    },
    {
      "name": "dispose",
      "detail": "RenderTarget.dispose()",
      "documentation": "Method of RenderTarget"
    }
  ],
  "Uniform": [
    {
      "name": "clone",
      "detail": "Uniform.clone()",
      "documentation": "Method of Uniform"
    }
  ],
  "UniformsGroup": [
    {
      "name": "add",
      "detail": "UniformsGroup.add()",
      "documentation": "Method of UniformsGroup"
    },
    {
      "name": "remove",
      "detail": "UniformsGroup.remove()",
      "documentation": "Method of UniformsGroup"
    },
    {
      "name": "setName",
      "detail": "UniformsGroup.setName()",
      "documentation": "Method of UniformsGroup"
    },
    {
      "name": "setUsage",
      "detail": "UniformsGroup.setUsage()",
      "documentation": "Method of UniformsGroup"
    },
    {
      "name": "dispose",
      "detail": "UniformsGroup.dispose()",
      "documentation": "Method of UniformsGroup"
    },
    {
      "name": "copy",
      "detail": "UniformsGroup.copy()",
      "documentation": "Method of UniformsGroup"
    },
    {
      "name": "clone",
      "detail": "UniformsGroup.clone()",
      "documentation": "Method of UniformsGroup"
    }
  ],
  "PMREMGenerator": [
    {
      "name": "fromScene",
      "detail": "PMREMGenerator.fromScene()",
      "documentation": "Method of PMREMGenerator"
    },
    {
      "name": "fromEquirectangular",
      "detail": "PMREMGenerator.fromEquirectangular()",
      "documentation": "Method of PMREMGenerator"
    },
    {
      "name": "fromCubemap",
      "detail": "PMREMGenerator.fromCubemap()",
      "documentation": "Method of PMREMGenerator"
    },
    {
      "name": "compileCubemapShader",
      "detail": "PMREMGenerator.compileCubemapShader()",
      "documentation": "Method of PMREMGenerator"
    },
    {
      "name": "compileEquirectangularShader",
      "detail": "PMREMGenerator.compileEquirectangularShader()",
      "documentation": "Method of PMREMGenerator"
    },
    {
      "name": "dispose",
      "detail": "PMREMGenerator.dispose()",
      "documentation": "Method of PMREMGenerator"
    }
  ],
  "CurvePath": [
    {
      "name": "add",
      "detail": "CurvePath.add()",
      "documentation": "Method of CurvePath"
    },
    {
      "name": "closePath",
      "detail": "CurvePath.closePath()",
      "documentation": "Method of CurvePath"
    },
    {
      "name": "getPoint",
      "detail": "CurvePath.getPoint()",
      "documentation": "Method of CurvePath"
    },
    {
      "name": "getCurveLengths",
      "detail": "CurvePath.getCurveLengths()",
      "documentation": "Method of CurvePath"
    },
    {
      "name": "toJSON",
      "detail": "CurvePath.toJSON()",
      "documentation": "Method of CurvePath"
    },
    {
      "name": "fromJSON",
      "detail": "CurvePath.fromJSON()",
      "documentation": "Method of CurvePath"
    }
  ],
  "Path": [
    {
      "name": "absarc",
      "detail": "Path.absarc()",
      "documentation": "Method of Path"
    },
    {
      "name": "absellipse",
      "detail": "Path.absellipse()",
      "documentation": "Method of Path"
    },
    {
      "name": "arc",
      "detail": "Path.arc()",
      "documentation": "Method of Path"
    },
    {
      "name": "bezierCurveTo",
      "detail": "Path.bezierCurveTo()",
      "documentation": "Method of Path"
    },
    {
      "name": "ellipse",
      "detail": "Path.ellipse()",
      "documentation": "Method of Path"
    },
    {
      "name": "lineTo",
      "detail": "Path.lineTo()",
      "documentation": "Method of Path"
    },
    {
      "name": "moveTo",
      "detail": "Path.moveTo()",
      "documentation": "Method of Path"
    },
    {
      "name": "quadraticCurveTo",
      "detail": "Path.quadraticCurveTo()",
      "documentation": "Method of Path"
    },
    {
      "name": "setFromPoints",
      "detail": "Path.setFromPoints()",
      "documentation": "Method of Path"
    },
    {
      "name": "splineThru",
      "detail": "Path.splineThru()",
      "documentation": "Method of Path"
    },
    {
      "name": "toJSON",
      "detail": "Path.toJSON()",
      "documentation": "Method of Path"
    },
    {
      "name": "fromJSON",
      "detail": "Path.fromJSON()",
      "documentation": "Method of Path"
    }
  ],
  "Shape": [
    {
      "name": "extractPoints",
      "detail": "Shape.extractPoints()",
      "documentation": "Method of Shape"
    },
    {
      "name": "getPointsHoles",
      "detail": "Shape.getPointsHoles()",
      "documentation": "Method of Shape"
    },
    {
      "name": "toJSON",
      "detail": "Shape.toJSON()",
      "documentation": "Method of Shape"
    },
    {
      "name": "fromJSON",
      "detail": "Shape.fromJSON()",
      "documentation": "Method of Shape"
    }
  ],
  "ShapePath": [
    {
      "name": "moveTo",
      "detail": "ShapePath.moveTo()",
      "documentation": "Method of ShapePath"
    },
    {
      "name": "lineTo",
      "detail": "ShapePath.lineTo()",
      "documentation": "Method of ShapePath"
    },
    {
      "name": "quadraticCurveTo",
      "detail": "ShapePath.quadraticCurveTo()",
      "documentation": "Method of ShapePath"
    },
    {
      "name": "bezierCurveTo",
      "detail": "ShapePath.bezierCurveTo()",
      "documentation": "Method of ShapePath"
    },
    {
      "name": "splineThru",
      "detail": "ShapePath.splineThru()",
      "documentation": "Method of ShapePath"
    },
    {
      "name": "toShapes",
      "detail": "ShapePath.toShapes()",
      "documentation": "Method of ShapePath"
    }
  ],
  "WebGLRenderer": [
    {
      "name": "getContext",
      "detail": "WebGLRenderer.getContext()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getContextAttributes",
      "detail": "WebGLRenderer.getContextAttributes()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "forceContextLoss",
      "detail": "WebGLRenderer.forceContextLoss()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "forceContextRestore",
      "detail": "WebGLRenderer.forceContextRestore()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getMaxAnisotropy",
      "detail": "WebGLRenderer.getMaxAnisotropy()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getPrecision",
      "detail": "WebGLRenderer.getPrecision()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getPixelRatio",
      "detail": "WebGLRenderer.getPixelRatio()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "setPixelRatio",
      "detail": "WebGLRenderer.setPixelRatio()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getDrawingBufferSize",
      "detail": "WebGLRenderer.getDrawingBufferSize()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "setDrawingBufferSize",
      "detail": "WebGLRenderer.setDrawingBufferSize()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getSize",
      "detail": "WebGLRenderer.getSize()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "setSize",
      "detail": "WebGLRenderer.setSize()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getCurrentViewport",
      "detail": "WebGLRenderer.getCurrentViewport()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getViewport",
      "detail": "WebGLRenderer.getViewport()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "setViewport",
      "detail": "WebGLRenderer.setViewport()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getScissor",
      "detail": "WebGLRenderer.getScissor()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "setScissor",
      "detail": "WebGLRenderer.setScissor()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getScissorTest",
      "detail": "WebGLRenderer.getScissorTest()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "setScissorTest",
      "detail": "WebGLRenderer.setScissorTest()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getClearColor",
      "detail": "WebGLRenderer.getClearColor()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "setClearColor",
      "detail": "WebGLRenderer.setClearColor()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getClearAlpha",
      "detail": "WebGLRenderer.getClearAlpha()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "setClearAlpha",
      "detail": "WebGLRenderer.setClearAlpha()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "clear",
      "detail": "WebGLRenderer.clear()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "clearColor",
      "detail": "WebGLRenderer.clearColor()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "clearDepth",
      "detail": "WebGLRenderer.clearDepth()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "clearStencil",
      "detail": "WebGLRenderer.clearStencil()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "clearTarget",
      "detail": "WebGLRenderer.clearTarget()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "resetGLState",
      "detail": "WebGLRenderer.resetGLState()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "dispose",
      "detail": "WebGLRenderer.dispose()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "renderBufferDirect",
      "detail": "WebGLRenderer.renderBufferDirect()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "setAnimationLoop",
      "detail": "WebGLRenderer.setAnimationLoop()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "render",
      "detail": "WebGLRenderer.render()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getActiveCubeFace",
      "detail": "WebGLRenderer.getActiveCubeFace()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getActiveMipmapLevel",
      "detail": "WebGLRenderer.getActiveMipmapLevel()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getRenderTarget",
      "detail": "WebGLRenderer.getRenderTarget()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "getCurrentRenderTarget",
      "detail": "WebGLRenderer.getCurrentRenderTarget()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "setRenderTarget",
      "detail": "WebGLRenderer.setRenderTarget()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "readRenderTargetPixels",
      "detail": "WebGLRenderer.readRenderTargetPixels()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "readRenderTargetPixelsAsync",
      "detail": "WebGLRenderer.readRenderTargetPixelsAsync()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "copyFramebufferToTexture",
      "detail": "WebGLRenderer.copyFramebufferToTexture()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "copyTextureToTexture",
      "detail": "WebGLRenderer.copyTextureToTexture()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "initRenderTarget",
      "detail": "WebGLRenderer.initRenderTarget()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "initTexture",
      "detail": "WebGLRenderer.initTexture()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "resetState",
      "detail": "WebGLRenderer.resetState()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "supportsFloatTextures",
      "detail": "WebGLRenderer.supportsFloatTextures()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "supportsHalfFloatTextures",
      "detail": "WebGLRenderer.supportsHalfFloatTextures()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "supportsStandardDerivatives",
      "detail": "WebGLRenderer.supportsStandardDerivatives()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "supportsCompressedTextureS3TC",
      "detail": "WebGLRenderer.supportsCompressedTextureS3TC()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "supportsCompressedTexturePVRTC",
      "detail": "WebGLRenderer.supportsCompressedTexturePVRTC()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "supportsBlendMinMax",
      "detail": "WebGLRenderer.supportsBlendMinMax()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "supportsVertexTextures",
      "detail": "WebGLRenderer.supportsVertexTextures()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "supportsInstancedArrays",
      "detail": "WebGLRenderer.supportsInstancedArrays()",
      "documentation": "Method of WebGLRenderer"
    },
    {
      "name": "enableScissorTest",
      "detail": "WebGLRenderer.enableScissorTest()",
      "documentation": "Method of WebGLRenderer"
    }
  ]
};

exports.properties = {
  "common": [
    {
      "name": "position",
      "type": "Vector3",
      "detail": "Object position",
      "documentation": "Object's local position"
    },
    {
      "name": "rotation",
      "type": "Euler",
      "detail": "Object rotation",
      "documentation": "Object's local rotation"
    },
    {
      "name": "scale",
      "type": "Vector3",
      "detail": "Object scale",
      "documentation": "Object's local scale"
    },
    {
      "name": "quaternion",
      "type": "Quaternion",
      "detail": "Object quaternion",
      "documentation": "Object's local rotation as quaternion"
    },
    {
      "name": "visible",
      "type": "boolean",
      "detail": "Visibility",
      "documentation": "Object gets rendered if true"
    },
    {
      "name": "castShadow",
      "type": "boolean",
      "detail": "Cast shadow",
      "documentation": "Whether object casts shadows"
    },
    {
      "name": "receiveShadow",
      "type": "boolean",
      "detail": "Receive shadow",
      "documentation": "Whether material receives shadows"
    }
  ],
  "ArrayCamera": [
    {
      "name": "cameras",
      "type": "PerspectiveCamera[]",
      "detail": "ArrayCamera.cameras",
      "documentation": "Property of ArrayCamera"
    },
    {
      "name": "index",
      "type": "number",
      "detail": "ArrayCamera.index",
      "documentation": "Property of ArrayCamera"
    }
  ],
  "Camera": [
    {
      "name": "matrixWorldInverse",
      "type": "Matrix4",
      "detail": "Camera.matrixWorldInverse",
      "documentation": "Property of Camera"
    },
    {
      "name": "projectionMatrix",
      "type": "Matrix4",
      "detail": "Camera.projectionMatrix",
      "documentation": "Property of Camera"
    },
    {
      "name": "projectionMatrixInverse",
      "type": "Matrix4",
      "detail": "Camera.projectionMatrixInverse",
      "documentation": "Property of Camera"
    },
    {
      "name": "coordinateSystem",
      "type": "CoordinateSystem",
      "detail": "Camera.coordinateSystem",
      "documentation": "Property of Camera"
    }
  ],
  "CubeCamera": [
    {
      "name": "coordinateSystem",
      "type": "CoordinateSystem",
      "detail": "CubeCamera.coordinateSystem",
      "documentation": "Property of CubeCamera"
    },
    {
      "name": "xr",
      "type": "{\n        enabled: boolean",
      "detail": "CubeCamera.xr",
      "documentation": "Property of CubeCamera"
    },
    {
      "name": "renderTarget",
      "type": "WebGLCubeRenderTarget",
      "detail": "CubeCamera.renderTarget",
      "documentation": "Property of CubeCamera"
    },
    {
      "name": "coordinateSystem",
      "type": "CoordinateSystem",
      "detail": "CubeCamera.coordinateSystem",
      "documentation": "Property of CubeCamera"
    },
    {
      "name": "activeMipmapLevel",
      "type": "number",
      "detail": "CubeCamera.activeMipmapLevel",
      "documentation": "Property of CubeCamera"
    }
  ],
  "OrthographicCamera": [
    {
      "name": "zoom",
      "type": "number",
      "detail": "OrthographicCamera.zoom",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "left",
      "type": "number",
      "detail": "OrthographicCamera.left",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "right",
      "type": "number",
      "detail": "OrthographicCamera.right",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "top",
      "type": "number",
      "detail": "OrthographicCamera.top",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "bottom",
      "type": "number",
      "detail": "OrthographicCamera.bottom",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "near",
      "type": "number",
      "detail": "OrthographicCamera.near",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "far",
      "type": "number",
      "detail": "OrthographicCamera.far",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "object",
      "type": "OrthographicCameraJSONObject",
      "detail": "OrthographicCamera.object",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "zoom",
      "type": "number",
      "detail": "OrthographicCamera.zoom",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "view",
      "type": "null | {\n        enabled: boolean",
      "detail": "OrthographicCamera.view",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "left",
      "type": "number",
      "detail": "OrthographicCamera.left",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "right",
      "type": "number",
      "detail": "OrthographicCamera.right",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "top",
      "type": "number",
      "detail": "OrthographicCamera.top",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "bottom",
      "type": "number",
      "detail": "OrthographicCamera.bottom",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "near",
      "type": "number",
      "detail": "OrthographicCamera.near",
      "documentation": "Property of OrthographicCamera"
    },
    {
      "name": "far",
      "type": "number",
      "detail": "OrthographicCamera.far",
      "documentation": "Property of OrthographicCamera"
    }
  ],
  "PerspectiveCamera": [
    {
      "name": "fov",
      "type": "number",
      "detail": "PerspectiveCamera.fov",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "zoom",
      "type": "number",
      "detail": "PerspectiveCamera.zoom",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "near",
      "type": "number",
      "detail": "PerspectiveCamera.near",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "far",
      "type": "number",
      "detail": "PerspectiveCamera.far",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "focus",
      "type": "number",
      "detail": "PerspectiveCamera.focus",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "aspect",
      "type": "number",
      "detail": "PerspectiveCamera.aspect",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "filmGauge",
      "type": "number",
      "detail": "PerspectiveCamera.filmGauge",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "filmOffset",
      "type": "number",
      "detail": "PerspectiveCamera.filmOffset",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "object",
      "type": "PerspectiveCameraJSONObject",
      "detail": "PerspectiveCamera.object",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "zoom",
      "type": "number",
      "detail": "PerspectiveCamera.zoom",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "fov",
      "type": "number",
      "detail": "PerspectiveCamera.fov",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "aspect",
      "type": "number",
      "detail": "PerspectiveCamera.aspect",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "near",
      "type": "number",
      "detail": "PerspectiveCamera.near",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "far",
      "type": "number",
      "detail": "PerspectiveCamera.far",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "focus",
      "type": "number",
      "detail": "PerspectiveCamera.focus",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "view",
      "type": "null | {\n        enabled: boolean",
      "detail": "PerspectiveCamera.view",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "filmGauge",
      "type": "number",
      "detail": "PerspectiveCamera.filmGauge",
      "documentation": "Property of PerspectiveCamera"
    },
    {
      "name": "filmOffset",
      "type": "number",
      "detail": "PerspectiveCamera.filmOffset",
      "documentation": "Property of PerspectiveCamera"
    }
  ],
  "StereoCamera": [
    {
      "name": "aspect",
      "type": "number",
      "detail": "StereoCamera.aspect",
      "documentation": "Property of StereoCamera"
    },
    {
      "name": "eyeSep",
      "type": "number",
      "detail": "StereoCamera.eyeSep",
      "documentation": "Property of StereoCamera"
    },
    {
      "name": "cameraL",
      "type": "PerspectiveCamera",
      "detail": "StereoCamera.cameraL",
      "documentation": "Property of StereoCamera"
    },
    {
      "name": "cameraR",
      "type": "PerspectiveCamera",
      "detail": "StereoCamera.cameraR",
      "documentation": "Property of StereoCamera"
    }
  ],
  "TubeGeometry": [
    {
      "name": "tangents",
      "type": "Vector3[]",
      "detail": "TubeGeometry.tangents",
      "documentation": "Property of TubeGeometry"
    },
    {
      "name": "normals",
      "type": "Vector3[]",
      "detail": "TubeGeometry.normals",
      "documentation": "Property of TubeGeometry"
    },
    {
      "name": "binormals",
      "type": "Vector3[]",
      "detail": "TubeGeometry.binormals",
      "documentation": "Property of TubeGeometry"
    }
  ],
  "LineBasicMaterial": [
    {
      "name": "color",
      "type": "Color",
      "detail": "LineBasicMaterial.color",
      "documentation": "Property of LineBasicMaterial"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "LineBasicMaterial.map",
      "documentation": "Property of LineBasicMaterial"
    },
    {
      "name": "linewidth",
      "type": "number",
      "detail": "LineBasicMaterial.linewidth",
      "documentation": "Property of LineBasicMaterial"
    },
    {
      "name": "linecap",
      "type": "\"butt\" | \"round\" | \"square\"",
      "detail": "LineBasicMaterial.linecap",
      "documentation": "Property of LineBasicMaterial"
    },
    {
      "name": "linejoin",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "LineBasicMaterial.linejoin",
      "documentation": "Property of LineBasicMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "LineBasicMaterial.fog",
      "documentation": "Property of LineBasicMaterial"
    }
  ],
  "LineDashedMaterial": [
    {
      "name": "scale",
      "type": "number",
      "detail": "LineDashedMaterial.scale",
      "documentation": "Property of LineDashedMaterial"
    },
    {
      "name": "dashSize",
      "type": "number",
      "detail": "LineDashedMaterial.dashSize",
      "documentation": "Property of LineDashedMaterial"
    },
    {
      "name": "gapSize",
      "type": "number",
      "detail": "LineDashedMaterial.gapSize",
      "documentation": "Property of LineDashedMaterial"
    }
  ],
  "Material": [
    {
      "name": "name",
      "type": "string",
      "detail": "Material.name",
      "documentation": "Property of Material"
    },
    {
      "name": "blending",
      "type": "Blending",
      "detail": "Material.blending",
      "documentation": "Property of Material"
    },
    {
      "name": "side",
      "type": "Side",
      "detail": "Material.side",
      "documentation": "Property of Material"
    },
    {
      "name": "vertexColors",
      "type": "boolean",
      "detail": "Material.vertexColors",
      "documentation": "Property of Material"
    },
    {
      "name": "opacity",
      "type": "number",
      "detail": "Material.opacity",
      "documentation": "Property of Material"
    },
    {
      "name": "transparent",
      "type": "boolean",
      "detail": "Material.transparent",
      "documentation": "Property of Material"
    },
    {
      "name": "alphaHash",
      "type": "boolean",
      "detail": "Material.alphaHash",
      "documentation": "Property of Material"
    },
    {
      "name": "blendSrc",
      "type": "BlendingSrcFactor",
      "detail": "Material.blendSrc",
      "documentation": "Property of Material"
    },
    {
      "name": "blendDst",
      "type": "BlendingDstFactor",
      "detail": "Material.blendDst",
      "documentation": "Property of Material"
    },
    {
      "name": "blendEquation",
      "type": "BlendingEquation",
      "detail": "Material.blendEquation",
      "documentation": "Property of Material"
    },
    {
      "name": "blendSrcAlpha",
      "type": "BlendingSrcFactor | null",
      "detail": "Material.blendSrcAlpha",
      "documentation": "Property of Material"
    },
    {
      "name": "blendDstAlpha",
      "type": "BlendingDstFactor | null",
      "detail": "Material.blendDstAlpha",
      "documentation": "Property of Material"
    },
    {
      "name": "blendEquationAlpha",
      "type": "BlendingEquation | null",
      "detail": "Material.blendEquationAlpha",
      "documentation": "Property of Material"
    },
    {
      "name": "blendColor",
      "type": "Color",
      "detail": "Material.blendColor",
      "documentation": "Property of Material"
    },
    {
      "name": "blendAlpha",
      "type": "number",
      "detail": "Material.blendAlpha",
      "documentation": "Property of Material"
    },
    {
      "name": "depthFunc",
      "type": "DepthModes",
      "detail": "Material.depthFunc",
      "documentation": "Property of Material"
    },
    {
      "name": "depthTest",
      "type": "boolean",
      "detail": "Material.depthTest",
      "documentation": "Property of Material"
    },
    {
      "name": "depthWrite",
      "type": "boolean",
      "detail": "Material.depthWrite",
      "documentation": "Property of Material"
    },
    {
      "name": "stencilWriteMask",
      "type": "number",
      "detail": "Material.stencilWriteMask",
      "documentation": "Property of Material"
    },
    {
      "name": "stencilFunc",
      "type": "StencilFunc",
      "detail": "Material.stencilFunc",
      "documentation": "Property of Material"
    },
    {
      "name": "stencilRef",
      "type": "number",
      "detail": "Material.stencilRef",
      "documentation": "Property of Material"
    },
    {
      "name": "stencilFuncMask",
      "type": "number",
      "detail": "Material.stencilFuncMask",
      "documentation": "Property of Material"
    },
    {
      "name": "stencilFail",
      "type": "StencilOp",
      "detail": "Material.stencilFail",
      "documentation": "Property of Material"
    },
    {
      "name": "stencilZFail",
      "type": "StencilOp",
      "detail": "Material.stencilZFail",
      "documentation": "Property of Material"
    },
    {
      "name": "stencilZPass",
      "type": "StencilOp",
      "detail": "Material.stencilZPass",
      "documentation": "Property of Material"
    },
    {
      "name": "stencilWrite",
      "type": "boolean",
      "detail": "Material.stencilWrite",
      "documentation": "Property of Material"
    },
    {
      "name": "clippingPlanes",
      "type": "Array<Plane> | null",
      "detail": "Material.clippingPlanes",
      "documentation": "Property of Material"
    },
    {
      "name": "clipIntersection",
      "type": "boolean",
      "detail": "Material.clipIntersection",
      "documentation": "Property of Material"
    },
    {
      "name": "clipShadows",
      "type": "boolean",
      "detail": "Material.clipShadows",
      "documentation": "Property of Material"
    },
    {
      "name": "shadowSide",
      "type": "Side | null",
      "detail": "Material.shadowSide",
      "documentation": "Property of Material"
    },
    {
      "name": "colorWrite",
      "type": "boolean",
      "detail": "Material.colorWrite",
      "documentation": "Property of Material"
    },
    {
      "name": "precision",
      "type": "(\"highp\" | \"mediump\" | \"lowp\") | null",
      "detail": "Material.precision",
      "documentation": "Property of Material"
    },
    {
      "name": "polygonOffset",
      "type": "boolean",
      "detail": "Material.polygonOffset",
      "documentation": "Property of Material"
    },
    {
      "name": "polygonOffsetFactor",
      "type": "number",
      "detail": "Material.polygonOffsetFactor",
      "documentation": "Property of Material"
    },
    {
      "name": "polygonOffsetUnits",
      "type": "number",
      "detail": "Material.polygonOffsetUnits",
      "documentation": "Property of Material"
    },
    {
      "name": "dithering",
      "type": "boolean",
      "detail": "Material.dithering",
      "documentation": "Property of Material"
    },
    {
      "name": "alphaToCoverage",
      "type": "boolean",
      "detail": "Material.alphaToCoverage",
      "documentation": "Property of Material"
    },
    {
      "name": "premultipliedAlpha",
      "type": "boolean",
      "detail": "Material.premultipliedAlpha",
      "documentation": "Property of Material"
    },
    {
      "name": "forceSinglePass",
      "type": "boolean",
      "detail": "Material.forceSinglePass",
      "documentation": "Property of Material"
    },
    {
      "name": "allowOverride",
      "type": "boolean",
      "detail": "Material.allowOverride",
      "documentation": "Property of Material"
    },
    {
      "name": "visible",
      "type": "boolean",
      "detail": "Material.visible",
      "documentation": "Property of Material"
    },
    {
      "name": "toneMapped",
      "type": "boolean",
      "detail": "Material.toneMapped",
      "documentation": "Property of Material"
    },
    {
      "name": "userData",
      "type": "Record<string, any>",
      "detail": "Material.userData",
      "documentation": "Property of Material"
    },
    {
      "name": "metadata",
      "type": "{ version: number",
      "detail": "Material.metadata",
      "documentation": "Property of Material"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "Material.uuid",
      "documentation": "Property of Material"
    }
  ],
  "MeshBasicMaterial": [
    {
      "name": "color",
      "type": "Color",
      "detail": "MeshBasicMaterial.color",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "MeshBasicMaterial.map",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "lightMap",
      "type": "Texture | null",
      "detail": "MeshBasicMaterial.lightMap",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "lightMapIntensity",
      "type": "number",
      "detail": "MeshBasicMaterial.lightMapIntensity",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "aoMap",
      "type": "Texture | null",
      "detail": "MeshBasicMaterial.aoMap",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "aoMapIntensity",
      "type": "number",
      "detail": "MeshBasicMaterial.aoMapIntensity",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "specularMap",
      "type": "Texture | null",
      "detail": "MeshBasicMaterial.specularMap",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "alphaMap",
      "type": "Texture | null",
      "detail": "MeshBasicMaterial.alphaMap",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "envMap",
      "type": "Texture | null",
      "detail": "MeshBasicMaterial.envMap",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "envMapRotation",
      "type": "Euler",
      "detail": "MeshBasicMaterial.envMapRotation",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "combine",
      "type": "Combine",
      "detail": "MeshBasicMaterial.combine",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "reflectivity",
      "type": "number",
      "detail": "MeshBasicMaterial.reflectivity",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "refractionRatio",
      "type": "number",
      "detail": "MeshBasicMaterial.refractionRatio",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "wireframe",
      "type": "boolean",
      "detail": "MeshBasicMaterial.wireframe",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "wireframeLinewidth",
      "type": "number",
      "detail": "MeshBasicMaterial.wireframeLinewidth",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "wireframeLinecap",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "MeshBasicMaterial.wireframeLinecap",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "wireframeLinejoin",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "MeshBasicMaterial.wireframeLinejoin",
      "documentation": "Property of MeshBasicMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "MeshBasicMaterial.fog",
      "documentation": "Property of MeshBasicMaterial"
    }
  ],
  "MeshDepthMaterial": [
    {
      "name": "depthPacking",
      "type": "DepthPackingStrategies",
      "detail": "MeshDepthMaterial.depthPacking",
      "documentation": "Property of MeshDepthMaterial"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "MeshDepthMaterial.map",
      "documentation": "Property of MeshDepthMaterial"
    },
    {
      "name": "alphaMap",
      "type": "Texture | null",
      "detail": "MeshDepthMaterial.alphaMap",
      "documentation": "Property of MeshDepthMaterial"
    },
    {
      "name": "displacementMap",
      "type": "Texture | null",
      "detail": "MeshDepthMaterial.displacementMap",
      "documentation": "Property of MeshDepthMaterial"
    },
    {
      "name": "displacementScale",
      "type": "number",
      "detail": "MeshDepthMaterial.displacementScale",
      "documentation": "Property of MeshDepthMaterial"
    },
    {
      "name": "displacementBias",
      "type": "number",
      "detail": "MeshDepthMaterial.displacementBias",
      "documentation": "Property of MeshDepthMaterial"
    },
    {
      "name": "wireframe",
      "type": "boolean",
      "detail": "MeshDepthMaterial.wireframe",
      "documentation": "Property of MeshDepthMaterial"
    },
    {
      "name": "wireframeLinewidth",
      "type": "number",
      "detail": "MeshDepthMaterial.wireframeLinewidth",
      "documentation": "Property of MeshDepthMaterial"
    }
  ],
  "MeshDistanceMaterial": [
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "MeshDistanceMaterial.map",
      "documentation": "Property of MeshDistanceMaterial"
    },
    {
      "name": "alphaMap",
      "type": "Texture | null",
      "detail": "MeshDistanceMaterial.alphaMap",
      "documentation": "Property of MeshDistanceMaterial"
    },
    {
      "name": "displacementMap",
      "type": "Texture | null",
      "detail": "MeshDistanceMaterial.displacementMap",
      "documentation": "Property of MeshDistanceMaterial"
    },
    {
      "name": "displacementScale",
      "type": "number",
      "detail": "MeshDistanceMaterial.displacementScale",
      "documentation": "Property of MeshDistanceMaterial"
    },
    {
      "name": "displacementBias",
      "type": "number",
      "detail": "MeshDistanceMaterial.displacementBias",
      "documentation": "Property of MeshDistanceMaterial"
    }
  ],
  "MeshLambertMaterial": [
    {
      "name": "color",
      "type": "Color",
      "detail": "MeshLambertMaterial.color",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "MeshLambertMaterial.map",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "lightMap",
      "type": "Texture | null",
      "detail": "MeshLambertMaterial.lightMap",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "lightMapIntensity",
      "type": "number",
      "detail": "MeshLambertMaterial.lightMapIntensity",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "aoMap",
      "type": "Texture | null",
      "detail": "MeshLambertMaterial.aoMap",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "aoMapIntensity",
      "type": "number",
      "detail": "MeshLambertMaterial.aoMapIntensity",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "emissive",
      "type": "Color",
      "detail": "MeshLambertMaterial.emissive",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "emissiveIntensity",
      "type": "number",
      "detail": "MeshLambertMaterial.emissiveIntensity",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "emissiveMap",
      "type": "Texture | null",
      "detail": "MeshLambertMaterial.emissiveMap",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "bumpMap",
      "type": "Texture | null",
      "detail": "MeshLambertMaterial.bumpMap",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "bumpScale",
      "type": "number",
      "detail": "MeshLambertMaterial.bumpScale",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "normalMap",
      "type": "Texture | null",
      "detail": "MeshLambertMaterial.normalMap",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "normalMapType",
      "type": "NormalMapTypes",
      "detail": "MeshLambertMaterial.normalMapType",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "normalScale",
      "type": "Vector2",
      "detail": "MeshLambertMaterial.normalScale",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "displacementMap",
      "type": "Texture | null",
      "detail": "MeshLambertMaterial.displacementMap",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "displacementScale",
      "type": "number",
      "detail": "MeshLambertMaterial.displacementScale",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "displacementBias",
      "type": "number",
      "detail": "MeshLambertMaterial.displacementBias",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "specularMap",
      "type": "Texture | null",
      "detail": "MeshLambertMaterial.specularMap",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "alphaMap",
      "type": "Texture | null",
      "detail": "MeshLambertMaterial.alphaMap",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "envMap",
      "type": "Texture | null",
      "detail": "MeshLambertMaterial.envMap",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "envMapRotation",
      "type": "Euler",
      "detail": "MeshLambertMaterial.envMapRotation",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "combine",
      "type": "Combine",
      "detail": "MeshLambertMaterial.combine",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "reflectivity",
      "type": "number",
      "detail": "MeshLambertMaterial.reflectivity",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "refractionRatio",
      "type": "number",
      "detail": "MeshLambertMaterial.refractionRatio",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "wireframe",
      "type": "boolean",
      "detail": "MeshLambertMaterial.wireframe",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "wireframeLinewidth",
      "type": "number",
      "detail": "MeshLambertMaterial.wireframeLinewidth",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "wireframeLinecap",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "MeshLambertMaterial.wireframeLinecap",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "wireframeLinejoin",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "MeshLambertMaterial.wireframeLinejoin",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "flatShading",
      "type": "boolean",
      "detail": "MeshLambertMaterial.flatShading",
      "documentation": "Property of MeshLambertMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "MeshLambertMaterial.fog",
      "documentation": "Property of MeshLambertMaterial"
    }
  ],
  "MeshMatcapMaterial": [
    {
      "name": "color",
      "type": "Color",
      "detail": "MeshMatcapMaterial.color",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "matcap",
      "type": "Texture | null",
      "detail": "MeshMatcapMaterial.matcap",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "MeshMatcapMaterial.map",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "bumpMap",
      "type": "Texture | null",
      "detail": "MeshMatcapMaterial.bumpMap",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "bumpScale",
      "type": "number",
      "detail": "MeshMatcapMaterial.bumpScale",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "normalMap",
      "type": "Texture | null",
      "detail": "MeshMatcapMaterial.normalMap",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "normalMapType",
      "type": "NormalMapTypes",
      "detail": "MeshMatcapMaterial.normalMapType",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "normalScale",
      "type": "Vector2",
      "detail": "MeshMatcapMaterial.normalScale",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "displacementMap",
      "type": "Texture | null",
      "detail": "MeshMatcapMaterial.displacementMap",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "displacementScale",
      "type": "number",
      "detail": "MeshMatcapMaterial.displacementScale",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "displacementBias",
      "type": "number",
      "detail": "MeshMatcapMaterial.displacementBias",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "alphaMap",
      "type": "Texture | null",
      "detail": "MeshMatcapMaterial.alphaMap",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "flatShading",
      "type": "boolean",
      "detail": "MeshMatcapMaterial.flatShading",
      "documentation": "Property of MeshMatcapMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "MeshMatcapMaterial.fog",
      "documentation": "Property of MeshMatcapMaterial"
    }
  ],
  "MeshNormalMaterial": [
    {
      "name": "bumpMap",
      "type": "Texture | null",
      "detail": "MeshNormalMaterial.bumpMap",
      "documentation": "Property of MeshNormalMaterial"
    },
    {
      "name": "bumpScale",
      "type": "number",
      "detail": "MeshNormalMaterial.bumpScale",
      "documentation": "Property of MeshNormalMaterial"
    },
    {
      "name": "normalMap",
      "type": "Texture | null",
      "detail": "MeshNormalMaterial.normalMap",
      "documentation": "Property of MeshNormalMaterial"
    },
    {
      "name": "normalMapType",
      "type": "NormalMapTypes",
      "detail": "MeshNormalMaterial.normalMapType",
      "documentation": "Property of MeshNormalMaterial"
    },
    {
      "name": "normalScale",
      "type": "Vector2",
      "detail": "MeshNormalMaterial.normalScale",
      "documentation": "Property of MeshNormalMaterial"
    },
    {
      "name": "displacementMap",
      "type": "Texture | null",
      "detail": "MeshNormalMaterial.displacementMap",
      "documentation": "Property of MeshNormalMaterial"
    },
    {
      "name": "displacementScale",
      "type": "number",
      "detail": "MeshNormalMaterial.displacementScale",
      "documentation": "Property of MeshNormalMaterial"
    },
    {
      "name": "displacementBias",
      "type": "number",
      "detail": "MeshNormalMaterial.displacementBias",
      "documentation": "Property of MeshNormalMaterial"
    },
    {
      "name": "wireframe",
      "type": "boolean",
      "detail": "MeshNormalMaterial.wireframe",
      "documentation": "Property of MeshNormalMaterial"
    },
    {
      "name": "wireframeLinewidth",
      "type": "number",
      "detail": "MeshNormalMaterial.wireframeLinewidth",
      "documentation": "Property of MeshNormalMaterial"
    },
    {
      "name": "flatShading",
      "type": "boolean",
      "detail": "MeshNormalMaterial.flatShading",
      "documentation": "Property of MeshNormalMaterial"
    }
  ],
  "MeshPhongMaterial": [
    {
      "name": "color",
      "type": "Color",
      "detail": "MeshPhongMaterial.color",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "specular",
      "type": "Color",
      "detail": "MeshPhongMaterial.specular",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "shininess",
      "type": "number",
      "detail": "MeshPhongMaterial.shininess",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "MeshPhongMaterial.map",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "lightMap",
      "type": "Texture | null",
      "detail": "MeshPhongMaterial.lightMap",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "lightMapIntensity",
      "type": "number",
      "detail": "MeshPhongMaterial.lightMapIntensity",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "aoMap",
      "type": "Texture | null",
      "detail": "MeshPhongMaterial.aoMap",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "aoMapIntensity",
      "type": "number",
      "detail": "MeshPhongMaterial.aoMapIntensity",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "emissive",
      "type": "Color",
      "detail": "MeshPhongMaterial.emissive",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "emissiveIntensity",
      "type": "number",
      "detail": "MeshPhongMaterial.emissiveIntensity",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "emissiveMap",
      "type": "Texture | null",
      "detail": "MeshPhongMaterial.emissiveMap",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "bumpMap",
      "type": "Texture | null",
      "detail": "MeshPhongMaterial.bumpMap",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "bumpScale",
      "type": "number",
      "detail": "MeshPhongMaterial.bumpScale",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "normalMap",
      "type": "Texture | null",
      "detail": "MeshPhongMaterial.normalMap",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "normalMapType",
      "type": "NormalMapTypes",
      "detail": "MeshPhongMaterial.normalMapType",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "normalScale",
      "type": "Vector2",
      "detail": "MeshPhongMaterial.normalScale",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "displacementMap",
      "type": "Texture | null",
      "detail": "MeshPhongMaterial.displacementMap",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "displacementScale",
      "type": "number",
      "detail": "MeshPhongMaterial.displacementScale",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "displacementBias",
      "type": "number",
      "detail": "MeshPhongMaterial.displacementBias",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "specularMap",
      "type": "Texture | null",
      "detail": "MeshPhongMaterial.specularMap",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "alphaMap",
      "type": "Texture | null",
      "detail": "MeshPhongMaterial.alphaMap",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "envMap",
      "type": "Texture | null",
      "detail": "MeshPhongMaterial.envMap",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "envMapRotation",
      "type": "Euler",
      "detail": "MeshPhongMaterial.envMapRotation",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "combine",
      "type": "Combine",
      "detail": "MeshPhongMaterial.combine",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "reflectivity",
      "type": "number",
      "detail": "MeshPhongMaterial.reflectivity",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "refractionRatio",
      "type": "number",
      "detail": "MeshPhongMaterial.refractionRatio",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "wireframe",
      "type": "boolean",
      "detail": "MeshPhongMaterial.wireframe",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "wireframeLinewidth",
      "type": "number",
      "detail": "MeshPhongMaterial.wireframeLinewidth",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "wireframeLinecap",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "MeshPhongMaterial.wireframeLinecap",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "wireframeLinejoin",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "MeshPhongMaterial.wireframeLinejoin",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "flatShading",
      "type": "boolean",
      "detail": "MeshPhongMaterial.flatShading",
      "documentation": "Property of MeshPhongMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "MeshPhongMaterial.fog",
      "documentation": "Property of MeshPhongMaterial"
    }
  ],
  "MeshPhysicalMaterial": [
    {
      "name": "anisotropyRotation",
      "type": "number",
      "detail": "MeshPhysicalMaterial.anisotropyRotation",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "anisotropyMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.anisotropyMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "clearcoatMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.clearcoatMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "clearcoatRoughness",
      "type": "number",
      "detail": "MeshPhysicalMaterial.clearcoatRoughness",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "clearcoatRoughnessMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.clearcoatRoughnessMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "clearcoatNormalScale",
      "type": "Vector2",
      "detail": "MeshPhysicalMaterial.clearcoatNormalScale",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "clearcoatNormalMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.clearcoatNormalMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "ior",
      "type": "number",
      "detail": "MeshPhysicalMaterial.ior",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "iridescenceMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.iridescenceMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "iridescenceIOR",
      "type": "number",
      "detail": "MeshPhysicalMaterial.iridescenceIOR",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "iridescenceThicknessRange",
      "type": "[number, number]",
      "detail": "MeshPhysicalMaterial.iridescenceThicknessRange",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "iridescenceThicknessMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.iridescenceThicknessMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "sheenColor",
      "type": "Color",
      "detail": "MeshPhysicalMaterial.sheenColor",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "sheenColorMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.sheenColorMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "sheenRoughness",
      "type": "number",
      "detail": "MeshPhysicalMaterial.sheenRoughness",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "sheenRoughnessMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.sheenRoughnessMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "transmissionMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.transmissionMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "thickness",
      "type": "number",
      "detail": "MeshPhysicalMaterial.thickness",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "thicknessMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.thicknessMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "attenuationDistance",
      "type": "number",
      "detail": "MeshPhysicalMaterial.attenuationDistance",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "attenuationColor",
      "type": "Color",
      "detail": "MeshPhysicalMaterial.attenuationColor",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "specularIntensity",
      "type": "number",
      "detail": "MeshPhysicalMaterial.specularIntensity",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "specularIntensityMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.specularIntensityMap",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "specularColor",
      "type": "Color",
      "detail": "MeshPhysicalMaterial.specularColor",
      "documentation": "Property of MeshPhysicalMaterial"
    },
    {
      "name": "specularColorMap",
      "type": "Texture | null",
      "detail": "MeshPhysicalMaterial.specularColorMap",
      "documentation": "Property of MeshPhysicalMaterial"
    }
  ],
  "MeshStandardMaterial": [
    {
      "name": "color",
      "type": "Color",
      "detail": "MeshStandardMaterial.color",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "roughness",
      "type": "number",
      "detail": "MeshStandardMaterial.roughness",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "metalness",
      "type": "number",
      "detail": "MeshStandardMaterial.metalness",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.map",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "lightMap",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.lightMap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "lightMapIntensity",
      "type": "number",
      "detail": "MeshStandardMaterial.lightMapIntensity",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "aoMap",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.aoMap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "aoMapIntensity",
      "type": "number",
      "detail": "MeshStandardMaterial.aoMapIntensity",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "emissive",
      "type": "Color",
      "detail": "MeshStandardMaterial.emissive",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "emissiveIntensity",
      "type": "number",
      "detail": "MeshStandardMaterial.emissiveIntensity",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "emissiveMap",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.emissiveMap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "bumpMap",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.bumpMap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "bumpScale",
      "type": "number",
      "detail": "MeshStandardMaterial.bumpScale",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "normalMap",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.normalMap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "normalMapType",
      "type": "NormalMapTypes",
      "detail": "MeshStandardMaterial.normalMapType",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "normalScale",
      "type": "Vector2",
      "detail": "MeshStandardMaterial.normalScale",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "displacementMap",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.displacementMap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "displacementScale",
      "type": "number",
      "detail": "MeshStandardMaterial.displacementScale",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "displacementBias",
      "type": "number",
      "detail": "MeshStandardMaterial.displacementBias",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "roughnessMap",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.roughnessMap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "metalnessMap",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.metalnessMap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "alphaMap",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.alphaMap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "envMap",
      "type": "Texture | null",
      "detail": "MeshStandardMaterial.envMap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "envMapRotation",
      "type": "Euler",
      "detail": "MeshStandardMaterial.envMapRotation",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "envMapIntensity",
      "type": "number",
      "detail": "MeshStandardMaterial.envMapIntensity",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "wireframe",
      "type": "boolean",
      "detail": "MeshStandardMaterial.wireframe",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "wireframeLinewidth",
      "type": "number",
      "detail": "MeshStandardMaterial.wireframeLinewidth",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "wireframeLinecap",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "MeshStandardMaterial.wireframeLinecap",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "wireframeLinejoin",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "MeshStandardMaterial.wireframeLinejoin",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "flatShading",
      "type": "boolean",
      "detail": "MeshStandardMaterial.flatShading",
      "documentation": "Property of MeshStandardMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "MeshStandardMaterial.fog",
      "documentation": "Property of MeshStandardMaterial"
    }
  ],
  "MeshToonMaterial": [
    {
      "name": "color",
      "type": "Color",
      "detail": "MeshToonMaterial.color",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "MeshToonMaterial.map",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "gradientMap",
      "type": "Texture | null",
      "detail": "MeshToonMaterial.gradientMap",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "lightMap",
      "type": "Texture | null",
      "detail": "MeshToonMaterial.lightMap",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "lightMapIntensity",
      "type": "number",
      "detail": "MeshToonMaterial.lightMapIntensity",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "aoMap",
      "type": "Texture | null",
      "detail": "MeshToonMaterial.aoMap",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "aoMapIntensity",
      "type": "number",
      "detail": "MeshToonMaterial.aoMapIntensity",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "emissive",
      "type": "Color",
      "detail": "MeshToonMaterial.emissive",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "emissiveIntensity",
      "type": "number",
      "detail": "MeshToonMaterial.emissiveIntensity",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "emissiveMap",
      "type": "Texture | null",
      "detail": "MeshToonMaterial.emissiveMap",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "bumpMap",
      "type": "Texture | null",
      "detail": "MeshToonMaterial.bumpMap",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "bumpScale",
      "type": "number",
      "detail": "MeshToonMaterial.bumpScale",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "normalMap",
      "type": "Texture | null",
      "detail": "MeshToonMaterial.normalMap",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "normalMapType",
      "type": "NormalMapTypes",
      "detail": "MeshToonMaterial.normalMapType",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "normalScale",
      "type": "Vector2",
      "detail": "MeshToonMaterial.normalScale",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "displacementMap",
      "type": "Texture | null",
      "detail": "MeshToonMaterial.displacementMap",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "displacementScale",
      "type": "number",
      "detail": "MeshToonMaterial.displacementScale",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "displacementBias",
      "type": "number",
      "detail": "MeshToonMaterial.displacementBias",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "alphaMap",
      "type": "Texture | null",
      "detail": "MeshToonMaterial.alphaMap",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "wireframe",
      "type": "boolean",
      "detail": "MeshToonMaterial.wireframe",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "wireframeLinewidth",
      "type": "number",
      "detail": "MeshToonMaterial.wireframeLinewidth",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "wireframeLinecap",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "MeshToonMaterial.wireframeLinecap",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "wireframeLinejoin",
      "type": "\"round\" | \"bevel\" | \"miter\"",
      "detail": "MeshToonMaterial.wireframeLinejoin",
      "documentation": "Property of MeshToonMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "MeshToonMaterial.fog",
      "documentation": "Property of MeshToonMaterial"
    }
  ],
  "PointsMaterial": [
    {
      "name": "color",
      "type": "Color",
      "detail": "PointsMaterial.color",
      "documentation": "Property of PointsMaterial"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "PointsMaterial.map",
      "documentation": "Property of PointsMaterial"
    },
    {
      "name": "alphaMap",
      "type": "Texture | null",
      "detail": "PointsMaterial.alphaMap",
      "documentation": "Property of PointsMaterial"
    },
    {
      "name": "size",
      "type": "number",
      "detail": "PointsMaterial.size",
      "documentation": "Property of PointsMaterial"
    },
    {
      "name": "sizeAttenuation",
      "type": "boolean",
      "detail": "PointsMaterial.sizeAttenuation",
      "documentation": "Property of PointsMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "PointsMaterial.fog",
      "documentation": "Property of PointsMaterial"
    }
  ],
  "ShaderMaterial": [
    {
      "name": "defines",
      "type": "{ [key: string]: any }",
      "detail": "ShaderMaterial.defines",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "uniforms",
      "type": "{ [uniform: string]: IUniform }",
      "detail": "ShaderMaterial.uniforms",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "uniformsGroups",
      "type": "Array<UniformsGroup>",
      "detail": "ShaderMaterial.uniformsGroups",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "vertexShader",
      "type": "string",
      "detail": "ShaderMaterial.vertexShader",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "fragmentShader",
      "type": "string",
      "detail": "ShaderMaterial.fragmentShader",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "linewidth",
      "type": "number",
      "detail": "ShaderMaterial.linewidth",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "wireframe",
      "type": "boolean",
      "detail": "ShaderMaterial.wireframe",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "wireframeLinewidth",
      "type": "number",
      "detail": "ShaderMaterial.wireframeLinewidth",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "ShaderMaterial.fog",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "lights",
      "type": "boolean",
      "detail": "ShaderMaterial.lights",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "clipping",
      "type": "boolean",
      "detail": "ShaderMaterial.clipping",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "extensions",
      "type": "{\n        clipCullDistance: boolean",
      "detail": "ShaderMaterial.extensions",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "defaultAttributeValues",
      "type": "{\n        color: [number, number, number]",
      "detail": "ShaderMaterial.defaultAttributeValues",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "index0AttributeName",
      "type": "string | undefined",
      "detail": "ShaderMaterial.index0AttributeName",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "uniformsNeedUpdate",
      "type": "boolean",
      "detail": "ShaderMaterial.uniformsNeedUpdate",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "glslVersion",
      "type": "GLSLVersion | null",
      "detail": "ShaderMaterial.glslVersion",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "value",
      "type": "string",
      "detail": "ShaderMaterial.value",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "value",
      "type": "number",
      "detail": "ShaderMaterial.value",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "value",
      "type": "Vector2Tuple",
      "detail": "ShaderMaterial.value",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "value",
      "type": "Vector3Tuple",
      "detail": "ShaderMaterial.value",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "value",
      "type": "Vector4Tuple",
      "detail": "ShaderMaterial.value",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "value",
      "type": "Matrix3Tuple",
      "detail": "ShaderMaterial.value",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "value",
      "type": "Matrix4Tuple",
      "detail": "ShaderMaterial.value",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "value",
      "type": "unknown",
      "detail": "ShaderMaterial.value",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "glslVersion",
      "type": "number | null",
      "detail": "ShaderMaterial.glslVersion",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "uniforms",
      "type": "Record<string, ShaderMaterialUniformJSON>",
      "detail": "ShaderMaterial.uniforms",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "vertexShader",
      "type": "string",
      "detail": "ShaderMaterial.vertexShader",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "fragmentShader",
      "type": "string",
      "detail": "ShaderMaterial.fragmentShader",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "lights",
      "type": "boolean",
      "detail": "ShaderMaterial.lights",
      "documentation": "Property of ShaderMaterial"
    },
    {
      "name": "clipping",
      "type": "boolean",
      "detail": "ShaderMaterial.clipping",
      "documentation": "Property of ShaderMaterial"
    }
  ],
  "ShadowMaterial": [
    {
      "name": "color",
      "type": "Color",
      "detail": "ShadowMaterial.color",
      "documentation": "Property of ShadowMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "ShadowMaterial.fog",
      "documentation": "Property of ShadowMaterial"
    }
  ],
  "SpriteMaterial": [
    {
      "name": "color",
      "type": "Color",
      "detail": "SpriteMaterial.color",
      "documentation": "Property of SpriteMaterial"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "SpriteMaterial.map",
      "documentation": "Property of SpriteMaterial"
    },
    {
      "name": "alphaMap",
      "type": "Texture | null",
      "detail": "SpriteMaterial.alphaMap",
      "documentation": "Property of SpriteMaterial"
    },
    {
      "name": "rotation",
      "type": "number",
      "detail": "SpriteMaterial.rotation",
      "documentation": "Property of SpriteMaterial"
    },
    {
      "name": "sizeAttenuation",
      "type": "boolean",
      "detail": "SpriteMaterial.sizeAttenuation",
      "documentation": "Property of SpriteMaterial"
    },
    {
      "name": "fog",
      "type": "boolean",
      "detail": "SpriteMaterial.fog",
      "documentation": "Property of SpriteMaterial"
    }
  ],
  "DirectionalLight": [
    {
      "name": "shadow",
      "type": "DirectionalLightShadow",
      "detail": "DirectionalLight.shadow",
      "documentation": "Property of DirectionalLight"
    },
    {
      "name": "target",
      "type": "Object3D",
      "detail": "DirectionalLight.target",
      "documentation": "Property of DirectionalLight"
    }
  ],
  "DirectionalLightShadow": [
    {
      "name": "camera",
      "type": "OrthographicCamera",
      "detail": "DirectionalLightShadow.camera",
      "documentation": "Property of DirectionalLightShadow"
    }
  ],
  "HemisphereLight": [
    {
      "name": "groundColor",
      "type": "Color",
      "detail": "HemisphereLight.groundColor",
      "documentation": "Property of HemisphereLight"
    }
  ],
  "LightProbe": [
    {
      "name": "sh",
      "type": "SphericalHarmonics3",
      "detail": "LightProbe.sh",
      "documentation": "Property of LightProbe"
    }
  ],
  "LightShadow": [
    {
      "name": "camera",
      "type": "Omit<Object3DJSONObject, \"matrix\">",
      "detail": "LightShadow.camera",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "camera",
      "type": "TCamera",
      "detail": "LightShadow.camera",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "intensity",
      "type": "number",
      "detail": "LightShadow.intensity",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "bias",
      "type": "number",
      "detail": "LightShadow.bias",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "normalBias",
      "type": "number",
      "detail": "LightShadow.normalBias",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "radius",
      "type": "number",
      "detail": "LightShadow.radius",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "blurSamples",
      "type": "number",
      "detail": "LightShadow.blurSamples",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "mapSize",
      "type": "Vector2",
      "detail": "LightShadow.mapSize",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "mapType",
      "type": "TextureDataType",
      "detail": "LightShadow.mapType",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "map",
      "type": "WebGLRenderTarget | null",
      "detail": "LightShadow.map",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "mapPass",
      "type": "WebGLRenderTarget | null",
      "detail": "LightShadow.mapPass",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "matrix",
      "type": "Matrix4",
      "detail": "LightShadow.matrix",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "autoUpdate",
      "type": "boolean",
      "detail": "LightShadow.autoUpdate",
      "documentation": "Property of LightShadow"
    },
    {
      "name": "needsUpdate",
      "type": "boolean",
      "detail": "LightShadow.needsUpdate",
      "documentation": "Property of LightShadow"
    }
  ],
  "PointLight": [
    {
      "name": "intensity",
      "type": "number",
      "detail": "PointLight.intensity",
      "documentation": "Property of PointLight"
    },
    {
      "name": "distance",
      "type": "number",
      "detail": "PointLight.distance",
      "documentation": "Property of PointLight"
    },
    {
      "name": "castShadow",
      "type": "boolean",
      "detail": "PointLight.castShadow",
      "documentation": "Property of PointLight"
    },
    {
      "name": "decay",
      "type": "number",
      "detail": "PointLight.decay",
      "documentation": "Property of PointLight"
    },
    {
      "name": "shadow",
      "type": "PointLightShadow",
      "detail": "PointLight.shadow",
      "documentation": "Property of PointLight"
    },
    {
      "name": "power",
      "type": "number",
      "detail": "PointLight.power",
      "documentation": "Property of PointLight"
    }
  ],
  "RectAreaLight": [
    {
      "name": "width",
      "type": "number",
      "detail": "RectAreaLight.width",
      "documentation": "Property of RectAreaLight"
    },
    {
      "name": "height",
      "type": "number",
      "detail": "RectAreaLight.height",
      "documentation": "Property of RectAreaLight"
    },
    {
      "name": "intensity",
      "type": "number",
      "detail": "RectAreaLight.intensity",
      "documentation": "Property of RectAreaLight"
    },
    {
      "name": "power",
      "type": "number",
      "detail": "RectAreaLight.power",
      "documentation": "Property of RectAreaLight"
    }
  ],
  "SpotLight": [
    {
      "name": "target",
      "type": "Object3D",
      "detail": "SpotLight.target",
      "documentation": "Property of SpotLight"
    },
    {
      "name": "intensity",
      "type": "number",
      "detail": "SpotLight.intensity",
      "documentation": "Property of SpotLight"
    },
    {
      "name": "distance",
      "type": "number",
      "detail": "SpotLight.distance",
      "documentation": "Property of SpotLight"
    },
    {
      "name": "angle",
      "type": "number",
      "detail": "SpotLight.angle",
      "documentation": "Property of SpotLight"
    },
    {
      "name": "decay",
      "type": "number",
      "detail": "SpotLight.decay",
      "documentation": "Property of SpotLight"
    },
    {
      "name": "shadow",
      "type": "SpotLightShadow",
      "detail": "SpotLight.shadow",
      "documentation": "Property of SpotLight"
    },
    {
      "name": "power",
      "type": "number",
      "detail": "SpotLight.power",
      "documentation": "Property of SpotLight"
    },
    {
      "name": "penumbra",
      "type": "number",
      "detail": "SpotLight.penumbra",
      "documentation": "Property of SpotLight"
    },
    {
      "name": "map",
      "type": "Texture | null",
      "detail": "SpotLight.map",
      "documentation": "Property of SpotLight"
    }
  ],
  "SpotLightShadow": [
    {
      "name": "camera",
      "type": "PerspectiveCamera",
      "detail": "SpotLightShadow.camera",
      "documentation": "Property of SpotLightShadow"
    },
    {
      "name": "focus",
      "type": "number",
      "detail": "SpotLightShadow.focus",
      "documentation": "Property of SpotLightShadow"
    },
    {
      "name": "aspect",
      "type": "number",
      "detail": "SpotLightShadow.aspect",
      "documentation": "Property of SpotLightShadow"
    }
  ],
  "FileLoader": [
    {
      "name": "mimeType",
      "type": "string",
      "detail": "FileLoader.mimeType",
      "documentation": "Property of FileLoader"
    },
    {
      "name": "responseType",
      "type": "string",
      "detail": "FileLoader.responseType",
      "documentation": "Property of FileLoader"
    }
  ],
  "ImageBitmapLoader": [
    {
      "name": "options",
      "type": "ImageBitmapOptions",
      "detail": "ImageBitmapLoader.options",
      "documentation": "Property of ImageBitmapLoader"
    }
  ],
  "Loader": [
    {
      "name": "crossOrigin",
      "type": "string",
      "detail": "Loader.crossOrigin",
      "documentation": "Property of Loader"
    },
    {
      "name": "withCredentials",
      "type": "boolean",
      "detail": "Loader.withCredentials",
      "documentation": "Property of Loader"
    },
    {
      "name": "path",
      "type": "string",
      "detail": "Loader.path",
      "documentation": "Property of Loader"
    },
    {
      "name": "resourcePath",
      "type": "string",
      "detail": "Loader.resourcePath",
      "documentation": "Property of Loader"
    },
    {
      "name": "manager",
      "type": "LoadingManager",
      "detail": "Loader.manager",
      "documentation": "Property of Loader"
    },
    {
      "name": "requestHeader",
      "type": "{ [header: string]: string }",
      "detail": "Loader.requestHeader",
      "documentation": "Property of Loader"
    }
  ],
  "MaterialLoader": [
    {
      "name": "textures",
      "type": "{ [key: string]: Texture }",
      "detail": "MaterialLoader.textures",
      "documentation": "Property of MaterialLoader"
    }
  ],
  "Box2": [
    {
      "name": "min",
      "type": "Vector2",
      "detail": "Box2.min",
      "documentation": "Property of Box2"
    },
    {
      "name": "max",
      "type": "Vector2",
      "detail": "Box2.max",
      "documentation": "Property of Box2"
    }
  ],
  "Box3": [
    {
      "name": "min",
      "type": "Vector3",
      "detail": "Box3.min",
      "documentation": "Property of Box3"
    },
    {
      "name": "max",
      "type": "Vector3",
      "detail": "Box3.max",
      "documentation": "Property of Box3"
    },
    {
      "name": "min",
      "type": "number[]",
      "detail": "Box3.min",
      "documentation": "Property of Box3"
    },
    {
      "name": "max",
      "type": "number[]",
      "detail": "Box3.max",
      "documentation": "Property of Box3"
    }
  ],
  "Color": [
    {
      "name": "aliceblue",
      "type": "0xf0f8ff",
      "detail": "Color.aliceblue",
      "documentation": "Property of Color"
    },
    {
      "name": "antiquewhite",
      "type": "0xfaebd7",
      "detail": "Color.antiquewhite",
      "documentation": "Property of Color"
    },
    {
      "name": "aqua",
      "type": "0x00ffff",
      "detail": "Color.aqua",
      "documentation": "Property of Color"
    },
    {
      "name": "aquamarine",
      "type": "0x7fffd4",
      "detail": "Color.aquamarine",
      "documentation": "Property of Color"
    },
    {
      "name": "azure",
      "type": "0xf0ffff",
      "detail": "Color.azure",
      "documentation": "Property of Color"
    },
    {
      "name": "beige",
      "type": "0xf5f5dc",
      "detail": "Color.beige",
      "documentation": "Property of Color"
    },
    {
      "name": "bisque",
      "type": "0xffe4c4",
      "detail": "Color.bisque",
      "documentation": "Property of Color"
    },
    {
      "name": "black",
      "type": "0x000000",
      "detail": "Color.black",
      "documentation": "Property of Color"
    },
    {
      "name": "blanchedalmond",
      "type": "0xffebcd",
      "detail": "Color.blanchedalmond",
      "documentation": "Property of Color"
    },
    {
      "name": "blue",
      "type": "0x0000ff",
      "detail": "Color.blue",
      "documentation": "Property of Color"
    },
    {
      "name": "blueviolet",
      "type": "0x8a2be2",
      "detail": "Color.blueviolet",
      "documentation": "Property of Color"
    },
    {
      "name": "brown",
      "type": "0xa52a2a",
      "detail": "Color.brown",
      "documentation": "Property of Color"
    },
    {
      "name": "burlywood",
      "type": "0xdeb887",
      "detail": "Color.burlywood",
      "documentation": "Property of Color"
    },
    {
      "name": "cadetblue",
      "type": "0x5f9ea0",
      "detail": "Color.cadetblue",
      "documentation": "Property of Color"
    },
    {
      "name": "chartreuse",
      "type": "0x7fff00",
      "detail": "Color.chartreuse",
      "documentation": "Property of Color"
    },
    {
      "name": "chocolate",
      "type": "0xd2691e",
      "detail": "Color.chocolate",
      "documentation": "Property of Color"
    },
    {
      "name": "coral",
      "type": "0xff7f50",
      "detail": "Color.coral",
      "documentation": "Property of Color"
    },
    {
      "name": "cornflowerblue",
      "type": "0x6495ed",
      "detail": "Color.cornflowerblue",
      "documentation": "Property of Color"
    },
    {
      "name": "cornsilk",
      "type": "0xfff8dc",
      "detail": "Color.cornsilk",
      "documentation": "Property of Color"
    },
    {
      "name": "crimson",
      "type": "0xdc143c",
      "detail": "Color.crimson",
      "documentation": "Property of Color"
    },
    {
      "name": "cyan",
      "type": "0x00ffff",
      "detail": "Color.cyan",
      "documentation": "Property of Color"
    },
    {
      "name": "darkblue",
      "type": "0x00008b",
      "detail": "Color.darkblue",
      "documentation": "Property of Color"
    },
    {
      "name": "darkcyan",
      "type": "0x008b8b",
      "detail": "Color.darkcyan",
      "documentation": "Property of Color"
    },
    {
      "name": "darkgoldenrod",
      "type": "0xb8860b",
      "detail": "Color.darkgoldenrod",
      "documentation": "Property of Color"
    },
    {
      "name": "darkgray",
      "type": "0xa9a9a9",
      "detail": "Color.darkgray",
      "documentation": "Property of Color"
    },
    {
      "name": "darkgreen",
      "type": "0x006400",
      "detail": "Color.darkgreen",
      "documentation": "Property of Color"
    },
    {
      "name": "darkgrey",
      "type": "0xa9a9a9",
      "detail": "Color.darkgrey",
      "documentation": "Property of Color"
    },
    {
      "name": "darkkhaki",
      "type": "0xbdb76b",
      "detail": "Color.darkkhaki",
      "documentation": "Property of Color"
    },
    {
      "name": "darkmagenta",
      "type": "0x8b008b",
      "detail": "Color.darkmagenta",
      "documentation": "Property of Color"
    },
    {
      "name": "darkolivegreen",
      "type": "0x556b2f",
      "detail": "Color.darkolivegreen",
      "documentation": "Property of Color"
    },
    {
      "name": "darkorange",
      "type": "0xff8c00",
      "detail": "Color.darkorange",
      "documentation": "Property of Color"
    },
    {
      "name": "darkorchid",
      "type": "0x9932cc",
      "detail": "Color.darkorchid",
      "documentation": "Property of Color"
    },
    {
      "name": "darkred",
      "type": "0x8b0000",
      "detail": "Color.darkred",
      "documentation": "Property of Color"
    },
    {
      "name": "darksalmon",
      "type": "0xe9967a",
      "detail": "Color.darksalmon",
      "documentation": "Property of Color"
    },
    {
      "name": "darkseagreen",
      "type": "0x8fbc8f",
      "detail": "Color.darkseagreen",
      "documentation": "Property of Color"
    },
    {
      "name": "darkslateblue",
      "type": "0x483d8b",
      "detail": "Color.darkslateblue",
      "documentation": "Property of Color"
    },
    {
      "name": "darkslategray",
      "type": "0x2f4f4f",
      "detail": "Color.darkslategray",
      "documentation": "Property of Color"
    },
    {
      "name": "darkslategrey",
      "type": "0x2f4f4f",
      "detail": "Color.darkslategrey",
      "documentation": "Property of Color"
    },
    {
      "name": "darkturquoise",
      "type": "0x00ced1",
      "detail": "Color.darkturquoise",
      "documentation": "Property of Color"
    },
    {
      "name": "darkviolet",
      "type": "0x9400d3",
      "detail": "Color.darkviolet",
      "documentation": "Property of Color"
    },
    {
      "name": "deeppink",
      "type": "0xff1493",
      "detail": "Color.deeppink",
      "documentation": "Property of Color"
    },
    {
      "name": "deepskyblue",
      "type": "0x00bfff",
      "detail": "Color.deepskyblue",
      "documentation": "Property of Color"
    },
    {
      "name": "dimgray",
      "type": "0x696969",
      "detail": "Color.dimgray",
      "documentation": "Property of Color"
    },
    {
      "name": "dimgrey",
      "type": "0x696969",
      "detail": "Color.dimgrey",
      "documentation": "Property of Color"
    },
    {
      "name": "dodgerblue",
      "type": "0x1e90ff",
      "detail": "Color.dodgerblue",
      "documentation": "Property of Color"
    },
    {
      "name": "firebrick",
      "type": "0xb22222",
      "detail": "Color.firebrick",
      "documentation": "Property of Color"
    },
    {
      "name": "floralwhite",
      "type": "0xfffaf0",
      "detail": "Color.floralwhite",
      "documentation": "Property of Color"
    },
    {
      "name": "forestgreen",
      "type": "0x228b22",
      "detail": "Color.forestgreen",
      "documentation": "Property of Color"
    },
    {
      "name": "fuchsia",
      "type": "0xff00ff",
      "detail": "Color.fuchsia",
      "documentation": "Property of Color"
    },
    {
      "name": "gainsboro",
      "type": "0xdcdcdc",
      "detail": "Color.gainsboro",
      "documentation": "Property of Color"
    },
    {
      "name": "ghostwhite",
      "type": "0xf8f8ff",
      "detail": "Color.ghostwhite",
      "documentation": "Property of Color"
    },
    {
      "name": "gold",
      "type": "0xffd700",
      "detail": "Color.gold",
      "documentation": "Property of Color"
    },
    {
      "name": "goldenrod",
      "type": "0xdaa520",
      "detail": "Color.goldenrod",
      "documentation": "Property of Color"
    },
    {
      "name": "gray",
      "type": "0x808080",
      "detail": "Color.gray",
      "documentation": "Property of Color"
    },
    {
      "name": "green",
      "type": "0x008000",
      "detail": "Color.green",
      "documentation": "Property of Color"
    },
    {
      "name": "greenyellow",
      "type": "0xadff2f",
      "detail": "Color.greenyellow",
      "documentation": "Property of Color"
    },
    {
      "name": "grey",
      "type": "0x808080",
      "detail": "Color.grey",
      "documentation": "Property of Color"
    },
    {
      "name": "honeydew",
      "type": "0xf0fff0",
      "detail": "Color.honeydew",
      "documentation": "Property of Color"
    },
    {
      "name": "hotpink",
      "type": "0xff69b4",
      "detail": "Color.hotpink",
      "documentation": "Property of Color"
    },
    {
      "name": "indianred",
      "type": "0xcd5c5c",
      "detail": "Color.indianred",
      "documentation": "Property of Color"
    },
    {
      "name": "indigo",
      "type": "0x4b0082",
      "detail": "Color.indigo",
      "documentation": "Property of Color"
    },
    {
      "name": "ivory",
      "type": "0xfffff0",
      "detail": "Color.ivory",
      "documentation": "Property of Color"
    },
    {
      "name": "khaki",
      "type": "0xf0e68c",
      "detail": "Color.khaki",
      "documentation": "Property of Color"
    },
    {
      "name": "lavender",
      "type": "0xe6e6fa",
      "detail": "Color.lavender",
      "documentation": "Property of Color"
    },
    {
      "name": "lavenderblush",
      "type": "0xfff0f5",
      "detail": "Color.lavenderblush",
      "documentation": "Property of Color"
    },
    {
      "name": "lawngreen",
      "type": "0x7cfc00",
      "detail": "Color.lawngreen",
      "documentation": "Property of Color"
    },
    {
      "name": "lemonchiffon",
      "type": "0xfffacd",
      "detail": "Color.lemonchiffon",
      "documentation": "Property of Color"
    },
    {
      "name": "lightblue",
      "type": "0xadd8e6",
      "detail": "Color.lightblue",
      "documentation": "Property of Color"
    },
    {
      "name": "lightcoral",
      "type": "0xf08080",
      "detail": "Color.lightcoral",
      "documentation": "Property of Color"
    },
    {
      "name": "lightcyan",
      "type": "0xe0ffff",
      "detail": "Color.lightcyan",
      "documentation": "Property of Color"
    },
    {
      "name": "lightgoldenrodyellow",
      "type": "0xfafad2",
      "detail": "Color.lightgoldenrodyellow",
      "documentation": "Property of Color"
    },
    {
      "name": "lightgray",
      "type": "0xd3d3d3",
      "detail": "Color.lightgray",
      "documentation": "Property of Color"
    },
    {
      "name": "lightgreen",
      "type": "0x90ee90",
      "detail": "Color.lightgreen",
      "documentation": "Property of Color"
    },
    {
      "name": "lightgrey",
      "type": "0xd3d3d3",
      "detail": "Color.lightgrey",
      "documentation": "Property of Color"
    },
    {
      "name": "lightpink",
      "type": "0xffb6c1",
      "detail": "Color.lightpink",
      "documentation": "Property of Color"
    },
    {
      "name": "lightsalmon",
      "type": "0xffa07a",
      "detail": "Color.lightsalmon",
      "documentation": "Property of Color"
    },
    {
      "name": "lightseagreen",
      "type": "0x20b2aa",
      "detail": "Color.lightseagreen",
      "documentation": "Property of Color"
    },
    {
      "name": "lightskyblue",
      "type": "0x87cefa",
      "detail": "Color.lightskyblue",
      "documentation": "Property of Color"
    },
    {
      "name": "lightslategray",
      "type": "0x778899",
      "detail": "Color.lightslategray",
      "documentation": "Property of Color"
    },
    {
      "name": "lightslategrey",
      "type": "0x778899",
      "detail": "Color.lightslategrey",
      "documentation": "Property of Color"
    },
    {
      "name": "lightsteelblue",
      "type": "0xb0c4de",
      "detail": "Color.lightsteelblue",
      "documentation": "Property of Color"
    },
    {
      "name": "lightyellow",
      "type": "0xffffe0",
      "detail": "Color.lightyellow",
      "documentation": "Property of Color"
    },
    {
      "name": "lime",
      "type": "0x00ff00",
      "detail": "Color.lime",
      "documentation": "Property of Color"
    },
    {
      "name": "limegreen",
      "type": "0x32cd32",
      "detail": "Color.limegreen",
      "documentation": "Property of Color"
    },
    {
      "name": "linen",
      "type": "0xfaf0e6",
      "detail": "Color.linen",
      "documentation": "Property of Color"
    },
    {
      "name": "magenta",
      "type": "0xff00ff",
      "detail": "Color.magenta",
      "documentation": "Property of Color"
    },
    {
      "name": "maroon",
      "type": "0x800000",
      "detail": "Color.maroon",
      "documentation": "Property of Color"
    },
    {
      "name": "mediumaquamarine",
      "type": "0x66cdaa",
      "detail": "Color.mediumaquamarine",
      "documentation": "Property of Color"
    },
    {
      "name": "mediumblue",
      "type": "0x0000cd",
      "detail": "Color.mediumblue",
      "documentation": "Property of Color"
    },
    {
      "name": "mediumorchid",
      "type": "0xba55d3",
      "detail": "Color.mediumorchid",
      "documentation": "Property of Color"
    },
    {
      "name": "mediumpurple",
      "type": "0x9370db",
      "detail": "Color.mediumpurple",
      "documentation": "Property of Color"
    },
    {
      "name": "mediumseagreen",
      "type": "0x3cb371",
      "detail": "Color.mediumseagreen",
      "documentation": "Property of Color"
    },
    {
      "name": "mediumslateblue",
      "type": "0x7b68ee",
      "detail": "Color.mediumslateblue",
      "documentation": "Property of Color"
    },
    {
      "name": "mediumspringgreen",
      "type": "0x00fa9a",
      "detail": "Color.mediumspringgreen",
      "documentation": "Property of Color"
    },
    {
      "name": "mediumturquoise",
      "type": "0x48d1cc",
      "detail": "Color.mediumturquoise",
      "documentation": "Property of Color"
    },
    {
      "name": "mediumvioletred",
      "type": "0xc71585",
      "detail": "Color.mediumvioletred",
      "documentation": "Property of Color"
    },
    {
      "name": "midnightblue",
      "type": "0x191970",
      "detail": "Color.midnightblue",
      "documentation": "Property of Color"
    },
    {
      "name": "mintcream",
      "type": "0xf5fffa",
      "detail": "Color.mintcream",
      "documentation": "Property of Color"
    },
    {
      "name": "mistyrose",
      "type": "0xffe4e1",
      "detail": "Color.mistyrose",
      "documentation": "Property of Color"
    },
    {
      "name": "moccasin",
      "type": "0xffe4b5",
      "detail": "Color.moccasin",
      "documentation": "Property of Color"
    },
    {
      "name": "navajowhite",
      "type": "0xffdead",
      "detail": "Color.navajowhite",
      "documentation": "Property of Color"
    },
    {
      "name": "navy",
      "type": "0x000080",
      "detail": "Color.navy",
      "documentation": "Property of Color"
    },
    {
      "name": "oldlace",
      "type": "0xfdf5e6",
      "detail": "Color.oldlace",
      "documentation": "Property of Color"
    },
    {
      "name": "olive",
      "type": "0x808000",
      "detail": "Color.olive",
      "documentation": "Property of Color"
    },
    {
      "name": "olivedrab",
      "type": "0x6b8e23",
      "detail": "Color.olivedrab",
      "documentation": "Property of Color"
    },
    {
      "name": "orange",
      "type": "0xffa500",
      "detail": "Color.orange",
      "documentation": "Property of Color"
    },
    {
      "name": "orangered",
      "type": "0xff4500",
      "detail": "Color.orangered",
      "documentation": "Property of Color"
    },
    {
      "name": "orchid",
      "type": "0xda70d6",
      "detail": "Color.orchid",
      "documentation": "Property of Color"
    },
    {
      "name": "palegoldenrod",
      "type": "0xeee8aa",
      "detail": "Color.palegoldenrod",
      "documentation": "Property of Color"
    },
    {
      "name": "palegreen",
      "type": "0x98fb98",
      "detail": "Color.palegreen",
      "documentation": "Property of Color"
    },
    {
      "name": "paleturquoise",
      "type": "0xafeeee",
      "detail": "Color.paleturquoise",
      "documentation": "Property of Color"
    },
    {
      "name": "palevioletred",
      "type": "0xdb7093",
      "detail": "Color.palevioletred",
      "documentation": "Property of Color"
    },
    {
      "name": "papayawhip",
      "type": "0xffefd5",
      "detail": "Color.papayawhip",
      "documentation": "Property of Color"
    },
    {
      "name": "peachpuff",
      "type": "0xffdab9",
      "detail": "Color.peachpuff",
      "documentation": "Property of Color"
    },
    {
      "name": "peru",
      "type": "0xcd853f",
      "detail": "Color.peru",
      "documentation": "Property of Color"
    },
    {
      "name": "pink",
      "type": "0xffc0cb",
      "detail": "Color.pink",
      "documentation": "Property of Color"
    },
    {
      "name": "plum",
      "type": "0xdda0dd",
      "detail": "Color.plum",
      "documentation": "Property of Color"
    },
    {
      "name": "powderblue",
      "type": "0xb0e0e6",
      "detail": "Color.powderblue",
      "documentation": "Property of Color"
    },
    {
      "name": "purple",
      "type": "0x800080",
      "detail": "Color.purple",
      "documentation": "Property of Color"
    },
    {
      "name": "rebeccapurple",
      "type": "0x663399",
      "detail": "Color.rebeccapurple",
      "documentation": "Property of Color"
    },
    {
      "name": "red",
      "type": "0xff0000",
      "detail": "Color.red",
      "documentation": "Property of Color"
    },
    {
      "name": "rosybrown",
      "type": "0xbc8f8f",
      "detail": "Color.rosybrown",
      "documentation": "Property of Color"
    },
    {
      "name": "royalblue",
      "type": "0x4169e1",
      "detail": "Color.royalblue",
      "documentation": "Property of Color"
    },
    {
      "name": "saddlebrown",
      "type": "0x8b4513",
      "detail": "Color.saddlebrown",
      "documentation": "Property of Color"
    },
    {
      "name": "salmon",
      "type": "0xfa8072",
      "detail": "Color.salmon",
      "documentation": "Property of Color"
    },
    {
      "name": "sandybrown",
      "type": "0xf4a460",
      "detail": "Color.sandybrown",
      "documentation": "Property of Color"
    },
    {
      "name": "seagreen",
      "type": "0x2e8b57",
      "detail": "Color.seagreen",
      "documentation": "Property of Color"
    },
    {
      "name": "seashell",
      "type": "0xfff5ee",
      "detail": "Color.seashell",
      "documentation": "Property of Color"
    },
    {
      "name": "sienna",
      "type": "0xa0522d",
      "detail": "Color.sienna",
      "documentation": "Property of Color"
    },
    {
      "name": "silver",
      "type": "0xc0c0c0",
      "detail": "Color.silver",
      "documentation": "Property of Color"
    },
    {
      "name": "skyblue",
      "type": "0x87ceeb",
      "detail": "Color.skyblue",
      "documentation": "Property of Color"
    },
    {
      "name": "slateblue",
      "type": "0x6a5acd",
      "detail": "Color.slateblue",
      "documentation": "Property of Color"
    },
    {
      "name": "slategray",
      "type": "0x708090",
      "detail": "Color.slategray",
      "documentation": "Property of Color"
    },
    {
      "name": "slategrey",
      "type": "0x708090",
      "detail": "Color.slategrey",
      "documentation": "Property of Color"
    },
    {
      "name": "snow",
      "type": "0xfffafa",
      "detail": "Color.snow",
      "documentation": "Property of Color"
    },
    {
      "name": "springgreen",
      "type": "0x00ff7f",
      "detail": "Color.springgreen",
      "documentation": "Property of Color"
    },
    {
      "name": "steelblue",
      "type": "0x4682b4",
      "detail": "Color.steelblue",
      "documentation": "Property of Color"
    },
    {
      "name": "tan",
      "type": "0xd2b48c",
      "detail": "Color.tan",
      "documentation": "Property of Color"
    },
    {
      "name": "teal",
      "type": "0x008080",
      "detail": "Color.teal",
      "documentation": "Property of Color"
    },
    {
      "name": "thistle",
      "type": "0xd8bfd8",
      "detail": "Color.thistle",
      "documentation": "Property of Color"
    },
    {
      "name": "tomato",
      "type": "0xff6347",
      "detail": "Color.tomato",
      "documentation": "Property of Color"
    },
    {
      "name": "turquoise",
      "type": "0x40e0d0",
      "detail": "Color.turquoise",
      "documentation": "Property of Color"
    },
    {
      "name": "violet",
      "type": "0xee82ee",
      "detail": "Color.violet",
      "documentation": "Property of Color"
    },
    {
      "name": "wheat",
      "type": "0xf5deb3",
      "detail": "Color.wheat",
      "documentation": "Property of Color"
    },
    {
      "name": "white",
      "type": "0xffffff",
      "detail": "Color.white",
      "documentation": "Property of Color"
    },
    {
      "name": "whitesmoke",
      "type": "0xf5f5f5",
      "detail": "Color.whitesmoke",
      "documentation": "Property of Color"
    },
    {
      "name": "yellow",
      "type": "0xffff00",
      "detail": "Color.yellow",
      "documentation": "Property of Color"
    },
    {
      "name": "yellowgreen",
      "type": "0x9acd32",
      "detail": "Color.yellowgreen",
      "documentation": "Property of Color"
    },
    {
      "name": "h",
      "type": "number",
      "detail": "Color.h",
      "documentation": "Property of Color"
    },
    {
      "name": "s",
      "type": "number",
      "detail": "Color.s",
      "documentation": "Property of Color"
    },
    {
      "name": "l",
      "type": "number",
      "detail": "Color.l",
      "documentation": "Property of Color"
    },
    {
      "name": "r",
      "type": "number",
      "detail": "Color.r",
      "documentation": "Property of Color"
    },
    {
      "name": "g",
      "type": "number",
      "detail": "Color.g",
      "documentation": "Property of Color"
    },
    {
      "name": "b",
      "type": "number",
      "detail": "Color.b",
      "documentation": "Property of Color"
    },
    {
      "name": "r",
      "type": "number",
      "detail": "Color.r",
      "documentation": "Property of Color"
    },
    {
      "name": "g",
      "type": "number",
      "detail": "Color.g",
      "documentation": "Property of Color"
    },
    {
      "name": "b",
      "type": "number",
      "detail": "Color.b",
      "documentation": "Property of Color"
    }
  ],
  "Cylindrical": [
    {
      "name": "radius",
      "type": "number",
      "detail": "Cylindrical.radius",
      "documentation": "Property of Cylindrical"
    },
    {
      "name": "theta",
      "type": "number",
      "detail": "Cylindrical.theta",
      "documentation": "Property of Cylindrical"
    },
    {
      "name": "y",
      "type": "number",
      "detail": "Cylindrical.y",
      "documentation": "Property of Cylindrical"
    }
  ],
  "Euler": [
    {
      "name": "x",
      "type": "number",
      "detail": "Euler.x",
      "documentation": "Property of Euler"
    },
    {
      "name": "y",
      "type": "number",
      "detail": "Euler.y",
      "documentation": "Property of Euler"
    },
    {
      "name": "z",
      "type": "number",
      "detail": "Euler.z",
      "documentation": "Property of Euler"
    },
    {
      "name": "order",
      "type": "EulerOrder",
      "detail": "Euler.order",
      "documentation": "Property of Euler"
    }
  ],
  "Frustum": [
    {
      "name": "planes",
      "type": "Plane[]",
      "detail": "Frustum.planes",
      "documentation": "Property of Frustum"
    }
  ],
  "Line3": [
    {
      "name": "start",
      "type": "Vector3",
      "detail": "Line3.start",
      "documentation": "Property of Line3"
    },
    {
      "name": "end",
      "type": "Vector3",
      "detail": "Line3.end",
      "documentation": "Property of Line3"
    }
  ],
  "Matrix2": [
    {
      "name": "n11",
      "type": "number,\n    n12: number,\n    n21: number,\n    n22: number,\n]",
      "detail": "Matrix2.n11",
      "documentation": "Property of Matrix2"
    },
    {
      "name": "elements",
      "type": "Matrix2Tuple",
      "detail": "Matrix2.elements",
      "documentation": "Property of Matrix2"
    }
  ],
  "Matrix3": [
    {
      "name": "n11",
      "type": "number,\n    n12: number,\n    n13: number,\n    n21: number,\n    n22: number,\n    n23: number,\n    n31: number,\n    n32: number,\n    n33: number,\n]",
      "detail": "Matrix3.n11",
      "documentation": "Property of Matrix3"
    },
    {
      "name": "elements",
      "type": "Matrix3Tuple",
      "detail": "Matrix3.elements",
      "documentation": "Property of Matrix3"
    }
  ],
  "Matrix4": [
    {
      "name": "n11",
      "type": "number,\n    n12: number,\n    n13: number,\n    n14: number,\n    n21: number,\n    n22: number,\n    n23: number,\n    n24: number,\n    n31: number,\n    n32: number,\n    n33: number,\n    n34: number,\n    n41: number,\n    n42: number,\n    n43: number,\n    n44: number,\n]",
      "detail": "Matrix4.n11",
      "documentation": "Property of Matrix4"
    },
    {
      "name": "elements",
      "type": "Matrix4Tuple",
      "detail": "Matrix4.elements",
      "documentation": "Property of Matrix4"
    }
  ],
  "Plane": [
    {
      "name": "normal",
      "type": "Vector3",
      "detail": "Plane.normal",
      "documentation": "Property of Plane"
    },
    {
      "name": "constant",
      "type": "number",
      "detail": "Plane.constant",
      "documentation": "Property of Plane"
    }
  ],
  "Quaternion": [
    {
      "name": "x",
      "type": "number",
      "detail": "Quaternion.x",
      "documentation": "Property of Quaternion"
    },
    {
      "name": "y",
      "type": "number",
      "detail": "Quaternion.y",
      "documentation": "Property of Quaternion"
    },
    {
      "name": "z",
      "type": "number",
      "detail": "Quaternion.z",
      "documentation": "Property of Quaternion"
    },
    {
      "name": "w",
      "type": "number",
      "detail": "Quaternion.w",
      "documentation": "Property of Quaternion"
    }
  ],
  "Ray": [
    {
      "name": "origin",
      "type": "Vector3",
      "detail": "Ray.origin",
      "documentation": "Property of Ray"
    },
    {
      "name": "direction",
      "type": "Vector3",
      "detail": "Ray.direction",
      "documentation": "Property of Ray"
    }
  ],
  "Sphere": [
    {
      "name": "center",
      "type": "Vector3",
      "detail": "Sphere.center",
      "documentation": "Property of Sphere"
    },
    {
      "name": "radius",
      "type": "number",
      "detail": "Sphere.radius",
      "documentation": "Property of Sphere"
    },
    {
      "name": "radius",
      "type": "number",
      "detail": "Sphere.radius",
      "documentation": "Property of Sphere"
    },
    {
      "name": "center",
      "type": "number[]",
      "detail": "Sphere.center",
      "documentation": "Property of Sphere"
    }
  ],
  "Spherical": [
    {
      "name": "radius",
      "type": "number",
      "detail": "Spherical.radius",
      "documentation": "Property of Spherical"
    },
    {
      "name": "phi",
      "type": "number",
      "detail": "Spherical.phi",
      "documentation": "Property of Spherical"
    },
    {
      "name": "theta",
      "type": "number",
      "detail": "Spherical.theta",
      "documentation": "Property of Spherical"
    }
  ],
  "SphericalHarmonics3": [
    {
      "name": "coefficients",
      "type": "Vector3[]",
      "detail": "SphericalHarmonics3.coefficients",
      "documentation": "Property of SphericalHarmonics3"
    }
  ],
  "Triangle": [
    {
      "name": "a",
      "type": "Vector3",
      "detail": "Triangle.a",
      "documentation": "Property of Triangle"
    },
    {
      "name": "b",
      "type": "Vector3",
      "detail": "Triangle.b",
      "documentation": "Property of Triangle"
    },
    {
      "name": "c",
      "type": "Vector3",
      "detail": "Triangle.c",
      "documentation": "Property of Triangle"
    }
  ],
  "Vector2": [
    {
      "name": "x",
      "type": "number",
      "detail": "Vector2.x",
      "documentation": "Property of Vector2"
    },
    {
      "name": "y",
      "type": "number",
      "detail": "Vector2.y",
      "documentation": "Property of Vector2"
    },
    {
      "name": "width",
      "type": "number",
      "detail": "Vector2.width",
      "documentation": "Property of Vector2"
    },
    {
      "name": "height",
      "type": "number",
      "detail": "Vector2.height",
      "documentation": "Property of Vector2"
    }
  ],
  "Vector3": [
    {
      "name": "x",
      "type": "number",
      "detail": "Vector3.x",
      "documentation": "Property of Vector3"
    },
    {
      "name": "y",
      "type": "number",
      "detail": "Vector3.y",
      "documentation": "Property of Vector3"
    },
    {
      "name": "z",
      "type": "number",
      "detail": "Vector3.z",
      "documentation": "Property of Vector3"
    }
  ],
  "Vector4": [
    {
      "name": "x",
      "type": "number",
      "detail": "Vector4.x",
      "documentation": "Property of Vector4"
    },
    {
      "name": "y",
      "type": "number",
      "detail": "Vector4.y",
      "documentation": "Property of Vector4"
    },
    {
      "name": "z",
      "type": "number",
      "detail": "Vector4.z",
      "documentation": "Property of Vector4"
    },
    {
      "name": "w",
      "type": "number",
      "detail": "Vector4.w",
      "documentation": "Property of Vector4"
    },
    {
      "name": "width",
      "type": "number",
      "detail": "Vector4.width",
      "documentation": "Property of Vector4"
    },
    {
      "name": "height",
      "type": "number",
      "detail": "Vector4.height",
      "documentation": "Property of Vector4"
    }
  ],
  "InstancedMesh": [
    {
      "name": "count",
      "type": "number",
      "detail": "InstancedMesh.count",
      "documentation": "Property of InstancedMesh"
    },
    {
      "name": "instanceMatrix",
      "type": "BufferAttributeJSON",
      "detail": "InstancedMesh.instanceMatrix",
      "documentation": "Property of InstancedMesh"
    },
    {
      "name": "object",
      "type": "InstancedMeshJSONObject",
      "detail": "InstancedMesh.object",
      "documentation": "Property of InstancedMesh"
    },
    {
      "name": "dispose",
      "type": "{}",
      "detail": "InstancedMesh.dispose",
      "documentation": "Property of InstancedMesh"
    },
    {
      "name": "boundingBox",
      "type": "Box3 | null",
      "detail": "InstancedMesh.boundingBox",
      "documentation": "Property of InstancedMesh"
    },
    {
      "name": "boundingSphere",
      "type": "Sphere | null",
      "detail": "InstancedMesh.boundingSphere",
      "documentation": "Property of InstancedMesh"
    },
    {
      "name": "count",
      "type": "number",
      "detail": "InstancedMesh.count",
      "documentation": "Property of InstancedMesh"
    },
    {
      "name": "instanceColor",
      "type": "InstancedBufferAttribute | null",
      "detail": "InstancedMesh.instanceColor",
      "documentation": "Property of InstancedMesh"
    },
    {
      "name": "instanceMatrix",
      "type": "InstancedBufferAttribute",
      "detail": "InstancedMesh.instanceMatrix",
      "documentation": "Property of InstancedMesh"
    },
    {
      "name": "morphTexture",
      "type": "DataTexture | null",
      "detail": "InstancedMesh.morphTexture",
      "documentation": "Property of InstancedMesh"
    }
  ],
  "LOD": [
    {
      "name": "levels",
      "type": "Array<{\n        object: string",
      "detail": "LOD.levels",
      "documentation": "Property of LOD"
    },
    {
      "name": "object",
      "type": "LODJSONObject",
      "detail": "LOD.object",
      "documentation": "Property of LOD"
    },
    {
      "name": "levels",
      "type": "Array<{\n        /** The Object3D to display at this level. */\n        object: Object3D",
      "detail": "LOD.levels",
      "documentation": "Property of LOD"
    },
    {
      "name": "autoUpdate",
      "type": "boolean",
      "detail": "LOD.autoUpdate",
      "documentation": "Property of LOD"
    }
  ],
  "Line": [
    {
      "name": "geometry",
      "type": "TGeometry",
      "detail": "Line.geometry",
      "documentation": "Property of Line"
    },
    {
      "name": "material",
      "type": "TMaterial",
      "detail": "Line.material",
      "documentation": "Property of Line"
    }
  ],
  "Mesh": [
    {
      "name": "geometry",
      "type": "string",
      "detail": "Mesh.geometry",
      "documentation": "Property of Mesh"
    },
    {
      "name": "object",
      "type": "MeshJSONObject",
      "detail": "Mesh.object",
      "documentation": "Property of Mesh"
    },
    {
      "name": "geometry",
      "type": "TGeometry",
      "detail": "Mesh.geometry",
      "documentation": "Property of Mesh"
    },
    {
      "name": "material",
      "type": "TMaterial",
      "detail": "Mesh.material",
      "documentation": "Property of Mesh"
    },
    {
      "name": "count",
      "type": "number",
      "detail": "Mesh.count",
      "documentation": "Property of Mesh"
    }
  ],
  "Points": [
    {
      "name": "geometry",
      "type": "TGeometry",
      "detail": "Points.geometry",
      "documentation": "Property of Points"
    },
    {
      "name": "material",
      "type": "TMaterial",
      "detail": "Points.material",
      "documentation": "Property of Points"
    }
  ],
  "Skeleton": [
    {
      "name": "metadata",
      "type": "{ version: number",
      "detail": "Skeleton.metadata",
      "documentation": "Property of Skeleton"
    },
    {
      "name": "bones",
      "type": "string[]",
      "detail": "Skeleton.bones",
      "documentation": "Property of Skeleton"
    },
    {
      "name": "boneInverses",
      "type": "Matrix4Tuple[]",
      "detail": "Skeleton.boneInverses",
      "documentation": "Property of Skeleton"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "Skeleton.uuid",
      "documentation": "Property of Skeleton"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "Skeleton.uuid",
      "documentation": "Property of Skeleton"
    },
    {
      "name": "bones",
      "type": "Bone[]",
      "detail": "Skeleton.bones",
      "documentation": "Property of Skeleton"
    },
    {
      "name": "boneInverses",
      "type": "Matrix4[]",
      "detail": "Skeleton.boneInverses",
      "documentation": "Property of Skeleton"
    },
    {
      "name": "boneMatrices",
      "type": "Float32Array",
      "detail": "Skeleton.boneMatrices",
      "documentation": "Property of Skeleton"
    },
    {
      "name": "boneTexture",
      "type": "null | DataTexture",
      "detail": "Skeleton.boneTexture",
      "documentation": "Property of Skeleton"
    },
    {
      "name": "frame",
      "type": "number",
      "detail": "Skeleton.frame",
      "documentation": "Property of Skeleton"
    }
  ],
  "SkinnedMesh": [
    {
      "name": "bindMode",
      "type": "BindMode",
      "detail": "SkinnedMesh.bindMode",
      "documentation": "Property of SkinnedMesh"
    },
    {
      "name": "bindMatrix",
      "type": "Matrix4Tuple",
      "detail": "SkinnedMesh.bindMatrix",
      "documentation": "Property of SkinnedMesh"
    },
    {
      "name": "object",
      "type": "SkinnedMeshJSONObject",
      "detail": "SkinnedMesh.object",
      "documentation": "Property of SkinnedMesh"
    },
    {
      "name": "bindMode",
      "type": "BindMode",
      "detail": "SkinnedMesh.bindMode",
      "documentation": "Property of SkinnedMesh"
    },
    {
      "name": "bindMatrix",
      "type": "Matrix4",
      "detail": "SkinnedMesh.bindMatrix",
      "documentation": "Property of SkinnedMesh"
    },
    {
      "name": "bindMatrixInverse",
      "type": "Matrix4",
      "detail": "SkinnedMesh.bindMatrixInverse",
      "documentation": "Property of SkinnedMesh"
    },
    {
      "name": "boundingBox",
      "type": "Box3",
      "detail": "SkinnedMesh.boundingBox",
      "documentation": "Property of SkinnedMesh"
    },
    {
      "name": "boundingSphere",
      "type": "Sphere",
      "detail": "SkinnedMesh.boundingSphere",
      "documentation": "Property of SkinnedMesh"
    },
    {
      "name": "skeleton",
      "type": "Skeleton",
      "detail": "SkinnedMesh.skeleton",
      "documentation": "Property of SkinnedMesh"
    }
  ],
  "Sprite": [
    {
      "name": "geometry",
      "type": "BufferGeometry",
      "detail": "Sprite.geometry",
      "documentation": "Property of Sprite"
    },
    {
      "name": "material",
      "type": "SpriteMaterial",
      "detail": "Sprite.material",
      "documentation": "Property of Sprite"
    },
    {
      "name": "center",
      "type": "Vector2",
      "detail": "Sprite.center",
      "documentation": "Property of Sprite"
    },
    {
      "name": "count",
      "type": "number",
      "detail": "Sprite.count",
      "documentation": "Property of Sprite"
    }
  ],
  "Fog": [
    {
      "name": "name",
      "type": "string",
      "detail": "Fog.name",
      "documentation": "Property of Fog"
    },
    {
      "name": "color",
      "type": "number",
      "detail": "Fog.color",
      "documentation": "Property of Fog"
    },
    {
      "name": "near",
      "type": "number",
      "detail": "Fog.near",
      "documentation": "Property of Fog"
    },
    {
      "name": "far",
      "type": "number",
      "detail": "Fog.far",
      "documentation": "Property of Fog"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Fog.name",
      "documentation": "Property of Fog"
    },
    {
      "name": "color",
      "type": "Color",
      "detail": "Fog.color",
      "documentation": "Property of Fog"
    },
    {
      "name": "near",
      "type": "number",
      "detail": "Fog.near",
      "documentation": "Property of Fog"
    },
    {
      "name": "far",
      "type": "number",
      "detail": "Fog.far",
      "documentation": "Property of Fog"
    }
  ],
  "FogExp2": [
    {
      "name": "name",
      "type": "string",
      "detail": "FogExp2.name",
      "documentation": "Property of FogExp2"
    },
    {
      "name": "color",
      "type": "number",
      "detail": "FogExp2.color",
      "documentation": "Property of FogExp2"
    },
    {
      "name": "density",
      "type": "number",
      "detail": "FogExp2.density",
      "documentation": "Property of FogExp2"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "FogExp2.name",
      "documentation": "Property of FogExp2"
    },
    {
      "name": "color",
      "type": "Color",
      "detail": "FogExp2.color",
      "documentation": "Property of FogExp2"
    },
    {
      "name": "density",
      "type": "number",
      "detail": "FogExp2.density",
      "documentation": "Property of FogExp2"
    }
  ],
  "Scene": [
    {
      "name": "backgroundRotation",
      "type": "EulerTuple",
      "detail": "Scene.backgroundRotation",
      "documentation": "Property of Scene"
    },
    {
      "name": "environmentRotation",
      "type": "EulerTuple",
      "detail": "Scene.environmentRotation",
      "documentation": "Property of Scene"
    },
    {
      "name": "object",
      "type": "SceneJSONObject",
      "detail": "Scene.object",
      "documentation": "Property of Scene"
    },
    {
      "name": "fog",
      "type": "Fog | FogExp2 | null",
      "detail": "Scene.fog",
      "documentation": "Property of Scene"
    },
    {
      "name": "backgroundBlurriness",
      "type": "number",
      "detail": "Scene.backgroundBlurriness",
      "documentation": "Property of Scene"
    },
    {
      "name": "backgroundIntensity",
      "type": "number",
      "detail": "Scene.backgroundIntensity",
      "documentation": "Property of Scene"
    },
    {
      "name": "overrideMaterial",
      "type": "Material | null",
      "detail": "Scene.overrideMaterial",
      "documentation": "Property of Scene"
    },
    {
      "name": "background",
      "type": "Color | Texture | CubeTexture | null",
      "detail": "Scene.background",
      "documentation": "Property of Scene"
    },
    {
      "name": "backgroundRotation",
      "type": "Euler",
      "detail": "Scene.backgroundRotation",
      "documentation": "Property of Scene"
    },
    {
      "name": "environment",
      "type": "Texture | null",
      "detail": "Scene.environment",
      "documentation": "Property of Scene"
    },
    {
      "name": "environmentIntensity",
      "type": "number",
      "detail": "Scene.environmentIntensity",
      "documentation": "Property of Scene"
    },
    {
      "name": "environmentRotation",
      "type": "Euler",
      "detail": "Scene.environmentRotation",
      "documentation": "Property of Scene"
    }
  ],
  "CompressedArrayTexture": [
    {
      "name": "wrapR",
      "type": "Wrapping",
      "detail": "CompressedArrayTexture.wrapR",
      "documentation": "Property of CompressedArrayTexture"
    },
    {
      "name": "layerUpdates",
      "type": "Set<number>",
      "detail": "CompressedArrayTexture.layerUpdates",
      "documentation": "Property of CompressedArrayTexture"
    }
  ],
  "CompressedTexture": [
    {
      "name": "data",
      "type": "TypedArray",
      "detail": "CompressedTexture.data",
      "documentation": "Property of CompressedTexture"
    },
    {
      "name": "width",
      "type": "number",
      "detail": "CompressedTexture.width",
      "documentation": "Property of CompressedTexture"
    },
    {
      "name": "height",
      "type": "number",
      "detail": "CompressedTexture.height",
      "documentation": "Property of CompressedTexture"
    },
    {
      "name": "mipmaps",
      "type": "CompressedTextureMipmap[]",
      "detail": "CompressedTexture.mipmaps",
      "documentation": "Property of CompressedTexture"
    },
    {
      "name": "format",
      "type": "CompressedPixelFormat",
      "detail": "CompressedTexture.format",
      "documentation": "Property of CompressedTexture"
    },
    {
      "name": "flipY",
      "type": "boolean",
      "detail": "CompressedTexture.flipY",
      "documentation": "Property of CompressedTexture"
    },
    {
      "name": "generateMipmaps",
      "type": "boolean",
      "detail": "CompressedTexture.generateMipmaps",
      "documentation": "Property of CompressedTexture"
    }
  ],
  "CubeTexture": [
    {
      "name": "mapping",
      "type": "CubeTextureMapping",
      "detail": "CubeTexture.mapping",
      "documentation": "Property of CubeTexture"
    },
    {
      "name": "flipY",
      "type": "boolean",
      "detail": "CubeTexture.flipY",
      "documentation": "Property of CubeTexture"
    }
  ],
  "Data3DTexture": [
    {
      "name": "magFilter",
      "type": "MagnificationTextureFilter",
      "detail": "Data3DTexture.magFilter",
      "documentation": "Property of Data3DTexture"
    },
    {
      "name": "minFilter",
      "type": "MinificationTextureFilter",
      "detail": "Data3DTexture.minFilter",
      "documentation": "Property of Data3DTexture"
    },
    {
      "name": "wrapR",
      "type": "Wrapping",
      "detail": "Data3DTexture.wrapR",
      "documentation": "Property of Data3DTexture"
    },
    {
      "name": "flipY",
      "type": "boolean",
      "detail": "Data3DTexture.flipY",
      "documentation": "Property of Data3DTexture"
    },
    {
      "name": "generateMipmaps",
      "type": "boolean",
      "detail": "Data3DTexture.generateMipmaps",
      "documentation": "Property of Data3DTexture"
    },
    {
      "name": "unpackAlignment",
      "type": "number",
      "detail": "Data3DTexture.unpackAlignment",
      "documentation": "Property of Data3DTexture"
    },
    {
      "name": "depth",
      "type": "number",
      "detail": "Data3DTexture.depth",
      "documentation": "Property of Data3DTexture"
    }
  ],
  "DataArrayTexture": [
    {
      "name": "magFilter",
      "type": "MagnificationTextureFilter",
      "detail": "DataArrayTexture.magFilter",
      "documentation": "Property of DataArrayTexture"
    },
    {
      "name": "minFilter",
      "type": "MinificationTextureFilter",
      "detail": "DataArrayTexture.minFilter",
      "documentation": "Property of DataArrayTexture"
    },
    {
      "name": "wrapR",
      "type": "boolean",
      "detail": "DataArrayTexture.wrapR",
      "documentation": "Property of DataArrayTexture"
    },
    {
      "name": "generateMipmaps",
      "type": "boolean",
      "detail": "DataArrayTexture.generateMipmaps",
      "documentation": "Property of DataArrayTexture"
    },
    {
      "name": "flipY",
      "type": "boolean",
      "detail": "DataArrayTexture.flipY",
      "documentation": "Property of DataArrayTexture"
    },
    {
      "name": "unpackAlignment",
      "type": "number",
      "detail": "DataArrayTexture.unpackAlignment",
      "documentation": "Property of DataArrayTexture"
    },
    {
      "name": "layerUpdates",
      "type": "Set<number>",
      "detail": "DataArrayTexture.layerUpdates",
      "documentation": "Property of DataArrayTexture"
    }
  ],
  "DataTexture": [
    {
      "name": "magFilter",
      "type": "MagnificationTextureFilter",
      "detail": "DataTexture.magFilter",
      "documentation": "Property of DataTexture"
    },
    {
      "name": "minFilter",
      "type": "MinificationTextureFilter",
      "detail": "DataTexture.minFilter",
      "documentation": "Property of DataTexture"
    },
    {
      "name": "flipY",
      "type": "boolean",
      "detail": "DataTexture.flipY",
      "documentation": "Property of DataTexture"
    },
    {
      "name": "generateMipmaps",
      "type": "boolean",
      "detail": "DataTexture.generateMipmaps",
      "documentation": "Property of DataTexture"
    },
    {
      "name": "unpackAlignment",
      "type": "number",
      "detail": "DataTexture.unpackAlignment",
      "documentation": "Property of DataTexture"
    },
    {
      "name": "data",
      "type": "TypedArray",
      "detail": "DataTexture.data",
      "documentation": "Property of DataTexture"
    },
    {
      "name": "height",
      "type": "number",
      "detail": "DataTexture.height",
      "documentation": "Property of DataTexture"
    },
    {
      "name": "width",
      "type": "number",
      "detail": "DataTexture.width",
      "documentation": "Property of DataTexture"
    }
  ],
  "DepthTexture": [
    {
      "name": "flipY",
      "type": "boolean",
      "detail": "DepthTexture.flipY",
      "documentation": "Property of DepthTexture"
    },
    {
      "name": "magFilter",
      "type": "MagnificationTextureFilter",
      "detail": "DepthTexture.magFilter",
      "documentation": "Property of DepthTexture"
    },
    {
      "name": "minFilter",
      "type": "MinificationTextureFilter",
      "detail": "DepthTexture.minFilter",
      "documentation": "Property of DepthTexture"
    },
    {
      "name": "generateMipmaps",
      "type": "boolean",
      "detail": "DepthTexture.generateMipmaps",
      "documentation": "Property of DepthTexture"
    },
    {
      "name": "format",
      "type": "DepthTexturePixelFormat",
      "detail": "DepthTexture.format",
      "documentation": "Property of DepthTexture"
    },
    {
      "name": "compareFunction",
      "type": "TextureComparisonFunction | null",
      "detail": "DepthTexture.compareFunction",
      "documentation": "Property of DepthTexture"
    }
  ],
  "FramebufferTexture": [
    {
      "name": "magFilter",
      "type": "MagnificationTextureFilter",
      "detail": "FramebufferTexture.magFilter",
      "documentation": "Property of FramebufferTexture"
    },
    {
      "name": "minFilter",
      "type": "MinificationTextureFilter",
      "detail": "FramebufferTexture.minFilter",
      "documentation": "Property of FramebufferTexture"
    },
    {
      "name": "generateMipmaps",
      "type": "boolean",
      "detail": "FramebufferTexture.generateMipmaps",
      "documentation": "Property of FramebufferTexture"
    }
  ],
  "SourceJSON": [
    {
      "name": "uuid",
      "type": "string",
      "detail": "SourceJSON.uuid",
      "documentation": "Property of SourceJSON"
    },
    {
      "name": "url",
      "type": "SerializedImage | SerializedImage[]",
      "detail": "SourceJSON.url",
      "documentation": "Property of SourceJSON"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "SourceJSON.uuid",
      "documentation": "Property of SourceJSON"
    },
    {
      "name": "data",
      "type": "any",
      "detail": "SourceJSON.data",
      "documentation": "Property of SourceJSON"
    },
    {
      "name": "dataReady",
      "type": "boolean",
      "detail": "SourceJSON.dataReady",
      "documentation": "Property of SourceJSON"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "SourceJSON.version",
      "documentation": "Property of SourceJSON"
    }
  ],
  "Source": [
    {
      "name": "uuid",
      "type": "string",
      "detail": "Source.uuid",
      "documentation": "Property of Source"
    },
    {
      "name": "url",
      "type": "SerializedImage | SerializedImage[]",
      "detail": "Source.url",
      "documentation": "Property of Source"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "Source.uuid",
      "documentation": "Property of Source"
    },
    {
      "name": "data",
      "type": "any",
      "detail": "Source.data",
      "documentation": "Property of Source"
    },
    {
      "name": "dataReady",
      "type": "boolean",
      "detail": "Source.dataReady",
      "documentation": "Property of Source"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Source.version",
      "documentation": "Property of Source"
    }
  ],
  "Texture": [
    {
      "name": "metadata",
      "type": "{ version: number",
      "detail": "Texture.metadata",
      "documentation": "Property of Texture"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "Texture.uuid",
      "documentation": "Property of Texture"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Texture.name",
      "documentation": "Property of Texture"
    },
    {
      "name": "image",
      "type": "string",
      "detail": "Texture.image",
      "documentation": "Property of Texture"
    },
    {
      "name": "mapping",
      "type": "AnyMapping",
      "detail": "Texture.mapping",
      "documentation": "Property of Texture"
    },
    {
      "name": "channel",
      "type": "number",
      "detail": "Texture.channel",
      "documentation": "Property of Texture"
    },
    {
      "name": "repeat",
      "type": "[x: number, y: number]",
      "detail": "Texture.repeat",
      "documentation": "Property of Texture"
    },
    {
      "name": "offset",
      "type": "[x: number, y: number]",
      "detail": "Texture.offset",
      "documentation": "Property of Texture"
    },
    {
      "name": "center",
      "type": "[x: number, y: number]",
      "detail": "Texture.center",
      "documentation": "Property of Texture"
    },
    {
      "name": "rotation",
      "type": "number",
      "detail": "Texture.rotation",
      "documentation": "Property of Texture"
    },
    {
      "name": "wrap",
      "type": "[wrapS: number, wrapT: number]",
      "detail": "Texture.wrap",
      "documentation": "Property of Texture"
    },
    {
      "name": "format",
      "type": "AnyPixelFormat",
      "detail": "Texture.format",
      "documentation": "Property of Texture"
    },
    {
      "name": "internalFormat",
      "type": "PixelFormatGPU | null",
      "detail": "Texture.internalFormat",
      "documentation": "Property of Texture"
    },
    {
      "name": "colorSpace",
      "type": "string",
      "detail": "Texture.colorSpace",
      "documentation": "Property of Texture"
    },
    {
      "name": "minFilter",
      "type": "MinificationTextureFilter",
      "detail": "Texture.minFilter",
      "documentation": "Property of Texture"
    },
    {
      "name": "magFilter",
      "type": "MagnificationTextureFilter",
      "detail": "Texture.magFilter",
      "documentation": "Property of Texture"
    },
    {
      "name": "anisotropy",
      "type": "number",
      "detail": "Texture.anisotropy",
      "documentation": "Property of Texture"
    },
    {
      "name": "flipY",
      "type": "boolean",
      "detail": "Texture.flipY",
      "documentation": "Property of Texture"
    },
    {
      "name": "generateMipmaps",
      "type": "boolean",
      "detail": "Texture.generateMipmaps",
      "documentation": "Property of Texture"
    },
    {
      "name": "premultiplyAlpha",
      "type": "boolean",
      "detail": "Texture.premultiplyAlpha",
      "documentation": "Property of Texture"
    },
    {
      "name": "unpackAlignment",
      "type": "number",
      "detail": "Texture.unpackAlignment",
      "documentation": "Property of Texture"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "Texture.uuid",
      "documentation": "Property of Texture"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Texture.name",
      "documentation": "Property of Texture"
    },
    {
      "name": "source",
      "type": "Source",
      "detail": "Texture.source",
      "documentation": "Property of Texture"
    },
    {
      "name": "mipmaps",
      "type": "CompressedTextureMipmap[] | CubeTexture[] | HTMLCanvasElement[]",
      "detail": "Texture.mipmaps",
      "documentation": "Property of Texture"
    },
    {
      "name": "mapping",
      "type": "AnyMapping",
      "detail": "Texture.mapping",
      "documentation": "Property of Texture"
    },
    {
      "name": "channel",
      "type": "number",
      "detail": "Texture.channel",
      "documentation": "Property of Texture"
    },
    {
      "name": "wrapS",
      "type": "Wrapping",
      "detail": "Texture.wrapS",
      "documentation": "Property of Texture"
    },
    {
      "name": "wrapT",
      "type": "Wrapping",
      "detail": "Texture.wrapT",
      "documentation": "Property of Texture"
    },
    {
      "name": "magFilter",
      "type": "MagnificationTextureFilter",
      "detail": "Texture.magFilter",
      "documentation": "Property of Texture"
    },
    {
      "name": "minFilter",
      "type": "MinificationTextureFilter",
      "detail": "Texture.minFilter",
      "documentation": "Property of Texture"
    },
    {
      "name": "anisotropy",
      "type": "number",
      "detail": "Texture.anisotropy",
      "documentation": "Property of Texture"
    },
    {
      "name": "format",
      "type": "AnyPixelFormat",
      "detail": "Texture.format",
      "documentation": "Property of Texture"
    },
    {
      "name": "internalFormat",
      "type": "PixelFormatGPU | null",
      "detail": "Texture.internalFormat",
      "documentation": "Property of Texture"
    },
    {
      "name": "matrix",
      "type": "Matrix3",
      "detail": "Texture.matrix",
      "documentation": "Property of Texture"
    },
    {
      "name": "matrixAutoUpdate",
      "type": "boolean",
      "detail": "Texture.matrixAutoUpdate",
      "documentation": "Property of Texture"
    },
    {
      "name": "offset",
      "type": "Vector2",
      "detail": "Texture.offset",
      "documentation": "Property of Texture"
    },
    {
      "name": "repeat",
      "type": "Vector2",
      "detail": "Texture.repeat",
      "documentation": "Property of Texture"
    },
    {
      "name": "center",
      "type": "Vector2",
      "detail": "Texture.center",
      "documentation": "Property of Texture"
    },
    {
      "name": "rotation",
      "type": "number",
      "detail": "Texture.rotation",
      "documentation": "Property of Texture"
    },
    {
      "name": "generateMipmaps",
      "type": "boolean",
      "detail": "Texture.generateMipmaps",
      "documentation": "Property of Texture"
    },
    {
      "name": "premultiplyAlpha",
      "type": "boolean",
      "detail": "Texture.premultiplyAlpha",
      "documentation": "Property of Texture"
    },
    {
      "name": "flipY",
      "type": "boolean",
      "detail": "Texture.flipY",
      "documentation": "Property of Texture"
    },
    {
      "name": "unpackAlignment",
      "type": "number",
      "detail": "Texture.unpackAlignment",
      "documentation": "Property of Texture"
    },
    {
      "name": "colorSpace",
      "type": "string",
      "detail": "Texture.colorSpace",
      "documentation": "Property of Texture"
    },
    {
      "name": "userData",
      "type": "Record<string, any>",
      "detail": "Texture.userData",
      "documentation": "Property of Texture"
    },
    {
      "name": "updateRanges",
      "type": "Array<{ start: number",
      "detail": "Texture.updateRanges",
      "documentation": "Property of Texture"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Texture.version",
      "documentation": "Property of Texture"
    },
    {
      "name": "pmremVersion",
      "type": "number",
      "detail": "Texture.pmremVersion",
      "documentation": "Property of Texture"
    },
    {
      "name": "renderTarget",
      "type": "RenderTarget | null",
      "detail": "Texture.renderTarget",
      "documentation": "Property of Texture"
    },
    {
      "name": "onUpdate",
      "type": "((texture: Texture) => void) | null",
      "detail": "Texture.onUpdate",
      "documentation": "Property of Texture"
    }
  ],
  "VideoTexture": [
    {
      "name": "magFilter",
      "type": "MagnificationTextureFilter",
      "detail": "VideoTexture.magFilter",
      "documentation": "Property of VideoTexture"
    },
    {
      "name": "minFilter",
      "type": "MinificationTextureFilter",
      "detail": "VideoTexture.minFilter",
      "documentation": "Property of VideoTexture"
    },
    {
      "name": "generateMipmaps",
      "type": "boolean",
      "detail": "VideoTexture.generateMipmaps",
      "documentation": "Property of VideoTexture"
    }
  ],
  "ArrowHelper": [
    {
      "name": "line",
      "type": "Line",
      "detail": "ArrowHelper.line",
      "documentation": "Property of ArrowHelper"
    },
    {
      "name": "cone",
      "type": "Mesh",
      "detail": "ArrowHelper.cone",
      "documentation": "Property of ArrowHelper"
    }
  ],
  "Box3Helper": [
    {
      "name": "box",
      "type": "Box3",
      "detail": "Box3Helper.box",
      "documentation": "Property of Box3Helper"
    }
  ],
  "CameraHelper": [
    {
      "name": "camera",
      "type": "Camera",
      "detail": "CameraHelper.camera",
      "documentation": "Property of CameraHelper"
    },
    {
      "name": "pointMap",
      "type": "{ [id: string]: number[] }",
      "detail": "CameraHelper.pointMap",
      "documentation": "Property of CameraHelper"
    },
    {
      "name": "matrix",
      "type": "Matrix4",
      "detail": "CameraHelper.matrix",
      "documentation": "Property of CameraHelper"
    }
  ],
  "DirectionalLightHelper": [
    {
      "name": "lightPlane",
      "type": "Line",
      "detail": "DirectionalLightHelper.lightPlane",
      "documentation": "Property of DirectionalLightHelper"
    },
    {
      "name": "light",
      "type": "DirectionalLight",
      "detail": "DirectionalLightHelper.light",
      "documentation": "Property of DirectionalLightHelper"
    },
    {
      "name": "matrix",
      "type": "Matrix4",
      "detail": "DirectionalLightHelper.matrix",
      "documentation": "Property of DirectionalLightHelper"
    },
    {
      "name": "color",
      "type": "ColorRepresentation | undefined",
      "detail": "DirectionalLightHelper.color",
      "documentation": "Property of DirectionalLightHelper"
    },
    {
      "name": "targetLine",
      "type": "Line",
      "detail": "DirectionalLightHelper.targetLine",
      "documentation": "Property of DirectionalLightHelper"
    }
  ],
  "HemisphereLightHelper": [
    {
      "name": "light",
      "type": "HemisphereLight",
      "detail": "HemisphereLightHelper.light",
      "documentation": "Property of HemisphereLightHelper"
    },
    {
      "name": "matrix",
      "type": "Matrix4",
      "detail": "HemisphereLightHelper.matrix",
      "documentation": "Property of HemisphereLightHelper"
    },
    {
      "name": "material",
      "type": "MeshBasicMaterial",
      "detail": "HemisphereLightHelper.material",
      "documentation": "Property of HemisphereLightHelper"
    },
    {
      "name": "color",
      "type": "ColorRepresentation | undefined",
      "detail": "HemisphereLightHelper.color",
      "documentation": "Property of HemisphereLightHelper"
    }
  ],
  "PlaneHelper": [
    {
      "name": "plane",
      "type": "Plane",
      "detail": "PlaneHelper.plane",
      "documentation": "Property of PlaneHelper"
    },
    {
      "name": "size",
      "type": "number",
      "detail": "PlaneHelper.size",
      "documentation": "Property of PlaneHelper"
    }
  ],
  "PointLightHelper": [
    {
      "name": "light",
      "type": "PointLight",
      "detail": "PointLightHelper.light",
      "documentation": "Property of PointLightHelper"
    },
    {
      "name": "matrix",
      "type": "Matrix4",
      "detail": "PointLightHelper.matrix",
      "documentation": "Property of PointLightHelper"
    },
    {
      "name": "color",
      "type": "ColorRepresentation | undefined",
      "detail": "PointLightHelper.color",
      "documentation": "Property of PointLightHelper"
    }
  ],
  "SpotLightHelper": [
    {
      "name": "cone",
      "type": "LineSegments",
      "detail": "SpotLightHelper.cone",
      "documentation": "Property of SpotLightHelper"
    },
    {
      "name": "light",
      "type": "Light",
      "detail": "SpotLightHelper.light",
      "documentation": "Property of SpotLightHelper"
    },
    {
      "name": "matrix",
      "type": "Matrix4",
      "detail": "SpotLightHelper.matrix",
      "documentation": "Property of SpotLightHelper"
    },
    {
      "name": "color",
      "type": "ColorRepresentation | undefined",
      "detail": "SpotLightHelper.color",
      "documentation": "Property of SpotLightHelper"
    }
  ],
  "AnimationAction": [
    {
      "name": "blendMode",
      "type": "AnimationBlendMode",
      "detail": "AnimationAction.blendMode",
      "documentation": "Property of AnimationAction"
    },
    {
      "name": "loop",
      "type": "AnimationActionLoopStyles",
      "detail": "AnimationAction.loop",
      "documentation": "Property of AnimationAction"
    },
    {
      "name": "time",
      "type": "number",
      "detail": "AnimationAction.time",
      "documentation": "Property of AnimationAction"
    },
    {
      "name": "timeScale",
      "type": "number",
      "detail": "AnimationAction.timeScale",
      "documentation": "Property of AnimationAction"
    },
    {
      "name": "weight",
      "type": "number",
      "detail": "AnimationAction.weight",
      "documentation": "Property of AnimationAction"
    },
    {
      "name": "repetitions",
      "type": "number",
      "detail": "AnimationAction.repetitions",
      "documentation": "Property of AnimationAction"
    },
    {
      "name": "paused",
      "type": "boolean",
      "detail": "AnimationAction.paused",
      "documentation": "Property of AnimationAction"
    },
    {
      "name": "enabled",
      "type": "boolean",
      "detail": "AnimationAction.enabled",
      "documentation": "Property of AnimationAction"
    },
    {
      "name": "clampWhenFinished",
      "type": "boolean",
      "detail": "AnimationAction.clampWhenFinished",
      "documentation": "Property of AnimationAction"
    },
    {
      "name": "zeroSlopeAtStart",
      "type": "boolean",
      "detail": "AnimationAction.zeroSlopeAtStart",
      "documentation": "Property of AnimationAction"
    },
    {
      "name": "zeroSlopeAtEnd",
      "type": "boolean",
      "detail": "AnimationAction.zeroSlopeAtEnd",
      "documentation": "Property of AnimationAction"
    }
  ],
  "AnimationClip": [
    {
      "name": "name",
      "type": "string",
      "detail": "AnimationClip.name",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "duration",
      "type": "number",
      "detail": "AnimationClip.duration",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "tracks",
      "type": "KeyframeTrackJSON[]",
      "detail": "AnimationClip.tracks",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "AnimationClip.uuid",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "blendMode",
      "type": "AnimationBlendMode",
      "detail": "AnimationClip.blendMode",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "AnimationClip.name",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "vertices",
      "type": "Vector3[]",
      "detail": "AnimationClip.vertices",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "AnimationClip.name",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "tracks",
      "type": "Array<KeyframeTrack>",
      "detail": "AnimationClip.tracks",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "duration",
      "type": "number",
      "detail": "AnimationClip.duration",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "blendMode",
      "type": "AnimationBlendMode",
      "detail": "AnimationClip.blendMode",
      "documentation": "Property of AnimationClip"
    },
    {
      "name": "userData",
      "type": "Record<string, unknown>",
      "detail": "AnimationClip.userData",
      "documentation": "Property of AnimationClip"
    }
  ],
  "AnimationMixer": [
    {
      "name": "loop",
      "type": "{ action: AnimationAction",
      "detail": "AnimationMixer.loop",
      "documentation": "Property of AnimationMixer"
    },
    {
      "name": "finished",
      "type": "{ action: AnimationAction",
      "detail": "AnimationMixer.finished",
      "documentation": "Property of AnimationMixer"
    },
    {
      "name": "time",
      "type": "number",
      "detail": "AnimationMixer.time",
      "documentation": "Property of AnimationMixer"
    },
    {
      "name": "timeScale",
      "type": "number",
      "detail": "AnimationMixer.timeScale",
      "documentation": "Property of AnimationMixer"
    }
  ],
  "AnimationUtils": [
    {
      "name": "jsonKeys",
      "type": "Array<number>,\n    times: Array<number>,\n    values: Array<number>,\n    valuePropertyName: string,\n): void",
      "detail": "AnimationUtils.jsonKeys",
      "documentation": "Property of AnimationUtils"
    },
    {
      "name": "sourceClip",
      "type": "AnimationClip,\n    name: string,\n    startFrame: number,\n    endFrame: number,\n    fps?: number,\n): AnimationClip",
      "detail": "AnimationUtils.sourceClip",
      "documentation": "Property of AnimationUtils"
    },
    {
      "name": "targetClip",
      "type": "AnimationClip,\n    referenceFrame?: number,\n    referenceClip?: AnimationClip,\n    fps?: number,\n): AnimationClip",
      "detail": "AnimationUtils.targetClip",
      "documentation": "Property of AnimationUtils"
    }
  ],
  "KeyframeTrack": [
    {
      "name": "name",
      "type": "string",
      "detail": "KeyframeTrack.name",
      "documentation": "Property of KeyframeTrack"
    },
    {
      "name": "times",
      "type": "number[]",
      "detail": "KeyframeTrack.times",
      "documentation": "Property of KeyframeTrack"
    },
    {
      "name": "values",
      "type": "number[]",
      "detail": "KeyframeTrack.values",
      "documentation": "Property of KeyframeTrack"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "KeyframeTrack.name",
      "documentation": "Property of KeyframeTrack"
    },
    {
      "name": "times",
      "type": "Float32Array",
      "detail": "KeyframeTrack.times",
      "documentation": "Property of KeyframeTrack"
    },
    {
      "name": "values",
      "type": "Float32Array",
      "detail": "KeyframeTrack.values",
      "documentation": "Property of KeyframeTrack"
    },
    {
      "name": "ValueTypeName",
      "type": "string",
      "detail": "KeyframeTrack.ValueTypeName",
      "documentation": "Property of KeyframeTrack"
    },
    {
      "name": "TimeBufferType",
      "type": "TypedArrayConstructor | ArrayConstructor",
      "detail": "KeyframeTrack.TimeBufferType",
      "documentation": "Property of KeyframeTrack"
    },
    {
      "name": "ValueBufferType",
      "type": "TypedArrayConstructor | ArrayConstructor",
      "detail": "KeyframeTrack.ValueBufferType",
      "documentation": "Property of KeyframeTrack"
    },
    {
      "name": "DefaultInterpolation",
      "type": "InterpolationModes",
      "detail": "KeyframeTrack.DefaultInterpolation",
      "documentation": "Property of KeyframeTrack"
    }
  ],
  "PropertyBinding": [
    {
      "name": "nodeName",
      "type": "string",
      "detail": "PropertyBinding.nodeName",
      "documentation": "Property of PropertyBinding"
    },
    {
      "name": "objectName",
      "type": "string",
      "detail": "PropertyBinding.objectName",
      "documentation": "Property of PropertyBinding"
    },
    {
      "name": "objectIndex",
      "type": "string",
      "detail": "PropertyBinding.objectIndex",
      "documentation": "Property of PropertyBinding"
    },
    {
      "name": "propertyName",
      "type": "string",
      "detail": "PropertyBinding.propertyName",
      "documentation": "Property of PropertyBinding"
    },
    {
      "name": "propertyIndex",
      "type": "string",
      "detail": "PropertyBinding.propertyIndex",
      "documentation": "Property of PropertyBinding"
    },
    {
      "name": "path",
      "type": "string",
      "detail": "PropertyBinding.path",
      "documentation": "Property of PropertyBinding"
    },
    {
      "name": "parsedPath",
      "type": "object",
      "detail": "PropertyBinding.parsedPath",
      "documentation": "Property of PropertyBinding"
    },
    {
      "name": "node",
      "type": "object | null",
      "detail": "PropertyBinding.node",
      "documentation": "Property of PropertyBinding"
    },
    {
      "name": "rootNode",
      "type": "Object3D | Skeleton",
      "detail": "PropertyBinding.rootNode",
      "documentation": "Property of PropertyBinding"
    }
  ],
  "PropertyMixer": [
    {
      "name": "binding",
      "type": "PropertyBinding",
      "detail": "PropertyMixer.binding",
      "documentation": "Property of PropertyMixer"
    },
    {
      "name": "valueSize",
      "type": "number",
      "detail": "PropertyMixer.valueSize",
      "documentation": "Property of PropertyMixer"
    },
    {
      "name": "cumulativeWeight",
      "type": "number",
      "detail": "PropertyMixer.cumulativeWeight",
      "documentation": "Property of PropertyMixer"
    },
    {
      "name": "cumulativeWeightAdditive",
      "type": "number",
      "detail": "PropertyMixer.cumulativeWeightAdditive",
      "documentation": "Property of PropertyMixer"
    },
    {
      "name": "useCount",
      "type": "number",
      "detail": "PropertyMixer.useCount",
      "documentation": "Property of PropertyMixer"
    },
    {
      "name": "referenceCount",
      "type": "number",
      "detail": "PropertyMixer.referenceCount",
      "documentation": "Property of PropertyMixer"
    }
  ],
  "Audio": [
    {
      "name": "listener",
      "type": "AudioListener",
      "detail": "Audio.listener",
      "documentation": "Property of Audio"
    },
    {
      "name": "context",
      "type": "AudioContext",
      "detail": "Audio.context",
      "documentation": "Property of Audio"
    },
    {
      "name": "gain",
      "type": "GainNode",
      "detail": "Audio.gain",
      "documentation": "Property of Audio"
    },
    {
      "name": "autoplay",
      "type": "boolean",
      "detail": "Audio.autoplay",
      "documentation": "Property of Audio"
    },
    {
      "name": "buffer",
      "type": "AudioBuffer | null",
      "detail": "Audio.buffer",
      "documentation": "Property of Audio"
    },
    {
      "name": "detune",
      "type": "number",
      "detail": "Audio.detune",
      "documentation": "Property of Audio"
    },
    {
      "name": "loop",
      "type": "boolean",
      "detail": "Audio.loop",
      "documentation": "Property of Audio"
    },
    {
      "name": "loopStart",
      "type": "number",
      "detail": "Audio.loopStart",
      "documentation": "Property of Audio"
    },
    {
      "name": "loopEnd",
      "type": "number",
      "detail": "Audio.loopEnd",
      "documentation": "Property of Audio"
    },
    {
      "name": "offset",
      "type": "number",
      "detail": "Audio.offset",
      "documentation": "Property of Audio"
    },
    {
      "name": "duration",
      "type": "number | undefined",
      "detail": "Audio.duration",
      "documentation": "Property of Audio"
    },
    {
      "name": "playbackRate",
      "type": "number",
      "detail": "Audio.playbackRate",
      "documentation": "Property of Audio"
    },
    {
      "name": "hasPlaybackControl",
      "type": "boolean",
      "detail": "Audio.hasPlaybackControl",
      "documentation": "Property of Audio"
    },
    {
      "name": "sourceType",
      "type": "string",
      "detail": "Audio.sourceType",
      "documentation": "Property of Audio"
    },
    {
      "name": "source",
      "type": "AudioScheduledSourceNode | null",
      "detail": "Audio.source",
      "documentation": "Property of Audio"
    },
    {
      "name": "filters",
      "type": "AudioNode[]",
      "detail": "Audio.filters",
      "documentation": "Property of Audio"
    }
  ],
  "AudioAnalyser": [
    {
      "name": "analyser",
      "type": "AnalyserNode",
      "detail": "AudioAnalyser.analyser",
      "documentation": "Property of AudioAnalyser"
    },
    {
      "name": "data",
      "type": "Uint8Array",
      "detail": "AudioAnalyser.data",
      "documentation": "Property of AudioAnalyser"
    }
  ],
  "AudioListener": [
    {
      "name": "context",
      "type": "AudioContext",
      "detail": "AudioListener.context",
      "documentation": "Property of AudioListener"
    },
    {
      "name": "gain",
      "type": "GainNode",
      "detail": "AudioListener.gain",
      "documentation": "Property of AudioListener"
    },
    {
      "name": "filter",
      "type": "AudioNode",
      "detail": "AudioListener.filter",
      "documentation": "Property of AudioListener"
    },
    {
      "name": "timeDelta",
      "type": "number",
      "detail": "AudioListener.timeDelta",
      "documentation": "Property of AudioListener"
    }
  ],
  "PositionalAudio": [
    {
      "name": "panner",
      "type": "PannerNode",
      "detail": "PositionalAudio.panner",
      "documentation": "Property of PositionalAudio"
    }
  ],
  "BufferAttribute": [
    {
      "name": "itemSize",
      "type": "number",
      "detail": "BufferAttribute.itemSize",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "array",
      "type": "number[]",
      "detail": "BufferAttribute.array",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "BufferAttribute.normalized",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "BufferAttribute.name",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "BufferAttribute.array",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "BufferAttribute.itemSize",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "BufferAttribute.usage",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "gpuType",
      "type": "AttributeGPUType",
      "detail": "BufferAttribute.gpuType",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "BufferAttribute.updateRanges",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "BufferAttribute.version",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "BufferAttribute.normalized",
      "documentation": "Property of BufferAttribute"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "BufferAttribute.onUploadCallback",
      "documentation": "Property of BufferAttribute"
    }
  ],
  "Int8BufferAttribute": [
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Int8BufferAttribute.itemSize",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "array",
      "type": "number[]",
      "detail": "Int8BufferAttribute.array",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Int8BufferAttribute.normalized",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Int8BufferAttribute.name",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "Int8BufferAttribute.array",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Int8BufferAttribute.itemSize",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "Int8BufferAttribute.usage",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "gpuType",
      "type": "AttributeGPUType",
      "detail": "Int8BufferAttribute.gpuType",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "Int8BufferAttribute.updateRanges",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Int8BufferAttribute.version",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Int8BufferAttribute.normalized",
      "documentation": "Property of Int8BufferAttribute"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "Int8BufferAttribute.onUploadCallback",
      "documentation": "Property of Int8BufferAttribute"
    }
  ],
  "Uint8BufferAttribute": [
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Uint8BufferAttribute.itemSize",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "array",
      "type": "number[]",
      "detail": "Uint8BufferAttribute.array",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Uint8BufferAttribute.normalized",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Uint8BufferAttribute.name",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "Uint8BufferAttribute.array",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Uint8BufferAttribute.itemSize",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "Uint8BufferAttribute.usage",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "gpuType",
      "type": "AttributeGPUType",
      "detail": "Uint8BufferAttribute.gpuType",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "Uint8BufferAttribute.updateRanges",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Uint8BufferAttribute.version",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Uint8BufferAttribute.normalized",
      "documentation": "Property of Uint8BufferAttribute"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "Uint8BufferAttribute.onUploadCallback",
      "documentation": "Property of Uint8BufferAttribute"
    }
  ],
  "Uint8ClampedBufferAttribute": [
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Uint8ClampedBufferAttribute.itemSize",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "array",
      "type": "number[]",
      "detail": "Uint8ClampedBufferAttribute.array",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Uint8ClampedBufferAttribute.normalized",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Uint8ClampedBufferAttribute.name",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "Uint8ClampedBufferAttribute.array",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Uint8ClampedBufferAttribute.itemSize",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "Uint8ClampedBufferAttribute.usage",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "gpuType",
      "type": "AttributeGPUType",
      "detail": "Uint8ClampedBufferAttribute.gpuType",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "Uint8ClampedBufferAttribute.updateRanges",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Uint8ClampedBufferAttribute.version",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Uint8ClampedBufferAttribute.normalized",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "Uint8ClampedBufferAttribute.onUploadCallback",
      "documentation": "Property of Uint8ClampedBufferAttribute"
    }
  ],
  "Int16BufferAttribute": [
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Int16BufferAttribute.itemSize",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "array",
      "type": "number[]",
      "detail": "Int16BufferAttribute.array",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Int16BufferAttribute.normalized",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Int16BufferAttribute.name",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "Int16BufferAttribute.array",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Int16BufferAttribute.itemSize",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "Int16BufferAttribute.usage",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "gpuType",
      "type": "AttributeGPUType",
      "detail": "Int16BufferAttribute.gpuType",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "Int16BufferAttribute.updateRanges",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Int16BufferAttribute.version",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Int16BufferAttribute.normalized",
      "documentation": "Property of Int16BufferAttribute"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "Int16BufferAttribute.onUploadCallback",
      "documentation": "Property of Int16BufferAttribute"
    }
  ],
  "Uint16BufferAttribute": [
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Uint16BufferAttribute.itemSize",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "array",
      "type": "number[]",
      "detail": "Uint16BufferAttribute.array",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Uint16BufferAttribute.normalized",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Uint16BufferAttribute.name",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "Uint16BufferAttribute.array",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Uint16BufferAttribute.itemSize",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "Uint16BufferAttribute.usage",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "gpuType",
      "type": "AttributeGPUType",
      "detail": "Uint16BufferAttribute.gpuType",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "Uint16BufferAttribute.updateRanges",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Uint16BufferAttribute.version",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Uint16BufferAttribute.normalized",
      "documentation": "Property of Uint16BufferAttribute"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "Uint16BufferAttribute.onUploadCallback",
      "documentation": "Property of Uint16BufferAttribute"
    }
  ],
  "Int32BufferAttribute": [
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Int32BufferAttribute.itemSize",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "array",
      "type": "number[]",
      "detail": "Int32BufferAttribute.array",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Int32BufferAttribute.normalized",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Int32BufferAttribute.name",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "Int32BufferAttribute.array",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Int32BufferAttribute.itemSize",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "Int32BufferAttribute.usage",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "gpuType",
      "type": "AttributeGPUType",
      "detail": "Int32BufferAttribute.gpuType",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "Int32BufferAttribute.updateRanges",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Int32BufferAttribute.version",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Int32BufferAttribute.normalized",
      "documentation": "Property of Int32BufferAttribute"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "Int32BufferAttribute.onUploadCallback",
      "documentation": "Property of Int32BufferAttribute"
    }
  ],
  "Uint32BufferAttribute": [
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Uint32BufferAttribute.itemSize",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "array",
      "type": "number[]",
      "detail": "Uint32BufferAttribute.array",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Uint32BufferAttribute.normalized",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Uint32BufferAttribute.name",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "Uint32BufferAttribute.array",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Uint32BufferAttribute.itemSize",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "Uint32BufferAttribute.usage",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "gpuType",
      "type": "AttributeGPUType",
      "detail": "Uint32BufferAttribute.gpuType",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "Uint32BufferAttribute.updateRanges",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Uint32BufferAttribute.version",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Uint32BufferAttribute.normalized",
      "documentation": "Property of Uint32BufferAttribute"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "Uint32BufferAttribute.onUploadCallback",
      "documentation": "Property of Uint32BufferAttribute"
    }
  ],
  "Float16BufferAttribute": [
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Float16BufferAttribute.itemSize",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "array",
      "type": "number[]",
      "detail": "Float16BufferAttribute.array",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Float16BufferAttribute.normalized",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Float16BufferAttribute.name",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "Float16BufferAttribute.array",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Float16BufferAttribute.itemSize",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "Float16BufferAttribute.usage",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "gpuType",
      "type": "AttributeGPUType",
      "detail": "Float16BufferAttribute.gpuType",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "Float16BufferAttribute.updateRanges",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Float16BufferAttribute.version",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Float16BufferAttribute.normalized",
      "documentation": "Property of Float16BufferAttribute"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "Float16BufferAttribute.onUploadCallback",
      "documentation": "Property of Float16BufferAttribute"
    }
  ],
  "Float32BufferAttribute": [
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Float32BufferAttribute.itemSize",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "array",
      "type": "number[]",
      "detail": "Float32BufferAttribute.array",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Float32BufferAttribute.normalized",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Float32BufferAttribute.name",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "Float32BufferAttribute.array",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "Float32BufferAttribute.itemSize",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "Float32BufferAttribute.usage",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "gpuType",
      "type": "AttributeGPUType",
      "detail": "Float32BufferAttribute.gpuType",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "Float32BufferAttribute.updateRanges",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "Float32BufferAttribute.version",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "Float32BufferAttribute.normalized",
      "documentation": "Property of Float32BufferAttribute"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "Float32BufferAttribute.onUploadCallback",
      "documentation": "Property of Float32BufferAttribute"
    }
  ],
  "BufferGeometry": [
    {
      "name": "uuid",
      "type": "string",
      "detail": "BufferGeometry.uuid",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "start",
      "type": "number",
      "detail": "BufferGeometry.start",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "count",
      "type": "number",
      "detail": "BufferGeometry.count",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "dispose",
      "type": "{}",
      "detail": "BufferGeometry.dispose",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "id",
      "type": "number",
      "detail": "BufferGeometry.id",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "BufferGeometry.uuid",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "BufferGeometry.name",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "index",
      "type": "BufferAttribute | null",
      "detail": "BufferGeometry.index",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "indirect",
      "type": "IndirectStorageBufferAttribute | null",
      "detail": "BufferGeometry.indirect",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "attributes",
      "type": "Attributes",
      "detail": "BufferGeometry.attributes",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "morphAttributes",
      "type": "{\n        position?: Array<BufferAttribute | InterleavedBufferAttribute> | undefined",
      "detail": "BufferGeometry.morphAttributes",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "morphTargetsRelative",
      "type": "boolean",
      "detail": "BufferGeometry.morphTargetsRelative",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "groups",
      "type": "GeometryGroup[]",
      "detail": "BufferGeometry.groups",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "boundingBox",
      "type": "Box3 | null",
      "detail": "BufferGeometry.boundingBox",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "boundingSphere",
      "type": "Sphere | null",
      "detail": "BufferGeometry.boundingSphere",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "drawRange",
      "type": "{ start: number",
      "detail": "BufferGeometry.drawRange",
      "documentation": "Property of BufferGeometry"
    },
    {
      "name": "userData",
      "type": "Record<string, any>",
      "detail": "BufferGeometry.userData",
      "documentation": "Property of BufferGeometry"
    }
  ],
  "Clock": [
    {
      "name": "autoStart",
      "type": "boolean",
      "detail": "Clock.autoStart",
      "documentation": "Property of Clock"
    },
    {
      "name": "startTime",
      "type": "number",
      "detail": "Clock.startTime",
      "documentation": "Property of Clock"
    },
    {
      "name": "oldTime",
      "type": "number",
      "detail": "Clock.oldTime",
      "documentation": "Property of Clock"
    },
    {
      "name": "elapsedTime",
      "type": "number",
      "detail": "Clock.elapsedTime",
      "documentation": "Property of Clock"
    },
    {
      "name": "running",
      "type": "boolean",
      "detail": "Clock.running",
      "documentation": "Property of Clock"
    }
  ],
  "EventDispatcher": [
    {
      "name": "event",
      "type": "TEventData & Event<TEventType, TTarget>,\n) => void",
      "detail": "EventDispatcher.event",
      "documentation": "Property of EventDispatcher"
    }
  ],
  "GLBufferAttribute": [
    {
      "name": "name",
      "type": "string",
      "detail": "GLBufferAttribute.name",
      "documentation": "Property of GLBufferAttribute"
    },
    {
      "name": "buffer",
      "type": "WebGLBuffer",
      "detail": "GLBufferAttribute.buffer",
      "documentation": "Property of GLBufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "GLBufferAttribute.itemSize",
      "documentation": "Property of GLBufferAttribute"
    },
    {
      "name": "elementSize",
      "type": "1 | 2 | 4",
      "detail": "GLBufferAttribute.elementSize",
      "documentation": "Property of GLBufferAttribute"
    },
    {
      "name": "count",
      "type": "number",
      "detail": "GLBufferAttribute.count",
      "documentation": "Property of GLBufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "GLBufferAttribute.normalized",
      "documentation": "Property of GLBufferAttribute"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "GLBufferAttribute.version",
      "documentation": "Property of GLBufferAttribute"
    }
  ],
  "InstancedBufferAttribute": [
    {
      "name": "meshPerAttribute",
      "type": "number",
      "detail": "InstancedBufferAttribute.meshPerAttribute",
      "documentation": "Property of InstancedBufferAttribute"
    }
  ],
  "InstancedBufferGeometry": [
    {
      "name": "instanceCount",
      "type": "number",
      "detail": "InstancedBufferGeometry.instanceCount",
      "documentation": "Property of InstancedBufferGeometry"
    }
  ],
  "InstancedInterleavedBuffer": [
    {
      "name": "meshPerAttribute",
      "type": "number",
      "detail": "InstancedInterleavedBuffer.meshPerAttribute",
      "documentation": "Property of InstancedInterleavedBuffer"
    }
  ],
  "InterleavedBuffer": [
    {
      "name": "array",
      "type": "TypedArray",
      "detail": "InterleavedBuffer.array",
      "documentation": "Property of InterleavedBuffer"
    },
    {
      "name": "stride",
      "type": "number",
      "detail": "InterleavedBuffer.stride",
      "documentation": "Property of InterleavedBuffer"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "InterleavedBuffer.usage",
      "documentation": "Property of InterleavedBuffer"
    },
    {
      "name": "updateRanges",
      "type": "Array<{\n        /**\n         * Position at which to start update.\n         */\n        start: number",
      "detail": "InterleavedBuffer.updateRanges",
      "documentation": "Property of InterleavedBuffer"
    },
    {
      "name": "version",
      "type": "number",
      "detail": "InterleavedBuffer.version",
      "documentation": "Property of InterleavedBuffer"
    },
    {
      "name": "count",
      "type": "number",
      "detail": "InterleavedBuffer.count",
      "documentation": "Property of InterleavedBuffer"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "InterleavedBuffer.uuid",
      "documentation": "Property of InterleavedBuffer"
    },
    {
      "name": "onUploadCallback",
      "type": "() => void",
      "detail": "InterleavedBuffer.onUploadCallback",
      "documentation": "Property of InterleavedBuffer"
    }
  ],
  "InterleavedBufferAttribute": [
    {
      "name": "name",
      "type": "string",
      "detail": "InterleavedBufferAttribute.name",
      "documentation": "Property of InterleavedBufferAttribute"
    },
    {
      "name": "data",
      "type": "InterleavedBuffer",
      "detail": "InterleavedBufferAttribute.data",
      "documentation": "Property of InterleavedBufferAttribute"
    },
    {
      "name": "itemSize",
      "type": "number",
      "detail": "InterleavedBufferAttribute.itemSize",
      "documentation": "Property of InterleavedBufferAttribute"
    },
    {
      "name": "offset",
      "type": "number",
      "detail": "InterleavedBufferAttribute.offset",
      "documentation": "Property of InterleavedBufferAttribute"
    },
    {
      "name": "normalized",
      "type": "boolean",
      "detail": "InterleavedBufferAttribute.normalized",
      "documentation": "Property of InterleavedBufferAttribute"
    }
  ],
  "Layers": [
    {
      "name": "mask",
      "type": "number",
      "detail": "Layers.mask",
      "documentation": "Property of Layers"
    }
  ],
  "Object3D": [
    {
      "name": "uuid",
      "type": "string",
      "detail": "Object3D.uuid",
      "documentation": "Property of Object3D"
    },
    {
      "name": "layers",
      "type": "number",
      "detail": "Object3D.layers",
      "documentation": "Property of Object3D"
    },
    {
      "name": "matrix",
      "type": "Matrix4Tuple",
      "detail": "Object3D.matrix",
      "documentation": "Property of Object3D"
    },
    {
      "name": "up",
      "type": "Vector3Tuple",
      "detail": "Object3D.up",
      "documentation": "Property of Object3D"
    },
    {
      "name": "object",
      "type": "Object3DJSONObject",
      "detail": "Object3D.object",
      "documentation": "Property of Object3D"
    },
    {
      "name": "geometries",
      "type": "Record<string, BufferGeometryJSON>",
      "detail": "Object3D.geometries",
      "documentation": "Property of Object3D"
    },
    {
      "name": "materials",
      "type": "Record<string, MaterialJSON>",
      "detail": "Object3D.materials",
      "documentation": "Property of Object3D"
    },
    {
      "name": "textures",
      "type": "Record<string, TextureJSON>",
      "detail": "Object3D.textures",
      "documentation": "Property of Object3D"
    },
    {
      "name": "images",
      "type": "Record<string, SourceJSON>",
      "detail": "Object3D.images",
      "documentation": "Property of Object3D"
    },
    {
      "name": "shapes",
      "type": "Record<string, ShapeJSON>",
      "detail": "Object3D.shapes",
      "documentation": "Property of Object3D"
    },
    {
      "name": "skeletons",
      "type": "Record<string, SkeletonJSON>",
      "detail": "Object3D.skeletons",
      "documentation": "Property of Object3D"
    },
    {
      "name": "animations",
      "type": "Record<string, AnimationClipJSON>",
      "detail": "Object3D.animations",
      "documentation": "Property of Object3D"
    },
    {
      "name": "nodes",
      "type": "Record<string, unknown>",
      "detail": "Object3D.nodes",
      "documentation": "Property of Object3D"
    },
    {
      "name": "added",
      "type": "{}",
      "detail": "Object3D.added",
      "documentation": "Property of Object3D"
    },
    {
      "name": "removed",
      "type": "{}",
      "detail": "Object3D.removed",
      "documentation": "Property of Object3D"
    },
    {
      "name": "childadded",
      "type": "{ child: Object3D }",
      "detail": "Object3D.childadded",
      "documentation": "Property of Object3D"
    },
    {
      "name": "childremoved",
      "type": "{ child: Object3D }",
      "detail": "Object3D.childremoved",
      "documentation": "Property of Object3D"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "Object3D.uuid",
      "documentation": "Property of Object3D"
    },
    {
      "name": "name",
      "type": "string",
      "detail": "Object3D.name",
      "documentation": "Property of Object3D"
    },
    {
      "name": "parent",
      "type": "Object3D | null",
      "detail": "Object3D.parent",
      "documentation": "Property of Object3D"
    },
    {
      "name": "children",
      "type": "Object3D[]",
      "detail": "Object3D.children",
      "documentation": "Property of Object3D"
    },
    {
      "name": "up",
      "type": "Vector3",
      "detail": "Object3D.up",
      "documentation": "Property of Object3D"
    },
    {
      "name": "matrix",
      "type": "Matrix4",
      "detail": "Object3D.matrix",
      "documentation": "Property of Object3D"
    },
    {
      "name": "matrixWorld",
      "type": "Matrix4",
      "detail": "Object3D.matrixWorld",
      "documentation": "Property of Object3D"
    },
    {
      "name": "matrixAutoUpdate",
      "type": "boolean",
      "detail": "Object3D.matrixAutoUpdate",
      "documentation": "Property of Object3D"
    },
    {
      "name": "matrixWorldAutoUpdate",
      "type": "boolean",
      "detail": "Object3D.matrixWorldAutoUpdate",
      "documentation": "Property of Object3D"
    },
    {
      "name": "matrixWorldNeedsUpdate",
      "type": "boolean",
      "detail": "Object3D.matrixWorldNeedsUpdate",
      "documentation": "Property of Object3D"
    },
    {
      "name": "layers",
      "type": "Layers",
      "detail": "Object3D.layers",
      "documentation": "Property of Object3D"
    },
    {
      "name": "visible",
      "type": "boolean",
      "detail": "Object3D.visible",
      "documentation": "Property of Object3D"
    },
    {
      "name": "castShadow",
      "type": "boolean",
      "detail": "Object3D.castShadow",
      "documentation": "Property of Object3D"
    },
    {
      "name": "receiveShadow",
      "type": "boolean",
      "detail": "Object3D.receiveShadow",
      "documentation": "Property of Object3D"
    },
    {
      "name": "frustumCulled",
      "type": "boolean",
      "detail": "Object3D.frustumCulled",
      "documentation": "Property of Object3D"
    },
    {
      "name": "renderOrder",
      "type": "number",
      "detail": "Object3D.renderOrder",
      "documentation": "Property of Object3D"
    },
    {
      "name": "animations",
      "type": "AnimationClip[]",
      "detail": "Object3D.animations",
      "documentation": "Property of Object3D"
    },
    {
      "name": "userData",
      "type": "Record<string, any>",
      "detail": "Object3D.userData",
      "documentation": "Property of Object3D"
    }
  ],
  "Raycaster": [
    {
      "name": "a",
      "type": "number",
      "detail": "Raycaster.a",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "b",
      "type": "number",
      "detail": "Raycaster.b",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "c",
      "type": "number",
      "detail": "Raycaster.c",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "normal",
      "type": "Vector3",
      "detail": "Raycaster.normal",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "materialIndex",
      "type": "number",
      "detail": "Raycaster.materialIndex",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "distance",
      "type": "number",
      "detail": "Raycaster.distance",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "point",
      "type": "Vector3",
      "detail": "Raycaster.point",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "object",
      "type": "TIntersected",
      "detail": "Raycaster.object",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "Mesh",
      "type": "any",
      "detail": "Raycaster.Mesh",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "Line",
      "type": "{ threshold: number }",
      "detail": "Raycaster.Line",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "LOD",
      "type": "any",
      "detail": "Raycaster.LOD",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "Points",
      "type": "{ threshold: number }",
      "detail": "Raycaster.Points",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "Sprite",
      "type": "any",
      "detail": "Raycaster.Sprite",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "ray",
      "type": "Ray",
      "detail": "Raycaster.ray",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "near",
      "type": "number",
      "detail": "Raycaster.near",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "far",
      "type": "number",
      "detail": "Raycaster.far",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "camera",
      "type": "Camera",
      "detail": "Raycaster.camera",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "layers",
      "type": "Layers",
      "detail": "Raycaster.layers",
      "documentation": "Property of Raycaster"
    },
    {
      "name": "params",
      "type": "RaycasterParameters",
      "detail": "Raycaster.params",
      "documentation": "Property of Raycaster"
    }
  ],
  "RenderTarget": [
    {
      "name": "width",
      "type": "number",
      "detail": "RenderTarget.width",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "height",
      "type": "number",
      "detail": "RenderTarget.height",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "depth",
      "type": "number",
      "detail": "RenderTarget.depth",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "scissor",
      "type": "Vector4",
      "detail": "RenderTarget.scissor",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "scissorTest",
      "type": "boolean",
      "detail": "RenderTarget.scissorTest",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "viewport",
      "type": "Vector4",
      "detail": "RenderTarget.viewport",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "textures",
      "type": "TTexture[]",
      "detail": "RenderTarget.textures",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "depthBuffer",
      "type": "boolean",
      "detail": "RenderTarget.depthBuffer",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "stencilBuffer",
      "type": "boolean",
      "detail": "RenderTarget.stencilBuffer",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "resolveDepthBuffer",
      "type": "boolean",
      "detail": "RenderTarget.resolveDepthBuffer",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "resolveStencilBuffer",
      "type": "boolean",
      "detail": "RenderTarget.resolveStencilBuffer",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "samples",
      "type": "number",
      "detail": "RenderTarget.samples",
      "documentation": "Property of RenderTarget"
    },
    {
      "name": "multiview",
      "type": "boolean",
      "detail": "RenderTarget.multiview",
      "documentation": "Property of RenderTarget"
    }
  ],
  "Uniform": [
    {
      "name": "value",
      "type": "T",
      "detail": "Uniform.value",
      "documentation": "Property of Uniform"
    }
  ],
  "UniformsGroup": [
    {
      "name": "id",
      "type": "number",
      "detail": "UniformsGroup.id",
      "documentation": "Property of UniformsGroup"
    },
    {
      "name": "usage",
      "type": "Usage",
      "detail": "UniformsGroup.usage",
      "documentation": "Property of UniformsGroup"
    },
    {
      "name": "uniforms",
      "type": "Array<Uniform | Uniform[]>",
      "detail": "UniformsGroup.uniforms",
      "documentation": "Property of UniformsGroup"
    }
  ],
  "CurvePath": [
    {
      "name": "autoClose",
      "type": "boolean",
      "detail": "CurvePath.autoClose",
      "documentation": "Property of CurvePath"
    },
    {
      "name": "curves",
      "type": "CurveJSON[]",
      "detail": "CurvePath.curves",
      "documentation": "Property of CurvePath"
    },
    {
      "name": "curves",
      "type": "Array<Curve<TVector>>",
      "detail": "CurvePath.curves",
      "documentation": "Property of CurvePath"
    },
    {
      "name": "autoClose",
      "type": "boolean",
      "detail": "CurvePath.autoClose",
      "documentation": "Property of CurvePath"
    }
  ],
  "Path": [
    {
      "name": "currentPoint",
      "type": "Vector2Tuple",
      "detail": "Path.currentPoint",
      "documentation": "Property of Path"
    },
    {
      "name": "currentPoint",
      "type": "Vector2",
      "detail": "Path.currentPoint",
      "documentation": "Property of Path"
    }
  ],
  "Shape": [
    {
      "name": "uuid",
      "type": "string",
      "detail": "Shape.uuid",
      "documentation": "Property of Shape"
    },
    {
      "name": "holes",
      "type": "PathJSON[]",
      "detail": "Shape.holes",
      "documentation": "Property of Shape"
    },
    {
      "name": "uuid",
      "type": "string",
      "detail": "Shape.uuid",
      "documentation": "Property of Shape"
    },
    {
      "name": "holes",
      "type": "Path[]",
      "detail": "Shape.holes",
      "documentation": "Property of Shape"
    }
  ],
  "ShapePath": [
    {
      "name": "subPaths",
      "type": "Path[]",
      "detail": "ShapePath.subPaths",
      "documentation": "Property of ShapePath"
    },
    {
      "name": "color",
      "type": "Color",
      "detail": "ShapePath.color",
      "documentation": "Property of ShapePath"
    }
  ],
  "CatmullRomCurve3": [
    {
      "name": "closed",
      "type": "boolean",
      "detail": "CatmullRomCurve3.closed",
      "documentation": "Property of CatmullRomCurve3"
    },
    {
      "name": "points",
      "type": "Vector3[]",
      "detail": "CatmullRomCurve3.points",
      "documentation": "Property of CatmullRomCurve3"
    },
    {
      "name": "curveType",
      "type": "CurveType",
      "detail": "CatmullRomCurve3.curveType",
      "documentation": "Property of CatmullRomCurve3"
    },
    {
      "name": "tension",
      "type": "number",
      "detail": "CatmullRomCurve3.tension",
      "documentation": "Property of CatmullRomCurve3"
    }
  ],
  "CubicBezierCurve": [
    {
      "name": "v0",
      "type": "Vector2",
      "detail": "CubicBezierCurve.v0",
      "documentation": "Property of CubicBezierCurve"
    },
    {
      "name": "v1",
      "type": "Vector2",
      "detail": "CubicBezierCurve.v1",
      "documentation": "Property of CubicBezierCurve"
    },
    {
      "name": "v2",
      "type": "Vector2",
      "detail": "CubicBezierCurve.v2",
      "documentation": "Property of CubicBezierCurve"
    },
    {
      "name": "v3",
      "type": "Vector2",
      "detail": "CubicBezierCurve.v3",
      "documentation": "Property of CubicBezierCurve"
    }
  ],
  "CubicBezierCurve3": [
    {
      "name": "v0",
      "type": "Vector3",
      "detail": "CubicBezierCurve3.v0",
      "documentation": "Property of CubicBezierCurve3"
    },
    {
      "name": "v1",
      "type": "Vector3",
      "detail": "CubicBezierCurve3.v1",
      "documentation": "Property of CubicBezierCurve3"
    },
    {
      "name": "v2",
      "type": "Vector3",
      "detail": "CubicBezierCurve3.v2",
      "documentation": "Property of CubicBezierCurve3"
    },
    {
      "name": "v3",
      "type": "Vector3",
      "detail": "CubicBezierCurve3.v3",
      "documentation": "Property of CubicBezierCurve3"
    }
  ],
  "EllipseCurve": [
    {
      "name": "aX",
      "type": "number",
      "detail": "EllipseCurve.aX",
      "documentation": "Property of EllipseCurve"
    },
    {
      "name": "aY",
      "type": "number",
      "detail": "EllipseCurve.aY",
      "documentation": "Property of EllipseCurve"
    },
    {
      "name": "xRadius",
      "type": "number",
      "detail": "EllipseCurve.xRadius",
      "documentation": "Property of EllipseCurve"
    },
    {
      "name": "yRadius",
      "type": "number",
      "detail": "EllipseCurve.yRadius",
      "documentation": "Property of EllipseCurve"
    },
    {
      "name": "aStartAngle",
      "type": "number",
      "detail": "EllipseCurve.aStartAngle",
      "documentation": "Property of EllipseCurve"
    },
    {
      "name": "aEndAngle",
      "type": "number",
      "detail": "EllipseCurve.aEndAngle",
      "documentation": "Property of EllipseCurve"
    },
    {
      "name": "aClockwise",
      "type": "boolean",
      "detail": "EllipseCurve.aClockwise",
      "documentation": "Property of EllipseCurve"
    },
    {
      "name": "aRotation",
      "type": "number",
      "detail": "EllipseCurve.aRotation",
      "documentation": "Property of EllipseCurve"
    }
  ],
  "LineCurve": [
    {
      "name": "v1",
      "type": "Vector2",
      "detail": "LineCurve.v1",
      "documentation": "Property of LineCurve"
    },
    {
      "name": "v2",
      "type": "Vector2",
      "detail": "LineCurve.v2",
      "documentation": "Property of LineCurve"
    }
  ],
  "LineCurve3": [
    {
      "name": "v1",
      "type": "Vector3",
      "detail": "LineCurve3.v1",
      "documentation": "Property of LineCurve3"
    },
    {
      "name": "v2",
      "type": "Vector3",
      "detail": "LineCurve3.v2",
      "documentation": "Property of LineCurve3"
    }
  ],
  "QuadraticBezierCurve": [
    {
      "name": "v0",
      "type": "Vector2",
      "detail": "QuadraticBezierCurve.v0",
      "documentation": "Property of QuadraticBezierCurve"
    },
    {
      "name": "v1",
      "type": "Vector2",
      "detail": "QuadraticBezierCurve.v1",
      "documentation": "Property of QuadraticBezierCurve"
    },
    {
      "name": "v2",
      "type": "Vector2",
      "detail": "QuadraticBezierCurve.v2",
      "documentation": "Property of QuadraticBezierCurve"
    }
  ],
  "QuadraticBezierCurve3": [
    {
      "name": "v0",
      "type": "Vector3",
      "detail": "QuadraticBezierCurve3.v0",
      "documentation": "Property of QuadraticBezierCurve3"
    },
    {
      "name": "v1",
      "type": "Vector3",
      "detail": "QuadraticBezierCurve3.v1",
      "documentation": "Property of QuadraticBezierCurve3"
    },
    {
      "name": "v2",
      "type": "Vector3",
      "detail": "QuadraticBezierCurve3.v2",
      "documentation": "Property of QuadraticBezierCurve3"
    }
  ],
  "SplineCurve": [
    {
      "name": "points",
      "type": "Vector2[]",
      "detail": "SplineCurve.points",
      "documentation": "Property of SplineCurve"
    }
  ],
  "WebGLRenderer": [
    {
      "name": "checkShaderErrors",
      "type": "boolean",
      "detail": "WebGLRenderer.checkShaderErrors",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "onShaderError",
      "type": "| ((\n            gl: WebGLRenderingContext,\n            program: WebGLProgram,\n            glVertexShader: WebGLShader,\n            glFragmentShader: WebGLShader,\n        ) => void)\n        | null",
      "detail": "WebGLRenderer.onShaderError",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "domElement",
      "type": "HTMLCanvasElement",
      "detail": "WebGLRenderer.domElement",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "autoClear",
      "type": "boolean",
      "detail": "WebGLRenderer.autoClear",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "autoClearColor",
      "type": "boolean",
      "detail": "WebGLRenderer.autoClearColor",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "autoClearDepth",
      "type": "boolean",
      "detail": "WebGLRenderer.autoClearDepth",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "autoClearStencil",
      "type": "boolean",
      "detail": "WebGLRenderer.autoClearStencil",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "debug",
      "type": "WebGLDebug",
      "detail": "WebGLRenderer.debug",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "sortObjects",
      "type": "boolean",
      "detail": "WebGLRenderer.sortObjects",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "clippingPlanes",
      "type": "Plane[]",
      "detail": "WebGLRenderer.clippingPlanes",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "localClippingEnabled",
      "type": "boolean",
      "detail": "WebGLRenderer.localClippingEnabled",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "extensions",
      "type": "WebGLExtensions",
      "detail": "WebGLRenderer.extensions",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "toneMapping",
      "type": "ToneMapping",
      "detail": "WebGLRenderer.toneMapping",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "toneMappingExposure",
      "type": "number",
      "detail": "WebGLRenderer.toneMappingExposure",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "transmissionResolutionScale",
      "type": "number",
      "detail": "WebGLRenderer.transmissionResolutionScale",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "info",
      "type": "WebGLInfo",
      "detail": "WebGLRenderer.info",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "shadowMap",
      "type": "WebGLShadowMap",
      "detail": "WebGLRenderer.shadowMap",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "capabilities",
      "type": "WebGLCapabilities",
      "detail": "WebGLRenderer.capabilities",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "properties",
      "type": "WebGLProperties",
      "detail": "WebGLRenderer.properties",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "renderLists",
      "type": "WebGLRenderLists",
      "detail": "WebGLRenderer.renderLists",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "state",
      "type": "WebGLState",
      "detail": "WebGLRenderer.state",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "xr",
      "type": "WebXRManager",
      "detail": "WebGLRenderer.xr",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "compile",
      "type": "(scene: Object3D, camera: Camera, targetScene?: Scene | null) => Set<Material>",
      "detail": "WebGLRenderer.compile",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "compileAsync",
      "type": "(scene: Object3D, camera: Camera, targetScene?: Scene | null) => Promise<Object3D>",
      "detail": "WebGLRenderer.compileAsync",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "vr",
      "type": "boolean",
      "detail": "WebGLRenderer.vr",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "shadowMapEnabled",
      "type": "boolean",
      "detail": "WebGLRenderer.shadowMapEnabled",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "shadowMapType",
      "type": "ShadowMapType",
      "detail": "WebGLRenderer.shadowMapType",
      "documentation": "Property of WebGLRenderer"
    },
    {
      "name": "shadowMapCullFace",
      "type": "CullFace",
      "detail": "WebGLRenderer.shadowMapCullFace",
      "documentation": "Property of WebGLRenderer"
    }
  ]
};

exports.constants = [
  {
    "name": "ColorManagement",
    "detail": "THREE.ColorManagement",
    "documentation": "Three.js constant"
  },
  {
    "name": "DEG2RAD",
    "detail": "THREE.DEG2RAD",
    "documentation": "Three.js constant"
  },
  {
    "name": "RAD2DEG",
    "detail": "THREE.RAD2DEG",
    "documentation": "Three.js constant"
  },
  {
    "name": "MathUtils",
    "detail": "THREE.MathUtils",
    "documentation": "Three.js constant"
  }
];
