import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db} from "../../firebaseInit";

const auth = getAuth();

const initialState = {
    isLoggedIn : false
}

export const signUpThunk = createAsyncThunk("auth/signup", async ({ name,email, password})=>{
    try {
        const userDetails = await createUserWithEmailAndPassword(auth, email, password);
        const user = userDetails.user;

        await updateProfile(user, {
            displayName : name
        })

        await addDoc(collection(db, 'user'), {
            name, email, cart :[], order : []
        })

        console.log('User signed up successfully!');
        console.log(user);
        //navigate("/signIn")
    } catch (error) {
        console.log(error)
    }
})

const authSlice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers : {
        signUp : (state, action) => {

        },
        userLoggedIn : (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
})

export const authReducer = authSlice.reducer;

export const {userLoggedIn} = authSlice.actions;

export const authSelector = (state) => state.authReducer;