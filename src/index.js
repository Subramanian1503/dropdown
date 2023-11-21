// React library dependencies required to run the react applications
import React from "react";
import ReactDOM from "react-dom/client";

// Internal dependent files required to run the react application
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
