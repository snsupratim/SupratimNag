import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const PlaylistCard = ({ playlist }) => {
  return (
    <Card sx={{ maxWidth: 350, borderRadius: 3, boxShadow: 2 }}>
      {/* <CardMedia component="img" height="180" alt={playlist.title} /> */}
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {playlist.title}
        </Typography>
        <Button
          href={playlist.url}
          target="_blank"
          size="small"
          variant="outlined"
        >
          View Playlist
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
