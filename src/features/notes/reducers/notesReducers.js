import { nanoid } from "nanoid";

const INITIAL_STATE = {
  notes: [
    {
      text: "Prva note",
      id: nanoid(),
      creationDate: new Date(),
      modificationDate: new Date(),
    },
    {
      text: "Druga note",
      id: nanoid(),
      creationDate: new Date(),
      modificationDate: new Date(),
    },
  ],
  archive: [
    {
      text: "Prva arhiva",
      id: nanoid(),
      creationDate: new Date(),
      modificationDate: new Date(),
    },
  ],
  trash: [
    {
      text: "Prvi trash",
      id: nanoid(),
      creationDate: new Date(),
      modificationDate: new Date(),
    },
    {
      text: "Drugi trash",
      id: nanoid(),
      creationDate: new Date(),
      modificationDate: new Date(),
    },
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
