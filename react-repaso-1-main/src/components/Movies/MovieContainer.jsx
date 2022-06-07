//1. tener un componente MovieContainer que tenga un array de peliculas
//2. recorrer el array de peliculas y pintarlas en un componete Movie
//3. Movie recibe por props titulo director y duracion
//4. solo vamos a pintar las que duren más de 100 minutos

import Movies from "./Movies";

const MovieContainer = () => {
  const movies = [
    {
      name: "Blade Runner",
      director: "Steven Spielberg",
      duration: 90,
    },
    {
      name: "Titanic",
      director: "James Cameron",
      duration: 120,
    },
    {
      name: "Pulp Fiction",
      director: "Tarantino",
      duration: 140,
    },
  ];
  return (
    <>
      {movies.length > 0 &&
        movies.map((movie) => {
          return movie.duration > 100 && <Movies {...movie}/>;
        })}
    </>
  );
};

export default MovieContainer;
