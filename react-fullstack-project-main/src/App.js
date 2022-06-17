import { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
// import { appStartRedux } from './redux/test/app.redux';
import Navbar from "./components/Navbar";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { checkUserSession } from "./redux/auth/auth.actions";

const Home = lazy(() => import("./components/Home"));
const Register = lazy(() => import("./components/Register"));
const Login = lazy(() => import("./components/Login"));
const Characters = lazy(() => import("./components/Characters"));
const AuthRoute = lazy(() => import("./components/AuthRoute"));

function App() {
  // const appInfo = useSelector(state => state.app); // Recibe un callback con todo el state completo
  const dispatch = useDispatch(); // Necesitamos el dispatch para disparar acciones de redux

  useEffect(() => {
    // Comprobaré la sesión del usuario;
    dispatch(checkUserSession());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: "50px" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50px" }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Suspense fallback={<h1>Cargando componente lazy...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/characters" element={<AuthRoute component={<Characters />} />} />
          </Routes>
        </Suspense>
      </motion.div>
    </div>
  );
}

export default App;

// connect(aqui equivalente useSelector)()
