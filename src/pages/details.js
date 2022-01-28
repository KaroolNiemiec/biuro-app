import * as React from "react";
import Layout from "../components/Layout";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { useFeeDetails } from "../contexts/feeDetails";
import { calculateDeadline } from "../helpers/date";

export default function Details() {
  const { feeDetails } = useFeeDetails();
  return (
    <Layout pageName="Szczegóły">
      <h3>Nazwa</h3>
      <ListItemText primary={feeDetails.name} />
      <h3>Numer Konta</h3>
      <ListItemText primary={feeDetails.accountNumber} />
      <h3>Kwota</h3>
      <ListItemText primary={`${feeDetails.price} PLN`} />
      <h3>Status</h3>
      <ListItemText primary={calculateDeadline(feeDetails)} />
      <Button variant="contained" sx={{ mt: 4, width: "100%" }}>
        Oznacz jako zapłacone
      </Button>
    </Layout>
  );
}
