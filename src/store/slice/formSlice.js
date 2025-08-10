import { createSlice } from "@reduxjs/toolkit";

const formSlice =createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
                console.log("actions",action.payload)
        }
    }
})

export const { addTodo } = formSlice.actions;
export default formSlice.reducer;