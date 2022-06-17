import { connect } from "react-redux";
import { incrementarContador, decrementCounter } from "../redux/counter/counter.actions";

const CounterButtons = (props) => {
  return (
    <div>
      <button onClick={() => props.dispatch(incrementarContador())}>Aumentar Contador</button>
      <button onClick={() => props.dispatch(decrementCounter())}>Disminuir Contador</button>
    </div>
  );
};

export default connect()(CounterButtons);