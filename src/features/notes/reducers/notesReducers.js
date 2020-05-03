const INITIAL_STATE = {
  notes: [{ text: "Prva note" }, { text: "Druga note" }],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
