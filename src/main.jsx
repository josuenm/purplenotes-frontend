import ReactDOM from "react-dom/client";
import RouteController from "./RouteController";
import { Login } from "./pages/Login";
import { BrowserRouter } from "react-router-dom";
import { GlobalToolsContextProvider } from "./contexts/globalToolsContext";
import { UserContextProvider } from "./contexts/userContext";
import { NotesContextProvider } from "./contexts/notesContext";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyles />
    <GlobalToolsContextProvider>
      <UserContextProvider>
        <NotesContextProvider>
          <RouteController />
        </NotesContextProvider>
      </UserContextProvider>
    </GlobalToolsContextProvider>
  </BrowserRouter>
);
