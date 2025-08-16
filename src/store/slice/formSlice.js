import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "formBuilder",
    initialState: [],
    reducers: {
        formBuilder: (state, action) => {
            state.push({ formDetails: action.payload })
        }
    },
})
    
export const { formBuilder } = formSlice.actions;
export default formSlice.reducer;


