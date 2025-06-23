import React from "react";
import { Box, Typography, Grid, Chip, useTheme } from "@mui/material";

const skillSet = {
  Languages: ["C/C++", "Python", "Java", "JavaScript", "Go", "PHP"],
  Frameworks: ["React.js", "Node.js", "Express", "Flask", "Django"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Redis"],
  Tools: ["Docker", "Git", "GitHub", "Vercel", "AWS", "HuggingFace"],
};

const Skills = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ py: 8, px: 2, backgroundColor: theme.palette.background.default }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        🧠 Skills
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: "1000px", mx: "auto" }}>
        {Object.entries(skillSet).map(([category, skills], index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Typography variant="h6" gutterBottom>
              {category}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {skills.map((skill, idx) => (
                <Chip key={idx} label={skill} variant="outlined" />
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
