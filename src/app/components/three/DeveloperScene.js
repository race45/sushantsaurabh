"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Laptop() {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={groupRef}>
      {/* Laptop Base */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {/* Laptop Screen */}
      <mesh position={[0, 0.5, -1]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Screen Code Glow */}
      <mesh position={[0, 0.5, -0.94]}>
        <planeGeometry args={[2.5, 1.6]} />
        <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" />
      </mesh>
    </group>
  );
}

export default function DeveloperScene() {
  return (
    <Canvas camera={{ position: [0, 1, 6] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <Laptop />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
