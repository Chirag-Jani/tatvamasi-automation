import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

import SearchField from "../components/utilities/SearchField";
import logoTextWhite from "../resources/logos/logoTextWhite.svg";
import App from "../App.module.css";
import NavbarStyle from "../styles/NavbarStyle.module.css";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about-us",
  },
  {
    label: "Events",
    path: "/events",
  },
  {
    label: "Appointment",
    path: "/appointment",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      className={NavbarStyle.drawerMainContainer}
    >
      <Link to={"/"} className={App.routerLink}>
        <Typography variant="h6" sx={{ my: 2, p: 2 }}>
          <img src={logoTextWhite} alt="" style={{ width: "170px" }} />
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item.path} className={App.routerLink}>
            <ListItem key={item.label} disablePadding>
              <ListItemButton sx={{ textAlign: "start" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="static" className={NavbarStyle.appbar}>
        <Toolbar className={NavbarStyle.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={NavbarStyle.iconbutton}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Link to={"/"} className={App.routerLink}>
              <img
                src={logoTextWhite}
                alt=""
                className={NavbarStyle.logoMain}
              />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1, // This will distribute space evenly
              display: {
                xs: "none",
                sm: "none",
                m: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            {navItems.map((item) => (
              <Link to={item.path} className={App.routerLink}>
                <Button key={item.label} className={NavbarStyle.navItemMain}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
          <Box className={NavbarStyle.searchField}>
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
