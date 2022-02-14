import { useState } from "react";

function Counter() {
  const [thingsArray, setThingsArray] = useState({ one: "dupa", isTrue: true });
  function handleClick() {
    setThingsArray((prev) => {
      return {
        ...prev,
        isTrue: !prev.isTrue,
      };
    });
  }
  return (
    <div>
      <button onClick={() => handleClick()}>Add Thing</button>

      {thingsArray.isTrue && <p key={thingsArray.one}>{thingsArray.one}</p>}
    </div>
  );
}
export default Counter;
