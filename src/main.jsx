import React from "react";
import ReactDOM from "react-dom/client";
import RouteController from "./RouteController";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Login } from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter>
        <RouteController />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
