import { Background, Spinner } from "./styles";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ toggle }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={toggle}
        initial={{ opacity: 0 }}
        animate={toggle ? { opacity: 1 } : { opacity: 0, display: "none" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Background>
          <Spinner />
        </Background>
      </motion.div>
    </AnimatePresence>
  );
};

export { LoadingScreen };
