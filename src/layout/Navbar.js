import * as React from "react";
import logoTextWhite from "../resources/logos/logoTextWhite.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import SearchField from "../components/utilities/SearchField";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const navItems = ["Home", "About Us", "Events", "Appointment"];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "rgba(22, 41, 102, 1)",
        color: "white",
        minHeight: "100vh",
        minWidth: {
          xs: "180px",
          sm: "220px",
          m: "220px",
          lg: "250px",
          xl: "250px",
        },
      }}
    >
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
        }}
      >
        <Typography variant="h6" sx={{ my: 2, p: 2 }}>
          <img src={logoTextWhite} alt="" style={{ width: "170px" }} />
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "start" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        position="static"
        sx={{
          backgroundColor: "rgba(22, 41, 102, 1)",
          height: "100px",
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            justifyContent: "space-evenly",
            display: "flex", // Make sure it's a flex container
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "block",
                m: "block",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
              }}
            >
              <img
                src={logoTextWhite}
                alt=""
                style={{
                  width: "200px",
                  height: "auto",
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1, // This will distribute space evenly
              display: { xs: "none", sm: "none", m: "block", lg: "block" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: "700",
                  margin: "2r0px",
                  fontSize: {
                    xl: "22px",
                    m: "22px",
                    sm: "20px",
                    xs: "20px",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block", m: "block", lg: "block" },
            }}
          >
            <SearchField />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
export default Navbar;
