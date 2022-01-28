import React, { useState } from "react";
import Navbar from "../components/Navbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const User = () => {
  const userMock = [
    {
      name: "Auto serwis KNP",
      userId: 1,
    },
    {
      name: "Kebab Szama",
      userId: 2,
    },
    {
      name: "Amet sp. z o. o.",
      userId: 3,
    },
  ];
  const [user, setUser] = useState(userMock);

  return (
    <>
      <Navbar pageName="Wiadomości" />
      <List sx={{ mb: 2 }}>
        {user.map(({ name, userId }) => (
          <React.Fragment key={userId}>
            <ListItem>
              <ListItemText
                primary={name}
                style={{ textAlign: "left", marginLeft: 15 }}
              />
              <IconButton>
                <KeyboardArrowRightIcon />
              </IconButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </>
  );
};
export default User;
