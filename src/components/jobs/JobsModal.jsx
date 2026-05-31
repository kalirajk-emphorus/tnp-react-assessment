import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Box,
  Typography,
  Stack,
  Divider,
  Chip,
} from "@mui/material";

function JobFormModal({
  open,
  onClose,
  isEditMode,
  jobForm,
  errors,
  handleChange,
  handleSave,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 5,
          background: "rgba(15, 23, 42, 0.9)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "white",
        },
      }}
    >
      <DialogTitle sx={{ p: 0 }}>
        <Box
          sx={{
            p: 3,
            background:
              "linear-gradient(135deg,#6366f1,#8b5cf6)",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Typography variant="h5" fontWeight={800}>
            {isEditMode ? "Edit Job" : "Create New Job"}
          </Typography>

          <Typography sx={{ opacity: 0.85, mt: 0.5 }}>
            Fill in the details to publish a job listing
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <Chip label="Job Details" sx={{ color: "white" }} />
            <Chip label="Company Info" sx={{ color: "white" }} />
            <Chip label="Role Setup" sx={{ color: "white" }} />
          </Stack>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        <Stack spacing={2.5} sx={{ mt: 1 }}>

          <TextField
            fullWidth
            label="Job Title"
            name="title"
            value={jobForm.title}
            onChange={handleChange}
            error={!!errors.title}
            helperText={errors.title}
            InputProps={{ sx: inputStyle }}
            InputLabelProps={{ sx: labelStyle }}
          />

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="Company"
              name="company"
              value={jobForm.company}
              onChange={handleChange}
              error={!!errors.company}
              helperText={errors.company}
              InputProps={{ sx: inputStyle }}
              InputLabelProps={{ sx: labelStyle }}
            />

            <TextField
              fullWidth
              label="Location"
              name="location"
              value={jobForm.location}
              onChange={handleChange}
              error={!!errors.location}
              helperText={errors.location}
              InputProps={{ sx: inputStyle }}
              InputLabelProps={{ sx: labelStyle }}
            />
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField
              select
              fullWidth
              label="Category"
              name="category"
              value={jobForm.category}
              onChange={handleChange}
              error={!!errors.category}
              helperText={errors.category}
              InputProps={{ sx: inputStyle }}
              InputLabelProps={{ sx: labelStyle }}
            >
              <MenuItem value="Development">Development</MenuItem>
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="Testing">Testing</MenuItem>
              <MenuItem value="DevOps">DevOps</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Experience"
              name="experience"
              value={jobForm.experience}
              onChange={handleChange}
              error={!!errors.experience}
              helperText={errors.experience}
              InputProps={{ sx: inputStyle }}
              InputLabelProps={{ sx: labelStyle }}
            />
          </Stack>

          <TextField
            select
            fullWidth
            label="Employment Type"
            name="employmentType"
            value={jobForm.employmentType}
            onChange={handleChange}
            error={!!errors.employmentType}
            helperText={errors.employmentType}
            InputProps={{ sx: inputStyle }}
            InputLabelProps={{ sx: labelStyle }}
          >
            <MenuItem value="Full Time">Full Time</MenuItem>
            <MenuItem value="Hybrid">Hybrid</MenuItem>
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
          </TextField>

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            name="description"
            value={jobForm.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            InputProps={{ sx: inputStyle }}
            InputLabelProps={{ sx: labelStyle }}
          />
        </Stack>
      </DialogContent>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

      <DialogActions sx={{ p: 3 }}>
        <Button
          onClick={onClose}
          sx={{
            color: "rgba(255,255,255,0.7)",
            borderRadius: 3,
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            borderRadius: 3,
            px: 3,
            fontWeight: 700,
            background:
              "linear-gradient(135deg,#6366f1,#8b5cf6)",
          }}
        >
          {isEditMode ? "Update Job" : "Create Job"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const inputStyle = {
  color: "white",
  borderRadius: 2,
  background: "rgba(255,255,255,0.05)",
  "& fieldset": {
    borderColor: "rgba(255,255,255,0.1)",
  },
  "&:hover fieldset": {
    borderColor: "rgba(255,255,255,0.2)",
  },
  "&.Mui-focused fieldset": {
    borderColor: "#6366f1",
  },
};

const labelStyle = {
  color: "rgba(255,255,255,0.7)",
};

export default JobFormModal;