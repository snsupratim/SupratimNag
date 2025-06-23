import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
} from "@mui/material";

const courses = [
  {
    title: "Python for Data Science",
    platform: "Udemy",
    year: "2023",
  },
  {
    title: "Data Analytics",
    platform: "LearnTube",
    year: "2023",
  },
  {
    title: "IoT Workshop Certificate",
    platform: "College Workshop",
    year: "2022",
  },
];

const Courses = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ py: 8, px: 2, backgroundColor: theme.palette.background.default }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        📚 Courses Completed
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: "1000px", mx: "auto" }}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {course.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {course.platform}
                </Typography>
                <Typography variant="body2">{course.year}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
