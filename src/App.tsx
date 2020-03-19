import React, { useCallback } from "react";
import { Canvas } from "react-three-fiber";
import Controls from "./Controls";
import { useToggle, useVRM } from "./hooks";
import Inputs from "./Inputs";
import VRM from "./VRM";

const App: React.FC = () => {
  const [vrm, loadVRM] = useVRM();
  const [showGrid, showGridToggle] = useToggle(false);

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const url = URL.createObjectURL(event.target.files![0]);
      await loadVRM(url);
      URL.revokeObjectURL(url);
    },
    [loadVRM]
  );

  return (
    <>
      <Inputs
        onFileChange={handleFileChange}
        checked={showGrid}
        onCheckChange={showGridToggle}
      />
      <Canvas camera={{ position: [0, 1, 2] }}>
        <directionalLight />
        <VRM vrm={vrm} />
        <Controls />
        {showGrid && (
          <>
            <gridHelper />
            <axesHelper />
          </>
        )}
      </Canvas>
    </>
  );
};

export default App;
