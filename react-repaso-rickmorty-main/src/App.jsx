import { useEffect, useState } from 'react';
import './App.scss';
import Text from './Text';

function App() {
  const [showme, setShowMe] = useState(true)
  // const [name, setName] = useState('Lionel Messi');
  const  [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)

  const getCharacters = async (page) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const resJson = await res.json();
    setCharacters(resJson.results)
    console.log(resJson)
  }

  // const changePage = (newPage) => {
  //   setPage(newPage);
  //   getCharacters(newPage);
  // }

  useEffect(()=>{
    getCharacters(page);  
  },[page])  //se lanza siempre en el primer renderizado, y luego solo se lanza si afecta a una variable que esté en el array de dependencias
  
  return (
    <div className="app">
    <button onClick={() => setPage(page - 1)}>-</button> 
    <button onClick={() => setPage(page + 1)}>+</button> 
    
    {/* <button onClick={() => changePage(page - 1)}>-</button> 
    <button onClick={() => changePage(page + 1)}>+</button>  */}
      {characters.length > 0 && characters.map((character) => {
        return (
          <>
            <p>{character.name}</p>
            <img src={character.image} alt={character.name} />
          </>
        )
      })}
      {/* {showme && <Text name={name}/>}
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setShowMe(!showme)}>Cambio</button> */}
    </div>
  );
}

export default App;
