import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

function App() {
  return <div>"hello world"</div>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
