
import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../authReducer/auth';
// import { firestoreSlice } from "@reduxjs/toolkit";
import dataSlice from '../reducers/data';
import cartSlice from "./cartSlice";
import firestoreReducer from "../reducers/firestore";


export const store = configureStore({
    reducer:{
        authentication:authSlice,
        // db: firestoreSlice,
        data: dataSlice,
        cart: cartSlice,
        deleteItem: firestoreReducer 
    }

})