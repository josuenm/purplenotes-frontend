import { Container } from "./styles";
import { motion, AnimatePresence } from "framer-motion";

const PopUpError = ({ error }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={!!error}
        style={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "999",
        }}
        initial={{
          bottom: -200,
          opacity: 0,
        }}
        animate={
          !!error
            ? {
                bottom: 70,
                opacity: 1,
              }
            : { bottom: -200, opacity: 0, display: "none" }
        }
        exit={{ bottom: -200, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Container>{error}</Container>
      </motion.div>
    </AnimatePresence>
  );
};

export { PopUpError };
