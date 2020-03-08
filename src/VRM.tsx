import React from "react";
import { useFrame } from "react-three-fiber";

type Props = {
  vrm: import("@pixiv/three-vrm").VRM | null;
};

// see https://github.com/react-spring/react-three-fiber/issues/253
const VRM: React.FC<Props> = ({ vrm }) => {
  useFrame(({ clock }, delta) => {
    if (vrm) {
      // see https://github.com/FMS-Cat/three-vrm-vtuber/tree/03890a8/step3
      vrm.scene.rotation.y = Math.PI * Math.sin(clock.getElapsedTime());
      vrm.update(delta);
    }
  });

  return vrm && <primitive object={vrm.scene} />;
};

export default VRM;
