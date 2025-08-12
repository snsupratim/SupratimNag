import React, { useContext } from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Fab,
  Zoom,
  useScrollTrigger,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../navbar/ThemeContext";

function ScrollTop() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        onClick={handleClick}
        sx={{ position: "fixed", bottom: 32, right: 32 }}
      >
        <Fab size="small" color="primary" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}

const Footer = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: isDark ? "#121212" : "#f5f5f5",
        color: isDark ? "#ffffff" : "#333333",
        py: 4,
        px: 2,
        mt: 8,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Let’s Connect
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
        <IconButton
          href="https://github.com/snsupratim"
          target="_blank"
          sx={{ color: "inherit" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/snsupratim"
          target="_blank"
          sx={{ color: "inherit" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="mailto:supratim@example.com"
          sx={{ color: "inherit" }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton href="/SupratimNag.pdf" download sx={{ color: "inherit" }}>
          <FileDownloadIcon />
        </IconButton>
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{ color: "inherit" }}
        >
          {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Stack>

      <Divider sx={{ bgcolor: isDark ? "#333" : "#ccc", my: 2 }} />

      <Typography variant="body2">
        © {new Date().getFullYear()} Supratim Nag — All Rights Reserved
      </Typography>

      <ScrollTop />
    </Box>
  );
};

export default Footer;
