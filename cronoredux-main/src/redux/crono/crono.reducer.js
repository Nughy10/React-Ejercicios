import * as actions from "./crono.actions";

const INITIAL_STATE = {
    crono: 0,
  }
  
  const cronoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actions.INCREMENT_CRONO:
            return {...state, crono: state.crono + action.payload}
        case actions.RESET_CRONO:
            return {...state, crono: 0}
        default:
            return state
    }
  };
  
  export default cronoReducer;
  