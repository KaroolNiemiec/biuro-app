import React from "react";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, pageName }) => (
  <Grid
    container
    flexDirection="column"
    justifyContent="space-between"
    height="100vh"
  >
    <Navbar pageName={pageName} />
    <div>{children}</div>
    <Footer />
  </Grid>
);

export default Layout;
