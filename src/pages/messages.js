import React, { useState } from "react";
import Navbar from "../components/Navbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import FilledInput from "@mui/material/FilledInput";
import { Grid, InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { formatDate } from "../helpers/date";

const Messages = () => {
  const messagesMock = [
    {
      messageId: 1,
      messageType: "message",
      text: "asdf  asdf asdfasdfasdf asdfasdf asdfa sadfasdf",
      senderId: 123,
      timestamp: "1234/12/12",
      hasRead: true,
    },
    {
      messageId: 2,
      messageType: "message",
      text: "asdf  asdf asdfasdfasdf asdfasdf asdfa sadfasdf",
      senderId: 234,
      timestamp: "1234/12/12",
      hasRead: true,
    },
    {
      messageId: 3,
      messageType: "message",
      text: "asdf  asdf asdfasdfasdf asdfasdf asdfa sadfasdf",
      senderId: 234,
      timestamp: "1234/12/12",
      hasRead: true,
    },
    {
      messageId: 4,
      messageType: "message",
      text: "asdf  asdf asdfasdfasdf asdfasdf asdfa sadfasdf",
      senderId: 123,
      timestamp: "1234/12/12",
      hasRead: true,
    },
  ];
  const [messages, setMessages] = useState(messagesMock);
  const [text, setText] = useState("");
  const ourUserId = 123;

  const sendMessage = () => {
    if (text) {
      setMessages([
        ...messages,
        {
          text,
          messageId: 1234,
          timestamp: formatDate(),
          senderId: ourUserId,
        },
      ]);
    }
  };

  return (
    <Grid container>
      <Navbar pageName="Wiadomości" />
      <List sx={{ mb: 2, height: "calc(100vh - 112px)", overflow: "scroll" }}>
        {messages.map(({ messageId, text, senderId, timestamp }) => (
          <React.Fragment key={messageId}>
            <ListItem button>
              {ourUserId === senderId && (
                <ListItemText
                  primary={text}
                  secondary={timestamp}
                  style={{
                    textAlign: "end",
                    marginRight: 15,
                    maxWidht: "100vw",
                  }}
                />
              )}
              <ListItemAvatar>
                <Avatar alt="Profile Picture" />
              </ListItemAvatar>
              {ourUserId !== senderId && (
                <ListItemText primary={text} secondary={timestamp} />
              )}
            </ListItem>
          </React.Fragment>
        ))}
      </List>
      <FilledInput
        id="input-with-icon-adornment"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={sendMessage}>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      />
    </Grid>
  );
};
export default Messages;
