import { Canvas } from "@react-three/fiber";
import { RotatingScene, Lights } from "./Scene";

export function ThreeScene() {
  return (
    <div
      style={{ width: "100%", height: "400px" }}
      className="rounded-lg overflow-hidden shadow-lg">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ width: "100%", height: "100%" }}>
        <Lights />
        <RotatingScene />
      </Canvas>
    </div>
  );
}
