import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Layout from "../components/Layout";
import { Button } from "@mui/material";
import { useUser } from "../contexts/user";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { pl } from "date-fns/locale";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase-config";
import { navigate } from "gatsby";

const types = [
  {
    label: "Opłata Skarbowa",
    fieldName: "usAccountNumber",
  },
  {
    label: "Składka ZUS",
    fieldName: "zusAccountNumber",
  },
  {
    label: "Podatek VAT",
    fieldName: "vatAccountNumber",
  },
  {
    label: "Usługi księgowe",
  },
  {
    label: "Inne",
  },
];

export default function AdminAddFees() {
  const { chosenUser, adminUID } = useUser();
  const [type, setType] = useState();
  const [userData, setUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [data, setData] = useState(null);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const ref = collection(database, "Users");
    const userQuery = query(ref, where("uid", "==", chosenUser));
    const adminQuery = query(ref, where("uid", "==", adminUID));

    getDocs(userQuery).then(({ docs }) => {
      setUserData(docs[0]?.data());
      setFetched(true);
    });

    getDocs(adminQuery).then(({ docs }) => {
      setAdminData(docs[0]?.data());
    });
  }, []);

  const onTypeChange = (event) => {
    const value = event.target.value;
    setType(value);
    const result = { ...data };

    if (value === 0 || value === 1 || value === 2) {
      result.accountNumber = userData[types[value].fieldName];
      result.name = types[value].label;
    }

    if (value === 3) {
      result.accountNumber = adminData.accountNumber;
      result.name = types[value].label;
    }

    setData(result);
  };

  const saveTax = () => {
    const result = {
      ...data,
      createdAt: new Date(),
      isPayed: false,
      uid: chosenUser,
    };
    const ref = collection(database, "Taxes");
    addDoc(ref, result).then(() => {
      navigate("/taxes-fees");
    });
  };

  if (!fetched) return null;
  return (
    <Layout pageName="Dodaj opłatę">
      <TextField
        select
        label="Rodzaj opłaty"
        value={type}
        onChange={onTypeChange}
        sx={{
          width: "100%",
          mb: 3,
          mt: 1,
        }}
      >
        {types.map((option, i) => (
          <MenuItem key={i} value={i}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Nazwa"
        variant="outlined"
        sx={{ width: "100%", mb: 3 }}
        value={data?.name || ""}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <TextField
        label="Numer konta"
        variant="outlined"
        sx={{ width: "100%", mb: 3 }}
        value={data?.accountNumber || ""}
        onChange={(e) => {
          setData({ ...data, accountNumber: e.target.value });
        }}
      />
      <TextField
        label="Kwota"
        type="number"
        variant="outlined"
        sx={{ width: "100%", mb: 3 }}
        value={data?.price || ""}
        onChange={(e) => {
          setData({ ...data, price: e.target.value });
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
        <DatePicker
          label="Termin płatności"
          value={data?.paymentDeadline}
          onChange={(date) => {
            setData({ ...data, paymentDeadline: date });
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button
        onClick={saveTax}
        variant="contained"
        sx={{ width: "100%", mt: 10 }}
      >
        Zapisz
      </Button>
    </Layout>
  );
}
