import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formBuilder",
  initialState: [],
  reducers: {
    formBuilder: (state, action) => {
      state.push(action.payload);
    },
    updateField: (state, action) => {
      const index = state.findIndex(
        (field) => field.fieldName === action.payload.fieldName
      );
      if (index !== -1) {
        state[index] = action.payload; // replace existing field
      }
    },
  },
});

export const { formBuilder, updateField } = formSlice.actions;
export default formSlice.reducer;
