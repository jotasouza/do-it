//REACT
import React from "react";
import ReactDOM from "react-dom";

//STYLES
import "./index.css";

//COMPONENTS
import App from "./App";

//ROUTE
import { BrowserRouter as Router } from "react-router-dom";

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
