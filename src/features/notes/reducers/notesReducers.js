import { nanoid } from "nanoid";

const INITIAL_STATE = {
  notes: [
    { text: "Prva note", id: nanoid() },
    { text: "Druga note", id: nanoid() },
  ],
  archive: [{ text: "Prva arhiva", id: nanoid() }],
  trash: [
    { text: "Prvi trash", id: nanoid() },
    { text: "Drugi trash", id: nanoid() },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "ADD_CONTENT":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, text: action.payload.text }
            : { ...note }
        ),
      };

    default:
      return state;
  }
};
