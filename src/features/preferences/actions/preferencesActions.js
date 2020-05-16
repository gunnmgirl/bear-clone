export const changeFontFamily = (payload) => {
  return {
    type: "CHANGE_FONT_FAMILY",
    payload,
  };
};

export const changeFontSize = (payload) => {
  return {
    type: "CHANGE_FONT_SIZE",
    payload,
  };
};

export const changeLineHeight = (payload) => {
  return {
    type: "CHANGE_LINE_HEIGHT",
    payload,
  };
};

export const changeLineWidth = (payload) => {
  return {
    type: "CHANGE_LINE_WIDTH",
    payload,
  };
};

export const changeParagraphSpacing = (payload) => {
  return {
    type: "CHANGE_PARAGRAPH_SPACING",
    payload,
  };
};

export const changeTheme = (payload) => {
  return {
    type: "CHANGE_THEME",
    payload,
  };
};
