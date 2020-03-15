import React, { useCallback, useState } from "react";
import { Canvas } from "react-three-fiber";
import Controls from "./Controls";
import { useVRM } from "./hooks";
import Inputs from "./Inputs";
import VRM from "./VRM";

const App: React.FC = () => {
  const [vrm, loadVRM] = useVRM();
  const [showGrid, setShowGrid] = useState(false);

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const url = URL.createObjectURL(event.target.files![0]);
      await loadVRM(url);
      URL.revokeObjectURL(url);
    },
    [loadVRM]
  );

  const handleCheckChange = useCallback(() => setShowGrid(prev => !prev), []);

  return (
    <>
      <Inputs
        onFileChange={handleFileChange}
        checked={showGrid}
        onCheckChange={handleCheckChange}
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
