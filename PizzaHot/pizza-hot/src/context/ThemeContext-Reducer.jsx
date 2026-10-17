import { createContext, useReducer } from "react";
import { themeReducer } from "../reducers/themeReducer";

export const ThemeContext = createContext();

//-> This(I mean useState with contextApi) is a basic context, and we can use it for our project.
//-> However, we can provide the same functionality using a reducer.
//-> A reducer provides more functionality and gives us better control over state.

export function ThemeProvider({ children }) {
  //-> State has color and mode atrubute and we set them using dispatch function.
  //-> Basicly State is a object and dispatch is a function to modify the state.
  //-> themeReducer is a reducer function we define and it has some logic functionality.
  //-> The object we define in useReducer that is initial values.
  //-> dispatch send a object which has type and payload keys base on themeReducer function.
  const [state, dispatch] = useReducer(themeReducer, {
    color: "primary",
    mode: "light",
  });

  function changeColor(value) {
    dispatch({ type: "CHANGE_COLOR", payload: value });
  }

  function changeMode(value) {
    dispatch({ type: "CHANGE_MODE", payload: value });
  }

  return (
    /// ...state open the opject as --> color:danger, mode:dark
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
