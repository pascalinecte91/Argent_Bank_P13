import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer.js";
import userReducer from "./userReducer.js";


const store = configureStore({
   reducer: {
    login: loginReducer,
    profile: userReducer
   }
   });

export default store;
