import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./redux/Reducers/authReducer";


export const store = configureStore({
    reducer : {
        authReducer
    }
}) 