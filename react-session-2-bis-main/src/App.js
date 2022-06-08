import {useState} from 'react';
import Input from './Input';
import './App.scss';

// state
// props
// share state

function App() {
  const [inputValue, setInputValue] = useState('Contenido del input');

  const escucharAlHijo = (mensajeDelHijo) => {
    setInputValue(mensajeDelHijo);
  }

  return (
    <div className="app">
      <h1>Proyecto funcionando</h1>
      <h1>{inputValue}</h1>

      <Input
        byDefault="Sexy input"
        hablarAlPadre={escucharAlHijo}
      />
    </div>
  );
}

export default App;
