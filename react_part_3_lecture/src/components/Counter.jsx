import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("In useEffect");
  }, [count]); // Dependency array includes count, which this effect changes.

  return (
    <div>
      <button className="p-4 py-2 border" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      Count: {count}
    </div>
  );
};

export default Counter;
