import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        deleteItem:()=>{
            
        },
        reset:()=>{
            state.items.length = 0;
        }
    }
})

export const {addItem,deleteItem,reset}=cartSlice.actions
export default cartSlice.reducer