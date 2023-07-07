import "./UseStateCounter.css";
import { useState } from "react";

export const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    if (count <= 0) {
      alert("count cant be less than 0");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="container">
      <h2>Use State Hook</h2>
      <h1>Count:{count}</h1>
      <button onClick={handleInc}>INC</button>
      <button onDoubleClick={() => setCount(0)}>CLEAR</button>
      {/* <button onClick={() => count > 0 && setCount(count - 1)}>DEC</button> */}
      {/* <button onClick={() => count > 0 && setCount(count - 1)}>DEC</button> */}
      <button onClick={handleDec}>DEC</button>
      <p>to clear double click</p>
    </div>
  );
};
