import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system"; // Import styled for custom components

// Create a styled Card for consistent styling and hover effects
const StyledAboutCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  maxWidth: 900, // Slightly increased max width for more content space
  mx: "auto",
  my: { xs: 6, md: 10 }, // Responsive vertical margin
  p: { xs: 2, sm: 4, md: 5 }, // More responsive padding inside the card
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "center",
  gap: { xs: 3, sm: 5 }, // Responsive gap between avatar and text
  borderRadius: theme.shape.borderRadius * 2, // Consistent rounded corners
  boxShadow: theme.shadows[8], // A prominent shadow, similar to header avatar
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Subtle animation
  "&:hover": {
    transform: "translateY(-5px)", // Lift effect on hover
    boxShadow: theme.shadows[12], // More prominent shadow on hover
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: { xs: 140, md: 180 }, // Larger, responsive avatar
  height: { xs: 140, md: 180 },
  border: `4px solid ${theme.palette.primary.main}`, // Primary color border
  boxShadow: theme.shadows[6], // Subtle shadow for the avatar itself
  flexShrink: 0, // Prevent avatar from shrinking
}));

const AboutCard = () => {
  const theme = useTheme();

  return (
    <StyledAboutCard>
      <StyledAvatar
        src="/SUPRATIMNAG_PHOTO.jpg" // Ensure this path is correct
        alt="Supratim Nag"
      />
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        {" "}
        {/* Remove default CardContent padding */}
        <Typography
          variant="h4" // Larger variant for your name
          fontWeight="bold"
          gutterBottom
          sx={{
            color: theme.palette.primary.main, // Use primary color for the name
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
            textAlign: { xs: "center", sm: "left" }, // Center on small, left on larger
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
            textAlign: { xs: "center", sm: "left" },
            mb: 2, // More space below subtitle
          }}
        >
          An AI-ML Enthusiast | Full Stack Developer | Open Source Contributor
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
            lineHeight: 1.7, // Improve readability
            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" }, // Responsive body text size
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          I am passionate about building intelligent systems, creating robust
          developer tools, and crafting helpful real-world applications.
          Currently, I'm pursuing my B.Tech in Computer Science & Engineering
          with a specialization in Artificial Intelligence and Machine Learning
          from the MCKV Institute of Engineering. I constantly explore new
          technologies and contribute to open-source projects.
        </Typography>
      </CardContent>
    </StyledAboutCard>
  );
};

export default AboutCard;
