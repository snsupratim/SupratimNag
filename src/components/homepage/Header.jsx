import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
  useTheme,
  IconButton,
  Container,
} from "@mui/material"; // Added Container for better max-width control
import { styled } from "@mui/system"; // Import styled for custom components
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

// Styled components for enhanced visuals, consistent with other sections
const AnimatedBox = styled(Box)(({ theme }) => ({
  animation: "fadeInUp 1s ease-out",
  "@keyframes fadeInUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: { xs: 200, md: 280 },
  height: { xs: 200, md: 280 },
  boxShadow: theme.shadows[8], // Prominent shadow for the avatar
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)", // Slight scale on hover
  },
  border: `4px solid ${theme.palette.primary.main}`,
}));

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 18 }, // Increased vertical padding for a grander feel
        px: { xs: 2, sm: 4, md: 8 }, // Responsive horizontal padding
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        overflow: "hidden", // Hide overflow for animations
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {" "}
        {/* Using Container for consistent max-width */}
        <Grid
          container
          spacing={{ xs: 6, md: 8 }} // Increased spacing between grid items
          alignItems="center"
          justifyContent="center"
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Left Side: Text and Socials */}
          <Grid item xs={12} md={7}>
            <AnimatedBox>
              <Typography
                variant="h2"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Hi, I'm{" "}
                <span style={{ color: theme.palette.primary.main }}>
                  Supratim Nag
                </span>{" "}
                👋
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.6rem" },
                  mb: 3,
                }}
              >
                AI-ML Developer | Full Stack Developer | Content Creator
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="#projects" // Ensure this links to your projects section ID
                  endIcon={<ArrowDownwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    borderRadius: theme.shape.borderRadius * 2, // More rounded buttons, consistent with cards
                    boxShadow: theme.shadows[6], // Consistent shadow level with other cards/boxes
                    "&:hover": {
                      boxShadow: theme.shadows[10], // More prominent shadow on hover
                      transform: "translateY(-2px)", // Subtle hover effect
                      backgroundColor: theme.palette.primary.dark, // Slightly darker on hover
                    },
                  }}
                >
                  View My Work
                </Button>
              </Box>

              {/* Social Media Icons - Consistent with recent button styles */}
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 1.5,
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/snsupratim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    "&:hover": {
                      color: theme.palette.primary.main, // Primary color on hover
                      transform: "scale(1.1)", // Slight scale on hover
                      transition: "transform 0.2s ease-in-out",
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: { xs: 30, md: 35 } }} />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="GitHub"
                  href="https://github.com/snsupratim"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    "&:hover": {
                      color: theme.palette.primary.main,
                      transform: "scale(1.1)",
                      transition: "transform 0.2s ease-in-out",
                    },
                  }}
                >
                  <GitHubIcon sx={{ fontSize: { xs: 30, md: 35 } }} />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="Email"
                  href="mailto:snsupratim@gmail.com"
                  sx={{
                    "&:hover": {
                      color: theme.palette.primary.main,
                      transform: "scale(1.1)",
                      transition: "transform 0.2s ease-in-out",
                    },
                  }}
                >
                  <EmailIcon sx={{ fontSize: { xs: 30, md: 35 } }} />
                </IconButton>
                <IconButton
                  href="/SupratimNag.pdf"
                  download
                  sx={{ color: "inherit" }}
                >
                  <FileDownloadIcon />
                </IconButton>
              </Box>
            </AnimatedBox>
          </Grid>

          {/* Right Side: Profile Image */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              order: { xs: -1, md: 0 },
            }}
          >
            <AnimatedBox sx={{ animationDelay: "0.3s" }}>
              <StyledAvatar alt="Supratim Nag" src="/SUPRATIMNAG_PHOTO.jpg" />
            </AnimatedBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
