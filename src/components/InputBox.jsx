import React from "react";

const InputBox = ({
  msg,
  len,
  val,
  onUnitChange,
  onValueChange,
  unit = "mile",
  disable = false,
}) => {
  return (
    <div>
      <label className="text-white">{msg}</label>
      <input
        className="m-2 h-10 rounded-s-md p-2 font-serif"
        type="number"
        name=""
        id=""
        value={val}
        disabled={disable}
        onChange={(e) => onValueChange && onValueChange(Number(e.target.value))}
      />
      <select
        className="h-10 font-serif p-2 rounded-e-md"
        name="units"
        id=""
        value={unit}
        onChange={(e) => onUnitChange && onUnitChange(e.target.value)}
      >
        {len.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputBox;
