import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./redux/Reducers/authReducer";
import { productReducer } from "./redux/Reducers/poductReducer";


export const store = configureStore({
    reducer : {
        authReducer,
        productReducer
    }
}) 