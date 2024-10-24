import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "sideBar",
  initialState: { isOpen: true },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    off: (state) => {
      state.isOpen = false;
    },
    onn: (state) => {
      state.isOpen = true;
    },
  },
});

export const { toggle, off, onn } = appSlice.actions;
export default appSlice.reducer;
