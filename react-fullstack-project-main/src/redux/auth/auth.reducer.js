import * as actions from './auth.actions';

const initialFormState = {
  email: '',
  password: '',
  name: '',
};

const initialState = {
  user: null,
  loading: false,
  error: '',
  registerForm: [initialFormState],
  loginForm: initialFormState,
}

export const authReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch(type) {
    case actions.CHANGE_REGISTER_FORM: {
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [payload.name]: payload.value,
        }
      }
    }
    case actions.CHANGE_LOGIN_FORM: {
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [payload.name]: payload.value,
        }
      }
    }
    case actions.REGISTER_USER: {
      return {...state, loading: true};
    } 
    case actions.REGISTER_USER_OK: {
      return {...state, loading: false, user: payload, registerForm: initialFormState };
    }
    case actions.REGISTER_USER_ERROR: {
      return {...state, loading: false, user: null, error: payload};
    }
    case actions.LOGIN_USER: {
      return {...state, loading: true};
    } 
    case actions.LOGIN_USER_OK: {
      return {...state, loading: false, user: payload, loginForm: [...initialFormState, false, true, false] };
    }
    case actions.LOGIN_USER_ERROR: {
      return {...state, loading: false, user: false, error: payload};
    }
    case actions.CHECK_SESSION_OK: {
      return {...state, user: payload };
    }
    case actions.CHECK_SESSION_ERROR: {
      return {...state, user: false };
    }
    case actions.LOGOUT_USER: {
      return {...state, loading: true};
    }
    case actions.LOGOUT_USER_OK: {
      return {...state, loading: false, user: false };
    }
    case actions.LOGOUT_USER_ERROR: {
      return {...state, loading: false, error: payload};
    }
    default: {
      return state;
    }
  }
}