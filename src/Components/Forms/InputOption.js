import React from "react";

export default function InputOption({ valueOfOption }) {
  return (
    <option value={valueOfOption}>
      {valueOfOption[0].toUpperCase().concat(valueOfOption.slice(1))}
    </option>
  );
}
