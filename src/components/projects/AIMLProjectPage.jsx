import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import aimlprojects from "./aimlprojects";

const AIMLProjectsPage = () => {
  return (
    <Box sx={{ p: 10 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        sx={{
          borderBottom: "3px solid",
          display: "inline-block",
          borderColor: "primary.main",
        }}
      >
        AI / ML Projects
      </Typography>
      <Grid container spacing={4}>
        {aimlprojects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AIMLProjectsPage;
