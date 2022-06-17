import React from 'react'
import "./Education.css";
import { useSelector, useDispatch } from 'react-redux';
import { deleteEducation } from '../redux/education/education.actions';
import { Link } from 'react-router-dom';

const Education = () => {
  const {education} = useSelector(state => state.education);
  const dispatch = useDispatch();
  
    return (
      <div>
        <div className="education card">
          {education.map((item, index) => {
            return (
              <div key={index}>
                <p className="name">📕 {item.name}</p>
                <p>{item.where}</p>
                <p>{item.date}</p>
                <div>
                  <Link to={`/editEducation/${index}`}><button>Modificar</button></Link>
                  <button onClick={()=> {dispatch(deleteEducation(item))}}>Eliminar</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default Education