import React from "react";
import {
  Box,
  Typography,
  Chip,
  Stack,
  Grid,
  useTheme,
  Container,
} from "@mui/material"; // Added Container
import { styled } from "@mui/system";

const techstack = {
  Languages: ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "PHP"],
  Frontend: [
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Bootstrap",
    "NextJs",
    "MaterialUI",
  ],
  Backend: ["Node.js", "Express.js", "Flask", "FastAPI", "Spring Boot"],
  Databases: ["MySQL", "MongoDB", "Firebase"],
  "DevOps & Platforms": ["Docker", "Git", "GitHub", "Vercel", "AWS", "Render"], // Added one more for example
  "AI/ML & Data": ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"], // Added a new category
};

// Styled Chip for consistent appearance
const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.7), // Slightly increased space between chips
  borderColor: theme.palette.primary.light, // Border color from theme
  color: theme.palette.text.secondary,
  fontWeight: 500,
  fontSize: "0.85rem", // Slightly larger font size for readability
  "& .MuiChip-label": {
    paddingLeft: theme.spacing(1.2), // More padding inside chip
    paddingRight: theme.spacing(1.2),
  },
  backgroundColor: theme.palette.background.default, // Chip background from default bg
  transition: "background-color 0.2s ease-in-out, transform 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.light, // Highlight on hover
    color: theme.palette.primary.contrastText, // Text color changes on hover
    transform: "scale(1.05)", // Subtle scale effect
  },
}));

// Styled Box for each tech category, resembling a sleek card
const CategoryBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper, // Card-like background
  borderRadius: theme.shape.borderRadius * 2, // Consistent rounded corners
  boxShadow: theme.shadows[5], // Subtle shadow
  p: { xs: 3, sm: 4 }, // Responsive padding inside box
  height: "100%", // Ensure all boxes in a row have equal height
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // Push chips stack to bottom if needed
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)", // Lift effect
    boxShadow: theme.shadows[10], // More prominent shadow
  },
}));

const Techstack = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 }, // Consistent responsive vertical padding
        px: { xs: 2, sm: 4, md: 8 }, // Consistent responsive horizontal padding
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center", // Center overall section elements
      }}
    >
      <Typography
        variant="h3" // Consistent heading size
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: 6, // Consistent margin below heading
          color: theme.palette.primary.main, // Primary color for "Tech" part
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
        }}
      >
        <span style={{ color: theme.palette.text.primary }}>My </span>Tech Stack
        💻
      </Typography>

      <Container maxWidth="lg">
        {" "}
        {/* Using Container for consistent max-width */}
        <Grid
          container
          spacing={{ xs: 3, md: 5 }} // Responsive spacing between category boxes
          justifyContent="center"
          alignItems="stretch" // Ensure grid items stretch to match height
        >
          {Object.entries(techstack).map(([category, items], idx) => (
            <Grid
              item
              xs={12} // Full width on extra-small screens (stacks)
              sm={6} // Two per row on small screens
              md={4} // Three per row on medium screens (12/4=3)
              key={idx}
              sx={{ display: "flex" }} // Make grid item a flex container for height stretching
            >
              <CategoryBox>
                <Typography
                  variant="h6" // Category title size
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    mb: 2, // Spacing below category title
                    color: theme.palette.primary.dark, // Darker primary for category title
                    textAlign: "center", // Center category title
                  }}
                >
                  {category}
                </Typography>
                <Stack
                  direction="row"
                  spacing={0} // No default spacing, let chip margin handle it
                  flexWrap="wrap"
                  justifyContent="center" // Center the chips within the box
                  sx={{ mt: "auto" }} // Push chips to the bottom if content above is short
                >
                  {items.map((item, index) => (
                    <StyledChip
                      key={index}
                      label={item}
                      variant="outlined"
                      size="small"
                      // color="primary" // Removed to let StyledChip handle default color
                    />
                  ))}
                </Stack>
              </CategoryBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Techstack;
