import React, { useState } from 'react'
import  {useDispatch} from 'react-redux';
import { addEducation } from '../redux/education/education.actions';
import { useNavigate } from "react-router-dom";

const INITIAL_FORM = {
    name: '',
    date: '',
    where: '',
}

const NewEducation = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(addEducation(form))
        navigate('/')
    }

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})
        console.log(form)

    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>name</span>
            <input type="text" name="name" onChange={handleChange}/>
        </label>
        <label>
            <span>date</span>
            <input type="text" name="date" onChange={handleChange}/>
        </label>
        <label>
            <span>where</span>
            <input type="text" name="where" onChange={handleChange}/>
        </label>
        <button>addExperience</button>
    </form>
  )
}

export default NewEducation