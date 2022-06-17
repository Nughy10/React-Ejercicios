import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios("https://rickandmortyapi.com/api/character");
        console.log(res);
        // const {info, results} = await res.json(); //  Fetch
        const { info, results } = res.data;
        setCharacters(results);
        setInfo(info);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getCharacters();
  }, []); // [] quiere decir que solo se ejecuta una vez
  const getMoreCharacters = async (url) => {
    try {
      const res = await axios(url);
      const { info, results } = res.data;
      window.scrollTo(0, 0);
      setCharacters(results);
      setInfo(info);
    } catch (error) {
      console.log(("Error en petición", error));
    }
    // axios(url)
    //   .then(res => {
    //     const {info, results} = res.data;
    //     setCharacters(results);
    //     setInfo(info);
    //   })
    //   .catch(error => console.log(('Error en petición', error)));
  };

  const navigateToCharacter = (character) => {
    // navigate es equivalente a <Link></Link>
    navigate(`/characters/${character.id}`, {state: character});
  };

  return (
    <>
      <h1>Personajes</h1>
      <div className="character__container">
        {characters.map((character) => {
          return (
            <div className="character" key={character.id}>
              <img
                className="character__image"
                src={character.image}
                alt={character.name}
                onClick={() => navigateToCharacter(character)}
              />
              <div>
                ID: {character.id} - <strong>{character.name}</strong>
              </div>
              <div>
                Especie: <strong>{character.species}</strong>
              </div>
              <div>
                Estado: <strong>{character.status}</strong>
              </div>
            </div>
          );
        })}
      </div>
      {info.prev && <button onClick={() => getMoreCharacters(info.prev)}>Página anterior</button>}
      <button onClick={() => getMoreCharacters(info.next)}>Página Siguiente</button>
    </>
  );
};

export default Characters;
