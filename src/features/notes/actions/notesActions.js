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

export const deleteNote = (payload) => {
  return {
    type: "DELETE_NOTE",
    payload,
  };
};

export const archiveNote = (payload) => {
  return {
    type: "ARCHIVE_NOTE",
    payload,
  };
};
