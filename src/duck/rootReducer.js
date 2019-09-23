import { combineReducers } from "redux";
import { reducer as logInFormReducer } from "redux-form";

const rootReducer = combineReducers({
  form: logInFormReducer
});

export default rootReducer;
