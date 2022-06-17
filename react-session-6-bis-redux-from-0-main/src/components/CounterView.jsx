import {connect} from 'react-redux';

const CounterView = (props) => {
  return (
    <>
      <h2>Así está nuestro contador ahora</h2>
      <h2>Última cuenta: {props.ultimaCuenta}</h2>
      <h2>{props.nombreContador}: {props.count}</h2>
    </>
  )
};

const mapStateToProps = (state) => {

  const myObj = {
    count: state.counter.count,
    nombreContador: state.counter.counterName,
    ultimaCuenta: state.counter.lastCount,
  }

  return myObj;
};

export default connect(mapStateToProps)(CounterView);

// export default connect(state => ({
//   count: state.counter.count,
//   nombreContador: state.counter.counterName,
//   ultimaCuenta: state.counter.lastCount,
// }))(CounterView);