import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Button from "@mui/material/Button";
import { navigate } from "gatsby";
import { useNavigation } from "../contexts/navigation";

const Navbar = ({ pageName, dontGoBack }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { goBack } = useNavigation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (route) => {
    setAnchorElNav(null);
    if (typeof route === "string") {
      navigate(route);
    }
  };
  const pages = [
    {
      name: "Logowanie",
      route: "/login",
    },
    {
      name: "Ustawienia konta",
      route: "/setaccount",
    },
  ];

  const buttonProps = {};

  if (!dontGoBack) {
    buttonProps.startIcon = <NavigateBeforeIcon />;
    buttonProps.onClick = goBack;
  }

  return (
    <AppBar position="sticky" justify-content="flex-end">
      <Toolbar>
        <Grid
          container
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button color="inherit" variant="text" {...buttonProps}>
            {pageName}
          </Button>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Menu
          justify-content={"flex-end"}
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map(({ name, route }) => (
            <MenuItem key={name} onClick={() => handleCloseNavMenu(route)}>
              <Typography textAlign="center">{name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
