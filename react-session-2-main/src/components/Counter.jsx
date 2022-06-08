import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.valorInicial); // primer lugar

  const add = () => setCounter(counter + 1);
  const substract = () => setCounter(counter - 1);

  return (
    <>
      <h1>Contador</h1>
      <h2>{counter}</h2>
      <button onClick={add}>+</button>
      <button onClick={substract}>-</button>
    </>
  );
};

export default Counter;
