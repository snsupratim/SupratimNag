import React from "react";
import { Box, Typography, Button, Grid, Avatar, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          textAlign: { xs: "center", md: "left" },
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Left Side: Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Hi, I'm Supratim Nag 👋
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            AI-ML Enthusiast | Full Stack Developer | Open Source Contributor
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#projects"
            sx={{ mt: 2 }}
          >
            View My Work
          </Button>
        </Grid>

        {/* Right Side: Profile Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar
            alt="Supratim Nag"
            src="/SUPRATIMNAG_PHOTO.jpg" // <-- Replace with your image path
            sx={{
              width: { xs: 200, md: 280 },
              height: { xs: 200, md: 280 },
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
