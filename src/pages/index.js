import React from "react";
import Layout from "../components/Layout";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Grid, Typography } from "@mui/material";
import { navigate } from "gatsby";
import FeesList from "../components/FeesList";
import { useUser } from "../contexts/user";

export default function Index() {
  const goToTaxesAndFees = () => {
    navigate("/taxes-fees");
  };
  const { user } = useUser();

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
        <FeesList uid={user.uid} donShowPayed />
      </Grid>
    </Layout>
  );
}
