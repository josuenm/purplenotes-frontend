import { AlertStatus } from "@chakra-ui/react";
import { createContext, useRef, useState } from "react";
import { CustomAlert } from "src/components/CustomAlert";
import LoadingScreen from "src/components/LoadingScreen";

interface ProviderProps {
  children: React.ReactNode;
}

interface GlobalToolsContextProps {
  handleAlert: (status: AlertStatus, message: string) => void;
  handleLoading: (value: boolean) => void;
}

interface AlertProps {
  status: AlertStatus;
  message: string;
}

export const GlobalToolsContext = createContext({} as GlobalToolsContextProps);

export const GlobalToolsContextProvider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertProps | undefined>(undefined);

  const alertTimeout = useRef<NodeJS.Timeout | null>(null);

  function handleAlert(status: AlertStatus, message: string) {
    setAlert({ status, message });

    alertTimeout.current = setTimeout(() => {
      setAlert(undefined);
    }, 4000);
  }

  function handleLoading(value: boolean) {
    setIsLoading(value);
  }

  return (
    <GlobalToolsContext.Provider value={{ handleAlert, handleLoading }}>
      <LoadingScreen isLoading={isLoading} />
      <CustomAlert alert={alert} />
      {children}
    </GlobalToolsContext.Provider>
  );
};
