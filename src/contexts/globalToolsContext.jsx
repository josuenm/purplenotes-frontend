import { createContext, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { PopUpError } from "../components/PopUpError";

export const GlobalToolsContext = createContext(null);

export const GlobalToolsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [error, setError] = useState(null);

  function handleLoading(value) {
    setIsLoading(value);
  }

  function handleSidebar(value) {
    setSidebarIsOpen(value);
  }

  function handleError(message) {
    setError(message);

    setTimeout(() => {
      setError(null);
    }, 6000);
  }

  return (
    <GlobalToolsContext.Provider
      value={{ handleLoading, sidebarIsOpen, handleSidebar, handleError }}
    >
      <LoadingScreen toggle={isLoading} />
      <PopUpError error={error} />
      {children}
    </GlobalToolsContext.Provider>
  );
};
