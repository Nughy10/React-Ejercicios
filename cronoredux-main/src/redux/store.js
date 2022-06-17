import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cronoReducer from "./crono/crono.reducer";
import runningReducer from "./running/running.reducer";

const rootReducer = combineReducers({
    crono: cronoReducer, //crono: {crono: 0}
    running: runningReducer, //running: {running: false}
});

const newStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default newStore;
