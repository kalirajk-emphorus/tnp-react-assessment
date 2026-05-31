import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import jobsReducer from "../features/jobs/jobSlice";
import applicationsReducer from "../features/applications/applicationSlice";
import filterReducer from "../features/filters/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer,
    applications: applicationsReducer,
    filters: filterReducer,
  },
});