import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const INITIAL_STATE = {
    crono: 0,
    running: false,
}


const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "start":
            console.log("Start")
            return {...state, running: true}
        case "stop":
            console.log("Stop")
            return {...state, running: false}
        case "resume":
            console.log("resume")
            return {...state, running: true}
        case "reset":
            console.log("reset")
            return {...state, crono: 0}
        case "addTime":
            console.log("addtime")
            return {...state, crono: state.crono + action.payload}
        default:
            return state;
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;