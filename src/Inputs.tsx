import React from "react";

type Props = {
  onFileChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  onCheckChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
};

const Inputs: React.FC<Props> = ({ onFileChange, checked, onCheckChange }) => (
  <div id="input-container">
    <label className="file-button">
      <input type="file" accept=".vrm" onChange={onFileChange} />
      load VRM
    </label>
    <label>
      <input type="checkbox" checked={checked} onChange={onCheckChange} />
      show grid
    </label>
  </div>
);

export default Inputs;
