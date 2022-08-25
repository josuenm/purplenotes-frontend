import { Flex, Spinner } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(255,255,255,.9)",
        }}
        key={isLoading ? "active" : undefined}
        initial={{ zIndex: -5, opacity: 0 }}
        animate={
          isLoading ? { zIndex: 5, opacity: 1 } : { zIndex: -5, opacity: 0 }
        }
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Flex w="full" h="100vh" justify="center" align="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="violet.600"
            size="xl"
          />
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
