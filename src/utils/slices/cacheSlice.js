import { createSlice } from "@reduxjs/toolkit";

const caching = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addCache: (state, action) => {
      return Object.assign({ ...state, ...action.payload });
    },
  },
});

export const { addCache } = caching.actions;
export default caching.reducer;
