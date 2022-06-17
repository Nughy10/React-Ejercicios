export const START_CRONO = 'START_CRONO';
export const STOP_CRONO = 'STOP_CRONO';

export const startCrono = () => dispatch =>{
    dispatch({
        type: START_CRONO
    })
}


export const stopCrono = () => dispatch =>{
    dispatch({
        type: STOP_CRONO
    })  
}