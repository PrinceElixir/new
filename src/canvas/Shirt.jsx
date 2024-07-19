import React from "react";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

import state from "../store";

const Smiley = () => {
  const snap = useSnapshot(state);
  const smileyColor = new THREE.Color(snap.color);

  useFrame((state, delta) => {
    smileyColor.lerp(new THREE.Color(snap.color), 0.1);
  });

  return (
    <group>
      {/* Head */}
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial attach="material" color={smileyColor} />
      </Sphere>

      {/* Eyes */}
      <Sphere position={[-0.15, 0.2, 0.45]} args={[0.05, 32, 32]}>
        <meshStandardMaterial attach="material" color="black" />
      </Sphere>
      <Sphere position={[0.15, 0.2, 0.45]} args={[0.05, 32, 32]}>
        <meshStandardMaterial attach="material" color="black" />
      </Sphere>

      {/* Mouth */}
      <mesh position={[0, -0.1, 0.45]} rotation={[0, 0, Math.PI / 2]}>
        <torusBufferGeometry args={[0.15, 0.025, 16, 100]} />
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
    </group>
  );
};

export default Smiley;
