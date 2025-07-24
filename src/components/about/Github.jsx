import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Typography, useTheme, Container } from "@mui/material";

const Github = () => {
  const theme = useTheme();

  // Define color levels for the GitHub Calendar to match your theme
  // We need 5 levels (0-4) for the default maxLevel of 4
  const lightThemeColors = {
    level0: theme.palette.grey[200], // For no contributions (very light grey)
    level1: theme.palette.primary.light, // Lightest shade of your primary
    level2: theme.palette.primary.main, // Main primary color
    level3: theme.palette.primary.dark, // Darker shade of your primary
    // Assuming you have a 'darker' or a custom 'extra dark' primary in your theme for the highest level
    // If not, you might reuse primary.dark or define a specific strong color for this.
    level4: theme.palette.primary.darker || theme.palette.primary.dark, // Deepest shade for highest contribution
  };

  const darkThemeColors = {
    level0: theme.palette.grey[900], // Darkest grey for no contributions in dark mode
    level1: theme.palette.primary.dark, // Darker primary for low contributions
    level2: theme.palette.primary.main, // Main primary color
    level3: theme.palette.primary.light, // Lighter primary
    // Using secondary for the highest level in dark mode can provide good contrast
    level4: theme.palette.secondary.main || theme.palette.primary.light, // A bright contrast color for highest contributions
  };

  return (
    <Box
      id="github"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: 6,
          color: theme.palette.primary.main,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        <span style={{ color: theme.palette.text.primary }}>My </span>GitHub
        Activity 🗓️
      </Typography>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            p: { xs: 2, sm: 3, md: 4 },
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius * 2,
            boxShadow: theme.shadows[8],
            overflowX: "auto",
            maxWidth: "100%",
          }}
        >
          <GitHubCalendar
            username="snsupratim"
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            // Corrected theme prop structure
            theme={{
              light: lightThemeColors,
              dark: darkThemeColors,
            }}
            showWeekdayLabels
            showMonthLabels
            responsive
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Github;
