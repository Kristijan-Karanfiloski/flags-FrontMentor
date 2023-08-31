import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

export const themePickerSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themePickerSlice.actions;

export default themePickerSlice.reducer;
