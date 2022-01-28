import React from "react";
import Layout from "../components/Layout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";

export default function Index() {
  return (
    <Layout pageName="Pulpit">
      <h4>Podatki i opłaty</h4>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {[1, 2, 3].map((value) => (
          <ListItem
            key={value}
            disableGutters
            secondaryAction={
              <IconButton>
                <KeyboardArrowRightIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`Line item ${value}`} />
          </ListItem>
        ))}
      </List>
    </Layout>
  );
}
