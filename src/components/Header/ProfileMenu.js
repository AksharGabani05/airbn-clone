import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [formType, setFormType] = useState(""); // "login" or "signup"

  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFormOpen = (type) => {
    setFormType(type);
    setOpenModal(true);
    handleMenuClose();
  };

  const handleFormClose = () => {
    setOpenModal(false);
    setFormType("");
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleMenuClick}
        className="profile-menu-flex"
      >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            minWidth: "200px",
            borderRadius: "1rem",
            boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
          },
        }}
      >
        <MenuItem
          className="menu-items"
          onClick={() => handleFormOpen("signup")}
        >
          Signup
        </MenuItem>
        <MenuItem
          className="menu-items"
          onClick={() => handleFormOpen("login")}
        >
          Login
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose} className="menu-items">
          Airbnb Your Home
        </MenuItem>
        <MenuItem onClick={handleMenuClose} className="menu-items">
          Host an experience
        </MenuItem>
        <MenuItem onClick={handleMenuClose} className="menu-items">
          Help
        </MenuItem>
      </Menu>

      {/* Modal for Login/Signup Form */}
      <Modal open={openModal} onClose={handleFormClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "1rem",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleFormClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "grey.500",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" gutterBottom align="center">
            {formType === "signup" ? "Create an Account" : "Welcome Back"}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            {formType === "signup" && (
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  placeholder="Enter your username"
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                placeholder="Enter your email"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                placeholder="Enter your password"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleFormClose}
                sx={{
                  backgroundColor: "var(--primary-color)",
                  "&:hover": { backgroundColor: "var(--primary-hover-color)" },
                }}
              >
                {formType === "signup" ? "Sign Up" : "Log In"}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body2"
                align="center"
                sx={{ cursor: "pointer", color: "var(--link-color)" }}
                onClick={() =>
                  setFormType(formType === "signup" ? "login" : "signup")
                }
              >
                {formType === "signup"
                  ? "Already have an account? Log in"
                  : "Don't have an account? Sign up"}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
