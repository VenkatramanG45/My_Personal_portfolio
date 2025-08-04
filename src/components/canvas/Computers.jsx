import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { getDeviceCapabilities, getDeviceCapabilitiesSync, debounce } from "../../utils/performance";

import CanvasLoader from "../Loader";
import MobileFallback from "../MobileFallback";

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
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [0, -2, -1] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [deviceCapabilities, setDeviceCapabilities] = useState({
    isMobile: false,
    isLowEnd: false,
    webglSupported: true,
    canRender3D: true
  });

  useEffect(() => {
    const updateDeviceCapabilities = async () => {
      try {
        // Use the async version of getDeviceCapabilities
        const capabilities = await getDeviceCapabilities();
        setDeviceCapabilities(capabilities);
      } catch (error) {
        // Fallback to sync version if async fails
        console.error('Error getting device capabilities:', error);
        const syncCapabilities = getDeviceCapabilitiesSync();
        setDeviceCapabilities(syncCapabilities);
      }
    };

    // Initial check
    updateDeviceCapabilities();

    // Create debounced version for resize events
    const debouncedUpdate = debounce(updateDeviceCapabilities, 300);

    // Listen for window resize
    window.addEventListener('resize', debouncedUpdate);

    return () => {
      window.removeEventListener('resize', debouncedUpdate);
    };
  }, []);

  // Performance optimization for mobile
  const canvasProps = useMemo(() => ({
    frameloop: deviceCapabilities.isMobile ? 'demand' : 'demand',
    shadows: !deviceCapabilities.isMobile, // Disable shadows on mobile for better performance
    dpr: deviceCapabilities.isMobile ? [1, 1.5] : [1, 2], // Lower DPR on mobile
    camera: {
      position: deviceCapabilities.isMobile ? [12, 2, 3] : [20, 3, 5],
      fov: deviceCapabilities.isMobile ? 35 : 25
    },
    gl: {
      preserveDrawingBuffer: true,
      antialias: !deviceCapabilities.isMobile, // Disable antialiasing on mobile
      powerPreference: "high-performance",
      alpha: false,
      stencil: false,
      depth: true
    }
  }), [deviceCapabilities.isMobile]);

  // Only render 3D canvas if device can handle it
  if (!deviceCapabilities.canRender3D) {
    return <MobileFallback message="The 3D computer model is disabled on your device for better performance. Please visit on a desktop device for the full experience." />;
  }

  return (
    <Canvas {...canvasProps}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={!deviceCapabilities.isMobile} // Disable pan on mobile
          enableRotate={!deviceCapabilities.isMobile} // Disable rotation on mobile for better performance
        />
        <Computers isMobile={deviceCapabilities.isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
