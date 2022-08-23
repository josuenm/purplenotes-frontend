import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Montserrat', sans-serif",
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  components: {
    Container: {
      baseStyle: {
        maxWidth: 1100,
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "medium",
      },
    },
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
