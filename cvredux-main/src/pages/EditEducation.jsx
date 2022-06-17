import React, { useState } from 'react'
import  {useDispatch, useSelector} from 'react-redux';
import { editEducation } from '../redux/education/education.actions';
import { useNavigate, useParams } from "react-router-dom";

const EditEducation = () => {
    const {id} = useParams();   
    
    const {education} = useSelector(state => state.education);
    const educationToUpdate = education[id];


    const [form, setForm] = useState(educationToUpdate);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(editEducation(form,id))
        navigate('/')
    }

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
        </label>
        <label>
            <span>date</span>
            <input type="text" name="date" value={form.date} onChange={handleChange}/>
        </label>
        <label>
            <span>where</span>
            <input type="text" name="where" value={form.where} onChange={handleChange}/>
        </label>
        <button>addExperience</button>
    </form>
  )
}

export default EditEducation