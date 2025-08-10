import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltersState = {
  activeFilters: string[];
  activeSorts: string[];
  activeAccordions: string[];
  inputValue: string;
  isFiltersBlockActive: boolean;
  isSearchBlockActive: boolean;
};
const initialState: FiltersState = {
  activeFilters: [],
  activeSorts: [],
  activeAccordions: [],
  inputValue: "",
  isFiltersBlockActive: false,
  isSearchBlockActive: false,
};

function handleAdd(name: string, array: string[]) {
  const normalized = name.trim().toLowerCase();
  const index = array.findIndex(
    (cat) => cat.trim().toLowerCase() === normalized
  );
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    array.push(normalized);
  }
}
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveSort: (state, action: PayloadAction<string>) => {
      handleAdd(action.payload, state.activeSorts);
    },
    setActiveFilter: (state, action: PayloadAction<string>) => {
      handleAdd(action.payload, state.activeFilters);
    },
    setActiveFilterAccordion: (state, action: PayloadAction<string>) => {
      handleAdd(action.payload, state.activeAccordions);
    },
    changeInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload.trim().toLowerCase();
    },
    toggleFiltersBlockActive: (state) => {
      state.isFiltersBlockActive = !state.isFiltersBlockActive;
    },
    toggleSearchBlockActive: (state) => {
      state.isSearchBlockActive = !state.isSearchBlockActive;
    },
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const {
  setActiveSort,
  setActiveFilter,
  setActiveFilterAccordion,
  changeInputValue,
  toggleFiltersBlockActive,
  toggleSearchBlockActive,
} = actions;
