import React from "react";

export default function ChcekboxInput({ value, handleChange, setCheckBoxes }) {
  return (
    <div>
      <input
        type="checkbox"
        id={value}
        name={value}
        onChange={(e) => handleChange(e, setCheckBoxes)}
      />
      <label htmlFor="scales">
        {value}
        {/* {value[0].toUpperCase().concat(value.slice(1))} */}
      </label>
    </div>
  );
}
