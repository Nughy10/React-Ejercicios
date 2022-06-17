export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';
export const SET_SEXY_USER = 'SET_SEXY_USER';

export const saveUser = user => dispatch => {
  dispatch({
    type: 'SET_USER',
    payload: user
  })
};

export const setSexyUsername = nombre => dispatch => {

  const action = {
    type: SET_SEXY_USER, // tipo que nos hemos inventado para esta acción
    payload: nombre, // aquí llegará el valor // Fernando
  };

  dispatch(action);
}