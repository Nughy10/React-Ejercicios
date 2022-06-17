import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Movies = () => {
    const [movies, setMovies] = useState([]);

     const getMovies = async() =>{
        const res = await axios("https://ghibliapi.herokuapp.com/films");
        setMovies(res.data)
     }

     useEffect(() => {
         getMovies();
     },[])

  return (
    <div>
        {movies.length > 0 && movies.map((movie) => {
            return (
                <Link to={`/movies/${movie.id}`}><img src={movie.image} alt={movie.original_title_romanised} /></Link>
            )
        })}
    </div>
  )
}

export default Movies