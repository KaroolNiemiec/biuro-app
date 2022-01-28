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

const Navbar = ({ pageName }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [value, setValue] = React.useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
  return (
    <AppBar position="sticky" justify-content="flex-end">
      <Toolbar>
        <Grid
          container
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            color="inherit"
            variant="text"
            startIcon={<NavigateBeforeIcon />}
            onClick={() => {
              window.history.back();
            }}
          >
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
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(pages[newValue].route);
          }}
          onClose={handleCloseNavMenu}
        >
          {pages.map(({ name }) => (
            <MenuItem key={name} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
