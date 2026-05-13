/* eslint-disable react/prop-types */
import { useState } from "react";
import ArrowButton from "./ArrowButton";

export default function ListContainer({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="movie-list">
      <button
        className="btn btn-sm btn-outline-light mb-1"
        /// BURASI ONEMLI NOT AL HER ZAMAN OLAN DEGERIN TERSINI ALIR!!!!!
        onClick={() => setIsOpen((val) => !val)}
      >
        <ArrowButton isOpen={isOpen} />
      </button>

      {isOpen && children}
    </div>
  );
}
