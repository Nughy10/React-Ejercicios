//DEFININMOS NUESTRAS ACCIONES

export const ADD_EDUCATION = 'ADD_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';
export const EDIT_EDUCATION = 'EDIT_EDUCATION';

//CREAMOS NUESTRAs FUNCIONES

//Recibimos un nuevo formulario y se lo lanzamos al reducer incluyendo los datos en el payload
export const addEducation = (newEducation) => dispatch =>{
    dispatch({
        type: ADD_EDUCATION,
        payload: newEducation
    })
}


//Recibimos el objeto a eliminar y se lo lanzamos al reducer incluyendo el objeto en el payload
export const deleteEducation = (educationToDelete) => dispatch => {
    dispatch({
        type: DELETE_EDUCATION,
        payload: educationToDelete
    });
}


//Recibimos un formulario con los datos a actualizar y se lo lanzamos al reducer incluyendo los datos y el id en el payload
export const editEducation = (editEducation, id) => dispatch => {
    dispatch({
        type: EDIT_EDUCATION,
        payload: {editEducation, id}
    });
}