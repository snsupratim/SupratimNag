import React from "react";
import { Box, Typography, Chip, Stack, Grid, useTheme } from "@mui/material";

const techstack = {
  Languages: ["C/C++", "Python", "Java", "JavaScript", "Go", "PHP"],
  Frontend: ["React.js", "HTML5", "CSS3", "Tailwind", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "Flask", "Django", "Spring Boot"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis"],
  "DevOps & Platforms": ["Docker", "Git", "GitHub", "Vercel", "AWS", "Render"],
};

const Techstack = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 6,
        px: 2,
        py: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
        💻 Tech Stack I Work With
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{ maxWidth: "1000px", mx: "auto", mt: 3 }}
      >
        {Object.entries(techstack).map(([category, items], idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {category}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {items.map((item, index) => (
                <Chip
                  key={index}
                  label={item}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Techstack;
