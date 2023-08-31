import { configureStore } from "@reduxjs/toolkit";
import themePickerSlice from "./themePickerSlice.js";

export const store = configureStore({
  reducer: {
    themePickerSlice: themePickerSlice,
  },
});

export default store;
