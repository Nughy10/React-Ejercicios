import { useState } from "react";
import { connect } from "react-redux";
import { incrementByQuantity } from "../redux/counter/counter.actions";

const CounterIncrementInput = ({dispatch}) => {
  const [number, setNumber] = useState(10);

  const incrementClick = () => {
    dispatch(incrementByQuantity(number));
    setNumber(0);
  }

  return (
    <div>
      <input type="number" value={number} onChange={(ev) => setNumber(Number(ev.target.value))} />
      <div>
        <button onClick={incrementClick}>Incrementar en {number} el contador</button>
      </div>
    </div>
  )
}

export default connect()(CounterIncrementInput);