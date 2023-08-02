
import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../authReducer/auth';
import firestoreSlice from '../firestoreReducer/firestore';
import dataSlice from '../firestoreReducer/data';
import cartSlice from "./cartSlice";


export const store = configureStore({
    reducer:{
        authentication:authSlice,
        db: firestoreSlice,
        data: dataSlice,
        cart: cartSlice
    }

})