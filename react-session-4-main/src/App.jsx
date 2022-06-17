import { useEffect, useState } from "react";

const OtherComponent = () => {
  useEffect(() => {
    // console.log("componentDidMount (otherComponent) - Esto se ejecuta una vez cuando se monta");

    return () => {
      // console.log('componentWillUnmount (otherComponent) - El componente va a desmontarse (antes de que se vaya aún podemos hacer algo)');
    };

  }, [])
  return <h1>Soy otro componente</h1>;
};

/**
 * useEffect -> Nos permite interceptar 3 momentos:
 * cuando aparece el componente
 * cuando desaparece el componente
 * cuando cambia una variable del componente (counter)
 */

const App = () => {
  const [counter, setCounter] = useState(5);
  
  useEffect(() => {
    const fetchPokemonsFromApi = () => {
      console.log('FETECH POKEMONS FROM API');
    }
  
    fetchPokemonsFromApi();

    return () => {
      console.log('componentWillUnmount - El componente va a desmontarse');
    }
  }, [])


  useEffect(() => {
    console.log('Counter: ', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>React y sus hooks</h1>
      <button onClick={() => setCounter(counter + 1)}>SUMAR</button>
      <h1>{counter}</h1>
      {counter === 6 ? null : <OtherComponent />}
    </div>
  );
};

export default App;
