import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  areSkillsItemsFinished: false,
  skillsItemsAmount: 3,
};

function handleItemsAmount(
  itemsAmount: number,
  isFinishedState: boolean,
  isfinished: boolean
) {
  itemsAmount += 3;
  isFinishedState = isfinished;
}

const loadMoreSlice = createSlice({
  name: "loadMore",
  initialState,
  reducers: {
    handleSkillsAmount: (state, action: PayloadAction<number>) => {
      state.skillsItemsAmount += 3;
      if (state.skillsItemsAmount >= action.payload) {
        state.areSkillsItemsFinished = true;
      }
    },
    handleCertificatesAmount: (state, action: PayloadAction<boolean>) => {
      handleItemsAmount(
        state.skillsItemsAmount,
        state.areSkillsItemsFinished,
        action.payload
      );
    },
  },
});

const { actions, reducer } = loadMoreSlice;

export default reducer;

export const { handleSkillsAmount, handleCertificatesAmount } = actions;
