import * as actions from "./running.actions";

const INITIAL_STATE = {
    running: false,
  }
  
  const runningReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actions.START_CRONO:
            return {...state, running: true}
        case actions.STOP_CRONO:
            return {...state, running: false}
        default: 
            return state
    }
  };
  
  export default runningReducer;
  