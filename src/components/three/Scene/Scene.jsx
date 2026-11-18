import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";

function CoffeeCup({ reduceMotion }) {
  const cup = useRef(null);

  useFrame((state, delta) => {
    if (!cup.current || reduceMotion) return;
    cup.current.rotation.y += delta * 0.22;
    cup.current.rotation.x = state.pointer.y * 0.08;
    cup.current.rotation.z = -state.pointer.x * 0.08;
  });

  return (
    <Float speed={reduceMotion ? 0 : 1.25} rotationIntensity={reduceMotion ? 0 : 0.18} floatIntensity={reduceMotion ? 0 : 0.35}>
      <group ref={cup} position={[0, -0.12, 0]} rotation={[0.05, -0.35, 0]}>
        {/* Ceramic cup */}
        <mesh castShadow receiveShadow position={[0, 0.12, 0]}>
          <cylinderGeometry args={[0.72, 0.56, 1.05, 64, 1, false]} />
          <meshStandardMaterial color="#eee2cc" roughness={0.24} metalness={0.02} />
        </mesh>

        {/* Coffee surface */}
        <mesh position={[0, 0.66, 0]}>
          <cylinderGeometry args={[0.68, 0.68, 0.035, 64]} />
          <meshStandardMaterial color="#4a2b1c" roughness={0.18} />
        </mesh>

        {/* Cup rim */}
        <mesh position={[0, 0.67, 0]}>
          <torusGeometry args={[0.69, 0.045, 12, 64]} />
          <meshStandardMaterial color="#fff5e5" roughness={0.22} />
        </mesh>

        {/* Handle */}
        <mesh position={[0.78, 0.18, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.32, 0.105, 18, 48, Math.PI * 1.75]} />
          <meshStandardMaterial color="#e6d5b9" roughness={0.28} />
        </mesh>

        {/* Saucer */}
        <mesh position={[0, -0.48, 0]} receiveShadow>
          <cylinderGeometry args={[1.02, 1.08, 0.12, 64]} />
          <meshStandardMaterial color="#d9c6a8" roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.405, 0]}>
          <torusGeometry args={[0.76, 0.035, 12, 64]} />
          <meshStandardMaterial color="#f6ead7" roughness={0.25} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="coffee-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.2, 4.2], fov: 34 }}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} castShadow />
        <pointLight position={[-3, 1, -2]} intensity={1.1} color="#d8b78c" />
        <CoffeeCup reduceMotion={reduceMotion} />
        <ContactShadows position={[0, -1.15, 0]} opacity={0.32} scale={4} blur={2.5} />
      </Canvas>
    </div>
  );
}

export default Scene;
