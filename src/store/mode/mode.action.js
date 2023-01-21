import { ACTION_TYPE } from "./mode.types";
import { createAction } from "../../utils/reducer.utils";

export const setCurrentMode = (bool) =>
  createAction(ACTION_TYPE.SET_CURRENT_MODD, bool);
