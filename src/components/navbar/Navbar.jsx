import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import { ColorModeContext } from "./ThemeContext";

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleDropdownOpen = (event) => {
    setDropdownAnchor(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setDropdownAnchor(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const isMobile = Boolean(mobileMenuAnchor);

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ borderBottom: "1px solid #ccc" }}
    >
      <Toolbar>
        {/* Mobile Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Brand */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
        >
          Supratim.dev
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
          <Button component={Link} to="/sndev" color="inherit">
            Sn Dev
          </Button>
          <Button
            color="inherit"
            onClick={handleDropdownOpen}
            endIcon={<ArrowDropDownIcon />}
          >
            Projects
          </Button>
          <Menu
            anchorEl={dropdownAnchor}
            open={Boolean(dropdownAnchor)}
            onClose={handleDropdownClose}
          >
            <MenuItem
              component={Link}
              to="/Web-Development"
              onClick={handleDropdownClose}
            >
              Web Development
            </MenuItem>
            <MenuItem
              component={Link}
              to="/AIML-Development"
              onClick={handleDropdownClose}
            >
              AI/ML Development
            </MenuItem>
          </Menu>
        </Box>

        {/* Theme Toggle */}
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>

      {/* Mobile Menu Drawer */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={isMobile}
        onClose={handleMobileMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem component={Link} to="/" onClick={handleMobileMenuClose}>
          Home
        </MenuItem>
        <MenuItem
          component={Link}
          to="/projects"
          onClick={handleMobileMenuClose}
        >
          Projects
        </MenuItem>
        <MenuItem
          component={Link}
          to="/education"
          onClick={handleMobileMenuClose}
        >
          Education
        </MenuItem>
        <MenuItem component={Link} to="/skills" onClick={handleMobileMenuClose}>
          Skills
        </MenuItem>
        <MenuItem
          component={Link}
          to="/courses"
          onClick={handleMobileMenuClose}
        >
          Courses
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
