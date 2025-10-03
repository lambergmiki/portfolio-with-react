import { useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = ({ position, size, color }) => {
  const cubesRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const speed = isHovered ? 20 : 0.5;

  useFrame((state, delta) => {
    cubesRef.current.rotation.x += delta * speed;
    cubesRef.current.rotation.y += delta * speed;
    cubesRef.current.rotation.z += delta * speed;
  });

  return (
    <mesh
      ref={cubesRef}
      position={position}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
    >
      <boxGeometry size={size} />
      <meshStandardMaterial color={isHovered ? "orange" : "lightblue"} />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    sphereRef.current.position.z += Math.cos(state.clock.elapsedTime);
  });

  return (
    <mesh ref={sphereRef} position={[-3, 1, 1]}>
      <sphereGeometry size={[1, 2, 2]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default function App() {
  return (
    <main>
      <Canvas className="invisible xl:visible">
        <OrbitControls />
        <directionalLight position={[0, 0, 2]} />
        <ambientLight intensity={0.5} />

        <group position={[-2, -1, 0]}>
          <Sphere />
          <Cube position={[1, 2, -5]} size={[5, 5, 5]} />
          <Cube position={[0, 3, +1]} size={[2, 2, 1]} />
        </group>
      </Canvas>
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
