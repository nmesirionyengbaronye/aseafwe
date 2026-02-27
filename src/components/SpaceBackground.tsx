import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const Planet = ({ radius, speed, distance, color, size }: { radius?: number; speed: number; distance: number; color: string; size: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  const angle = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    if (!ref.current) return;
    angle.current += delta * speed;
    ref.current.position.x = Math.cos(angle.current) * distance;
    ref.current.position.z = Math.sin(angle.current) * distance;
    ref.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} roughness={0.7} />
    </mesh>
  );
};

const GalaxySpiral = () => {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const branches = 3;
    const spin = 2;
    const randomness = 0.5;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 5;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = radius * spin;
      const rx = (Math.random() - 0.5) * randomness * radius;
      const ry = (Math.random() - 0.5) * randomness * radius * 0.3;
      const rz = (Math.random() - 0.5) * randomness * radius;

      pos[i3] = Math.cos(branchAngle + spinAngle) * radius + rx;
      pos[i3 + 1] = ry;
      pos[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + rz;

      const mixRatio = radius / 5;
      col[i3] = 1.0 - mixRatio * 0.5;
      col[i3 + 1] = 0.7 - mixRatio * 0.4;
      col[i3 + 2] = 0.2 + mixRatio * 0.3;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.05;
  });

  return (
    <points ref={ref} position={[6, 2, -10]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors sizeAttenuation transparent depthWrite={false} />
    </points>
  );
};

const Nebula = () => {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 4;
      pos[i3 + 1] = (Math.random() - 0.5) * 2;
      pos[i3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.02;
  });

  return (
    <points ref={ref} position={[-7, -1, -8]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#d4a017" transparent opacity={0.3} sizeAttenuation depthWrite={false} />
    </points>
  );
};

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
        <color attach="background" args={["#050810"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#d4a017" />

        <Stars radius={80} depth={60} count={4000} factor={4} saturation={0} fade speed={0.5} />

        {/* Orbiting planets */}
        <Planet speed={0.15} distance={4} color="#d4a017" size={0.25} />
        <Planet speed={0.08} distance={7} color="#8B7355" size={0.4} />
        <Planet speed={0.25} distance={2.5} color="#C0C0C0" size={0.12} />
        <Planet speed={0.05} distance={10} color="#4a3728" size={0.6} />

        {/* Spiral galaxy */}
        <GalaxySpiral />

        {/* Nebula cloud */}
        <Nebula />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;
