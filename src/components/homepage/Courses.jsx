import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LinkIcon from "@mui/icons-material/Link";

const courses = [
  {
    title: "Python for Data Science",
    platform: "Udemy (Sara Academy)",
    year: "2023",
    certificate: "/certificates/python_data_science_certificate.pdf",
  },
  {
    title: "RAG with Embeddings & VectorDB",
    platform: "Coursera",
    year: "2025",
    certificate: "/certificates/Coursera_RAG.pdf",
  },
  {
    title: "Programming using Java",
    platform: "Infosys Springboard",
    year: "2025",
    certificate: "/certificates/java.pdf",
  },
  {
    title: "Database Management Systems",
    platform: "Infosys Springboard",
    year: "2025",
    certificate: "/certificates/dbms.pdf",
  },
];

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
      id="courses"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
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
        <span style={{ color: theme.palette.text.primary }}>
          Courses & Certifications
        </span>{" "}
        📚
      </Typography>

      {/* Table Structure */}
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.primary.light }}>
              <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                Course Title
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                Platform
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                Year
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "white" }}
                align="center"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:hover": { backgroundColor: theme.palette.action.hover },
                }}
              >
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.platform}</TableCell>
                <TableCell>{course.year}</TableCell>
                <TableCell align="center">
                  {course.certificate && (
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<WorkspacePremiumIcon />}
                      onClick={() => handleClickOpen(course.certificate)}
                      sx={{ mr: 1 }}
                    >
                      View
                    </Button>
                  )}
                  {course.platformLink && (
                    <Button
                      variant="text"
                      size="small"
                      startIcon={<LinkIcon />}
                      href={course.platformLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
          {currentCertificate && (
            <Box
              component="iframe"
              src={currentCertificate}
              title="Certificate Viewer"
              sx={{
                width: "100%",
                height: { xs: "calc(100vh - 120px)", sm: "600px" },
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
