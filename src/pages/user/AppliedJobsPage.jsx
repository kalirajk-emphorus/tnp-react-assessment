import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Button,
    Box,
    Stack,
    Paper,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AppliedJobsPage = () => {
    const appliedJobs = useSelector(
        (state) => state.applications.appliedJobs || []
    );

    return (
        <Box sx={{ bgcolor: "#0b1220", minHeight: "100vh", py: 5, color: "white" }}>
            <Container maxWidth="lg">

                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        mb: 5,
                        borderRadius: 5,
                        color: "white",
                        background:
                            "radial-gradient(circle at top left,#1e3a8a,#0f172a 60%,#020617)",
                        border: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    <Stack spacing={1}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <WorkIcon />
                            <Typography variant="h4" fontWeight={900}>
                                My Applications
                            </Typography>
                        </Stack>

                        <Typography sx={{ opacity: 0.7 }}>
                            Track all your job applications in one place
                        </Typography>

                        <Chip
                            label={`${appliedJobs.length} Applications`}
                            sx={{
                                width: "fit-content",
                                mt: 1,
                                bgcolor: "rgba(255,255,255,0.08)",
                                color: "white",
                            }}
                        />
                    </Stack>
                </Paper>

                {appliedJobs.length === 0 ? (
                    <Card
                        sx={{
                            textAlign: "center",
                            py: 10,
                            borderRadius: 5,
                            bgcolor: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "white",
                        }}
                    >
                        <CardContent>
                            <WorkIcon sx={{ fontSize: 70, opacity: 0.4, mb: 2 }} />

                            <Typography variant="h6" fontWeight={700}>
                                No Applications Yet
                            </Typography>

                            <Typography sx={{ opacity: 0.6, mt: 1 }}>
                                Start applying to jobs to track your progress here.
                            </Typography>

                            <Button
                                component={Link}
                                to="/jobs"
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    borderRadius: 3,
                                    px: 4,
                                    fontWeight: 600,
                                    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                                }}
                            >
                                Browse Jobs
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <Grid container spacing={3}>
                        {appliedJobs.map((job) => (
                            <Grid item xs={12} md={6} key={job.id}>
                                <Card
                                    sx={{
                                        borderRadius: 5,
                                        bgcolor: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        color: "white",
                                        transition: "0.3s",
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            bgcolor: "rgba(255,255,255,0.06)",
                                        },
                                    }}
                                >
                                    <CardContent>

                                        <Typography variant="h6" fontWeight={800}>
                                            {job.title}
                                        </Typography>

                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                                            <BusinessIcon fontSize="small" sx={{ opacity: 0.7 }} />
                                            <Typography sx={{ opacity: 0.8 }}>
                                                {job.company}
                                            </Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                                            <LocationOnIcon fontSize="small" sx={{ opacity: 0.7 }} />
                                            <Typography sx={{ opacity: 0.8 }}>
                                                {job.location}
                                            </Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                                            <Chip
                                                label={job.category}
                                                size="small"
                                                sx={{ color: "white", bgcolor: "rgba(99,102,241,0.3)" }}
                                            />

                                            <Chip
                                                label={job.experience}
                                                size="small"
                                                sx={{ color: "white", bgcolor: "rgba(16,185,129,0.2)" }}
                                            />

                                            <Chip
                                                label="Applied"
                                                size="small"
                                                sx={{ color: "white", bgcolor: "rgba(34,197,94,0.25)" }}
                                            />
                                        </Stack>

                                        <Typography sx={{ opacity: 0.6, mt: 2, fontSize: 13 }}>
                                            Applied on {job.appliedDate || "01 Jun 2026"}
                                        </Typography>

                                        <Button
                                            component={Link}
                                            to={`/jobs/${job.id}`}
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                mt: 3,
                                                borderRadius: 3,
                                                fontWeight: 600,
                                                background:
                                                    "linear-gradient(135deg,#6366f1,#8b5cf6)",
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
}

export default AppliedJobsPage;