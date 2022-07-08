import { useFrame, Canvas } from "@react-three/fiber";
import { ScrollContainer } from "./ScrollContainer";
import { ScrollControls } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import { ScrollContainer2 } from "./ScrollContainer2";
import * as THREE from "three";
import "./stylesintro.css";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[0, 10, 0]} intensity={0.3} />
      <directionalLight position={[-20, 0, -10]} intensity={0.7} />
    </>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 1, state.mouse.y / 1, 10),
      0.09
    );
  });
}

export default function Intro_app() {
  return (
    <Canvas
      style={{ height: "100%" }}
      camera={{ position: [0, 0, 0], fov: 42 }}
    >
      <Stars speed={6.5} count={2000} />
      <ScrollControls pages={10}>
        <ScrollContainer />
        <ScrollContainer2 />
      </ScrollControls>
      <Rig />
      <Lights />
    </Canvas>
  );
}

