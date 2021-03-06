import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import { Grid } from "@mui/material";
import { useUser } from "../contexts/user";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { database } from "../../firebase-config";
import { navigate } from "gatsby";

export default function SetAccount() {
  const { displayName, email, photoURL, uid } = useUser().user;
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState(null);
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
        navigate("/");
      });
    } else {
      const ref = collection(database, "Users");
      addDoc(ref, { ...data, uid }).then(() => {
        navigate("/");
      });
    }
  };

  if (!fetched) return null;
  return (
    <Layout pageName="Ustawienia Konta">
      <Grid
        container
        direction="column"
        justifyContent="space-between"
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
          label="NIP"
          variant="outlined"
          sx={{ width: "100%", mb: 3 }}
          defaultValue={data?.nipNumber}
          value={data?.nipNumber}
          onChange={(e) => {
            setData({ ...data, nipNumber: e.target.value });
          }}
        />
        <TextField
          label="Numer konta ZUS"
          variant="outlined"
          sx={{ width: "100%", mb: 3 }}
          defaultValue={data?.zusAccountNumber}
          value={data?.zusAccountNumber}
          onChange={(e) => {
            setData({ ...data, zusAccountNumber: e.target.value });
          }}
        />
        <TextField
          label="Numer konta urz??du skarbowego"
          variant="outlined"
          sx={{ width: "100%", mb: 3 }}
          defaultValue={data?.usAccountNumber}
          value={data?.usAccountNumber}
          onChange={(e) => {
            setData({ ...data, usAccountNumber: e.target.value });
          }}
        />
        <TextField
          label="Numer konta VAT"
          variant="outlined"
          sx={{ width: "100%", mb: 3 }}
          defaultValue={data?.vatAccountNumber}
          value={data?.vatAccountNumber}
          onChange={(e) => {
            setData({ ...data, vatAccountNumber: e.target.value });
          }}
        />
        <Button variant="outlined" onClick={saveAccount}>
          Zapisz
        </Button>
      </Grid>
    </Layout>
  );
}
