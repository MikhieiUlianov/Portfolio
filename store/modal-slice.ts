import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalType = "" | "signup" | "login" | "changepass";

type IntialState = {
  type: ModalType;
};
const initialState = {
  type: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModalType: (state, action: PayloadAction<ModalType>) => {
      state.type = action.payload;
    },
  },
});

const { actions, reducer } = modalSlice;
export default reducer;

export const { changeModalType } = actions;
