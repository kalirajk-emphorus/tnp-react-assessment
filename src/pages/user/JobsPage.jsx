import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Container,
    Typography,
    Button,
    Snackbar,
    Alert,
    Box,
    Paper,
    Stack,
    Chip,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";

import JobsModal from "../../components/jobs/JobsModal";
import JobsGrid from "../../components/jobs/JobsGrid";
import JobsPagination from "../../components/jobs/JobsPagination";
import JobFilter from "../../components/jobs/JobFilter";
import DeleteConfirmationDialog from "../../components/jobs/DeleteConfirmationDialog";

import {
    addJob,
    updateJob,
    deleteJob,
} from "../../features/jobs/jobSlice";

function JobsPage() {
    const dispatch = useDispatch();

    const jobs = useSelector((state) => state.jobs.jobs || []);
    const { user } = useSelector((state) => state.auth);

    const isAdmin = user?.role === "admin";

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [experience, setExperience] = useState("All");
    const [employmentType, setEmploymentType] = useState("All");

    const [page, setPage] = useState(1);
    const jobsPerPage = 6;

    const [open, setOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const [errors, setErrors] = useState({});
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState(null);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const initialForm = {
        title: "",
        company: "",
        location: "",
        category: "",
        experience: "",
        employmentType: "",
        description: "",
    };

    const [jobForm, setJobForm] = useState(initialForm);

    const validateForm = () => {
        const e = {};
        if (!jobForm.title.trim()) e.title = "Required";
        if (!jobForm.company.trim()) e.company = "Required";
        if (!jobForm.location.trim()) e.location = "Required";
        if (!jobForm.category.trim()) e.category = "Required";
        if (!jobForm.experience.trim()) e.experience = "Required";
        if (!jobForm.employmentType.trim()) e.employmentType = "Required";
        if (!jobForm.description.trim()) e.description = "Required";
        if (jobForm.description.length < 20)
            e.description = "Min 20 characters";

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleOpenCreate = () => {
        setIsEditMode(false);
        setJobForm(initialForm);
        setOpen(true);
    };

    const handleOpenEdit = (job) => {
        setIsEditMode(true);
        setJobForm(job);
        setOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setJobForm((p) => ({ ...p, [name]: value }));

        if (errors[name]) {
            setErrors((p) => ({ ...p, [name]: "" }));
        }
    };

    const handleSave = () => {
        if (!validateForm()) return;

        if (isEditMode) {
            dispatch(updateJob(jobForm));
            setSnackbar({
                open: true,
                message: "Job updated successfully",
                severity: "success",
            });
        } else {
            dispatch(addJob({ id: Date.now(), ...jobForm }));
            setSnackbar({
                open: true,
                message: "Job created successfully",
                severity: "success",
            });
        }

        setOpen(false);
        setErrors({});
    };

    const handleDelete = (id) => {
        setSelectedJobId(id);
        setDeleteDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        dispatch(deleteJob(selectedJobId));
        setSnackbar({
            open: true,
            message: "Job deleted successfully",
            severity: "success",
        });

        setDeleteDialogOpen(false);
        setSelectedJobId(null);
    };

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase());

        return (
            matchesSearch &&
            (category === "All" || job.category === category) &&
            (experience === "All" || job.experience === experience) &&
            (employmentType === "All" || job.employmentType === employmentType)
        );
    });

    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    const paginatedJobs = filteredJobs.slice(
        (page - 1) * jobsPerPage,
        page * jobsPerPage
    );

    return (
        <Box sx={{ bgcolor: "#0b1220", minHeight: "100vh", pb: 8 }}>

            <Box
                sx={{
                    py: 6,
                    background:
                        "radial-gradient(circle at top left, #3b82f6, #1e3a8a 60%, #0b1220)",
                    color: "white",
                }}
            >
                <Container maxWidth="lg">

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <WorkIcon />
                        <Typography variant="h4" fontWeight={800}>
                            {isAdmin ? "Manage Jobs" : "Discover Jobs"}
                        </Typography>
                    </Stack>

                    <Typography sx={{ opacity: 0.8, mt: 1 }}>
                        {isAdmin
                            ? "Create, edit and manage job postings"
                            : "Explore top opportunities from leading companies"}
                    </Typography>


                    <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: "wrap" }}>
                        <Chip label={`${jobs.length} Jobs`} sx={{ color: "white" }} />
                        <Chip label="Remote Friendly" sx={{ color: "white" }} />
                        <Chip label="Top Companies" sx={{ color: "white" }} />
                    </Stack>

                    {isAdmin && (
                        <Button
                            startIcon={<AddIcon />}
                            variant="contained"
                            sx={{
                                mt: 3,
                                bgcolor: "white",
                                color: "#1e3a8a",
                                fontWeight: 600,
                                borderRadius: 3,
                                "&:hover": { bgcolor: "#f1f5f9" },
                            }}
                            onClick={handleOpenCreate}
                        >
                            Add New Job
                        </Button>
                    )}
                </Container>
            </Box>

            <Container sx={{ mt: -4 }}>
                <Paper
                    elevation={0}
                    sx={{
                        p: 2,
                        borderRadius: 4,
                        background: "rgba(255,255,255,0.06)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                    }}
                >
                    <JobFilter
                        search={search}
                        setSearch={setSearch}
                        category={category}
                        setCategory={setCategory}
                        experience={experience}
                        setExperience={setExperience}
                        employmentType={employmentType}
                        setEmploymentType={setEmploymentType}
                        onClear={() => {
                            setSearch("");
                            setCategory("All");
                            setExperience("All");
                            setEmploymentType("All");
                            setPage(1);
                        }}
                    />
                </Paper>
            </Container>

            <Container sx={{ mt: 5 }}>
                <JobsGrid
                    jobs={paginatedJobs}
                    isAdmin={isAdmin}
                    handleOpenEdit={handleOpenEdit}
                    handleDelete={handleDelete}
                />
            </Container>

            <Container sx={{ mt: 5 }}>
                <JobsPagination
                    page={page}
                    totalPages={totalPages}
                    setPage={setPage}
                />
            </Container>

            <JobsModal
                open={open}
                onClose={() => setOpen(false)}
                isEditMode={isEditMode}
                jobForm={jobForm}
                errors={errors}
                handleChange={handleChange}
                handleSave={handleSave}
            />

            <DeleteConfirmationDialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleConfirmDelete}
            />


            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar((p) => ({ ...p, open: false }))}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert severity={snackbar.severity} variant="filled">
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default JobsPage;