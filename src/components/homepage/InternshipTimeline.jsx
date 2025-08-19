import React from "react";
import { Box, Typography, useTheme, Paper, Slide, Fade } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Uptricks Services Pvt. Ltd.",
    duration: "Jul 2025 – Present · 2 mos",
    location: "Pune, Maharashtra, India · Remote",
    description:
      "Working on machine learning projects with focus on model development and deployment. Contributing to applied ML solutions in production environments.",
  },
  {
    role: "AI Intern",
    company: "Vaidsys Technologies",
    duration: "May 2025 – Jun 2025 · 2 mos",
    location: "Remote",
    description: `• Designed and implemented an end-to-end Customer Feedback Sentiment Analysis System leveraging Python and Machine Learning. 
• Integrated a Random Forest classifier trained with TF-IDF features for multi-class sentiment prediction (Positive, Negative, Neutral, Irrelevant). 
• Built a Flask REST API for real-time feedback ingestion and MongoDB Atlas storage, with a Streamlit dashboard for visualizing sentiment trends.`,
  },
  {
    role: "Data Science Intern",
    company: "Exposys Data Labs",
    duration: "Apr 2025 – May 2025 · 2 mos",
    location: "Bengaluru, Karnataka, India · Remote",
    description:
      "Worked with Python and data science techniques to analyze datasets and build predictive models.",
  },
  {
    role: "Software Developer Intern",
    company: "Bluestock™🔺",
    duration: "Mar 2025 – May 2025 · 3 mos",
    location: "Remote",
    description: `• Co-led a team of 8 interns in building a full-stack IPO Management system. 
• Designed and developed RESTful APIs using the MERN Stack. 
• Built a responsive frontend in React.js with IPO listing, bidding, and admin features. 
• Implemented authentication and role-based access control for client, admin, and investor workflows.`,
  },
  {
    role: "Industrial Exposure Trainee",
    company: "Hyland",
    duration: "May 2024 – May 2024 · 1 mo",
    location: "Kolkata, West Bengal, India · On-site",
    description:
      "Participated in an in-depth industrial exposure program at Hyland, gaining insights into the workings of the software industry.",
  },
];

const InternshipTimeline = () => {
  const theme = useTheme();

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{
          mb: 6,
          color: theme.palette.primary.main,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        My <span style={{ color: theme.palette.text.primary }}>Experience</span>{" "}
        💼
      </Typography>

      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            {/* Left side (Duration) */}
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                fontWeight: "600",
                color: theme.palette.text.secondary,
              }}
              align="right"
              variant="body2"
            >
              {exp.duration}
              <br />
              <span style={{ fontSize: "0.85rem" }}>{exp.location}</span>
            </TimelineOppositeContent>

            {/* Middle Separator */}
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              {index !== experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            {/* Right side (Details with animation) */}
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Slide
                direction={index % 2 === 0 ? "left" : "right"}
                in={true}
                timeout={800}
              >
                <Fade in={true} timeout={1200}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: theme.palette.background.paper,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="span"
                      fontWeight="bold"
                      color="primary"
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontWeight="600"
                      sx={{ mt: 0.5 }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, whiteSpace: "pre-line" }}
                    >
                      {exp.description}
                    </Typography>
                  </Paper>
                </Fade>
              </Slide>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default InternshipTimeline;
