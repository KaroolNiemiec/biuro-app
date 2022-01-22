// import * as React from "react";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import ProTip from "../components/ProTip";
// import Link from "../components/Link";
// import Copyright from "../components/Copyright";
// import footer from "../components/Footer";

import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import ProTip from '../components/ProTip';
// import Copyright from "../components/Copyright";

/* <Container maxWidth="sm">
<Box sx={{ my: 4 }}>
  <Typography variant="h4" component="h1" gutterBottom>
    Gatsby example
  </Typography>
  <Link to="/about" color="secondary">
    Go to the about page
  </Link>
  <ProTip />
  <Copyright />
</Box>
</Container> */

export default function Index() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
