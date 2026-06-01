import {
    Box,
    Grid,
    TextField,
    MenuItem,
    Button,
    Typography,
    InputAdornment,
    Chip,
    Stack,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const JobFilters = ({
    search,
    setSearch,
    category,
    setCategory,
    experience,
    setExperience,
    employmentType,
    setEmploymentType,
    onClear,
}) => {
    const activeFilters =
        (search ? 1 : 0) +
        (category !== "All" ? 1 : 0) +
        (experience !== "All" ? 1 : 0) +
        (employmentType !== "All" ? 1 : 0);

    return (
        <Box
            sx={{
                mb: 5,
                p: 4,
                borderRadius: 4,
                background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                border: "1px solid #e2e8f0",
                boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)",
            }}
        >

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >
                <Box>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                    >
                        <FilterListIcon
                            sx={{
                                verticalAlign: "middle",
                                mr: 1,
                            }}
                        />
                        Filter Jobs
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        Find the perfect opportunity
                        faster.
                    </Typography>
                </Box>

                {activeFilters > 0 && (
                    <Chip
                        color="primary"
                        label={`${activeFilters} Active Filters`}
                    />
                )}
            </Stack>

            <Grid container spacing={2.5}>

                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                        fullWidth
                        label="Search Jobs"
                        placeholder="Job title or company"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="action" />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 3,
                            },
                        }}
                    />
                </Grid>


                <Grid size={{ xs: 12, md: 3 }}>
                    <TextField
                        select
                        fullWidth
                        label="Category"
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 3,
                            },
                        }}
                    >
                        <MenuItem value="All">
                            All Categories
                        </MenuItem>

                        <MenuItem value="Development">
                            Development
                        </MenuItem>

                        <MenuItem value="Design">
                            Design
                        </MenuItem>

                        <MenuItem value="Testing">
                            Testing
                        </MenuItem>

                        <MenuItem value="DevOps">
                            DevOps
                        </MenuItem>

                        <MenuItem value="Analytics">
                            Analytics
                        </MenuItem>
                    </TextField>
                </Grid>


                <Grid size={{ xs: 12, md: 2 }}>
                    <TextField
                        select
                        fullWidth
                        label="Experience"
                        value={experience}
                        onChange={(e) =>
                            setExperience(e.target.value)
                        }
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 3,
                            },
                        }}
                    >
                        <MenuItem value="All">
                            All
                        </MenuItem>

                        <MenuItem value="1 Year">
                            1 Year
                        </MenuItem>

                        <MenuItem value="2 Years">
                            2 Years
                        </MenuItem>

                        <MenuItem value="3 Years">
                            3 Years
                        </MenuItem>

                        <MenuItem value="4 Years">
                            4 Years
                        </MenuItem>
                    </TextField>
                </Grid>


                <Grid size={{ xs: 12, md: 2 }}>
                    <TextField
                        select
                        fullWidth
                        label="Job Type"
                        value={employmentType}
                        onChange={(e) =>
                            setEmploymentType(
                                e.target.value
                            )
                        }
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 3,
                            },
                        }}
                    >
                        <MenuItem value="All">
                            All
                        </MenuItem>

                        <MenuItem value="Full Time">
                            Full Time
                        </MenuItem>

                        <MenuItem value="Contract">
                            Contract
                        </MenuItem>

                        <MenuItem value="Hybrid">
                            Hybrid
                        </MenuItem>

                        <MenuItem value="Remote">
                            Remote
                        </MenuItem>
                    </TextField>
                </Grid>


                <Grid size={{ xs: 12, md: 1 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={onClear}
                        sx={{
                            height: "56px",
                            borderRadius: 3,
                            minWidth: "56px",
                            boxShadow: 3,
                        }}
                    >
                        <RestartAltIcon />
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default JobFilters;