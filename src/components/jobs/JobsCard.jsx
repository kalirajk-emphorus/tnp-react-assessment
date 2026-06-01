import {
    Card,
    CardContent,
    Typography,
    Chip,
    Stack,
    Button,
    Box,
    Avatar,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Link } from "react-router-dom";

const JobCard = ({
    job,
    isAdmin,
    handleOpenEdit,
    handleDelete,
}) => {
    return (
        <Card
            sx={{
                height: "100%",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                background:
                    "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                boxShadow:
                    "0 10px 30px rgba(15,23,42,0.08)",
                transition: "all .35s ease",

                "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                        "0 20px 50px rgba(15,23,42,0.18)",
                },
            }}
        >

            <Box
                sx={{
                    height: 90,
                    background:
                        "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
                    position: "relative",
                }}
            >
                <Avatar
                    sx={{
                        width: 65,
                        height: 65,
                        position: "absolute",
                        bottom: -30,
                        left: 24,
                        bgcolor: "#fff",
                        color: "#1e3a8a",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        boxShadow:
                            "0 8px 20px rgba(0,0,0,0.15)",
                    }}
                >
                    {job.company?.charAt(0)}
                </Avatar>
            </Box>

            <CardContent
                sx={{
                    pt: 5,
                    px: 3,
                    pb: 3,
                }}
            >

                <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{
                        color: "#0f172a",
                        mb: 0.5,
                    }}
                >
                    {job.title}
                </Typography>

                <Typography
                    sx={{
                        color: "#64748b",
                        fontWeight: 500,
                        mb: 2,
                    }}
                >
                    {job.company}
                </Typography>


                <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    mb={2}
                >
                    <Chip
                        label={job.category}
                        sx={{
                            bgcolor: "#dbeafe",
                            color: "#1d4ed8",
                            fontWeight: 600,
                        }}
                    />

                    <Chip
                        label={job.experience}
                        sx={{
                            bgcolor: "#ecfeff",
                            color: "#0891b2",
                            fontWeight: 600,
                        }}
                    />
                </Stack>


                <Box mb={2}>
                    <Chip
                        label={job.employmentType}
                        sx={{
                            bgcolor: "#dcfce7",
                            color: "#15803d",
                            fontWeight: 700,
                        }}
                    />
                </Box>


                <Stack spacing={1.2} mb={3}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <LocationOnIcon
                            sx={{
                                fontSize: 18,
                                color: "#64748b",
                            }}
                        />

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {job.location}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <WorkIcon
                            sx={{
                                fontSize: 18,
                                color: "#64748b",
                            }}
                        />

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {job.experience}
                        </Typography>
                    </Box>
                </Stack>


                <Typography
                    variant="body2"
                    sx={{
                        color: "#475569",
                        mb: 3,
                        minHeight: 60,
                        lineHeight: 1.7,
                    }}
                >
                    {job.description}
                </Typography>

                {!isAdmin ? (
                    <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        component={Link}
                        to={`/jobs/${job.id}`}
                        sx={{
                            borderRadius: 3,
                            py: 1.2,
                            background:
                                "linear-gradient(135deg,#2563eb,#1d4ed8)",

                            "&:hover": {
                                background:
                                    "linear-gradient(135deg,#1d4ed8,#1e40af)",
                            },
                        }}
                    >
                        View Details
                    </Button>
                ) : (
                    <Stack
                        direction="row"
                        spacing={1.5}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<EditIcon />}
                            onClick={() =>
                                handleOpenEdit(job)
                            }
                            sx={{
                                borderRadius: 3,
                            }}
                        >
                            Edit
                        </Button>

                        <Button
                            fullWidth
                            color="error"
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            onClick={() =>
                                handleDelete(job.id)
                            }
                            sx={{
                                borderRadius: 3,
                            }}
                        >
                            Delete
                        </Button>
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
}

export default JobCard;