import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Layout from "../components/Layout";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import DateField from "../components/DateField";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));

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
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <h4>Rodzaj Opłaty</h4>
        <TextField
          id="outlined-select-currency"
          select
          label="Wybierz"
          value={fee}
          onChange={handleChange}
          sx={{
            width: "20ch",
          }}
        >
          {fees.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Nazwa
          </InputLabel>
          <BootstrapInput id="bootstrap-input" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Numer konta
          </InputLabel>
          <BootstrapInput id="bootstrap-input" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Kwota
          </InputLabel>
          <BootstrapInput id="bootstrap-input" />
        </FormControl>
        <DateField />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Grid>
    </Layout>
  );
}
