import { createContext, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { PopUpError } from "../components/PopUpError";
import { motion, AnimatePresence } from "framer-motion";

export const GlobalToolsContext = createContext(null);

export const GlobalToolsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleLoading(value) {
    setIsLoading(value);
  }

  return (
    <GlobalToolsContext.Provider value={{ handleLoading }}>
      {isLoading && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LoadingScreen />
          </motion.div>
        </AnimatePresence>
      )}
      {children}
    </GlobalToolsContext.Provider>
  );
};
