import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  useTheme,
  Container,
} from "@mui/material"; // Added Container
import { styled } from "@mui/system"; // For styled components
import Techstack from "./Techstack";
import Github from "./Github"; // Assuming you might enable this later

// Styled Avatar for consistency and better visual appeal
const StyledAboutAvatar = styled(Avatar)(({ theme }) => ({
  width: { xs: 180, sm: 220, md: 280 }, // Larger and responsive
  height: { xs: 180, sm: 220, md: 280 },
  border: `5px solid ${theme.palette.primary.main}`, // Prominent primary color border
  boxShadow: theme.shadows[10], // Stronger shadow for impact
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)", // Subtle scale on hover
  },
  mx: "auto", // Center avatar when stacked on small screens
}));

const About = () => {
  const theme = useTheme();

  return (
    <Box
      id="about" // Add an ID for navigation
      sx={{
        py: { xs: 8, md: 12 }, // Consistent responsive vertical padding
        px: { xs: 2, sm: 4, md: 8 }, // Consistent responsive horizontal padding
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center", // Center the main heading
      }}
    >
      <Typography
        variant="h3" // Consistent heading size
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: 6, // Consistent margin below heading
          color: theme.palette.primary.main, // Primary color for "About" part
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
        }}
      >
        <span style={{ color: theme.palette.text.primary }}>About </span>Me 👤
      </Typography>

      <Container maxWidth="lg">
        {" "}
        {/* Limit content width for better readability */}
        <Grid
          container
          spacing={{ xs: 6, md: 8 }} // Spacing between image and text
          alignItems="center" // Vertically align items in the grid
          justifyContent="center"
          sx={{
            textAlign: { xs: "center", md: "left" }, // Text aligns left on larger screens
          }}
        >
          {/* Right side for image (appears above text on small screens) */}
          <Grid
            item
            xs={12} // Full width on extra-small screens
            md={5} // 5/12 width on medium screens and larger
            sx={{ order: { xs: -1, md: 0 } }} // Order for responsiveness (image first on mobile)
          >
            <StyledAboutAvatar
              src="/SUPRATIMNAG_PHOTO.jpg" // Ensure this path is correct
              alt="Supratim Nag"
            />
          </Grid>

          {/* Left side for summary text */}
          <Grid
            item
            xs={12} // Full width on extra-small screens
            md={7} // 7/12 width on medium screens and larger
          >
            <Typography
              variant="h4" // Larger variant for your name
              fontWeight="bold"
              gutterBottom
              sx={{
                color: theme.palette.primary.main, // Use primary color for the name
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                mb: 1.5,
              }}
            >
              Hi! I’m{" "}
              <span style={{ color: theme.palette.text.primary }}>
                Supratim Nag
              </span>{" "}
              👋
            </Typography>
            <Typography
              variant="h6" // Subtitle for your roles
              color="text.secondary"
              gutterBottom
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                mb: 3, // More space below subtitle
              }}
            >
              An AI-ML Enthusiast | Full Stack Developer | Open Source
              Contributor
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                lineHeight: 1.7, // Improve readability
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              I am passionate about building intelligent systems, creating
              robust developer tools, and crafting helpful real-world
              applications. Currently, I'm pursuing my B.Tech in Computer
              Science & Engineering with a specialization in Artificial
              Intelligence and Machine Learning from the MCKV Institute of
              Engineering. I constantly explore new technologies and contribute
              to open-source projects.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Spacing and other components below the main About Me content */}
      <Box sx={{ mt: { xs: 8, md: 10 } }}>
        {" "}
        {/* Add spacing above Techstack */}
        <Techstack />
      </Box>

      {/* If you enable Github later, you might add similar spacing */}
      {/* <Box sx={{ mt: { xs: 8, md: 10 } }}>
        <Github />
      </Box> */}
    </Box>
  );
};

export default About;
