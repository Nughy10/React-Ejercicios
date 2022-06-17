import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { authenticateUser } from "./helpers/auth.helper";
import Characters from "./components/Characters";
import Home from "./components/Home";
import Episodes from './components/Episodes/Episodes';
import CharacterIndividual from "./components/CharacterIndividual";
import Login from "./components/Login";
import './App.scss';
import PrivateRoute from "./components/PrivateRoute";

/**
 * La finalidad de implementar autenticación en el Front,
 * es poder proteger rutas y componentes de accesos no autorizados
 * o bien protegidos por roles.
 * 
 * Por una parte, Node (en este ejemplo simulado) nos comunicará si Lola
 * está autenticada en nuestra aplicación.
 * 
 * App tiene la información de autenticación y deberá comunicarle a todos los componentes
 * que necesiten saber si Lola tiene permisos. Así como los datos de Lola (para la navbar etc)
 * 
 * Bien, esto lo hará App creando una variable de estado llamada "user". 
 * 
 * Estados posibles de un usuario
 *  - Pendiente (aún el servidor no nos ha contestado si Lola puede acceder) user = null
 *  - Autenticado: El servidor nos ha devuelto el usuario Lola con permisos. Lo guardamos. user = {name: 'Lola', ...}
 *  - No autenticado: Lola aún no se ha logueado o su autenticación ha caducado. user = false 
 * 
 * if (user === null)
 * if (user)
 * if (user === false)
 */

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const loginUser = user => {
    const userLogged = authenticateUser(user);
    setUser(userLogged);

    if (userLogged) navigate("/");
  }

  return (
    <div className="app">
      <h1>Rick & Morty App</h1>
      {user?.name && <h2>Bienvenid@ de nuevo {user.name}</h2>}
      <Link to="/">
        <button>Inicio</button>
      </Link>
      <Link to="/characters">
        <button>Personajes</button>
      </Link>
      <Link to="/episodes">
        <button>Episodios</button>
      </Link>
      {!user && <Link to="/login">
        <button>Login</button>
      </Link>}
      {user && <button onClick={() => setUser(false)}>Logout</button>}

      {/* Conjunto de rutas <Routes></Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/characters/:id" element={<CharacterIndividual />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes/*" element={<PrivateRoute user={user} component={<Episodes />} />} />
      </Routes>

      
    </div>
  );
}

export default App;
