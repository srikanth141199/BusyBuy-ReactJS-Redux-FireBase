import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  authSelector } from "./authReducer";

const initialState = {
    amt : 50000,
    cartItems : [],
    totalAmt : 0,
    isMyorder : false,
    myorder : []
}

export const updateCartItemsThunk = createAsyncThunk("product/cartItemsUpdate", async(_, { getState })=>{
    const state = getState();
    const {userDetails} = authSelector(state);
    return userDetails.cart || [];
})

export const increaseQuantityThunk = createAsyncThunk("product/increaseQuantity", async ({id, price, name, cartItems}, { dispatch, rejectWithValue })=>{
    const ind = cartItems.findIndex((item) => item.id === id)

        if(ind === -1){
            //setCartItems([{price : price, name : name, quantity : 1}]);
            dispatch(updateCartItems([{price : price, name : name, quantity : 1}]))
            
        }
        else{
            const updatedCartItem = [...cartItems];
            updatedCartItem[ind].quantity = updatedCartItem[ind].quantity+1;
            //setCartItems(updatedCartItem);
            console.log("updated : ", updateCartItems);
            dispatch(updateCartItems(updatedCartItem));
        }
        //setTotalAmt(totalAmt + price)
        dispatch(updateTotalAmount(price));
})


export const decreaseQuantityThunk = createAsyncThunk("product/decreaseQuantity", async({id, price, cartItems}) => {
    const ind = cartItems.findIndex((item) => item.id === id);

    if(ind !== -1){
        const updatedCartItem = [...cartItems];
        updatedCartItem[ind].quantity--;
        //setCartItems(updatedCartItem);
        //setTotalAmt( price * -1)

        updateCartItems(updatedCartItem);
        updateTotalAmount(price*-1)
        if(updatedCartItem[ind].quantity === 0){
            const id = updatedCartItem[ind].id
            const price = updatedCartItem[ind].price
            const name = updatedCartItem[ind].name 
            RemoveCartThunk({id, price, name, cartItems})
        }
    }
})

export const RemoveCartThunk = createAsyncThunk("product/RemoveCart", async({id, price, cartItems}) =>{
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    //setCartItems(updatedCartItems);
    //setTotalAmt(totalAmt - price)
    updateCartItems(updatedCartItems)
    updateTotalAmount(price*-1)

})

const productSlice = createSlice({
    name : "product",
    initialState : initialState,
    reducers : {
        updateAmount : (state, action) => {
            state.amt = action.payload
        },

        updateCartItems : (state, action) => {
            state.cartItems = action.payload
        },

        updateTotalAmount : (state, action) => {
            state.totalAmt = state.totalAmt + action.payload
        },

        updateIsMyOrder : (state, action) => {
            state.isMyorder = action.payload;
        },

        updateMyOder : (state, action) => {
            state.myorder = action.payload;
        }
    },

    extraReducers : (builder) => {
        builder.addCase(updateCartItemsThunk.fulfilled, (state, action) => {
            state.cartItems = action.payload
        })
    }
})

export const productReducer = productSlice.reducer;
export const {updateAmount, updateCartItems, updateTotalAmount, updateIsMyOrder, updateMyOder} = productSlice.actions;
export const productSelecter = (state) => state.productReducer;