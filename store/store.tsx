import { configureStore } from "@reduxjs/toolkit";

import menu from "./menu-slice";
import accordion from "./accordions-slice";
import projects from "./projects-slice";
import modal from "./modal-slice";

const store = configureStore({
  reducer: {
    menu,
    accordion,
    projects,
    modal,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
