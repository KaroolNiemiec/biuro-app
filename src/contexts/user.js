import React, { useState, useContext, createContext, useEffect } from "react";
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
} from "firebase/remote-config";
import { app } from "../../firebase-config";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [adminUID, setAdminUID] = useState(null);
  const [user, setUser] = useState(null);
  const [chosenUser, setChosenUser] = useState(null);

  useEffect(() => {
    const remoteConfig = getRemoteConfig(app);
    fetchAndActivate(remoteConfig).then(() => {
      const admin = getValue(remoteConfig, "adminUID").asString();
      setAdminUID(admin);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ adminUID, setUser, user, chosenUser, setChosenUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
