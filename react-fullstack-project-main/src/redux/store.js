import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { appReducer } from "./test/app.redux";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;