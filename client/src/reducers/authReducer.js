const INTIAL_STATE = {
  isLoggedIn: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isLoggedIn: true };
    case "SIGN_OUT":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
