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

export const restoreNote = (payload) => {
  return {
    type: "RESTORE_NOTE",
    payload,
  };
};

export const unarchiveNote = (payload) => {
  return {
    type: "UNARCHIVE_NOTE",
    payload,
  };
};
