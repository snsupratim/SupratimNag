import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const Resume = () => {
  const theme = useTheme();

  return (
    <Box
      id="resume"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: 6,
          mt: 4,
          color: theme.palette.primary.main,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        My <span style={{ color: theme.palette.text.primary }}>Resume</span> 📄
      </Typography>

      {/* Resume PDF viewer */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "500px", md: "800px" },
          mb: 4,
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: theme.shadows[5],
        }}
      >
        {/* Replace resume.pdf with your actual resume file in public folder */}
        <iframe
          src="/SupratimNag.pdf"
          title="Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </Box>

      {/* Download button */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="/SupratimNag.pdf"
        download
        startIcon={<DownloadIcon />}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Resume;
