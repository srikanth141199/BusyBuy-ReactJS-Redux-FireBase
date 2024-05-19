import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amt : 50000,
    cartItems : [],
    totalAmt : 0
}


const productSlice = createSlice({
    name : "product",
    initialState : initialState,
    reducers : {
        updateAmount : (state, action) => {
            state.amt = action.payload
        },

        updateCartItems : (state, action) => {
            state.cartItems = [...state.cartItems, action.payload]
        },

        updateTotalAmount : (state, action) => {
            state.totalAmt = state.totalAmt + action.payload
        }
    }
})

export const productReducer = productSlice.reducer;
export const {updateAmount, updateCartItems, updateTotalAmount} = productSlice.actions;
export const productSelecter = (state) => state.productReducer;