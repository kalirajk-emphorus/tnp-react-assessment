import {
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

import JobsCard from "./JobsCard";

function JobsGrid({
  jobs,
  isAdmin,
  handleOpenEdit,
  handleDelete,
}) {

  if (jobs.length === 0) {
    return (
      <Paper
        elevation={0}
        sx={{
          mt: 3,
          p: 6,
          textAlign: "center",
          borderRadius: 3,
          border: "1px dashed #d1d5db",
          bgcolor: "#fafafa",
        }}
      >
        <Box>
          <SearchOffIcon
            sx={{
              fontSize: 70,
              color: "text.secondary",
              mb: 2,
            }}
          />

          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
          >
            No Jobs Found
          </Typography>

          <Typography
            color="text.secondary"
          >
            Try changing your search criteria
            or filters.
          </Typography>
        </Box>
      </Paper>
    );
  }

  return (
    <Grid container spacing={3}>
      {jobs.map((job) => (
        <Grid
          size={{
            xs: 12,
            md: 6,
            lg: 4,
          }}
          key={job.id}
        >
          <JobsCard
            job={job}
            isAdmin={isAdmin}
            handleOpenEdit={
              handleOpenEdit
            }
            handleDelete={
              handleDelete
            }
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default JobsGrid;