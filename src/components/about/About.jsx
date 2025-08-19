import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  useTheme,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import Techstack from "./Techstack";

const StyledAboutAvatar = styled(Avatar)(({ theme }) => ({
  width: { xs: 180, sm: 220, md: 280 },
  height: { xs: 180, sm: 220, md: 280 },
  border: `5px solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[10],
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
  },
  mx: "auto",
}));

const About = () => {
  const theme = useTheme();

  // Academic data
  const academicResults = [
    { sno: 1, exam: "Class 10 (WBBSE)", year: "2020", score: "90.86%" },
    { sno: 2, exam: "Class 12 (WBCHSE)", year: "2022", score: "86.6%" },
    { sno: 3, exam: "B.Tech (1st Semester)", year: "2023", score: "9.15 CGPA" },
    { sno: 4, exam: "B.Tech (2nd Semester)", year: "2023", score: "9.78 CGPA" },
    { sno: 5, exam: "B.Tech (3rd Semester)", year: "2024", score: "8.39 CGPA" },
    { sno: 6, exam: "B.Tech (4th Semester)", year: "2024", score: "9.36 CGPA" },
    { sno: 7, exam: "B.Tech (5th Semester)", year: "2025", score: "9.56 CGPA" },
    { sno: 8, exam: "B.Tech (6th Semester)", year: "2025", score: "9.56 CGPA" },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: 6,
          color: theme.palette.primary.main,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        <span style={{ color: theme.palette.text.primary }}>About </span>Me 👤
      </Typography>

      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
          justifyContent="center"
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Avatar */}
          <Grid item xs={12} md={5} sx={{ order: { xs: -1, md: 0 } }}>
            <StyledAboutAvatar
              src="/SUPRATIMNAG_PHOTO.jpg"
              alt="Supratim Nag"
            />
          </Grid>

          {/* Summary */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{
                color: theme.palette.primary.main,
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                mb: 1.5,
              }}
            >
              Hi! I’m{" "}
              <span style={{ color: theme.palette.text.primary }}>
                Supratim Nag
              </span>{" "}
              👋
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              gutterBottom
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                mb: 3,
              }}
            >
              An AI-ML Enthusiast | Full Stack Developer | Open Source
              Contributor
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                lineHeight: 1.7,
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              I am passionate about building intelligent systems, creating
              robust developer tools, and crafting helpful real-world
              applications. Currently, I'm pursuing my B.Tech in Computer
              Science & Engineering with a specialization in Artificial
              Intelligence and Machine Learning from the MCKV Institute of
              Engineering. I constantly explore new technologies and create
              content for fellow developers.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Techstack */}
      <Box sx={{ mt: { xs: 8, md: 10 } }}>
        <Techstack />
      </Box>

      {/* Academic Results Section */}
      <Box sx={{ mt: { xs: 10, md: 12 } }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{
            mb: 4,
            color: theme.palette.primary.main,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Academic Performance 🎓
        </Typography>

        <Container maxWidth="md">
          <TableContainer
            component={Paper}
            elevation={3}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    S. No.
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Examination
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Year
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Result
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {academicResults.map((row) => (
                  <TableRow
                    key={row.sno}
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "grey.100" },
                      "&:hover": { backgroundColor: "grey.200" },
                    }}
                  >
                    <TableCell>{row.sno}</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {row.exam}
                    </TableCell>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
