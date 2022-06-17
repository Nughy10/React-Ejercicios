export const INCREMENT_CRONO = 'INCREMENT_CRONO';
export const RESET_CRONO = 'RESET_CRONO';

export const incrementCrono = () => dispatch =>{
    dispatch({
        type: INCREMENT_CRONO,
        payload: 10
    })
}

export const resetCrono = () => dispatch => {
    dispatch({
        type: RESET_CRONO,
    })
}