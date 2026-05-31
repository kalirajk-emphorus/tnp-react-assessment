import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

import HomePage from "./pages/user/HomePage";
import LoginPage from "./pages/user/LoginPage";
import JobsPage from "./pages/user/JobsPage";
import JobsDetailsPage from "./pages/user/JobsDetailsPage";
import AppliedJobsPage from "./pages/user/AppliedJobsPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import { setJobs } from "./features/jobs/jobSlice";
import jobsData from "./data/jobs.json";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedJobs = JSON.parse(
      localStorage.getItem("jobs")
    );

    if (!savedJobs || savedJobs.length === 0) {
      dispatch(setJobs(jobsData));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<JobsPage />} />

          <Route
            path="/jobs/:id"
            element={
              <ProtectedRoute>
                <JobsDetailsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/applied-jobs"
            element={
              <ProtectedRoute>
                <AppliedJobsPage />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route
            path="/admin/dashboard"
            element={<AdminDashboardPage />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;