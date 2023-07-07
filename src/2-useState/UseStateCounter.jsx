import React from "react";

import { useState } from "react";

export const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Use State Hook</h2>
      <h1>Count:{count}</h1>
      <button onClick={handleInc}>INC</button>
      <button>CLEAR</button>
      <button>DEC</button>
    </div>
  );
};
