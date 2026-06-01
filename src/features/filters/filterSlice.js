import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  category: "All",
  experience: "All",
  employmentType: "All",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setExperience: (state, action) => {
      state.experience = action.payload;
    },

    setEmploymentType: (state, action) => {
      state.employmentType = action.payload;
    },

    resetFilters: (state) => {
      state.search = "";
      state.category = "All";
      state.experience = "All";
      state.employmentType = "All";
    },
  },
});

export const {
  setSearch,
  setCategory,
  setExperience,
  setEmploymentType,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;