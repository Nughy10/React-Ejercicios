import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFormChange, loginFormSubmit } from "../redux/auth/auth.actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginForm = useSelector((state) => state.auth.loginForm);

  const submitLogin = (ev) => {
    ev.preventDefault();
    const callback = () => navigate("/");
    dispatch(loginFormSubmit(callback));
  };

  return (
    <form onSubmit={submitLogin}>
      <label>
        <p>Email</p>
        <input type="text" name="email" value={loginForm.email} onChange={(ev) => dispatch(loginFormChange(ev))} />
      </label>

      <label>
        <p>Contraseña</p>
        <input
          type="text"
          name="password"
          value={loginForm.password}
          onChange={(ev) => dispatch(loginFormChange(ev))}
        />
      </label>

      <div style={{ margin: "1px", marginTop: "24px" }}>
        <button type="submit">Acceder</button>
      </div>
    </form>
  );
};

export default Login;
