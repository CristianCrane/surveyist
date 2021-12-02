import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import counterReducer from "../features/counter/counterSlice";
import surveyReducer from "../features/survey/surveySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    survey: surveyReducer,
  },
});
