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

function HomePage() {
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


          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Button component={Link} to="/jobs" variant="contained">
              Browse Jobs
            </Button>
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
          }}
        >
          <Grid container spacing={3} textAlign="center">
            <Grid item xs={12} md={4}>
              <TrendingUpIcon color="primary" />
              <Typography fontWeight={700}>Fast Growing Roles</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <BusinessCenterIcon color="primary" />
              <Typography fontWeight={700}>Top Companies</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <WorkIcon color="primary" />
              <Typography fontWeight={700}>Remote Friendly</Typography>
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