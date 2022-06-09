import SimpleForm from './components/SimpleForm';
import PotterForm from './components/PotterForm';
import CharactersDraw from './components/CharactersDraw';
import './App.scss';
import { useState } from 'react';

/**
 * Vamos a ver como recibir información EN un componente padre
 * DESDE un componente Hijo.
 * 
 * El padre define una función, se la envía al hijo y 
 * el hijo la ejecuta con el mensaje que le quiere mandar al padre
 */

// Esta variable haríamos un getAll a nuestra API y los recuperaríamos.

const charactersFromStorage = JSON.parse(localStorage.getItem('characters')) || [];

const App = () => {
  const [characters, setCharacters] = useState(charactersFromStorage);

  // Definimos función para enviar al hijo
  const getCharacter = (newCharacter) => {
    console.log('En APP newCharacter', newCharacter);
    // Aquí vendría hacerle un post a nuestra api y guardarlos.

    const newChars = [...characters, newCharacter];
    localStorage.setItem('characters', JSON.stringify(newChars));
    setCharacters(newChars);
  };

  return (
    <div className="app">
      <h1>Harry Potter Character Creation</h1>
      <PotterForm getCharacter={getCharacter} />
      <CharactersDraw characters={characters} />




      {/* enviamos la prop getCharacter={getCharacter} al hijo */}
      {/* <SimpleForm getCharacter={getCharacter} /> */}
    </div>
  );
}

export default App;
