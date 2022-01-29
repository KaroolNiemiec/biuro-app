import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase-config";
import { useUser } from "../contexts/user";
import { navigate } from "gatsby";

const AdminMenu = () => {
  const [users, setUsers] = useState();
  const [fetched, setFetched] = useState(false);
  const { adminUID, setChosenUser } = useUser();

  useEffect(() => {
    const ref = collection(database, "Users");

    getDocs(ref).then(({ docs }) => {
      const usersDocs = docs
        .map((doc) => doc.data())
        .filter(({ uid }) => adminUID !== uid);

      setUsers(usersDocs);
      setFetched(true);
    });
  }, []);

  const onNavigate = (uid) => {
    setChosenUser(uid);
    navigate("/taxes-fees");
  };

  if (!fetched) return null;
  return (
    <>
      <Navbar pageName="Pulpit administratora" dontGoBack />
      <List sx={{ mb: 2 }}>
        {users.map(({ uid, companyName }) => (
          <React.Fragment key={uid}>
            <ListItem>
              <ListItemText
                primary={companyName}
                style={{ textAlign: "left", marginLeft: 15 }}
              />
              <IconButton onClick={() => onNavigate(uid)}>
                <KeyboardArrowRightIcon />
              </IconButton>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </>
  );
};
export default AdminMenu;
