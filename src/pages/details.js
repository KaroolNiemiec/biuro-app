import * as React from "react";
import Layout from "../components/Layout";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

export default function Details() {
  return (
    <Layout pageName="Szczegóły">
      <h6>Nazwa</h6>
      <ListItemText primary={`Zakład Ubezpieczeń Społecznych`} />
      <h6>Numer Konta</h6>
      <ListItemText primary={`12 1234 1234 1234 1234 1234`} />
      <h6>Kwota</h6>
      <ListItemText primary={`1470,18`} />
      <h6>Status</h6>
      <ListItemText primary={`Zakład Ubezpieczeń Społecznych`} />
      <Button variant="contained">Oznacz jako zapłacone</Button>
    </Layout>
  );
}
