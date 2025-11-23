# React Three Fiber Application

A modern React application with Three.js using React Three Fiber, Drei, and optional Cannon physics.

## Features

- ⚡️ Vite for fast development
- 🎨 React Three Fiber for declarative 3D scenes
- 📦 Drei for useful helpers and abstractions
- 🎮 Optional Cannon physics support
- 🔧 GLTFJSX for converting GLB files to JSX components

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Using GLTFJSX

To convert a GLB/GLTF file to a JSX component:

```bash
npx gltfjsx model.glb
```

This will generate a JSX component file that you can import and use in your React Three Fiber scene.

## Project Structure

```
src/
  ├── components/
  │   └── Scene.jsx      # Main 3D scene component
  ├── App.jsx            # Main app component with Canvas
  ├── main.jsx           # Entry point
  └── index.css          # Global styles
```

## Example Scene

The default scene includes:
- A rotating orange box
- A bouncing pink sphere
- A static green box
- A ground plane with shadows
- Orbit controls for camera interaction
- Environment lighting

## Adding Physics (Optional)

To use Cannon physics, wrap your objects with the `Physics` component from `@react-three/cannon`:

```jsx
import { Physics } from '@react-three/cannon'

<Physics>
  {/* Your physics-enabled objects */}
</Physics>
```

## Resources

- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Drei Documentation](https://github.com/pmndrs/drei)
- [Three.js Documentation](https://threejs.org/docs/)

# 3d-room
