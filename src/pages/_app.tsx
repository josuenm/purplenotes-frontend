import { Box, ChakraProvider } from "@chakra-ui/react";
import { GlobalToolsContextProvider } from "@contexts/GlobalToolsContext";
import { NotesContextProvider } from "@contexts/NotesContext";
import { UserContextProvider } from "@contexts/UserContext";
import theme from "@utils/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalToolsContextProvider>
        <UserContextProvider>
          <NotesContextProvider>
            <Box as="main" bgColor="#eee" minH="100vh" minW="full">
              <Component {...pageProps} />
            </Box>
          </NotesContextProvider>
        </UserContextProvider>
      </GlobalToolsContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
