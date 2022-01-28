import * as React from "react";
import Layout from "../components/Layout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";

export default function Invoices() {
  const taxesMock = [
    {
      name: "Składki ZUS",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2020/12/12",
      isPayed: true,
      createdAt: "2020/11/03",
    },
    {
      name: "Podatek PIT",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2020/12/12",
      isPayed: true,
      createdAt: "2020/11/08",
    },
    {
      name: "Usługi księgowe",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2020/12/12",
      isPayed: true,
      createdAt: "2020/12/08",
    },
    {
      name: "Podatek VAT",
      price: 1457.49,
      accountNumber: "121234123412341234",
      paymentDeadline: "2020/12/12",
      isPayed: true,
      createdAt: "2020/12/08",
    },
  ];

  return (
    <Layout pageName="Podatki i Opłaty">
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {taxesMock.map((value) => (
          <ListItem
            key={value.name}
            disableGutters
            secondaryAction={
              <>
                {value.price}
                <IconButton>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </>
            }
          >
            {console.log(value)}
            <ListItemText
              primary={value.name}
              secondary={value.paymentDeadline}
            />
          </ListItem>
        ))}
      </List>
    </Layout>
  );
}
