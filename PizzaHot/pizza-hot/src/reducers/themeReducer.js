//-> An 'action' represents a function that will modify the state object.
//-> Action is a dispatch object it has type amd payload keys
export function themeReducer(state, action) {
  switch (action.type) {
    case "CHANGE_COLOR": //# CHANGE_COLOR is type of function
      //- According to function name we change state using ...state and action.payload carry our value
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      state;
  }
}
