import { configureStore } from "@reduxjs/toolkit";

import menu from "./menu-slice";
import filters from "./filters-slice";

const store = configureStore({
  reducer: {
    menu,
    filters,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
