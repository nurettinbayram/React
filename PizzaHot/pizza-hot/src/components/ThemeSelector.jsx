const themeColors = ["warning", "danger", "success", "primary"];

import { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../context/ThemeContext-Reducer";

export default function ThemeSelector() {
  //=> How to call and use useContext.
  const { changeColor, mode, changeMode } = useContext(ThemeContext);

  function toogleMode() {
    changeMode(mode === "dark" ? "light" : "dark");
  }
  return (
    <div className="container theme-selector">
      <div className="mode-toogle">
        <i
          className={`bi bi-moon-stars${mode === "dark" ? "-fill" : ""}`}
          onClick={toogleMode}
        ></i>
      </div>
      <div className="theme-links">
        {themeColors.map((color) => (
          <span
            key={color}
            className={`bg-${color}`}
            onClick={() => changeColor(color)}
          ></span>
        ))}
      </div>
    </div>
  );
}
