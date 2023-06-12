'use client'
import React,{Suspense} from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
const Earth = () => {
    const earth = useGLTF('../public/planet/scene.gltf')
  return (
    <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
    />
  )
}

const EarthCanvas = () =>{
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{preserveDrawingBuffer: true}}
            camera={{ }}
        >
            {/* <img  alt="" /> */}
            <Suspense fallback={<Loader/>}>
                <OrbitControls 
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI /2}
                    minPolarAngle={Math.PI /2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    )
}
export default EarthCanvas