import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
    Chip,
    Stack,
    TextField,
    InputAdornment,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
    const jobs = useSelector((state) => state.jobs.jobs || []);
    const featuredJobs = jobs.slice(0, 3);
    const categories = [...new Set(jobs.map((job) => job.category))];

    return (
        <Box sx={{ bgcolor: "#0b1220" }}>

            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    color: "white",
                    py: 14,
                    background:
                        "radial-gradient(circle at top left, #4f8cff 0%, #1e40af 40%, #0b1220 100%)",
                }}
            >
                <Box sx={{
                    position: "absolute",
                    width: 300,
                    height: 300,
                    background: "rgba(255,255,255,0.08)",
                    filter: "blur(80px)",
                    borderRadius: "50%",
                    top: -50,
                    left: -80,
                }} />
                <Box sx={{
                    position: "absolute",
                    width: 250,
                    height: 250,
                    background: "rgba(59,130,246,0.3)",
                    filter: "blur(90px)",
                    borderRadius: "50%",
                    bottom: -60,
                    right: -40,
                }} />

                <Container maxWidth="md" sx={{ textAlign: "center" }}>
                    <Typography variant="h2" fontWeight="800" sx={{ letterSpacing: "-2px" }}>
                        Find Your Dream Job
                    </Typography>

                    <Typography sx={{ mt: 2, opacity: 0.8 }}>
                        Discover high-paying roles, remote opportunities, and top companies — all in one place.
                    </Typography>


                    <Stack direction="row" spacing={2} justifyContent="center" textAlign="center" sx={{ mt: 4, alignItems: "center", justifyContent: "center" }}>

                        <Button component={Link} to="/jobs" variant="outlined" sx={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
                            Explore
                        </Button>
                    </Stack>
                </Container>
            </Box>

            <Container sx={{ mt: -6 }}>
                <Card
                    sx={{
                        borderRadius: 5,
                        p: 3,
                        background: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Grid container spacing={3} textAlign="center" sx={{ width: "100%", justifyContent: "space-around" }}>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    textAlign: "center",
                                    background:
                                        "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.08))",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(10px)",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        background:
                                            "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(99,102,241,0.15))",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                    },
                                }}
                            >
                                <TrendingUpIcon sx={{ fontSize: 40, color: "#60a5fa", mb: 1 }} />
                                <Typography fontWeight={700}>Fast Growing Roles</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    textAlign: "center",
                                    background:
                                        "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.08))",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(10px)",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        background:
                                            "linear-gradient(135deg, rgba(34,197,94,0.25), rgba(16,185,129,0.15))",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                    },
                                }}
                            >
                                <BusinessCenterIcon sx={{ fontSize: 40, color: "#34d399", mb: 1 }} />
                                <Typography fontWeight={700}>Top Companies</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    textAlign: "center",
                                    background:
                                        "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(99,102,241,0.08))",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(10px)",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        background:
                                            "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(99,102,241,0.15))",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                    },
                                }}
                            >
                                <WorkIcon sx={{ fontSize: 40, color: "#a78bfa", mb: 1 }} />
                                <Typography fontWeight={700}>Remote Friendly</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Container>

            <Container sx={{ py: 10 }}>
                <Typography variant="h4" fontWeight="800" sx={{ mb: 4, color: "white" }}>
                    Featured Jobs
                </Typography>

                <Grid container spacing={3}>
                    {featuredJobs.map((job) => (
                        <Grid item xs={12} md={4} key={job.id}>
                            <Card
                                sx={{
                                    borderRadius: 4,
                                    p: 2,
                                    background: "rgba(255,255,255,0.06)",
                                    color: "white",
                                    backdropFilter: "blur(10px)",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        background: "rgba(255,255,255,0.1)",
                                    },
                                }}
                            >
                                <CardContent>
                                    <WorkIcon sx={{ mb: 2 }} />

                                    <Typography variant="h6" fontWeight={700}>
                                        {job.title}
                                    </Typography>

                                    <Typography sx={{ opacity: 0.7, mb: 1 }}>
                                        {job.company} • {job.location}
                                    </Typography>

                                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
                                        {job.description}
                                    </Typography>

                                    <Button
                                        component={Link}
                                        to={`/jobs/${job.id}`}
                                        variant="contained"
                                        fullWidth
                                        sx={{ borderRadius: 3 }}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ py: 8, bgcolor: "#0f172a" }}>
                <Container>
                    <Typography variant="h4" fontWeight="800" sx={{ color: "white" }}>
                        Explore Categories
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 3 }}>
                        {categories.map((c) => (
                            <Chip
                                key={c}
                                label={c}
                                sx={{
                                    color: "white",
                                    bgcolor: "rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(10px)",
                                    px: 1.5,
                                    py: 2,
                                    borderRadius: 3,
                                    "&:hover": {
                                        bgcolor: "#3b82f6",
                                    },
                                }}
                            />
                        ))}
                    </Stack>
                </Container>
            </Box>

            <Box sx={{ py: 12, textAlign: "center", color: "white" }}>
                <Container>
                    <Typography variant="h4" fontWeight="800">
                        Start Your Career Journey
                    </Typography>

                    <Typography sx={{ mt: 2, opacity: 0.7 }}>
                        Thousands of opportunities are waiting for you.
                    </Typography>

                    <Button
                        component={Link}
                        to="/jobs"
                        variant="contained"
                        size="large"
                        sx={{ mt: 4, px: 5, borderRadius: 3 }}
                    >
                        Explore Jobs
                    </Button>
                </Container>
            </Box>
        </Box>
    );
}

export default HomePage;