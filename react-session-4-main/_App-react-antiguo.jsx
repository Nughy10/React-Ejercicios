import { Component } from 'react';
import './App.scss';

class OtherComponent extends Component {
  componentDidMount() {
    console.log('componentDidMount - El componente se ha montado');
    debugger;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount - El componente va a desmontarse (antes de que se vaya aún podemos hacer algo)');
    debugger;
  }

  render() {
    return (
      <h1>Soy otro componente</h1>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 5
    };
  }
  componentDidMount() {
    console.log('componentDidMount - El componente se ha montado');
    // LLamadas a API
    // debugger;
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount - El componente va a montarse');
    // debugger;
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate - El componente se va a actualizar');
    // debugger;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate - El componente ya se ha actualizado');
    // debugger;
  }

  getDelegado() {
    console.log('Soy Delegado');
  }
  
  render() {
    console.log('render - El componente va a renderizarse');
    // debugger;

    return (
      <div className="App">
        <h1>React y sus hooks</h1>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>SUMAR</button>
        <h1>{this.state.counter}</h1>
        {this.state.counter === 6 ? null : <OtherComponent />}
      </div>
    );
  }
};

const appita = new App()
appita.getDelegado();

getDelegado();

// export default App;


useEffect(() => { // [] quiere decir que solo se ejecuta 1 vez
  console.log('componentDidMount - El componente se ha montado');
  componentDidMount() {
    // Didmount se ejecutará siempre, además con array vacío una sola vez.
    console.log('componentDidMount - El componente se ha montado');
  }

  componentDidUpdate() {
    // Cada vez que counter cambie, se ejecutará useEffect de nuevo.
    console.log('componentWillUpdate - El componente se va a actualizar');
  }

  return () => {
    componentWillUnmount() {
      console.log('componentWillUnmount - El componente va a desmontarse (antes de que se vaya aún podemos hacer algo)');
    }
  };
}, [counter]);