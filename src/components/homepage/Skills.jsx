import React from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  useTheme,
  Stack, // Import Stack for consistent spacing
} from "@mui/material";
import { styled } from "@mui/system"; // For styled components
import CodeIcon from "@mui/icons-material/Code"; // For Languages
import LayersIcon from "@mui/icons-material/Layers"; // For Frameworks
import StorageIcon from "@mui/icons-material/Storage"; // For Databases
import BuildIcon from "@mui/icons-material/Build"; // For Tools/DevOps
import DevicesOtherIcon from "@mui/icons-material/DevicesOther"; // For Other/Concepts if you add them

const skillSet = {
  Languages: ["C/C++", "Python", "Java", "JavaScript", "Go", "PHP"],
  Frameworks: [
    "React.js",
    "Node.js",
    "Express.js",
    "Flask",
    "Django",
    "Next.js",
  ], // Added Next.js
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis"],
  Tools: [
    "Docker",
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
    "AWS (EC2, S3)",
    "HuggingFace",
  ], // Added Netlify, specific AWS
  "AI/ML Libraries": [
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
  ], // Added a new category
  "Concepts & Methodologies": [
    "RESTful APIs",
    "Microservices",
    "CI/CD",
    "Agile/Scrum",
    "Object-Oriented Programming (OOP)",
  ], // Another new category
};

// Styled Chip for a more attractive appearance
const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.75), // Slightly more margin
  padding: theme.spacing(0.5, 1), // More internal padding
  borderColor:
    theme.palette.mode === "dark"
      ? theme.palette.primary.dark
      : theme.palette.primary.light, // Border color based on theme mode
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(25, 118, 210, 0.1)"
      : "rgba(25, 118, 210, 0.05)", // Subtle background
  color: theme.palette.text.primary,
  fontWeight: 600, // Make text a bit bolder
  fontSize: "0.9rem", // Slightly larger font size for readability
  transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)", // Slight scale on hover
    backgroundColor: theme.palette.primary.main, // Solid background on hover
    color: theme.palette.primary.contrastText, // White text on hover
    borderColor: theme.palette.primary.main,
  },
}));

// Map categories to their respective icons
const categoryIcons = {
  Languages: <CodeIcon />,
  Frameworks: <LayersIcon />,
  Databases: <StorageIcon />,
  Tools: <BuildIcon />,
  "AI/ML Libraries": <DevicesOtherIcon />, // Using a generic icon for now
  "Concepts & Methodologies": <DevicesOtherIcon />, // Using a generic icon for now
};

const Skills = () => {
  const theme = useTheme();

  return (
    <Box
      id="skills" // Add ID for navigation
      sx={{
        py: { xs: 8, md: 12 }, // Responsive vertical padding
        px: { xs: 2, sm: 4, md: 8 }, // Responsive horizontal padding
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
        My <span style={{ color: theme.palette.text.primary }}>Skills</span> 🧠
      </Typography>

      <Grid
        container
        spacing={{ xs: 3, md: 6 }} // Increased spacing between categories
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto" }} // Increased max width
      >
        {Object.entries(skillSet).map(([category, skills], index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            {" "}
            {/* Adjusted grid for more columns on larger screens */}
            <Box
              sx={{
                p: { xs: 2, sm: 3 }, // Responsive padding inside category box
                backgroundColor: theme.palette.background.paper,
                borderRadius: theme.shape.borderRadius * 2,
                boxShadow: theme.shadows[4], // A softer shadow for category boxes
                height: "100%", // Ensures all category boxes are same height
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center content within box
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 2 }}
              >
                {categoryIcons[category] && (
                  <Box
                    sx={{ color: theme.palette.primary.main, fontSize: "2rem" }}
                  >
                    {categoryIcons[category]}
                  </Box>
                )}
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: theme.palette.primary.main }}
                >
                  {category}
                </Typography>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                {" "}
                {/* Centered chips */}
                {skills.map((skill, idx) => (
                  <StyledChip
                    key={idx}
                    label={skill}
                    variant="outlined" // Using outlined variant as a base
                    color="primary" // Apply primary color to chips
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
