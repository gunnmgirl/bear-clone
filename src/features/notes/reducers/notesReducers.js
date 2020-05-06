const INITIAL_STATE = {
  notes: [
    { text: "Prva note", id: 1 },
    { text: "Druga note", id: 2 },
  ],
  archive: [{ text: "Prva arhiva", id: 3 }],
  trash: [
    { text: "Prvi trash", id: 4 },
    { text: "Drugi trash", id: 5 },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
