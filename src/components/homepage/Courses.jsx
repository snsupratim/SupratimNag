import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  Button, // Import Button for certificate view
  Dialog, // Import Dialog for modal view of certificate
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip, // For tooltips on icons/buttons
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School"; // Reusing SchoolIcon for courses
import LinkIcon from "@mui/icons-material/Link"; // For linking to certificates
import CloseIcon from "@mui/icons-material/Close"; // For closing the dialog
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"; // A more specific icon for certificates
import { styled } from "@mui/system"; // For styled components

// Define your courses data with a certificate property (optional)
const courses = [
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    platform: "Udemy (Jose Portilla)",
    year: "2023",
    certificate: "/certificates/python_data_science_certificate.pdf", // Path to your certificate PDF/image
    platformLink:
      "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/", // Optional: link to the course on the platform
  },
  {
    title: "Data Analytics Masterclass",
    platform: "LearnTube",
    year: "2023",
    certificate: "/certificates/data_analytics_certificate.png", // Path to your certificate
    // platformLink: "https://www.learntube.com/data-analytics",
  },
  {
    title: "Internet of Things (IoT) Workshop Certificate",
    platform: "MCKV Institute of Engineering", // More specific institution name
    year: "2022",
    certificate: "/certificates/iot_workshop_certificate.pdf", // Path to your certificate
    // platformLink: null, // No external link for workshop
  },
  {
    title: "Advanced React & Redux",
    platform: "Pluralsight",
    year: "2024",
    certificate: "/certificates/react_redux_certificate.pdf",
    // platformLink: "https://www.pluralsight.com/courses/react-redux-advanced",
  },
];

// Styled Card component for hover effects
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[6], // Consistent shadow with education cards
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)", // Lift effect on hover
    boxShadow: theme.shadows[10], // More prominent shadow on hover
  },
}));

const Courses = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentCertificate, setCurrentCertificate] = React.useState("");

  const handleClickOpen = (certificatePath) => {
    setCurrentCertificate(certificatePath);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentCertificate("");
  };

  return (
    <Box
      id="courses" // Add an ID for potential navigation
      sx={{
        py: { xs: 8, md: 12 }, // Responsive vertical padding
        px: { xs: 2, sm: 4, md: 8 }, // Responsive horizontal padding
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
      }}
    >
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
        <span style={{ color: theme.palette.text.primary }}>Courses & </span>
        Certifications 📚
      </Typography>

      <Grid
        container
        spacing={{ xs: 3, md: 5 }} // Responsive spacing between cards
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                {" "}
                {/* Responsive padding */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <SchoolIcon
                    color="primary"
                    sx={{ mr: 1, fontSize: "1.5rem" }}
                  />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      color: theme.palette.primary.dark,
                      fontSize: { xs: "1rem", sm: "1.15rem" },
                    }}
                  >
                    {course.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {course.platform}
                </Typography>
                <Typography variant="caption" color="text.disabled">
                  {" "}
                  {/* Smaller, subtle year */}
                  {course.year}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {course.certificate && (
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<WorkspacePremiumIcon />}
                      onClick={() => handleClickOpen(course.certificate)}
                      sx={{ mr: 1 }}
                    >
                      View Certificate
                    </Button>
                  )}
                  {course.platformLink && (
                    <Button
                      variant="text" // Text button for less emphasis
                      color="inherit" // Inherit text color
                      size="small"
                      startIcon={<LinkIcon />}
                      href={course.platformLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        "&:hover": {
                          color: theme.palette.primary.main, // Primary color on hover
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      Course Link
                    </Button>
                  )}
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* Certificate Viewer Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          "& .MuiDialog-paper": { borderRadius: theme.shape.borderRadius * 2 },
        }}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Certificate
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ color: theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 0 }}>
          {/* Using an iframe to embed PDF/image. Adjust width/height as needed */}
          {currentCertificate && (
            <Box
              component="iframe"
              src={currentCertificate}
              title="Certificate Viewer"
              sx={{
                width: "100%",
                height: { xs: "calc(100vh - 120px)", sm: "600px" }, // Responsive height
                border: "none",
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Courses;
