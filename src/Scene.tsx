import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere, Icosahedron } from "@react-three/drei";

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
      <Icosahedron args={[1, 4]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#0071e3" />
      </Icosahedron>

      <Sphere args={[0.5, 32, 32]} position={[2.5, 0, 0]}>
        <meshPhongMaterial color="#f5f5f7" />
      </Sphere>

      <Box args={[1.5, 1.5, 1.5]} position={[-2.5, 0, 0]}>
        <meshPhongMaterial color="#646cff" />
      </Box>
    </group>
  );
}

export function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#646cff" />
    </>
  );
}
