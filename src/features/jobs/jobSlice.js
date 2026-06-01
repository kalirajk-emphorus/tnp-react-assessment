import { createSlice } from "@reduxjs/toolkit";

const savedJobs = JSON.parse(
  localStorage.getItem("jobs")
);

const initialState = {
  jobs: savedJobs || [],
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",

  initialState,

  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;

      localStorage.setItem(
        "jobs",
        JSON.stringify(state.jobs)
      );
    },

    addJob: (state, action) => {
      state.jobs.push(action.payload);

      localStorage.setItem(
        "jobs",
        JSON.stringify(state.jobs)
      );
    },

    updateJob: (state, action) => {
      const updatedJob = action.payload;

      state.jobs = state.jobs.map((job) =>
        job.id === updatedJob.id
          ? updatedJob
          : job
      );

      localStorage.setItem(
        "jobs",
        JSON.stringify(state.jobs)
      );
    },

    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter(
        (job) => job.id !== action.payload
      );

      localStorage.setItem(
        "jobs",
        JSON.stringify(state.jobs)
      );
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setJobs,
  addJob,
  updateJob,
  deleteJob,
  setLoading,
  setError,
} = jobsSlice.actions;

export default jobsSlice.reducer;