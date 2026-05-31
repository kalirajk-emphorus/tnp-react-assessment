import { useState } from "react";
import {
    Container,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Alert,
    Box,
    Paper,
    InputAdornment,
    IconButton,
    Stack,
    Chip,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import users from "../../data/user.json";
import { login } from "../../features/auth/authSlice";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(
            (u) =>
                u.username === formData.username &&
                u.password === formData.password
        );

        if (!user) {
            setError("Invalid credentials");
            return;
        }

        dispatch(login(user));
        navigate(user.role === "admin" ? "/admin/dashboard" : "/");
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "radial-gradient(circle at top, #1e293b, #0f172a 60%, #020617)",
                p: 2,
            }}
        >
            <Card
                sx={{
                    width: 420,
                    borderRadius: 5,
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" fontWeight={800} textAlign="center">
                        Welcome Back
                    </Typography>

                    <Typography textAlign="center" sx={{ opacity: 0.7, mt: 1 }}>
                        Login to continue to JobPortal
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            onChange={handleChange}
                            margin="normal"
                            InputLabelProps={{ style: { color: "#ccc" } }}
                            InputProps={{ style: { color: "white" } }}
                        />

                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            onChange={handleChange}
                            margin="normal"
                            InputLabelProps={{ style: { color: "#ccc" } }}
                            slotProps={{
                                input: {
                                    style: { color: "white" },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(prev => !prev)}
                                                edge="end"
                                                sx={{
                                                    color: "white",
                                                    zIndex: 10,
                                                    pointerEvents: "auto",
                                                }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        {error && (
                            <Alert severity="error" sx={{ mt: 2 }}>
                                {error}
                            </Alert>
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                py: 1.5,
                                borderRadius: 3,
                                fontWeight: 700,
                                background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                            }}
                        >
                            Login
                        </Button>
                    </form>

                </CardContent>
            </Card>
        </Box>
    );
}

export default LoginPage;