import React from "react";
import { useFrame } from "react-three-fiber";
import { Vector3 } from "three";

type Props = {
  vrm: import("@pixiv/three-vrm").VRM | null;
};

// see https://github.com/react-spring/react-three-fiber/issues/253
const VRM: React.FC<Props> = ({ vrm }) => {
  useFrame(({ clock, mouse }, delta) => {
    if (vrm) {
      // see https://github.com/FMS-Cat/three-vrm-vtuber/tree/03890a8/step3
      vrm.scene.rotation.y = Math.PI * Math.sin(clock.getElapsedTime());
      if (vrm.lookAt) vrm.lookAt.lookAt(new Vector3(mouse.x, mouse.y, 0));

      vrm.update(delta);
    }
  });

  return vrm && <primitive object={vrm.scene} />;
};

export default VRM;
