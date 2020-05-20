import { combineReducers } from "redux";

import notes from "../features/notes/reducers/notesReducers";
import preferences from "../features/preferences/reducers/preferencesReducers";
import layout from "../features/layout/reducers/layoutReducers";

const rootReducer = combineReducers({
  notes,
  preferences,
  layout,
});

export default rootReducer;
