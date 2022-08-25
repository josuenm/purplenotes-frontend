import { Box, ChakraProvider } from "@chakra-ui/react";
import { GlobalToolsProvider } from "@contexts/GlobalTools";
import theme from "@utils/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalToolsProvider>
        <Box as="main" bgColor="#eee" minH="100vh" minW="full">
          <Component {...pageProps} />
        </Box>
      </GlobalToolsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
