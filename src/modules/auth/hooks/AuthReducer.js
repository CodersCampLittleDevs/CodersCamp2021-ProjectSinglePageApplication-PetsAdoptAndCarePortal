export const authReducer = (currentState, action) => {
  const NEW_STATE = { ...currentState };
  switch (action.type) {
    case "AUTH_FORM":
      NEW_STATE.isLoggingForm = !currentState.isLoggingForm;
      return NEW_STATE;
    case "REGISTER_TYPE":
      NEW_STATE.isBusinessClient = !currentState.isBusinessClient;
      return NEW_STATE;
    default:
      throw new Error("Should not get there!");
  }
};
