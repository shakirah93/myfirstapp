import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    document.title = count;

    return() => {
        console.log("Component will unmount");
    }
  }, [count]);

  return (
    <div>
      <h2>Number: {count}</h2>
      <button onClick={increment}>Add 1</button>
      <button onClick={decrement}>Remove 1</button>
    </div>
  );
}

export default Counter;
