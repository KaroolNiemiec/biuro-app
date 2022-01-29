import React from "react";
import { Button, Grid } from "@mui/material";
import Logo from "../images/Logo.png";
import Gmail from "../images/Gmail.svg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { navigate } from "gatsby";
import { useUser } from "../contexts/user";

const Login = () => {
  const { adminUID, setUser } = useUser();

  const loginAction = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then(({ user }) => {
      setUser(user);
      if (user.uid === adminUID) {
        navigate("/admin-menu");
      } else {
        navigate("/");
      }
    });
  };

  return (
    <Grid
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#8cc63f",
      }}
    >
      <img
        src={Logo}
        style={{
          width: "100%",
        }}
      />
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
        onClick={loginAction}
      >
        <Button
          sx={{ fontSize: 20, textAlign: "center", mt: 2, color: "black" }}
        >
          Zaloguj się
        </Button>
        <img src={Gmail} style={{ width: "50%" }} />
      </Grid>
    </Grid>
  );
};

export default Login;
