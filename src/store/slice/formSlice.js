import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formBuilder",
  initialState: {
    formName: "",
    fields: [],
  },
  reducers: {
    setFormName: (state, action) => {
      state.formName = action.payload;
    },
    formBuilder: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.fields = [...action.payload]; // Reset fields when array is provided
      } else {
        state.fields.push(action.payload); // Add single field
      }
    },
    editBuilder: (state, action) => {
      const { key, ...updatedData } = action.payload;
      const index = state.fields.findIndex((item) => item.key === key);
      if (index !== -1) {
        state.fields[index] = { ...state.fields[index], ...updatedData };
      }
    },
    deleteBuilder: (state, action) => {
      const key = action.payload;
      state.fields = state.fields.filter((item) => item.key !== key);
    },
    resetForm: () => ({
      formName: "",
      fields: [],
    }),
    reorderBuilder: (state, action) => {
      state.fields = action.payload; // new reordered fields array
    },
  },
});

export const {
  setFormName,
  formBuilder,
  editBuilder,
  deleteBuilder,
  resetForm,
} = formSlice.actions;
export default formSlice.reducer;
