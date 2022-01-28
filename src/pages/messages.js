import React, { useState } from "react";
import Navbar from "../components/Navbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import FilledInput from "@mui/material/FilledInput";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

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
  const [text, setText] = useState();
  const ourUserId = 123;

  return (
    <>
      <Navbar pageName="Wiadomości" />
      <List sx={{ mb: 2 }}>
        {messages.map(({ messageId, text, senderId, timestamp, hasRead }) => (
          <React.Fragment key={messageId}>
            <ListItem button>
              {ourUserId === senderId && (
                <ListItemText
                  primary={text}
                  secondary={timestamp}
                  style={{ textAlign: "end", marginRight: 15 }}
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
            <IconButton
              onClick={() => {
                setMessages([
                  ...messages,
                  {
                    text,
                    messageId: 1234,
                    timestamp: "1234/12/12",
                    senderId: ourUserId,
                  },
                ]);
              }}
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
    </>
  );
};
export default Messages;
