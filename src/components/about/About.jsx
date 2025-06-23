import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import AboutCard from "./AboutCard";
import Github from "./Github";
import Techstack from "./Techstack";

const About = () => {
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
      <Typography
        my={4}
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
      >
        👤 About Me
      </Typography>

      <AboutCard />
      <Techstack />
      {/* <Github /> */}
    </Box>
  );
};

export default About;
