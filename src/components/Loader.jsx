import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "rgba(0, 0, 0, 0.8)",
        borderRadius: "10px",
        padding: "20px",
        minWidth: "200px",
      }}
    >
      <div className='canvas-loader'></div>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Loading 3D Model... {progress.toFixed(0)}%
      </p>
      <p
        style={{
          fontSize: 12,
          color: "#888",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        Please wait while we prepare your experience
      </p>
    </Html>
  );
};

export default CanvasLoader;
