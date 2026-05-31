import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Typography,
    Stack,
    Paper,
} from "@mui/material";

import {
    Business,
    LocationOn,
    Work,
} from "@mui/icons-material";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { applyJob } from "../../features/applications/applicationSlice";

function JobsDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const jobs = useSelector((state) => state.jobs.jobs);
    const appliedJobs = useSelector(
        (state) => state.applications.appliedJobs
    );

    const job = jobs.find((job) => job.id === Number(id));

    if (!job) {
        return (
            <Container sx={{ py: 8, color: "white" }}>
                <Typography variant="h5">Job Not Found</Typography>
            </Container>
        );
    }

    const alreadyApplied = appliedJobs.some(
        (appliedJob) => appliedJob.id === job.id
    );

    const handleApply = () => {
        if (alreadyApplied) return;

        dispatch(
            applyJob({
                ...job,
                appliedDate: new Date().toLocaleDateString(),
            })
        );
    };

    return (
        <Box sx={{ bgcolor: "#0b1220", minHeight: "100vh", py: 5, color: "white" }}>
            <Container maxWidth="md">

                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        borderRadius: 5,
                        mb: 4,
                        color: "white",
                        background:
                            "radial-gradient(circle at top,#1e3a8a,#0f172a 70%,#020617)",
                        border: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    <Typography variant="h4" fontWeight={900}>
                        {job.title}
                    </Typography>

                    <Typography sx={{ opacity: 0.7, mt: 1 }}>
                        Explore role details, responsibilities and apply instantly
                    </Typography>

                    <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: "wrap" }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Business fontSize="small" />
                            <Typography sx={{ opacity: 0.8 }}>{job.company}</Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <LocationOn fontSize="small" />
                            <Typography sx={{ opacity: 0.8 }}>{job.location}</Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <Work fontSize="small" />
                            <Typography sx={{ opacity: 0.8 }}>{job.experience}</Typography>
                        </Stack>
                    </Stack>


                    <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                        <Chip
                            label={job.category}
                            sx={{ color: "white", bgcolor: "rgba(99,102,241,0.3)" }}
                        />
                        <Chip
                            label={job.employmentType}
                            sx={{ color: "white", bgcolor: "rgba(16,185,129,0.2)" }}
                        />
                    </Stack>
                </Paper>


                <Stack spacing={3}>

                    <Card
                        sx={{
                            borderRadius: 4,
                            bgcolor: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "white",
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight={800} gutterBottom>
                                Job Description
                            </Typography>

                            <Typography sx={{ opacity: 0.75, lineHeight: 1.7 }}>
                                {job.description}
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card
                        sx={{
                            borderRadius: 4,
                            bgcolor: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "white",
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight={800} gutterBottom>
                                Responsibilities
                            </Typography>

                            <Typography sx={{ opacity: 0.75, lineHeight: 1.7 }}>
                                {job.responsibilities}
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card
                        sx={{
                            borderRadius: 4,
                            bgcolor: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "white",
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" fontWeight={800} gutterBottom>
                                Requirements
                            </Typography>

                            <Typography sx={{ opacity: 0.75, lineHeight: 1.7 }}>
                                {job.requirements}
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card
                        sx={{
                            borderRadius: 4,
                            bgcolor: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "white",
                        }}
                    >
                        <CardContent>

                            <Typography variant="h6" fontWeight={800} gutterBottom>
                                Salary Package
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#34d399",
                                    fontWeight: 800,
                                    fontSize: 18,
                                }}
                            >
                                {job.salary}
                            </Typography>

                            <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }} />

                            <Button
                                variant="contained"
                                size="large"
                                fullWidth
                                disabled={alreadyApplied}
                                onClick={handleApply}
                                sx={{
                                    borderRadius: 3,
                                    fontWeight: 700,
                                    py: 1.5,
                                    background:
                                        alreadyApplied
                                            ? "rgba(255,255,255,0.1)"
                                            : "linear-gradient(135deg,#6366f1,#8b5cf6)",
                                }}
                            >
                                {alreadyApplied ? "Already Applied" : "Apply Now"}
                            </Button>
                        </CardContent>
                    </Card>

                </Stack>
            </Container>
        </Box>
    );
}

export default JobsDetailsPage;