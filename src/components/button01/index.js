import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button onClick={() => {console.log("You Clicked on Me!)"}}
        type="button"
        buttonStyles="btn--primary--outline"
        buttonSize="btn--large"
      >Buy Now </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
