import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const App: React.FC = () => {
  const cube = useRef<import("three").Mesh>(null);
  useFrame(() => {
    if (cube.current) {
      cube.current.rotation.x += 0.01;
      cube.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={cube}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color={0x00ff00} />
    </mesh>
  );
};

// see https://github.com/react-spring/react-three-fiber/issues/253
const Wrapper: React.FC = () => {
  return (
    <Canvas>
      <App />
    </Canvas>
  );
};

export default Wrapper;
