import { useGLTF, Scroll, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import url from "./drei.mp4";

import { Text } from "./text/text";

const TV = () => {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  
  return (
    <mesh>
      <planeGeometry args={[5.2, 2.9]} />
      <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
    </mesh>
  );
};

export const ScrollContainer = () => {
  const scroll = useScroll();
  const { viewport } = useThree();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  useFrame((state, delta) => {
    ref1.current.position.set(2.5, 0, -20 + 76 * scroll.offset);
    ref1.current.scale.set(
      scroll.range(6.5 / 26, 1 / 8),
      scroll.range(6.5 / 26, 1 / 8),
      scroll.range(6.5 / 26, 1 / 8)
    );

    ref2.current.position.set(-2.5, 0, -10 + 76 * scroll.offset);
    ref2.current.scale.set(
      scroll.range(3.5 / 26, 1 / 8),
      scroll.range(3.5 / 26, 1 / 8),
      scroll.range(3.5 / 26, 1 / 8)
    );

    ref3.current.position.set(2.5, 0, 0 + 76 * scroll.offset);
    ref3.current.rotation.set(0, -0.2, 0);

    ref4.current.position.set(-2.5, 0, -30 + 76 * scroll.offset);
    ref4.current.scale.set(
      scroll.range(9.8 / 26, 1 / 8),
      scroll.range(9.8 / 26, 1 / 8),
      scroll.range(9.8 / 26, 1 / 8)
    );
  });

  return (
    <>
      <mesh ref={ref1} position={[0, 0, 0]}>
        <TV />
      </mesh>
      <mesh ref={ref2} position={[0, 0, 0]}>
        <TV />
      </mesh>
      <mesh ref={ref3} position={[0, 0, 0]}>
        <Text
          rotation={[0, 0.2, 0]}
          position={[-2.5, 2.3, 2]}
          scale={[0.3, 0.3, 0.3]}
        >
          Mama Hungara
        </Text>
        <TV />
      </mesh>
      <mesh ref={ref4} position={[0, 0, 0]}>
        <TV />
      </mesh>
    </>
  );
};