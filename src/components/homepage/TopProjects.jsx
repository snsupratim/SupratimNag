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
      "AI-powered full-stack web application crop disease detection, marketplace .",
    image: "/images/a.png", // Place in public/images/
    github: "https://github.com/snsupratim/AgriVision",
    tech: [
      "ReactJs",
      "Flask",
      "ResNet50",
      "MongoDB",
      "PyTorch",
      "NodeJs",
      "ExpressJs",
    ],
  },
  {
    title: "WeBy",
    description: "Full-stack Social Media Networking Platform. ",

    image: "/images/weby.png",
    github: "https://github.com/snsupratim/WeBy",
    tech: ["ReactJs", "MongoDB", "NodeJs", "ExpressJs", "Socket.io"],
    livedemo: "https://weby-5341.onrender.com/auth",
  },
  {
    title: "OnlyDev",
    description: "Full-stack Freelance service provider application . ",

    image: "/images/o.png",
    github: "https://github.com/snsupratim/OnlyDev",
    tech: ["ReactJs", "MySQL", "SpringBoot"],
  },
  {
    title: "Relet",
    description: "Full-stack Messaging Platform. ",

    image: "/images/relet.png",
    github: "https://github.com/snsupratim/Relet",
    tech: ["ReactJs", "MongoDB", "NodeJs", "ExpressJs", "Socket.io"],
    livedemo: "https://relet.onrender.com/login",
  },
  {
    title: "FastCom",
    description: "Full-stack Ecommerce Platform with admin configuration.",
    image: "/images/f.png",
    github: "https://github.com/snsupratim/FastCom",
    tech: ["ReactJs", "MySQL", "SpringBoot", "Postman"],
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
