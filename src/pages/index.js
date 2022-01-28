import React from "react";
import Layout from "../components/Layout";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Grid, Typography } from "@mui/material";
import { navigate } from "gatsby";
import FeesList from "../components/FeesList";

export default function Index() {
  const goToTaxesAndFees = () => {
    navigate("/taxes-fees");
  };
  const taxesMock = [
    {
      name: "Składki ZUS",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2014-02-11",
      isPayed: false,
      createdAt: "2020-11-03",
    },
    {
      name: "Podatek PIT",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2022-12-12",
      isPayed: false,
      createdAt: "2020-11-08",
    },
    {
      name: "Usługi księgowe",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2020-12-12",
      isPayed: true,
      createdAt: "2020-11-08",
    },
    {
      name: "Podatek VAT",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2020-12-12",
      isPayed: false,
      createdAt: "2020-11-08",
    },
  ];

  return (
    <Layout pageName="Mój pulpit" dontGoBack>
      <Grid sx={{ height: "100%" }}>
        <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 2 }}>
          Podatki i opłaty
        </Typography>
        <ListItem
          disableGutters
          secondaryAction={
            <IconButton
              sx={{ fontSize: 15, fontWeight: 800 }}
              onClick={goToTaxesAndFees}
            >
              Zobacz <br /> więcej
            </IconButton>
          }
        >
          <DateRangeIcon
            sx={{
              height: 50,
              width: 50,
              marginRight: 2,
              borderRadius: 100,
              color: "#4a5ce2",
              backgroundColor: "#e4e6fb",
              padding: 1,
            }}
          />
          <ListItemText primary="8000 PLN" secondary="Niezapłacone 8000 PLN" />
        </ListItem>
        <FeesList data={taxesMock.filter(({ isPayed }) => !isPayed)} />
      </Grid>
    </Layout>
  );
}
