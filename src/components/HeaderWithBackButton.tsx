import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const HeaderWithBackButton = ({ returnTo }: { returnTo: string }) => {
  return (
    <Box
      borderBottomWidth={1}
      borderBottomColor="gray.200"
      position="fixed"
      w="full"
      py={3}
      zIndex={2}
      bgColor="whiteOpacity"
      __css={{ backdropFilter: "blur(6px)" }}
    >
      <Container>
        <NextLink href={returnTo}>
          <Flex
            align="center"
            gap={2}
            cursor="pointer"
            w="fit-content"
            px={2}
            py={1}
            borderRadius="md"
            _hover={{
              transition: "ease .4s background-color",
              bgColor: "#ddd",
            }}
          >
            <Icon as={IoIosArrowBack} />
            <Text>Back</Text>
          </Flex>
        </NextLink>
      </Container>
    </Box>
  );
};

export default HeaderWithBackButton;
