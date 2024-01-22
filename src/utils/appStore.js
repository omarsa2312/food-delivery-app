import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js"; 

/*
cartSlice has been configured
*/
const appStore = configureStore({
    reducer:{
        cart: cartReducer, 
    }
}); 

export default appStore; 