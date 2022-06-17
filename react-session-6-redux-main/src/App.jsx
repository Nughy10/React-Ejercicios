import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { authenticateUser } from "./helpers/auth.helper";
import Characters from "./components/Characters";
import Home from "./components/Home";
import Episodes from './components/Episodes/Episodes';
import CharacterIndividual from "./components/CharacterIndividual";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { connect } from "react-redux";
import { saveUser } from "./redux/actions/auth.actions";
import './App.scss';

const App = ({user, dispatch}) => {
  const navigate = useNavigate();

  const loginUser = user => {
    const userLogged = authenticateUser(user);
    dispatch(saveUser(userLogged));

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
      {user && <button onClick={() => dispatch(saveUser(false))}>Logout</button>}

      {/* Conjunto de rutas <Routes></Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/characters/:id" element={<CharacterIndividual />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes/*" element={<PrivateRoute component={<Episodes />} />} />
      </Routes>
    </div>
  );
}

// mapStateToProps => cogerStateDeReduxYMeterloComoPropEnElComponente

export default connect(state => ({
    user: state.auth.user,
    characters: state.characters.allCharacters,
  })
)(App);
