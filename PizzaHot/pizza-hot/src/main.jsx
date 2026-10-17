import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext-Reducer";

import App from "./App";
import { CartContextProvider } from "./context/CartContext-Reducer";
import { UIContextProvider } from "./context/UIContext";

//=> HERE IS THE THING: IF WE WANT TO USE CONTEXT API IN A COMPONENT THAT COMPONENT HAS TO BE SURROUNDED BY THE PROVIDER
//=> SO WE USE CONTEXT API IN APP.JS THAT'S WHY WE MOVE PROVIDER IN THE MAIN.JS FILE.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UIContextProvider>
      <ThemeProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ThemeProvider>
    </UIContextProvider>
  </StrictMode>,
);
