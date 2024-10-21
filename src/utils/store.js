import { configureStore } from "@reduxjs/toolkit";
import sideSwitch from "./slices/appSlice.js";
import cachHistory from "./slices/cacheSlice.js";

const store = configureStore({
  reducer: {
    appSwitch: sideSwitch,
    searchHistory: cachHistory,
  },
});

export default store;
