import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button onClick={}>Buy Now </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
