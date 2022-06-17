import {useState} from 'react';

const useSexyFernando = (initialLevel) => {
  const [sexyLevel, setSexyLevel] = useState(initialLevel);

  const cambiarSexy = (num) => {
    setSexyLevel(num * 2);
  }

  return [sexyLevel, cambiarSexy];
};

export default useSexyFernando;