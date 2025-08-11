import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  useTheme,
  Stack,
  Divider, // Import Divider for subtle separation
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School"; // Icon for education
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Icon for duration

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI/ML Specialization)",
    institution: "MCKV Institute of Engineering, Liluah, Howrah.",
    duration: "October 2022  – June 2026 (Expected)",
    details:
      "Currently pursuing my 4th year of Bachelor's degree with a strong focus on Artificial Intelligence, Machine Learning, and advanced Full Stack Development. Maintaining a consistent academic record.",
  },
  {
    degree: "Secondary Education (Class 11th-12th)",
    institution: "Howrah Vivekanda Institution",
    duration: "April 2020 – March 2022",
    details:
      "Completed my higher secondary education with a science stream, specializing in Physics, Chemistry, Mathematics, and Computer Science. Achieved excellent results.",
  },
];

const Education = () => {
  const theme = useTheme();

  return (
    <Box
      id="education" // Add an ID for potential navigation
      sx={{
        py: { xs: 8, md: 12 }, // Responsive vertical padding
        px: { xs: 2, sm: 4, md: 8 }, // Responsive horizontal padding
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center", // Center the heading
      }}
    >
      <Typography
        variant="h3" // Larger, more prominent heading
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: 6, // More margin below heading
          color: theme.palette.primary.main, // Use primary color for heading
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
        }}
      >
        My <span style={{ color: theme.palette.text.primary }}>Education</span>{" "}
        🎓
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }} // Stacks vertically on small, horizontally on medium+
        spacing={4} // Increased spacing between cards
        justifyContent="center"
        alignItems="stretch" // Ensures cards stretch to same height
        sx={{
          maxWidth: "1200px", // Increased max width
          mx: "auto",
          mt: 4,
          flexWrap: "wrap", // Allow wrapping on smaller screens if too many cards
        }}
      >
        {educationData.map((edu, index) => (
          <Card
            key={index}
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 48%" }, // Occupy full width on xs, ~half on md
              backgroundColor: theme.palette.background.paper,
              borderRadius: theme.shape.borderRadius * 2, // More rounded corners
              boxShadow: theme.shadows[6], // Slightly more pronounced shadow than default Card
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition for hover
              "&:hover": {
                transform: "translateY(-5px)", // Lift effect on hover
                boxShadow: theme.shadows[10], // More prominent shadow on hover
              },
              display: "flex", // Use flexbox for internal content alignment
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: { xs: 3, sm: 4 } }}>
              {" "}
              {/* Responsive padding */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <SchoolIcon
                  color="primary"
                  sx={{ mr: 1, fontSize: "1.8rem" }}
                />
                <Typography
                  variant="h5" // Prominent degree title
                  fontWeight="bold"
                  sx={{ color: theme.palette.primary.main }} // Use primary color for degree
                >
                  {edu.degree}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                {edu.institution}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <CalendarTodayIcon
                  sx={{
                    mr: 1,
                    fontSize: "1.1rem",
                    color: theme.palette.text.secondary,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  {edu.duration}
                </Typography>
              </Box>
              <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />{" "}
              {/* Subtle divider */}
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.primary, lineHeight: 1.6 }}
              >
                {edu.details}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Education;
