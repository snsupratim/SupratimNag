import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" fontWeight="bold">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {project.techStack.map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={project.github}
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
