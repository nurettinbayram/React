import { useContext } from "react";
import Header from "./components/Header";
import PizzaList from "./components/PizzaList";
import ThemeSelector from "./components/ThemeSelector";
import { ThemeContext } from "./context/ThemeContext-Reducer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

export default function App() {
  //=> How to call and use useContext.
  //=> HERE IS THE THING: IF WE WANT TO USE CONTEXT API IN A COMPONENT THAT COMPONENT HAS TO BE SURROUNDED BY THE PROVIDER
  //=> SO WE USE CONTEXT API IN APP.JS THAT'S WHY WE MOVE PROVIDER IN THE MAIN.JS FILE.
  const { mode } = useContext(ThemeContext);

  return (
    <div
      className={
        mode === "dark" ? "bg-secondary text-white" : "bg-light text-dark"
      }
    >
      <Header />
      <ThemeSelector />
      <div className="container my-4">
        <PizzaList />
        <Cart />
        <Checkout />
      </div>
    </div>
  );
}

/*
//! We can define our ThemeContext like this and use in App.js as well but we will improve more.
/// -----------------App.js---------------------------
 export default function App() {
  return (
    <ThemeContext.Provider value={{ color: "danger" }}>
      <Header />
      <div className="container my-4">
        <PizzaList />
      </div>
    </ThemeContext.Provider>
  );
}

////----------------ThemeContext.js-------------------------
import { createContext } from "react";

export const ThemeContext = createContext();


 */
