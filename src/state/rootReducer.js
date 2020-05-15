import { combineReducers } from "redux";

import notes from "../features/notes/reducers/notesReducers";
import preferences from "../features/preferences/reducers/preferencesReducers";

const rootReducer = combineReducers({
  notes,
  preferences,
});

export default rootReducer;
