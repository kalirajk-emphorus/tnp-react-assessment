import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Stack,
  Chip,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === "admin";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const navLinks = isAdmin
    ? [
        { label: "Dashboard", path: "/admin/dashboard" },
        { label: "Jobs", path: "/jobs" },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "Jobs", path: "/jobs" },
        ...(isAuthenticated
          ? [{ label: "Applied", path: "/applied-jobs" }]
          : []),
      ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(16px)",
          background: "rgba(15, 23, 42, 0.75)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          color: "white",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1300,
            width: "100%",
            mx: "auto",
            minHeight: 72,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            component={Link}
            to={isAdmin ? "/admin/dashboard" : "/"}
            sx={{
              textDecoration: "none",
              fontSize: "1.4rem",
              fontWeight: 900,
              background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            JobPortal
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {navLinks.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 600,
                  borderRadius: 3,
                  px: 2,
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.08)",
                    color: "white",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {isAuthenticated && (
              <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 2 }}>
                <Avatar
                  sx={{
                    width: 34,
                    height: 34,
                    background: "linear-gradient(135deg,#60a5fa,#a78bfa)",
                  }}
                >
                  {user?.username?.charAt(0).toUpperCase()}
                </Avatar>

                <Chip
                  label={user?.username}
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.08)",
                  }}
                />
              </Stack>
            )}

            {!isAuthenticated ? (
              <Button
                component={Link}
                to="/login"
                sx={{
                  ml: 2,
                  borderRadius: 3,
                  px: 3,
                  fontWeight: 600,
                  color: "white",
                  bgcolor: "rgba(99,102,241,0.8)",
                  "&:hover": { bgcolor: "#6366f1" },
                }}
              >
                Login
              </Button>
            ) : (
              <Button
                onClick={handleLogout}
                sx={{
                  ml: 2,
                  borderRadius: 3,
                  px: 3,
                  fontWeight: 600,
                  color: "#f87171",
                  border: "1px solid rgba(248,113,113,0.4)",
                }}
              >
                Logout
              </Button>
            )}
          </Box>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, p: 2, bgcolor: "#0f172a", height: "100%", color: "white" }}>
          {isAuthenticated && (
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Avatar>{user?.username?.charAt(0).toUpperCase()}</Avatar>
              <Typography fontWeight={700}>{user?.username}</Typography>
            </Stack>
          )}

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

          <List>
            {navLinks.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.1)" }} />

            {!isAuthenticated ? (
              <ListItemButton component={Link} to="/login" onClick={() => setMobileOpen(false)}>
                Login
              </ListItemButton>
            ) : (
              <ListItemButton
                onClick={() => {
                  handleLogout();
                  setMobileOpen(false);
                }}
              >
                Logout
              </ListItemButton>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;