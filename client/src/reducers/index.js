import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: FormReducer,
  streams: streamReducer,
});
