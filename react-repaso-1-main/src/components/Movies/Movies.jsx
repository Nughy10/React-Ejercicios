const Movies = ({ name, duration, director }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{director}</p>
      <p>{duration}</p>
    </div>
  );
};

export default Movies;
