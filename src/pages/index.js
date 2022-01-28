import React from "react";
import Layout from "../components/Layout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import DateRangeIcon from "@mui/icons-material/DateRange";

export default function Index() {
  return (
    <Layout pageName=" Mój pulpit">
      <h5>Podatki i opłaty</h5>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <ListItem
          disableGutters
          secondaryAction={
            <IconButton>
              <h6>
                Zobacz<br></br> więcej
              </h6>
            </IconButton>
          }
        >
          <DateRangeIcon />
          <ListItemText
            primary={`8000 PLN`}
            secondary="Niezapłacone 8000 PLN"
          />
        </ListItem>
      </List>
      <h5>Grudzień</h5>
      <List sx={{ width: "100%", maxWidth: 360 }}>
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
