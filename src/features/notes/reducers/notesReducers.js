import { nanoid } from "nanoid";

const INITIAL_STATE = {
  notes: [
    {
      text:
        "Write beautifully on iPhone, iPad, and Mac. \n \n" +
        "Bear is a beautiful, flexible writing app for crafting notes and prose. Bear works on iPhone, iPad, and Mac, so you can write wherever inspiration strikes. \n \n" +
        "Bear is perfect for everything from quick notes to in-depth essays. Full in-line image support brings your writing to life.",
      id: nanoid(),
      creationDate: new Date(),
      modificationDate: new Date(),
    },
  ],
  archive: [],
  trash: [],
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
            ? {
                ...note,
                text: action.payload.text,
                modificationDate: action.payload.modificationDate,
              }
            : { ...note }
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
        trash: [...state.trash, action.payload],
      };
    case "DELETE_NOTE_FROM_ARCHIVE":
      return {
        ...state,
        archive: state.archive.filter((note) => note.id !== action.payload.id),
        trash: [...state.trash, action.payload],
      };
    case "PERMANENT_DELETE":
      return {
        ...state,
        trash: state.trash.filter((note) => note.id !== action.payload.id),
      };
    case "RESTORE_NOTE":
      return {
        ...state,
        trash: state.trash.filter((note) => note.id !== action.payload.id),
        notes: [...state.notes, action.payload],
      };
    case "ARCHIVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
        archive: [...state.archive, action.payload],
      };
    case "UNARCHIVE_NOTE":
      return {
        ...state,
        archive: state.archive.filter((note) => note.id !== action.payload.id),
        notes: [...state.notes, action.payload],
      };

    default:
      return state;
  }
};
