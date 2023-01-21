import { ACTION_TYPE } from "./mode.types";

const INIT_STATE = {
  currentMode: false,
};

export const modeReducer = (state = INIT_STATE, action = {}) => {
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
