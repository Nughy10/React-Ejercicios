import * as authActions from '../actions/auth.actions';

const INITIAL_STATE = {
  user: null,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case authActions.SET_USER: {
      const newState = {...state, user: action.payload};
      return newState;
    }

    case authActions.SET_SEXY_USER: {
      // Sabemos que hemos mandado un nombre, que será Fernando.
      // Sabemos que en nuestro estado tenemos state.auth.user.name 
      // Ahora tenemos que decirle al reducer que modifique esa propiedad.

      const newState = {...state, user: { ...state.user, name: action.payload }}
      return newState;
    }

    default: 
      return state;
  }
};

export default authReducer;