import ReactDOM from "react-dom/client";
import RouteController from "./RouteController";
import "./index.css";
import { Login } from "./pages/Login";
import { BrowserRouter } from "react-router-dom";
import { GlobalToolsContextProvider } from "./contexts/globalToolsContext";
import { UserContextProvider } from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalToolsContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <RouteController />
      </BrowserRouter>
    </UserContextProvider>
  </GlobalToolsContextProvider>
);
