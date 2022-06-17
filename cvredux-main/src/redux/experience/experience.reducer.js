import { CV } from "../../cv/cv";
import * as actions from './experience.actions';

const { experience } = CV;


const INITIAL_STATE = {
    experience: experience,
  }
  
  const experienceReducer = (state = INITIAL_STATE, action) => {
    const {experience} = state; 
    switch(action.type) {
        case actions.ADD_EXPERIENCE:
            return {...state, experience: [...experience, action.payload]};
        case actions.DELETE_EXPERIENCE:
            const experienceFiltered = experience.filter(exp => exp !== action.payload);
            return {...state, experience: [...experienceFiltered]};
        default:
            return state;
    }
  };
  
export default experienceReducer;
  