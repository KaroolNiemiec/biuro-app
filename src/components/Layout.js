import React from "react";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, pageName, dontGoBack }) => (
  <Grid
    container
    flexDirection="column"
    justifyContent="space-between"
    height="100vh"
  >
    <Navbar pageName={pageName} dontGoBack={dontGoBack} />
    <Grid sx={{ m: 2, height: "calc(100vh - 145px)", overflow: "scroll" }}>
      {children}
    </Grid>
    <Footer />
  </Grid>
);

export default Layout;
