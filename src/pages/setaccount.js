import * as React from "react";
import Layout from "../components/Layout";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";

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

export default function SetAccount() {
  return (
    <Layout pageName="Ustawienia Konta">
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar
          alt="ZnajomyKsięgowy"
          src="../images/Logo.png"
          sx={{ width: 56, height: 56 }}
        />
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            NIP
          </InputLabel>
          <BootstrapInput id="bootstrap-input" />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Numer konta ZUS
          </InputLabel>
          <BootstrapInput id="bootstrap-input" />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Numer konta urzędu skarbowego
          </InputLabel>
          <BootstrapInput id="bootstrap-input" />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Numer konta VAT
          </InputLabel>
          <BootstrapInput id="bootstrap-input" />
        </FormControl>
      </Grid>
    </Layout>
  );
}
