import { createStore } from "redux";

import rootReducer from "../state/rootReducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState({ notes: store.getState().notes });
});

export default store;
