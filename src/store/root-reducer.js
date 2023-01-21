import { combineReducers } from "redux";

import { modeReducer } from "./mode/mode.reducer";

export const rootReducer = combineReducers({
  mode: modeReducer,
});
