export const addNote = (payload) => {
  return {
    type: "ADD_NOTE",
    payload,
  };
};

export const addContent = (payload) => {
  return {
    type: "ADD_CONTENT",
    payload,
  };
};
