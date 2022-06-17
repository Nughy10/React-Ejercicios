import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerFormChange, registerFormSubmit } from "../redux/auth/auth.actions";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerForm = useSelector((state) => state.auth.registerForm);

  const submitRegister = (ev) => {
    ev.preventDefault();
    const callback = () => navigate("/");
    dispatch(registerFormSubmit(callback));
  };

  return (
    <form onSubmit={submitRegister}>
      <label>
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={registerForm.email}
          onChange={(ev) => dispatch(registerFormChange(ev))}
        />
      </label>

      <label>
        <p>Contraseña</p>
        <input
          type="text"
          name="password"
          value={registerForm.password}
          onChange={(ev) => dispatch(registerFormChange(ev))}
        />
      </label>

      <label>
        <p>Nombre Comleto</p>
        <input
          type="text"
          name="name"
          value={registerForm.name}
          onChange={(ev) => dispatch(registerFormChange(ev))}
        />
      </label>

      <div style={{margin: '1px', marginTop: '24px'}}>
        <button type="submit">Registrarme</button>
      </div>
    </form>
  );
};

export default Register;
