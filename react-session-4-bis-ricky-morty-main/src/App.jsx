import { Routes, Route, Link } from "react-router-dom";
import Characters from "./components/Characters";
import Home from "./components/Home";
import Episodes from './components/Episodes/Episodes';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Rick & Morty App</h1>
      <Link to="/">
        <button>Inicio</button>
      </Link>
      <Link to="/characters">
        <button>Personajes</button>
      </Link>
      <Link to="/episodes">
        <button>Episodios</button>
      </Link>

      {/* Conjunto de rutas <Routes></Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes/*" element={<Episodes />} />
      </Routes>

      
    </div>
  );
}

export default App;
