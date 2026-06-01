import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Stack,
    Divider,
} from "@mui/material";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const DeleteConfirmationDialog = ({
    open,
    onClose,
    onConfirm,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    background: "rgba(15, 23, 42, 0.95)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "white",
                    p: 1,
                },
            }}
        >
            <DialogTitle>
                <Stack direction="row" spacing={1.5} alignItems="center">
                    <Box
                        sx={{
                            width: 42,
                            height: 42,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "rgba(239, 68, 68, 0.15)",
                            color: "#f87171",
                        }}
                    >
                        <WarningAmberIcon />
                    </Box>

                    <Box>
                        <Typography fontWeight={800}>
                            Delete Job
                        </Typography>
                        <Typography sx={{ fontSize: 13, opacity: 0.7 }}>
                            This action is permanent
                        </Typography>
                    </Box>
                </Stack>
            </DialogTitle>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

            <DialogContent sx={{ mt: 1 }}>
                <Typography sx={{ opacity: 0.8, lineHeight: 1.6 }}>
                    Are you sure you want to delete this job posting?
                    <br />
                    <strong>This action cannot be undone.</strong>
                </Typography>

                <Box
                    sx={{
                        mt: 2,
                        p: 2,
                        borderRadius: 3,
                        bgcolor: "rgba(239, 68, 68, 0.08)",
                        border: "1px solid rgba(239, 68, 68, 0.2)",
                    }}
                >
                    <Typography sx={{ fontSize: 13, color: "#fca5a5" }}>
                        ⚠️ Deleted jobs will be permanently removed from listings and search results.
                    </Typography>
                </Box>
            </DialogContent>

            <DialogActions sx={{ px: 2, pb: 2 }}>
                <Button
                    onClick={onClose}
                    sx={{
                        color: "rgba(255,255,255,0.7)",
                        borderRadius: 3,
                        px: 2,
                    }}
                >
                    Cancel
                </Button>

                <Button
                    onClick={onConfirm}
                    variant="contained"
                    sx={{
                        borderRadius: 3,
                        px: 3,
                        fontWeight: 700,
                        background: "linear-gradient(135deg,#ef4444,#b91c1c)",
                        "&:hover": {
                            background: "linear-gradient(135deg,#dc2626,#991b1b)",
                        },
                    }}
                >
                    Delete Permanently
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteConfirmationDialog;