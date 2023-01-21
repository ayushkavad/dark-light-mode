import { useState, createContext, useReducer } from "react";

export const ModeContaxt = createContext({
  currentMode: false,
  setCurrentMode: () => {},
});

const ACTION_TYPE = {
  SET_CURRENT_MODD: "SET_CURRENT_MODE",
};

const INIT_STATE = {
  currentMode: false,
};

const modeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.SET_CURRENT_MODD:
      return {
        ...state,
        currentMode: payload,
      };

    default:
      return state;
  }
};

export const ModeProvider = ({ children }) => {
  //   const [currentMode, setCurrentMode] = useState(false);
  const [{ currentMode }, dispatch] = useReducer(modeReducer, INIT_STATE);

  const setCurrentMode = (bool) =>
    dispatch({ type: ACTION_TYPE.SET_CURRENT_MODD, payload: bool });

  const value = { currentMode, setCurrentMode };

  return <ModeContaxt.Provider value={value}>{children}</ModeContaxt.Provider>;
};
