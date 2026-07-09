export function Cube3D() {
  return (
    <div className="flex justify-center items-center py-8">
      <div
        style={{
          perspective: "1000px",
          width: "200px",
          height: "200px",
        }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            animation: "rotate3d 6s infinite linear",
          }}>
          {/* Front */}
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background: "#0071e3",
              opacity: 0.9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              transform: "translateZ(100px)",
              border: "2px solid #646cff",
            }}>
            Front
          </div>

          {/* Back */}
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background: "#646cff",
              opacity: 0.9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              transform: "rotateY(180deg) translateZ(100px)",
              border: "2px solid #0071e3",
            }}>
            Back
          </div>

          {/* Right */}
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background: "#f5f5f7",
              opacity: 0.9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontSize: "20px",
              fontWeight: "bold",
              transform: "rotateY(90deg) translateZ(100px)",
              border: "2px solid #999",
            }}>
            Right
          </div>

          {/* Left */}
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background: "#f5f5f7",
              opacity: 0.9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontSize: "20px",
              fontWeight: "bold",
              transform: "rotateY(-90deg) translateZ(100px)",
              border: "2px solid #999",
            }}>
            Left
          </div>

          {/* Top */}
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background: "#646cff",
              opacity: 0.9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              transform: "rotateX(90deg) translateZ(100px)",
              border: "2px solid #0071e3",
            }}>
            Top
          </div>

          {/* Bottom */}
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background: "#0071e3",
              opacity: 0.9,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              transform: "rotateX(-90deg) translateZ(100px)",
              border: "2px solid #646cff",
            }}>
            Bottom
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotate3d {
          from {
            transform: rotateX(0deg) rotateY(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
}
