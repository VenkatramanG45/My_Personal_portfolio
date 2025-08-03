import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Validate and fix geometry issues
  const validatedScene = useMemo(() => {
    if (!computer.scene) return null;
    
    // Clone the scene to avoid modifying the original
    const scene = computer.scene.clone();
    
    // Traverse and fix any geometry issues
    scene.traverse((child) => {
      if (child.geometry) {
        // Ensure geometry has valid positions
        if (child.geometry.attributes.position) {
          const positions = child.geometry.attributes.position.array;
          let hasNaN = false;
          
          for (let i = 0; i < positions.length; i++) {
            if (isNaN(positions[i])) {
              positions[i] = 0;
              hasNaN = true;
            }
          }
          
          if (hasNaN) {
            child.geometry.attributes.position.needsUpdate = true;
            child.geometry.computeBoundingSphere();
            child.geometry.computeBoundingBox();
          }
        }
      }
    });
    
    return scene;
  }, [computer.scene]);

  if (!validatedScene) {
    return null;
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={validatedScene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2.5, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Performance optimization for mobile
  const canvasProps = useMemo(() => ({
    frameloop: isMobile ? 'demand' : 'demand',
    shadows: !isMobile, // Disable shadows on mobile for better performance
    dpr: isMobile ? [1, 1.5] : [1, 2], // Lower DPR on mobile
    camera: { 
      position: isMobile ? [15, 2, 3] : [20, 3, 5], 
      fov: isMobile ? 30 : 25 
    },
    gl: { 
      preserveDrawingBuffer: true,
      antialias: !isMobile, // Disable antialiasing on mobile
      powerPreference: "high-performance"
    }
  }), [isMobile]);

  return (
    <Canvas {...canvasProps}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={!isMobile} // Disable pan on mobile
          enableRotate={!isMobile} // Disable rotation on mobile for better performance
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
