import React, { useEffect, useRef } from "react";
import { useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// `extend({ OrbitControls });` (also used in examples) not working.
// see https://github.com/react-spring/react-three-fiber/issues/278
const Controls: React.FC = () => {
  const { camera, gl } = useThree();
  const { current: controls } = useRef(
    new OrbitControls(camera, gl.domElement)
  );

  useEffect(() => (): void => controls.dispose(), [controls]);

  return null;
};

export default Controls;
