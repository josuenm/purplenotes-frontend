import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Montserrat', sans-serif",
  },

  colors: {
    violetOpacity: "rgba(147, 51, 234,.5)",
    whiteOpacity: "rgba(238, 238, 238,.5)",
    violet: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
    },
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
    Input: {
      defaultProps: {
        focusBorderColor: "violet.600",
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
    Button: {
      colorScheme: {
        violet: {
          bgColor: "violet.600",
          color: "white",
          _hover: {
            bgColor: "violet.400",
          },
        },
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: 15,
      },
    },
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
