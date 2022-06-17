import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import educationReducer from "./education/education.reducer";
import experienceReducer from "./experience/experience.reducer";

const rootReducer = combineReducers({
    education: educationReducer,
    experience: experienceReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
