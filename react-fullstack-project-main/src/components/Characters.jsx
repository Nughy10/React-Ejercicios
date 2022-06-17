import axios from "axios";
import { useEffect } from "react";

const Characters = () => {

  useEffect(() => {
    axios('http://localhost:4500/characters', {withCredentials: true})
      .then(console.log);
  }, []);

  return (
    <>
      <h1>Characters Page</h1>
      <div>
        Aquí renderizar personajes
      </div>
    </>
  );
};

export default Characters;
