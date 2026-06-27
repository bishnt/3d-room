import { Canvas } from '@react-three/fiber'
import Scene from './components/Scene'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <Canvas
        camera={{ position: [0, 5, 10], fov: 50 }}
        shadows
        gl={{ antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
