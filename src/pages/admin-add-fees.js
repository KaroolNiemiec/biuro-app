import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Layout from "../components/Layout";
import TextField from "@mui/material/TextField";
import DateField from "../components/DateField";
import { Button } from "@mui/material";

const fees = [
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
export default function SelectTextFields() {
  const [fee, setFee] = useState();

  const handleChange = (event) => {
    setFee(event.target.value);
  };

  console.info(fee);

  return (
    <Layout pageName="Dodaj opłatę">
      <TextField
        id="outlined-select-currency"
        select
        label="Rodzaj opłaty"
        value={fee}
        onChange={handleChange}
        sx={{
          width: "100%",
          mb: 3,
        }}
      >
        {fees.map((option, i) => (
          <MenuItem key={i} value={i}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-basic"
        label="Nazwa"
        variant="outlined"
        sx={{ width: "100%", mb: 3 }}
      />
      <TextField
        id="outlined-basic"
        label="Numer konta"
        variant="outlined"
        sx={{ width: "100%", mb: 3 }}
      />
      <TextField
        id="outlined-basic"
        label="Kwota"
        variant="outlined"
        sx={{ width: "100%", mb: 3 }}
      />
      <DateField />
      <Button variant="contained" sx={{ width: "100%", mt: 10 }}>
        Zapisz
      </Button>
    </Layout>
  );
}
