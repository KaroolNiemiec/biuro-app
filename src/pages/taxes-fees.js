import * as React from "react";
import Layout from "../components/Layout";
import FeesList from "../components/FeesList";
import { useUser } from "../contexts/user";
import { IconButton, SpeedDialIcon } from "@mui/material";
import { navigate } from "gatsby";

export default function TaxesFees() {
  const { chosenUser, adminUID, user } = useUser();

  return (
    <Layout pageName="Podatki i Opłaty">
      <FeesList uid={chosenUser} />
      {adminUID === user.uid && (
        <IconButton
          sx={{
            position: "absolute",
            right: 50,
            bottom: 100,
            backgroundColor: "#8cc63f",
          }}
          onClick={() => navigate("/admin-add-fees")}
        >
          <SpeedDialIcon />
        </IconButton>
      )}
    </Layout>
  );
}
