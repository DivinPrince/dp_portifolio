import { Suspense, useRef, useState, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, useGLTF, Float } from '@react-three/drei'
import Loader from './Loader'

useGLTF.preload('/planet/scene.gltf')

function EarthModel({ kickRef, onKick }) {
  const { scene } = useGLTF('/planet/scene.gltf')
  const groupRef = useRef()

  useFrame((_, delta) => {
    if (!groupRef.current || kickRef.current <= 0) return

    groupRef.current.rotation.y += kickRef.current * delta * 6
    groupRef.current.rotation.x += kickRef.current * delta * 2.5
    kickRef.current = Math.max(0, kickRef.current - delta * 1.8)
  })

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.15}>
      <group
        ref={groupRef}
        onClick={(event) => {
          event.stopPropagation()
          onKick()
        }}
      >
        <primitive object={scene} scale={1.55} />
      </group>
    </Float>
  )
}

function Scene({ kickRef, onKick }) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 2, 3]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-3, -1, 2]} intensity={0.6} color="#ff7600" />
      <pointLight position={[2, 3, -2]} intensity={0.25} color="#4a90d9" />
      <Stars
        radius={80}
        depth={40}
        count={1200}
        factor={3}
        saturation={0}
        fade
        speed={0.4}
      />
      <EarthModel kickRef={kickRef} onKick={onKick} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.35}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.85}
      />
    </>
  )
}

export default function EarthCanvas({ className = '' }) {
  const kickRef = useRef(0)
  const [kicking, setKicking] = useState(false)

  const handleKick = useCallback(() => {
    kickRef.current = 1
    setKicking(true)
    window.setTimeout(() => setKicking(false), 450)
  }, [])

  return (
    <div
      className={`relative h-[320px] w-full cursor-grab overflow-visible outline-none transition-transform duration-[350ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] focus-visible:shadow-[0_0_0_2px_rgba(255,118,0,0.8)] active:cursor-grabbing sm:h-[420px] ${kicking ? 'scale-[1.04] -rotate-4' : ''} ${className}`}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          handleKick()
        }
      }}
      role="img"
      tabIndex={0}
      aria-label="Interactive 3D globe. Drag to spin, click the globe to kick."
    >
      <div
        className="pointer-events-none absolute inset-[14%] z-0 animate-earth-pulse bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_68%)]"
        aria-hidden="true"
      />

      <Canvas
        className="relative z-2 h-full w-full touch-none overflow-visible"
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 5.8], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Scene kickRef={kickRef} onKick={handleKick} />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none static mt-3 flex items-center justify-center gap-2 text-[11px] tracking-[0.12em] text-neutral-500 uppercase sm:absolute sm:bottom-[-8px] sm:left-1/2 sm:mt-0 sm:-translate-x-1/2 sm:translate-y-full sm:whitespace-nowrap">
        <span>drag to spin</span>
        <span className="h-1 w-1 bg-white" aria-hidden="true" />
        <span>click to kick</span>
      </div>
    </div>
  )
}
