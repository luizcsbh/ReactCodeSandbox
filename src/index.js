import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { UsersTable } from "./UsersTable";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <UsersTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
