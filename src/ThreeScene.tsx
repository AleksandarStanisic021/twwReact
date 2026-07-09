import { Canvas } from "@react-three/fiber";
import { RotatingScene, Lights } from "./Scene";

export function ThreeScene() {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 75 }}
        gl={{ antialias: true }}
        style={{ width: "100%", height: "100%" }}>
        <color attach="background" args={["#242424"]} />
        <Lights />
        <RotatingScene />
      </Canvas>
    </div>
  );
}
