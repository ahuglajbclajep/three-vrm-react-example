import React, { useRef } from "react";
import { extend, ReactThreeFiber, useFrame, useThree } from "react-three-fiber";
import { Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

// see https://github.com/react-spring/react-three-fiber/issues/11#issuecomment-583599378
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        // `OrbitControls["new"]` does not work without `typeof`.
        typeof OrbitControls
      >;
    }
  }
}

// see https://github.com/react-spring/react-three-fiber/blob/v4.0.20/examples/src/demos/dev/GltfAnimation.js#L39-L44
const Controls: React.FC = () => {
  const controls = useRef<OrbitControls>(null);
  const { camera, gl } = useThree();

  useFrame(() => controls.current?.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      zoomSpeed={0.5}
      enableDamping
      dampingFactor={0.2}
      target={new Vector3(0, 1, -2)}
    />
  );
};

export default Controls;
