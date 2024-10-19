import { configureStore } from "@reduxjs/toolkit";
import sideSwitch from "./slices/appSlice.js";

const store = configureStore({
  reducer: {
    appSwitch: sideSwitch,
  },
});

export default store;
