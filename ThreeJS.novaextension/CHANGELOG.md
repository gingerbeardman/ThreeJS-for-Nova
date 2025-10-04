# Changelog

All notable changes to the Three.js Completions extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-03

### Added
- Initial release of Three.js Completions for Nova
- Comprehensive autocomplete for 100+ Three.js classes
- Context-aware completion suggestions
- Support for THREE namespace completions
- ES6 import statement completions
- Method and property completions for common Three.js objects
- Detailed documentation for each completion item
- Configuration option to enable/disable completions
- Support for JavaScript and TypeScript files

### Completions Included
- **Core**: Scene, Cameras, Renderers, Object3D, Mesh, Group
- **Geometries**: Box, Sphere, Plane, Cylinder, Cone, Torus, and 20+ more
- **Materials**: Standard, Physical, Phong, Lambert, Toon, Basic, and more
- **Lights**: Ambient, Directional, Point, Spot, Hemisphere, RectArea
- **Textures**: Texture, TextureLoader, CubeTexture, Canvas, Video, Data textures
- **Loaders**: GLTF, OBJ, FBX, File, Image, Audio, Font loaders
- **Math**: Vector2/3/4, Matrix3/4, Quaternion, Euler, Color, Ray, Plane, Sphere, Box3
- **Controls**: Orbit, Trackball, Fly, FirstPerson, PointerLock
- **Helpers**: Axes, Grid, Box, Camera, Light helpers
- **Animation**: AnimationMixer, AnimationClip, AnimationAction, KeyframeTrack
- **Audio**: Audio, PositionalAudio, AudioListener, AudioAnalyser
- **Curves**: Catmull-Rom, Bezier, Ellipse, Line, Spline curves
- **Constants**: Wrapping modes, filters, blend modes, color spaces, tone mapping
- **Objects**: Line, LineLoop, LineSegments, Points, Sprite, LOD, Bone, Skeleton
- **Utilities**: Clock, Raycaster, LoadingManager

### Features
- Smart context detection (after "THREE.", "new ", import statements)
- Constructor parameter hints
- Detailed descriptions for all completions
- Fast and lightweight implementation
- Memory-efficient caching

## [Unreleased]

### Planned Features
- Support for Three.js addons and examples
- Snippet support for common Three.js patterns
- Integration with Three.js version detection
- Custom completion triggers
- Extended method completions for specific object types
- Property completions based on object type inference
- Shader code completions (GLSL)
- Post-processing effect completions

---

For older versions and detailed changes, see the [GitHub releases page](https://github.com/mrdoob/three.js/releases).


