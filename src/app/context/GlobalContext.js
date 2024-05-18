"use client";

import { createContext, useContext, useState } from "react";

// Create a Context
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <GlobalStateContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for using the global state
export const useGlobalState = () => useContext(GlobalStateContext);
