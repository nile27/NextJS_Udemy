import { useState } from "react";
import Button from "../components/Button";
const Example2 = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>count {count}</h1>
      <Button type="button" onClick={clickHandler}>
        Click Me
      </Button>
    </div>
  );
};

export default Example2;
