import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const modelRef = useRef(null);
  const { scene } = useGLTF("/frame.glb");
  useFrame(() => {
    if (modelRef.current) {
      if (modelRef.current.rotation.y > -Math.PI / 2.9) {
        modelRef.current.rotation.y -= 0.02;
      } else {
        modelRef.current.rotation.y = -Math.PI / 2.9;
      }
    }
  });
  return (
    <primitive
      ref={modelRef}
      object={scene}
      rotation={[0, 0, 0]}
      position={[0, -2, 1]}
    />
  );
};

export const MainAnimation = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [2, -0.14, 4], fov: 60 }}
    >
      {/* Add multiple point lights */}
      <pointLight
        position={[-3, -2, 3]} // Bottom-left of the model
        intensity={3} // Increase intensity for better effect
        distance={15} // Extend the reach of the light
        decay={1} // Less decay for a consistent effect
      />
      <pointLight
        position={[3, -2, 3]} // Bottom-right of the model
        intensity={3}
        distance={15}
        decay={1}
      />
      <ambientLight intensity={0.7} />{" "}
      {/* Lower intensity to enhance the effect of point lights */}
      <directionalLight position={[5, 5, 5]} />
      <Model />
    </Canvas>
  );
};
