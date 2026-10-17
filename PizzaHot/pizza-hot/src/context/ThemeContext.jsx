import { createContext, useState } from "react";

export const ThemeContext = createContext();

//-> This is a basic context, and we can use it for our project.
//-> However, we can provide the same functionality using a reducer.
//-> A reducer provides more functionality and gives us better control over state
export function ThemeProvider({ children }) {
  const [color, setColor] = useState("danger");

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
