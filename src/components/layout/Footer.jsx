import { Box, Container, Grid, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                background:
                    "radial-gradient(circle at top, #0b1220, #020617)",
                color: "#fff",
                mt: 10,
                py: 8,
                borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <Container maxWidth="lg">

                <Grid container spacing={6}>

                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h5"
                            fontWeight={900}
                            sx={{
                                background:
                                    "linear-gradient(135deg,#60a5fa,#a78bfa)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                mb: 1,
                            }}
                        >
                            JobPortal
                        </Typography>

                        <Typography sx={{ opacity: 0.7, lineHeight: 1.7 }}>
                            Connecting talented professionals with top companies worldwide.
                            Build your career faster with modern opportunities.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography fontWeight={700} sx={{ mb: 2 }}>
                            Quick Links
                        </Typography>

                        <Stack spacing={1}>
                            {["Home", "Jobs", "Applied Jobs"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: "rgba(255,255,255,0.7)",
                                        transition: "0.2s",
                                        "&:hover": {
                                            color: "#a78bfa",
                                            transform: "translateX(4px)",
                                        },
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography fontWeight={700} sx={{ mb: 2 }}>
                            Contact
                        </Typography>

                        <Stack spacing={1}>
                            <Typography sx={{ opacity: 0.7 }}>
                                support@jobportal.com
                            </Typography>

                            <Typography sx={{ opacity: 0.7 }}>
                                +91 98765 43210
                            </Typography>

                            <Typography sx={{ opacity: 0.7 }}>
                                India • Remote Friendly Platform
                            </Typography>
                        </Stack>
                    </Grid>

                </Grid>

                <Box
                    sx={{
                        mt: 6,
                        pt: 3,
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 2,
                        alignItems: "center",
                    }}
                >

                    <Stack direction="row" spacing={2}>
                        <Typography sx={{ opacity: 0.6, fontSize: 13, cursor: "pointer", "&:hover": { color: "#a78bfa" } }}>
                            Privacy
                        </Typography>
                        <Typography sx={{ opacity: 0.6, fontSize: 13, cursor: "pointer", "&:hover": { color: "#a78bfa" } }}>
                            Terms
                        </Typography>
                        <Typography sx={{ opacity: 0.6, fontSize: 13, cursor: "pointer", "&:hover": { color: "#a78bfa" } }}>
                            Support
                        </Typography>
                    </Stack>
                </Box>

            </Container>
        </Box>
    );
}

export default Footer;