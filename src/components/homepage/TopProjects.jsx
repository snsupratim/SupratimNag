import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Grid,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "AgriVision",
    description:
      "AI-powered assistant for farmers: crop disease detection, marketplace & more.",
    image: "/images/agrivision.jpg", // Place in public/images/
    github: "https://github.com/supratim003/AgriVision",
    tech: ["React", "Flask", "ResNet50", "MongoDB"],
  },
  {
    title: "IQuest",
    description:
      "Full-stack contest platform with quiz, coding, and treasure hunt rounds.",
    image: "/images/iquest.jpg",
    github: "https://github.com/supratim003/IQuest",
    tech: ["MERN Stack", "Firebase", "Node.js"],
  },
  {
    title: "JobMate AI",
    description:
      "AI-based job application builder using LangChain and LLaMA on Groq API.",
    image: "/images/jobmate.jpg",
    github: "https://github.com/supratim003/JobMate-AI",
    tech: ["LangChain", "Groq", "Streamlit", "LLaMA"],
  },
];

const TopProjects = () => {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        px: 2,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        🚀 Top Projects
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={`${project.title} preview`}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {project.tech.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopProjects;
