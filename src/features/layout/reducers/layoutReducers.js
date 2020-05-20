const INITIAL_STATE = {
  sidebars: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBARS":
      return {
        ...state,
        sidebars: action.payload,
      };
    default:
      return state;
  }
};
