import { configureStore } from "@reduxjs/toolkit";

import menu from "./menu-slice";
const store = configureStore({
  reducer: {
    menu,
  },
});
export default store;
