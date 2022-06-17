import {Routes, Route, Link} from 'react-router-dom';
import EpisodeOne from './EpisodeOne';
import EpisodeTwo from './EpisodeTwo';

const Episodes = () => {
  return <>
    <h1>Episodios!!</h1>
    <div>
      <h2>Contenido del episodio</h2>
      
      <Link to="/episodes/one">Ver episodio 1</Link>
      <Link to="/episodes/two">Ver episodio 2</Link>
      
      <Routes>
        <Route path="/one" element={<EpisodeOne />} />
        <Route path="/two" element={<EpisodeTwo />} />
      </Routes>
    </div>
  </>
};

export default Episodes;