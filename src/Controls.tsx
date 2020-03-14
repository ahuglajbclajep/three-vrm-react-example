import React, { useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

// see https://github.com/react-spring/react-three-fiber/blob/v4.0.20/examples/src/demos/dev/GltfAnimation.js#L39-L44
const Controls: React.FC = () => {
  const controls = useRef<OrbitControls>(null);
  const { camera, gl } = useThree();

  useFrame(() => controls.current?.update());

  return (
    // @ts-ignore
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
    />
  );
};

export default Controls;
