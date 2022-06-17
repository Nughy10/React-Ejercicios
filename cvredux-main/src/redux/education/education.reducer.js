import { CV } from "../../cv/cv";
import * as actions from "./education.actions";

//Traemos nuestros datos del CV
const { education } = CV;

//Definimos nuestros datos iniciales
const INITIAL_STATE = {
    education: education,
  }
  
  //Seteamos nuestro reducer
  const educationReducer = (state = INITIAL_STATE, action) => {
    const {education} = state;        //Recuperamos nuestros datos
    switch(action.type) {             //Recogemos el tipo de accion a realizar, son las definidas en el actions y según la accion entramos a su case
        case actions.ADD_EDUCATION:
            return {...state, education: [...education, action.payload]};       //añadimos el nuevo objeto a nuestro array 
        case actions.DELETE_EDUCATION:
          const educationFiltered = education.filter(educ => educ !== action.payload);    //filtramos el array cogiendo los datos que no coindiden
          return {...state, education: [...educationFiltered]};       //seteamos el nuevo array recogido sin el objeto a borrar
        case actions.EDIT_EDUCATION:
          const {id, editEducation} = action.payload;           //recuperamos nuestros datos del payload
          const educationCopy = [...education];   //copio mi array
          educationCopy.splice(id, 1, editEducation); //hago un splice, borro el antiguo y añado el nuevo en su posicion, y añado el modicado
          return {...state, education: [...educationCopy]};
        default:
            return state;
    }
  };
  
export default educationReducer;
  