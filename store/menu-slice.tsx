import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isActive: false,
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenuActive: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

const { actions, reducer } = menuSlice;

export default reducer;

export const { toggleMenuActive } = actions;
