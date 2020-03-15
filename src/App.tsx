import React from "react";
import { Canvas } from "react-three-fiber";
import Controls from "./Controls";
import { useVRM } from "./hooks";
import VRM from "./VRM";

const App: React.FC = () => {
  const [vrm, loadVRM] = useVRM();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const url = URL.createObjectURL(event.target.files![0]);
    await loadVRM(url);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <input id="vrm" type="file" accept=".vrm" onChange={handleFileChange} />
      <Canvas camera={{ position: [0, 1, 2] }}>
        <directionalLight />
        <VRM vrm={vrm} />
        <Controls />
      </Canvas>
    </>
  );
};

export default App;
