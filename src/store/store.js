import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../store/slice/formSlice";

export const store = configureStore({
  reducer: {
    form: formReducer, // add more reducers here later/
  },
  
});
