import { Link, useNavigate, useLocation } from "react-router-dom";
const CharacterIndividual = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const character = location.state;

  return (
    <div className="character" key={character.id}>
      <img
        className="character__image"
        src={character.image}
        alt={character.name}
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
      <div>
        {/* <h1 onClick={() => Navigate('/characters')}> */}
        <h1 onClick={() => navigate(-1)}>
          Volver atrás
        </h1>
        <Link to="/characters">Volver atrás</Link>
      </div>
    </div>
  );
};

export default CharacterIndividual;
