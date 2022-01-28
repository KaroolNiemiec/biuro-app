import React from "react";
import { FeeDetailsProvider } from "./src/contexts/feeDetails";
import { NavigationProvider } from "./src/contexts/navigation";

export const wrapPageElement = ({ element }) => {
  return (
    <NavigationProvider>
      <FeeDetailsProvider>{element}</FeeDetailsProvider>
    </NavigationProvider>
  );
};
