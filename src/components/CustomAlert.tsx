import { Alert, AlertIcon, AlertStatus, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

interface AlertProps {
  status: AlertStatus;
  message: string;
}

interface CustomAlertProps {
  alert: AlertProps | undefined;
}

export const CustomAlert = ({ alert }: CustomAlertProps) => {
  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: "fixed",
          zIndex: 3,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        key={alert?.status}
        initial={{ bottom: -50 }}
        animate={!!alert ? { bottom: 25 } : { bottom: -50 }}
        exit={{ bottom: -50 }}
        transition={{ duration: 0.4 }}
      >
        <Alert
          status={alert && alert.status}
          borderRadius="lg"
          w={["full", "full", "fit-content"]}
        >
          <AlertIcon />
          {alert && <Text>{alert.message}</Text>}
        </Alert>
      </motion.div>
    </AnimatePresence>
  );
};
