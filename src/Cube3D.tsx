import { useState } from "react";

export function Cube3D() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center py-8 gap-6">
      <div
        style={{
          perspective: "1200px",
          width: "250px",
          height: "250px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            animation: isHovered
              ? "rotate3dFast 3s infinite ease-in-out"
              : "rotate3d 8s infinite linear",
            transition: "animation 0.3s ease",
          }}>
          {/* Front */}
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "linear-gradient(135deg, #0071e3, #646cff)",
              opacity: 0.95,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              transform: "translateZ(125px)",
              border: "3px solid rgba(255,255,255,0.2)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
            }}>
            Front
          </div>

          {/* Back */}
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "linear-gradient(135deg, #646cff, #0071e3)",
              opacity: 0.95,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              transform: "rotateY(180deg) translateZ(125px)",
              border: "3px solid rgba(255,255,255,0.2)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
            }}>
            Back
          </div>

          {/* Right */}
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "linear-gradient(135deg, #f5f5f7, #e8e8ed)",
              opacity: 0.95,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontSize: "24px",
              fontWeight: "bold",
              transform: "rotateY(90deg) translateZ(125px)",
              border: "3px solid rgba(0,0,0,0.1)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
            }}>
            Right
          </div>

          {/* Left */}
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "linear-gradient(135deg, #e8e8ed, #f5f5f7)",
              opacity: 0.95,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontSize: "24px",
              fontWeight: "bold",
              transform: "rotateY(-90deg) translateZ(125px)",
              border: "3px solid rgba(0,0,0,0.1)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
            }}>
            Left
          </div>

          {/* Top */}
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "linear-gradient(135deg, #0071e3, #f5f5f7)",
              opacity: 0.95,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              transform: "rotateX(90deg) translateZ(125px)",
              border: "3px solid rgba(255,255,255,0.2)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
            }}>
            Top
          </div>

          {/* Bottom */}
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "linear-gradient(135deg, #646cff, #f5f5f7)",
              opacity: 0.95,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              transform: "rotateX(-90deg) translateZ(125px)",
              border: "3px solid rgba(255,255,255,0.2)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
            }}>
            Bottom
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400">
        {isHovered ? "🚀 Faster rotation" : "Hover to accelerate"}
      </div>

      <style>{`
        @keyframes rotate3d {
          from {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg);
          }
        }

        @keyframes rotate3dFast {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          50% {
            transform: rotateX(180deg) rotateY(180deg) rotateZ(90deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
      `}</style>
    </div>
  );
}
