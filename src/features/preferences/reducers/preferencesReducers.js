const INITIAL_STATE = {
  editor: {
    fontFamily: "Georgia",
    fontSize: "1",
    lineHeight: "1",
    lineWidth: "1",
    paragraphSpacing: "1",
  },

  theme: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_FONT_FAMILY":
      return {
        ...state,
        editor: { ...state.editor, fontFamily: action.payload },
      };
    case "CHANGE_FONT_SIZE":
      return {
        ...state,
        editor: { ...state.editor, fontSize: action.payload },
      };
    case "CHANGE_LINE_HEIGHT":
      return {
        ...state,
        editor: { ...state.editor, lineHeight: action.payload },
      };
    case "CHANGE_LINE_WIDTH":
      return {
        ...state,
        editor: { ...state.editor, lineWidth: action.payload },
      };
    case "CHANGE_PARAGRAPH_SPACING":
      return {
        ...state,
        editor: { ...state.editor, paragraphSpacing: action.payload },
      };
    default:
      return state;
  }
};
