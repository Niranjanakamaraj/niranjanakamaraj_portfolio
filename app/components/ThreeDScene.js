// components/ThreeDSceneSkills.js
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

function ScrollSection({ children, index }) {
  const ref = useRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (ref.current) {
      const offset = scrollY / window.innerHeight - index;
      // Tilt & zoom effect
      ref.current.rotation.x = offset * 0.2;
      ref.current.rotation.y = offset * 0.1;
      ref.current.scale.setScalar(1 - Math.abs(offset) * 0.05);
    }
  });

  return (
    <group ref={ref}>
      <Html center>{children}</Html>
    </group>
  );
}

export default function ThreeDSceneSkills({ children }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      {children.map((child, i) => (
        <ScrollSection key={i} index={i}>
          {child}
        </ScrollSection>
      ))}
    </Canvas>
  );
}