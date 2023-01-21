import { useState } from "react";
import { createContext } from "react";

export const ModeContaxt = createContext({
  currentMode: false,
  setCurrentMode: () => {},
});

export const ModeProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState(false);
  const value = { currentMode, setCurrentMode };

  return <ModeContaxt.Provider value={value}>{children}</ModeContaxt.Provider>;
};
