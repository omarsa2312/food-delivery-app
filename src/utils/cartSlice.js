import { createSlice } from "@reduxjs/toolkit";


/*
cartSlice needs some configuration which is provided via the object 
Reducer is an object of functions that are called when a action is dispatched
Reducer function corresponding to each action
Actions can be thinked like API to communicate with redux store
*/

/*
cartSLice will be a object consisting of actions and reducer
reducer function map to a action 
*/

const cartSlice = createSlice({
    name: 'cart', 
    initialState: {
        items: [],
    }, 
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload); 
        }, 
        removeItem: (state, action) => {
            state.items.pop(); 
        },
        clearCart: (state) => {
            state.items.length = 0; 
        }
    }
}); 

export const {addItem, removeItem, clearCart} = cartSlice.actions; 

export default cartSlice.reducer; 