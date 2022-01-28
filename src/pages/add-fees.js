import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Layout from "../components/Layout";
import TextField from "@mui/material/TextField";
import DateField from "../components/DateField";
import { Button } from "@mui/material";

const fees = [
  {
    value: "1",
    label: "Opłata Skarbowa",
  },
  {
    value: "2",
    label: "Składka ZUS",
  },
  {
    value: "3",
    label: "Podatek VAT",
  },
  {
    value: "4",
    label: "Usługi księgowe",
  },
  {
    value: "5",
    label: "Inne",
  },
];
export default function SelectTextFields() {
  const [fee, setFee] = React.useState();

  const handleChange = (event) => {
    setFee(event.target.value);
  };

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
        {fees.map((option) => (
          <MenuItem key={option.value} value={option.value}>
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
