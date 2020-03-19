import { VRM } from "@pixiv/three-vrm";
import { useCallback, useRef, useState } from "react";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const useVRM = (): [VRM | null, (url: string) => Promise<void>] => {
  const { current: loader } = useRef(new GLTFLoader());
  const [vrm, setVRM] = useState<VRM | null>(null);

  const loadVRM = (url: string): Promise<void> =>
    new Promise((resolve: (_: GLTF) => void) => loader.load(url, resolve))
      .then(gltf => VRM.from(gltf))
      .then(vrm => {
        vrm.scene.rotation.y = Math.PI;
        setVRM(vrm);
      });

  return [vrm, loadVRM];
};

const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState(prev => !prev), []);

  return [state, toggle];
};

export { useVRM, useToggle };
