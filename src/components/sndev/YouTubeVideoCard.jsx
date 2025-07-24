import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const YouTubeVideoCard = ({ video }) => {
  const { title, videoId, description } = video;
  return (
    <Card sx={{ maxWidth: 380, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="iframe"
        height="200"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default YouTubeVideoCard;
