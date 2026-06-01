import {
    Box,
    Grid,
    Paper,
    Typography,
    Card,
    CardContent,
    Button,
    Stack,
    Chip,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AddIcon from "@mui/icons-material/Add";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminDashboardPage = () => {
    const jobs = useSelector((state) => state.jobs.jobs || []);
    const applications = useSelector(
        (state) => state.applications?.appliedJobs || []
    );

    const totalJobs = jobs.length;
    const totalApplications = applications.length;
    const activeJobs = jobs.length;

    const stats = [
        {
            title: "Total Jobs",
            value: totalJobs,
            icon: <WorkIcon fontSize="large" />,
            gradient: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
        },
        {
            title: "Active Jobs",
            value: activeJobs,
            icon: <AssignmentTurnedInIcon fontSize="large" />,
            gradient: "linear-gradient(135deg,#22c55e,#15803d)",
        },
        {
            title: "Applications",
            value: totalApplications,
            icon: <PeopleIcon fontSize="large" />,
            gradient: "linear-gradient(135deg,#f97316,#c2410c)",
        },
    ];

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#0b1220",
                color: "white",
                px: 2,
                py: 4,
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: "auto" }}>

                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        borderRadius: 5,
                        color: "white",
                        background:
                            "radial-gradient(circle at top left,#1e3a8a,#0f172a 60%,#020617)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        mb: 4,
                    }}
                >
                    <Stack spacing={1}>
                        <Chip
                            label="Admin Panel"
                            sx={{
                                width: "fit-content",
                                bgcolor: "rgba(255,255,255,0.08)",
                                color: "white",
                            }}
                        />

                        <Typography variant="h4" fontWeight={900}>
                            Dashboard Overview
                        </Typography>

                        <Typography sx={{ opacity: 0.7 }}>
                            Manage jobs, track applications, and control hiring flow from one place.
                        </Typography>

                        <Button
                            component={Link}
                            to="/jobs"
                            startIcon={<AddIcon />}
                            variant="contained"
                            sx={{
                                mt: 2,
                                width: "fit-content",
                                borderRadius: 3,
                                px: 3,
                                fontWeight: 600,
                                background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                            }}
                        >
                            Manage Jobs
                        </Button>
                    </Stack>
                </Paper>

                <Grid container spacing={3}>
                    {stats.map((item) => (
                        <Grid item xs={12} md={4} key={item.title}>
                            <Card
                                sx={{
                                    borderRadius: 5,
                                    color: "white",
                                    background: item.gradient,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                    },
                                }}
                            >
                                <CardContent>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Box>
                                            <Typography sx={{ opacity: 0.9 }}>
                                                {item.title}
                                            </Typography>

                                            <Typography variant="h3" fontWeight={900}>
                                                {item.value}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ opacity: 0.9 }}>{item.icon}</Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Paper
                    sx={{
                        mt: 5,
                        p: 3,
                        borderRadius: 5,
                        bgcolor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "white",
                    }}
                >
                    <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
                        Recent Job Listings
                    </Typography>

                    <Stack spacing={2}>
                        {jobs.slice(0, 5).map((job) => (
                            <Box
                                key={job.id}
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    bgcolor: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    transition: "0.2s",
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.06)",
                                    },
                                }}
                            >
                                <Typography fontWeight={700}>
                                    {job.title}
                                </Typography>

                                <Typography sx={{ opacity: 0.7, fontSize: 14 }}>
                                    {job.company} • {job.location}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Paper>

                <Grid container spacing={3} sx={{ mt: 3 }}>
                    <Grid item xs={12} md={6}>
                        <Paper
                            sx={{
                                p: 3,
                                borderRadius: 5,
                                bgcolor: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "white",
                            }}
                        >
                            <Typography variant="h6" fontWeight={800}>
                                Recruitment Summary
                            </Typography>

                            <Typography sx={{ opacity: 0.7, mt: 1 }}>
                                Total Jobs: {totalJobs}
                            </Typography>

                            <Typography sx={{ opacity: 0.7 }}>
                                Applications: {totalApplications}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper
                            sx={{
                                p: 3,
                                borderRadius: 5,
                                bgcolor: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "white",
                            }}
                        >
                            <Typography variant="h6" fontWeight={800}>
                                Quick Actions
                            </Typography>

                            <Stack spacing={2} sx={{ mt: 2 }}>
                                <Button
                                    component={Link}
                                    to="/jobs"
                                    variant="contained"
                                    sx={{
                                        borderRadius: 3,
                                        fontWeight: 600,
                                        background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                                    }}
                                >
                                    Manage Jobs
                                </Button>

                                <Button
                                    component={Link}
                                    to="/jobs"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 3,
                                        color: "white",
                                        borderColor: "rgba(255,255,255,0.3)",
                                    }}
                                >
                                    View Listings
                                </Button>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default AdminDashboardPage;