/**
 * Tipos
 */
export const APP_START_REDUX = "APP_START_REDUX";

/**
 * Acciones
 */
export const appStartRedux = (saludoCampero) => (dispatch) => {
  dispatch({
    type: APP_START_REDUX,
    payload: saludoCampero
  });
};

/**
 * Reducer
 */
const initialState = {
  name: "Sexy React",
  description: "Esta aplicación conectará con Node y tendremos autenticación",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_START_REDUX: {
      console.log('Cada vez que disparo la acción APP_START_REDUX se ejecuta esto')
      return { ...state, saludo: action.payload }
    }
    default: {
      return state;
    }
  }
};