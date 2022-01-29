import React from "react";
import { FeeDetailsProvider } from "./src/contexts/feeDetails";
import { NavigationProvider } from "./src/contexts/navigation";
import { UserProvider } from "./src/contexts/user";

import "./firebase-config";
import "firebase/auth";
import "firebase/firestore";

export const wrapPageElement = ({ element }) => {
  return (
    <NavigationProvider>
      <UserProvider>
        <FeeDetailsProvider>{element}</FeeDetailsProvider>
      </UserProvider>
    </NavigationProvider>
  );
};
