import {useState} from 'react'

const Contador = () => {
    // let count = 0; //Cuando teníamos una variable al modificarla su valor renderizado no cambiaba
    const [count, setCount] = useState(0); // Use state nos da variable, funcion seteadora de la variable y valor inicial
    console.log(count);
    const increase = () => {
        // count++;
        // console.log(count);


        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }
  return (
      <>
      <div>{count}</div>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      </>
  )
}

export default Contador