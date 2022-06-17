import React from 'react'
import { useForm } from 'react-hook-form'
import { addExperience } from '../redux/experience/experience.actions';
import { useDispatch } from 'react-redux';


const NewExperience = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();  //register --> coge los cambios de nuestros campos, handleSubmit --> maneja el submit del formulario
    const dispatch = useDispatch();

    const onSubmit = (formData) => {                //en el onsubmit nos llegan los datos directamente del handleSubmit de react-hook-form
        console.log(formData);
        dispatch(addExperience(formData));
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            <span>name</span>
            <input type="text" name="name" {...register('name',{        //register setea el nombre del campo y sus errores y mensajes de error 
                required: "Please, enter a name",
                pattern: {
                    value: /^[a-zA-Z]{4,10}$/,
                    message: "Please enter a valid name",
                }
            })}/>
            {/* Si existen mostramos los mensajes de error. */}
            {errors.name && errors.name.type === 'required' && <span>{errors.name.message}</span>}          
            {errors.name && errors.name.type === 'pattern' && <span>{errors.name.message}</span>}
        </label>
        <label>
            <span>date</span>
            <input type="text" name="date" {...register('date', {pattern: {
                value: /^(19[0-9]\d|20[0-2]\d)$/,
                message: "Please enter a valid date"
                }})}/>
            {errors.date && errors.date.type === 'pattern' && <span>{errors.date.message}</span>}
        </label>
        <label>
            <span>where</span>
            <input type="text" name="where" {...register('where')}/>
        </label>
        <label>
            <span>description</span>
            <input type="text" name="description" {...register('description')}/>
        </label>
        <button>addExperience</button>
    </form>
  )
}

export default NewExperience