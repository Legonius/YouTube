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
  },
});

export const { toggle, off } = appSlice.actions;
export default appSlice.reducer;
