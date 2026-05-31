import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appliedJobs: [],
};

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    applyJob: (state, action) => {
      const exists = state.appliedJobs.find(
        (job) => job.id === action.payload.id
      );

      if (!exists) {
        state.appliedJobs.push(action.payload);
      }
    },

    removeApplication: (state, action) => {
      state.appliedJobs = state.appliedJobs.filter(
        (job) => job.id !== action.payload
      );
    },
  },
});

export const {
  applyJob,
  removeApplication,
} = applicationsSlice.actions;

export default applicationsSlice.reducer;