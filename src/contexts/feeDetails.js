import React, { useState, useContext, createContext } from "react";

const FeeDetailsContext = createContext(0);

export const FeeDetailsProvider = ({ children }) => {
  const [feeDetails, setFeeDetails] = useState(0);

  return (
    <FeeDetailsContext.Provider value={{ feeDetails, setFeeDetails }}>
      {children}
    </FeeDetailsContext.Provider>
  );
};

export const useFeeDetails = () => useContext(FeeDetailsContext);
