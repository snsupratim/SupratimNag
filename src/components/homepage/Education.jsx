import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  useTheme,
  Stack,
} from "@mui/material";

const educationData = [
  {
    degree: "B.Tech in CSE-AIML",
    institution: "MCKV Institute of Engineering",
    duration: "2021 – 2025",
    details:
      "Currently in 3rd year, focusing on AI, Machine Learning, and Full Stack Development.",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Your School Name",
    duration: "2019 – 2021",
    details:
      "Completed with core subjects in Physics, Chemistry, Math, and Computer Science.",
  },
];

const Education = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        🎓 Education
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ maxWidth: "1000px", mx: "auto", mt: 4, flexWrap: "wrap" }}
      >
        {educationData.map((edu, index) => (
          <Card
            key={index}
            sx={{
              flex: "1 1 45%",
              backgroundColor: theme.palette.background.paper,
              boxShadow: 3,
              minWidth: 300,
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {edu.degree}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {edu.institution}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {edu.duration}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
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
