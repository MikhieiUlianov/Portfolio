import { GitHubRepo } from "@/lib/projects-action";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type IntialState = {
  loading: boolean;
  error: boolean;
  isFinished: boolean;
  repos: GitHubRepo[];
};

const initialState: IntialState = {
  loading: false,
  error: false,
  isFinished: false,
  repos: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<GitHubRepo[]>) => {
      if (action.payload.length < 5) state.isFinished = true;
      state.repos.push(...action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

const { actions, reducer } = projectsSlice;

export default reducer;
export const { setProjects, setLoading } = actions;
