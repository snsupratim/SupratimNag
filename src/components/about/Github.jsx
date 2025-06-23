import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Typography, useTheme } from "@mui/material";

const Github = () => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "center", mt: 6 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        🗓️ My GitHub Activity
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          filter: theme.palette.mode === "dark" ? "invert(100%)" : "none",
        }}
      >
        <GitHubCalendar
          username="snsupratim"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
        />
      </Box>
    </Box>
  );
};

export default Github;
