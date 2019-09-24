import { combineReducers } from "redux";
import { reducer as logInFormReducer } from "redux-form";
import { initReducer } from "./init";

const rootReducer = combineReducers({
  init: initReducer,
  form: logInFormReducer
});

export default rootReducer;
