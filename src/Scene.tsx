import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function RotatingScene() {
  const groupRef = useRef(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center Cube */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#0071e3" />
      </mesh>

      {/* Right Sphere */}
      <mesh position={[2.5, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#f5f5f7" />
      </mesh>

      {/* Left Cone */}
      <mesh position={[-2.5, 0, 0]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="#646cff" />
      </mesh>
    </group>
  );
}

export function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#646cff" />
    </>
  );
}
