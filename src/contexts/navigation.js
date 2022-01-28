import React, { useState, useContext, createContext } from "react";

const NavigationContext = createContext(0);

export const NavigationProvider = ({ children }) => {
  const [navigation, setNavigationState] = useState(0);
  const [prevNavigation, setPrevNavigation] = useState(undefined);

  const setNavigation = (newNavigation) => {
    setPrevNavigation(navigation);
    setNavigationState(newNavigation);
  };

  const goBack = () => {
    if (prevNavigation !== undefined) {
      setNavigationState(prevNavigation);
      window.history.back();
    }
  };

  return (
    <NavigationContext.Provider value={{ navigation, setNavigation, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
