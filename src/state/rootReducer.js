import { combineReducers } from "redux";

import notes from "../features/notes/reducers/notesReducers";

const rootReducer = combineReducers({
  notes,
});

export default rootReducer;
