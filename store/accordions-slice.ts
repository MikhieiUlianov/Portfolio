import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltersState = {
  activeAccordions: string[];
  isFiltersBlockActive: {
    toolsAccordion: boolean;
    projectsAccordion: boolean;
  };

  activeFilters: {
    projectsFilters: string[];
    toolsFilters: string[];
  };

  isSearchBlockActive: boolean;
  inputValue: string;
};
const initialState: FiltersState = {
  activeAccordions: [],
  inputValue: "",
  isFiltersBlockActive: {
    toolsAccordion: false,
    projectsAccordion: false,
  },
  activeFilters: {
    projectsFilters: [],
    toolsFilters: [],
  },
  isSearchBlockActive: false,
};

export function normalizeString(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9а-яё]/gi, "");
}

function handleAdd(name: string, array: string[]) {
  const normalized = normalizeString(name);
  const index = array.findIndex((cat) => normalizeString(cat) === normalized);
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    array.push(normalized);
  }
}

const filtersSlice = createSlice({
  name: "accordions",
  initialState,
  reducers: {
    setActiveAccordion: (state, action: PayloadAction<string>) => {
      handleAdd(action.payload, state.activeAccordions);
    },

    toggleAccordionBlockActive: (
      state,
      action: PayloadAction<"toolsAccordion" | "projectsAccordion">
    ) => {
      const accordion = action.payload;
      state.isFiltersBlockActive[accordion] =
        !state.isFiltersBlockActive[accordion];
    },

    setActiveFilters: (
      state,
      action: PayloadAction<{
        filtersArr: "toolsFilters" | "projectsFilters";
        filter: string;
      }>
    ) => {
      const filtersArr = action.payload.filtersArr;

      handleAdd(action.payload.filter, state.activeFilters[filtersArr]);
    },
    changeInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload.trim().toLowerCase();
    },
    toggleSearchBlockActive: (state) => {
      state.isSearchBlockActive = !state.isSearchBlockActive;
    },
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const {
  setActiveAccordion,
  setActiveFilters,
  toggleAccordionBlockActive,
  toggleSearchBlockActive,
  changeInputValue,
} = actions;
