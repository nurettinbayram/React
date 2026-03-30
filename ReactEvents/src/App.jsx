import { sculptureList } from "./data.js";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(7);
  const [showDetails, setShowDetails] = useState(false);
  let sculpture = sculptureList[index];

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(sculptureList.length - 1);
    }
  }
  console.log(index);
  return (
    <>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>

      <h2>
        <i> {sculpture.name} </i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <div>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide" : "Show"} Details
        </button>
        {showDetails && <p>{sculpture.description}</p>}
      </div>
    </>
  );
}

export default App;
