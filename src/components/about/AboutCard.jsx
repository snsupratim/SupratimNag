import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  useTheme,
} from "@mui/material";

const AboutCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        maxWidth: 800,
        mx: "auto",
        my: 8,
        p: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: 3,
      }}
    >
      <Avatar
        src="/SUPRATIMNAG_PHOTO.jpg"
        alt="Supratim Nag"
        sx={{ width: 120, height: 120 }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Hi! I’m Supratim Nag 👋
        </Typography>
        <Typography variant="body1">
          A passionate AI-ML enthusiast, full stack developer, and open source
          contributor. I love building intelligent systems, developer tools, and
          helpful real-world applications. Currently pursuing B.Tech in CSE-AIML
          from MCKV Institute of Engineering.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
