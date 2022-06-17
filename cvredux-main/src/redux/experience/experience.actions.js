export const ADD_EXPERIENCE = 'ADD_EXPERIENCE';
export const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE';

export const addExperience = (newExperience) => dispatch => {
    dispatch({
        type: ADD_EXPERIENCE,
        payload: newExperience
    })
};


export const deleteExperience = (expererienceToDelete) => dispatch => {
    dispatch({
        type: DELETE_EXPERIENCE,
        payload: expererienceToDelete
    })
};