import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { isPast, parseISO } from "date-fns";
import { navigate } from "gatsby";
import { useFeeDetails } from "../contexts/feeDetails";
import { calculateDeadline } from "../helpers/date";

const FeesList = ({ data }) => {
  const { setFeeDetails } = useFeeDetails();

  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      <div
        style={{
          backgroundColor: "gray",
          height: "92%",
          position: "absolute",
          width: 1,
          left: 11,
          zIndex: 0,
        }}
      />
      {data.map((item) => {
        const { name, price, paymentDeadline, isPayed } = item;
        return (
          <ListItem
            key={name}
            disableGutters
            secondaryAction={
              <>
                {price} PLN
                <IconButton
                  onClick={() => {
                    setFeeDetails(item);
                    navigate("/details");
                  }}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              </>
            }
          >
            <RadioButtonCheckedIcon
              sx={{
                mr: 2,
                color: isPayed
                  ? "green"
                  : isPast(parseISO(paymentDeadline))
                  ? "red"
                  : "blue",
              }}
            />
            <ListItemText
              primary={name}
              secondary={calculateDeadline({ isPayed, paymentDeadline })}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default FeesList;
