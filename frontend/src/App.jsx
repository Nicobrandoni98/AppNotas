import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseOne = () => {
    setCounter(counter + 1);
  };
  const decreaseOne = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  console.log(counter);

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseOne} text="Plus" />
      <Button onClick={reset} text="Zero" />
      <Button onClick={decreaseOne} text="Rest" />
    </>
  );
};

export default App;
