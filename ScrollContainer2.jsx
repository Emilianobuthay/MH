import { Scroll, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import url from "./drei.mp4";

const TV2 = () => {
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

export const ScrollContainer2 = () => {
  const scroll = useScroll();
  const { viewport } = useThree();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
 
  
  

  useFrame((state, delta) => {
    ref5.current.position.set(2.5, 0, -40 + 76 * scroll.offset);
    ref5.current.scale.set(
      scroll.range(13.4 / 26, 1 / 8),
      scroll.range(13.4 / 26, 1 / 8),
      scroll.range(13.4 / 26, 1 / 8)
    );
    ref6.current.position.set(-2.5, 0, -50 + 76 * scroll.offset);
    ref6.current.scale.set(
      scroll.range(17 / 26, 1 / 8),
      scroll.range(17 / 26, 1 / 8),
      scroll.range(17 / 26, 1 / 8)
    );
    
    ref7.current.position.set(2, 0, -60 + 76 * scroll.offset);
    ref7.current.scale.set(
      scroll.range(20.4 / 26, 1 / 8),
      scroll.range(20.4 / 26, 1 / 8),
      scroll.range(20.4 / 26, 1 / 8)
    );
    ref8.current.position.set(-2, 0, -73 + 76 * scroll.offset);
    ref8.current.scale.set(
      scroll.range(24 / 26, 1 / 8),
      scroll.range(24 / 26, 1 / 8),
      scroll.range(24 / 26, 1 / 8)
    );
    
    
    
    
  });

  return (
    <>
      <mesh ref={ref5} position={[0, 0, 0]}>
        <TV2 />
      </mesh>
      <mesh ref={ref6} position={[0, 0, 0]}>
      <TV2 />
      </mesh>
      <mesh ref={ref7} position={[0, 0, 0]} >
      <TV2/>
      </mesh>
      <mesh ref={ref8} position={[0, 0, 0]} >
      <TV2/>
      </mesh>
      
      
     
    </>
  );
};
