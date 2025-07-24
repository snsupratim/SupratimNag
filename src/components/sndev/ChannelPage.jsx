import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Card,
  CardContent,
  Button,
  Container,
  // Hidden, // Removed Hidden import
  Drawer,
  IconButton,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import InfoIcon from "@mui/icons-material/Info";
import PeopleIcon from "@mui/icons-material/People";

const navItems = [
  {
    name: "Dashboard",
    icon: <PlayCircleOutlineIcon />,
    sectionId: "dashboard-content",
  },
  { name: "Tutorials", icon: <CodeIcon />, sectionId: "tutorials-section" },
  {
    name: "Projects",
    icon: <DescriptionIcon />,
    sectionId: "projects-section",
  },
  {
    name: "Livestreams",
    icon: <LiveTvIcon />,
    sectionId: "livestreams-section",
  },
  {
    name: "About Channel",
    icon: <InfoIcon />,
    sectionId: "about-channel-section",
  },
  { name: "Community", icon: <PeopleIcon />, sectionId: "community-section" },
];

const ChannelPage = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState("dashboard-content");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileOpen(false); // Close drawer on item click
    // Optional: Smooth scroll to the section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const drawer = (
    <Box
      sx={{
        width: 240, // Fixed width for sidebar
        flexShrink: 0,
        backgroundColor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.divider}`,
        height: "100%",
        overflowY: "auto",
        pt: 2, // Padding top
      }}
    >
      <Box sx={{ p: 2, pb: 1 }}>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
        >
          Channel Content
        </Typography>
      </Box>
      <List disablePadding>
        {navItems.slice(0, 4).map(
          (
            item // Example: first few items under "Content"
          ) => (
            <ListItemButton
              key={item.name}
              selected={activeSection === item.sectionId}
              onClick={() => handleListItemClick(item.sectionId)}
              sx={{
                py: 1,
                px: 3,
                "&.Mui-selected": {
                  backgroundColor: theme.palette.action.selected,
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  borderLeft: `3px solid ${theme.palette.primary.main}`,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                },
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <Box
                sx={{
                  mr: 1,
                  color:
                    activeSection === item.sectionId
                      ? theme.palette.primary.main
                      : theme.palette.text.secondary,
                }}
              >
                {item.icon}
              </Box>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  variant: "body2",
                  fontWeight:
                    activeSection === item.sectionId ? "bold" : "normal",
                }}
              />
            </ListItemButton>
          )
        )}
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ p: 2, pb: 1 }}>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
        >
          Channel Info
        </Typography>
      </Box>
      <List disablePadding>
        {navItems.slice(4).map(
          (
            item // Example: rest of items under "Info"
          ) => (
            <ListItemButton
              key={item.name}
              selected={activeSection === item.sectionId}
              onClick={() => handleListItemClick(item.sectionId)}
              sx={{
                py: 1,
                px: 3,
                "&.Mui-selected": {
                  backgroundColor: theme.palette.action.selected,
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  borderLeft: `3px solid ${theme.palette.primary.main}`,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                },
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <Box
                sx={{
                  mr: 1,
                  color:
                    activeSection === item.sectionId
                      ? theme.palette.primary.main
                      : theme.palette.text.secondary,
                }}
              >
                {item.icon}
              </Box>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  variant: "body2",
                  fontWeight:
                    activeSection === item.sectionId ? "bold" : "normal",
                }}
              />
            </ListItemButton>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Mobile Menu Button - Show only on screens smaller than md */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          ml: 2,
          mt: 2,
          position: "fixed",
          zIndex: theme.zIndex.drawer + 1,
          display: { md: "none" }, // Hidden on md and up
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Permanent Sidebar for Desktop - Show only on md and up */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>{drawer}</Box>

      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" }, // Only show drawer on xs and sm
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 3, md: 4 },
          width: { xs: "100%", md: "calc(100% - 240px)" }, // Adjust width for sidebar
          ml: { xs: 0, md: "240px" }, // Margin for sidebar on desktop
          mt: { xs: 6, md: 0 }, // Adjust margin top for mobile menu button to prevent overlap
          position: "relative", // For background patterns
          overflowY: "auto",
          minHeight: "100vh",
        }}
      >
        {/* Subtle Background Pattern (like Cohere dashboard) */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `
              radial-gradient(${theme.palette.action.hover} 1px, transparent 1px),
              radial-gradient(${theme.palette.action.hover} 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
            opacity: 0.1, // Very subtle
            zIndex: -1,
          }}
        />

        {/* Top Header/Branding Area */}
        <Box
          sx={{
            py: { xs: 2, md: 3 },
            px: { xs: 0, md: 2 },
            mb: { xs: 4, md: 6 },
            backgroundColor: theme.palette.background.default, // Match page background
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: theme.palette.primary.main,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            SNDev Channel Dashboard
          </Typography>
        </Box>

        {/* Welcome Section */}
        <Card
          id="dashboard-content" // Link to sidebar nav
          sx={{
            p: { xs: 3, md: 5 },
            mb: { xs: 4, md: 6 },
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius * 2,
            boxShadow: theme.shadows[8],
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Welcome, Supratim!
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                What is SNDev?
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                SNDev is your go-to channel for cutting-edge tutorials, in-depth
                project breakdowns, and live coding sessions on AI/ML, Full
                Stack Development, and Open Source contributions. Get started by
                exploring our latest content or dive into our comprehensive
                playlists!
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  mt: 3,
                  borderRadius: theme.shape.borderRadius * 2,
                  boxShadow: theme.shadows[6],
                }}
                onClick={() => handleListItemClick("tutorials-section")}
              >
                Explore Tutorials
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {/* Placeholder for a cool abstract image or video thumbnail */}
              <Box
                component="img"
                src="https://placehold.co/250x250/E0E0E0/333333?text=SNDev+Logo" // Replace with your SNDev logo/image
                alt="SNDev Logo Placeholder"
                sx={{
                  borderRadius: theme.shape.borderRadius * 3, // More rounded for abstract look
                  boxShadow: theme.shadows[6],
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Grid>
          </Grid>
        </Card>

        {/* Section: Latest Tutorials (Example similar to "Try Command A") */}
        <Card
          id="tutorials-section" // Link to sidebar nav
          sx={{
            p: { xs: 3, md: 4 },
            mb: { xs: 4, md: 6 },
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius * 2,
            boxShadow: theme.shadows[4], // Slightly less prominent shadow than welcome card
            position: "relative", // For "NEW" chip positioning
            overflow: "hidden", // Hide overflow for subtle effects
          }}
        >
          {/* "NEW" Chip */}
          <Chip
            label="NEW"
            color="primary"
            size="small"
            sx={{
              position: "absolute",
              top: theme.spacing(2),
              left: theme.spacing(2),
              borderRadius: theme.shape.borderRadius,
              fontWeight: "bold",
              zIndex: 1,
            }}
          />
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ mt: 2 }}
              >
                Latest Tutorial: Advanced React Hooks
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 2, lineHeight: 1.6 }}
              >
                Dive deep into custom React Hooks, useContext, useReducer, and
                performance optimizations. This tutorial provides practical
                examples and best practices for building robust and scalable
                React applications.
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                sx={{ mr: 2 }}
              >
                Watch Now
              </Button>
              <Button variant="text" color="inherit" size="small">
                View Playlist
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Placeholder for a code snippet or diagram image */}
              <Box
                component="img"
                src="https://placehold.co/200x120/E0E0E0/333333?text=Code+Snippet" // Placeholder for code image
                alt="Code Snippet"
                sx={{
                  borderRadius: theme.shape.borderRadius,
                  boxShadow: theme.shadows[2],
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Grid>
          </Grid>
        </Card>

        {/* Other Sections (Placeholders) */}
        <Box
          id="projects-section"
          sx={{
            minHeight: "300px",
            p: 3,
            mb: 4,
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius * 2,
            boxShadow: theme.shadows[2],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" color="text.secondary">
            Projects Section Content Coming Soon...
          </Typography>
        </Box>
        <Box
          id="livestreams-section"
          sx={{
            minHeight: "300px",
            p: 3,
            mb: 4,
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius * 2,
            boxShadow: theme.shadows[2],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" color="text.secondary">
            Livestreams Section Content Coming Soon...
          </Typography>
        </Box>
        <Box
          id="about-channel-section"
          sx={{
            minHeight: "300px",
            p: 3,
            mb: 4,
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius * 2,
            boxShadow: theme.shadows[2],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" color="text.secondary">
            About Channel Section Content Coming Soon...
          </Typography>
        </Box>
        <Box
          id="community-section"
          sx={{
            minHeight: "300px",
            p: 3,
            mb: 4,
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius * 2,
            boxShadow: theme.shadows[2],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" color="text.secondary">
            Community Section Content Coming Soon...
          </Typography>
        </Box>

        {/* You can add your existing Techstack and Github components here if they are relevant to the channel page */}
        {/* <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <Techstack />
        </Box>
        <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <Github />
        </Box> */}
      </Box>
    </Box>
  );
};

export default ChannelPage;
