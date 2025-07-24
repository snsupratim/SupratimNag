import React from "react";
import { Box, Typography, Grid, Divider, Stack, Avatar } from "@mui/material";
import YouTubeVideoCard from "./YouTubeVideoCard";
import PlaylistCard from "./PlaylistCard";
import topVideos from "./topVideos";
import playlists from "./playlists";

const YouTubePage = () => {
  return (
    <Box sx={{ p: 10 }}>
      {/* Main Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        My YouTube Channel
      </Typography>
      {/* <Box
        component="img"
        src="/images/yt-banner.png" // 🛑 Replace with your actual image path
        alt="YouTube Banner"
        sx={{
          width: "100%",
          height: { xs: "180px", md: "300px" },
          objectFit: "cover",
          borderRadius: 2,
          mb: 4,
        }}
      /> */}

      {/* 🔥 Header Section: Bio + Logo */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
        <Grid item xs={12} md={7}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Hey! I'm Supratim, creator of{" "}
            <span style={{ color: "#FF0000" }}>SN Dev</span> 📺
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A final-year B.Tech student passionate about AI/ML development
            mainly with Generative AI ,<br></br> Agentic AI & offcourse Full
            Stack Web Development and various things tech.
          </Typography>
          💡 <span style={{ color: "#FF0000" }}>What to expect:</span> 💡
          <ul>
            <li>AI/ML Project tutorials and demos 🤖</li>
            <li>DSA series for competitive coding 💡</li>
            <li>Fullstack & freelance projects .💻</li>
            <li>RAG Chatbots, LangChain, FastAPI apps, and more 🧠</li>
          </ul>
          <Typography variant="body2" color="text.secondary">
            If you're passionate about building real-world AI projects and
            growing as a developer — you're in the right place.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} textAlign="center">
          <Avatar
            src="/images/ytlogo.jpg"
            alt="YouTube Logo"
            sx={{ width: 220, height: 220, borderRadius: 3 }}
            variant="square"
          />
        </Grid>
      </Grid>

      {/* 🔥 Best Content */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        🔥 Best Content
      </Typography>
      <Grid container spacing={5} mb={4}>
        {topVideos.map((video, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <YouTubeVideoCard video={video} />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* 📚 Playlists */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        📚 Playlists
      </Typography>
      <Grid container spacing={3}>
        {playlists.map((playlist, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <PlaylistCard playlist={playlist} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default YouTubePage;
