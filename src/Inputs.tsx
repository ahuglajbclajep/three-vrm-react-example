import React from "react";

type Props = {
  onFileChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  onCheckChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
};

const Inputs: React.FC<Props> = ({ onFileChange, checked, onCheckChange }) => (
  <div id="input-container">
    <input type="file" accept=".vrm" onChange={onFileChange} />
    <label>
      <input type="checkbox" checked={checked} onChange={onCheckChange} />
      grid
    </label>
  </div>
);

export default Inputs;
