import { VRM } from "@pixiv/three-vrm";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const useVRM = (): [VRM | null, (_: string) => void] => {
  const { current: loader } = useRef(new GLTFLoader());
  const [vrm, setVRM] = useState<VRM | null>(null);

  const loadVRM = (url: string): void => {
    loader.load(url, gltf => {
      VRM.from(gltf).then(vrm => {
        vrm.scene.rotation.y = Math.PI;
        setVRM(vrm);
      });
    });
  };

  return [vrm, loadVRM];
};

export { useVRM };
