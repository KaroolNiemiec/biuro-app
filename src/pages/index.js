import React from "react";
import Layout from "../components/Layout";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Grid, Typography } from "@mui/material";
import FeesList from "../components/FeesList";
import { useUser } from "../contexts/user";

export default function Index() {
  const { user } = useUser();

  return (
    <Layout pageName="Mój pulpit" dontGoBack>
      <Grid sx={{ height: "100%" }}>
        <ListItem disableGutters>
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
          <ListItemText
            primary="Podatki i opłaty"
            secondary="Twoja lista opłat"
          />
        </ListItem>
        <FeesList uid={user.uid} />
      </Grid>
    </Layout>
  );
}
