import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { navigate } from "gatsby";
import { useUser } from "../contexts/user";
import { database } from "../../firebase-config";

export default function AdminSetAccount() {
  const { displayName, email, photoURL, uid } = useUser().user;
  const [data, setData] = useState(null);
  const [fetched, setFetched] = useState(false);
  const [dataId, setDataId] = useState(null);

  useEffect(() => {
    const ref = collection(database, "Users");
    const q = query(ref, where("uid", "==", uid));

    getDocs(q).then(({ docs }) => {
      if (docs[0]) {
        setData(docs[0].data());
        setDataId(docs[0].id);
      }
      setFetched(true);
    });
  }, []);

  const saveAccount = () => {
    if (dataId) {
      const ref = doc(database, "Users", dataId);
      updateDoc(ref, data).then(() => {
        navigate("/admin-menu");
      });
    } else {
      const ref = collection(database, "Users");
      addDoc(ref, { ...data, uid }).then(() => {
        navigate("/admin-menu");
      });
    }
  };

  if (!fetched) return null;
  return (
    <Layout pageName="Ustawienia Administratora" dontShowFooter>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt="Profile Picture" src={photoURL} />
          </ListItemAvatar>
          <ListItemText primary={displayName} secondary={email} />
        </ListItem>
        <TextField
          label="Nazwa firmy"
          variant="outlined"
          sx={{ width: "100%", mb: 3 }}
          defaultValue={data?.companyName}
          value={data?.companyName}
          onChange={(e) => {
            setData({ ...data, companyName: e.target.value });
          }}
        />
        <TextField
          label="Numer konta bankowego"
          variant="outlined"
          sx={{ width: "100%", mb: 3 }}
          defaultValue={data?.accountNumber}
          value={data?.accountNumber}
          onChange={(e) => {
            setData({ ...data, accountNumber: e.target.value });
          }}
        />
        <Button variant="outlined" onClick={saveAccount}>
          Zapisz
        </Button>
      </Grid>
    </Layout>
  );
}
