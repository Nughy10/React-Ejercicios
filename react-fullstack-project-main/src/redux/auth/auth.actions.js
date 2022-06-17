import axios from 'axios';
export const CHANGE_REGISTER_FORM = 'CHANGE_REGISTER_FORM';
export const CHANGE_LOGIN_FORM = 'CHANGE_LOGIN_FORM';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_OK = 'REGISTER_USER_OK';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_OK = 'LOGIN_USER_OK';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const CHECK_SESSION = "CHECK_SESSION";
export const CHECK_SESSION_OK = "CHECK_SESSION_OK";
export const CHECK_SESSION_ERROR = "CHECK_SESSION_ERROR";
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_OK = 'LOGOUT_USER_OK';
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';

export const registerFormChange = (ev) => dispatch => {
  const {name, value} = ev.target;

  dispatch({
    type: CHANGE_REGISTER_FORM,
    payload: { name, value }
  });
};


export const loginFormChange = (ev) => dispatch => {
  const {name, value} = ev.target;

  dispatch({
    type: CHANGE_LOGIN_FORM,
    payload: { name, value }
  });
};

export const registerFormSubmit = (callback) => (dispatch, getState) => {
  const state = getState();
  /**
  * 1. Dispatch de la acción. La subdividiremos en 3 partes: PETICION, SUCCESS, ERROR.
  */

  dispatch({ type: REGISTER_USER });
  
  /**
   * Petición a la API
   */
  axios.post('http://localhost:4500/users/register', state.auth.registerForm, { withCredentials: true })
    .then(res => {
      dispatch({ type: REGISTER_USER_OK, payload: res.data })
      callback();
    })
    .catch(error => {
      dispatch({ type: REGISTER_USER_ERROR, payload: error.message })
    });
};

export const loginFormSubmit = (callback) => (dispatch, getState) => {
  const state = getState();
  dispatch({ type: LOGIN_USER });

  axios.post('http://localhost:4500/users/login', state.auth.loginForm, { withCredentials: true })
    .then(res => {
      dispatch({ type: LOGIN_USER_OK, payload: res.data })
      callback();
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: LOGIN_USER_ERROR, payload: error.message })
    });
};

export const checkUserSession = () => dispatch => {
  dispatch({ type: CHECK_SESSION });

  axios.get('http://localhost:4500/users/check-session', { withCredentials: true })
    .then(res => dispatch({ type: CHECK_SESSION_OK, payload: res.data }))
    .catch(() => dispatch({ type: CHECK_SESSION_ERROR }))
  };
  
export const logoutUser = (callback) => dispatch => {
  dispatch({ type: LOGOUT_USER });

  axios.post('http://localhost:4500/users/logout', {}, { withCredentials: true })
    .then(res => {
      dispatch({ type: LOGOUT_USER_OK })
      callback();
    })
    .catch(error => {
      dispatch({ type: LOGOUT_USER_ERROR, payload: error.message })
    });
}