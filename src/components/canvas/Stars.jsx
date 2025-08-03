import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { getDeviceCapabilities } from "../../utils/performance";

const Stars = ({ isMobile, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(
      new Float32Array(isMobile ? 1500 : 5000), // Reduced star count for mobile
      { radius: 1.2 }
    )
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={isMobile ? 0.004 : 0.002} // Adjusted size for mobile
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [deviceCapabilities, setDeviceCapabilities] = useState({
    isMobile: false,
    webglSupported: true
  });

  useEffect(() => {
    const updateDeviceCapabilities = () => {
      const capabilities = getDeviceCapabilities();
      setDeviceCapabilities(capabilities);
    };

    // Initial check
    updateDeviceCapabilities();

    // Listen for window resize
    window.addEventListener('resize', updateDeviceCapabilities);

    return () => {
      window.removeEventListener('resize', updateDeviceCapabilities);
    };
  }, []);

  // Don't render on very small screens or if WebGL not supported
  if (window.innerWidth < 480 || !deviceCapabilities.webglSupported) {
    return null;
  }

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={deviceCapabilities.isMobile ? [1, 1.5] : [1, 2]} // Adjusted DPR for mobile
        gl={{
          antialias: !deviceCapabilities.isMobile, // Disabled antialiasing for mobile
          powerPreference: "high-performance",
          alpha: false,
          stencil: false,
          depth: true
        }}
      >
        <Suspense fallback={null}>
          <Stars isMobile={deviceCapabilities.isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
