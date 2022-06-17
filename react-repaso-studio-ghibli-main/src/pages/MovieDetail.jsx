import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const [movie,setMovie] = useState();
    const {id} = useParams();

    const getMovie = async() => {
        const res = await axios(`https://ghibliapi.herokuapp.com/films/${id}`);
        setMovie(res.data)
    }

    useEffect(() => {
      getMovie();
    }, [])
    

  return (
    <div>
    {movie && <>
        <img src={movie.image} alt={movie.original_title_romanised} />
        <p>{movie.description}</p>
    </>}
    </div>
  )
}

export default MovieDetail