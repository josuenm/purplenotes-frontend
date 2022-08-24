import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "@utils/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box as="main" bgColor="#eee">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
