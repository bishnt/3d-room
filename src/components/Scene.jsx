import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

function RotatingBox() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[-2, 1, 0]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function BouncingSphere() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y = 1 + Math.abs(Math.sin(state.clock.elapsedTime * 2)) * 2
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 1, 0]} castShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  )
}

function StaticBox() {
  return (
    <mesh position={[2, 0.5, 0]} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Environment preset="sunset" />
      
      <RotatingBox />
      <BouncingSphere />
      <StaticBox />
      <Ground />
      
      <OrbitControls />
    </>
  )
}
