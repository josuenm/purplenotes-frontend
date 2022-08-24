import LogoImage from "@assets/images/logo.png";
import AppDemoImage from "@assets/images/presentation.png";
import {
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import NextImage from "next/image";
import NextLink from "next/link";

const Image = chakra(NextImage, {
  baseStyle: { maxH: 700, maxW: 700 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});

const Header = () => {
  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      py={2}
      px={2}
      w="full"
      borderBottomWidth={1}
      borderBottomColor="gray.300"
      bgColor="whiteOpacity"
      __css={{ backdropFilter: "blur(6px)" }}
    >
      <Container display="flex" justifyContent="space-between">
        <Image src={LogoImage} alt="Logo" width={150} height={25} />
        <NextLink href="/login">
          <Button
            borderWidth={1}
            borderColor="violet.600"
            color="violet.600"
            _hover={{
              color: "white",
              bgColor: "violet.600",
            }}
            variant="outline"
          >
            Login
          </Button>
        </NextLink>
      </Container>
    </Flex>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container
        display="flex"
        flexDirection={["column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        alignItems={["flex-start", "flex-start", "center"]}
        gap={5}
        h="100vh"
      >
        <Flex direction="column" gap={5} maxW={500}>
          <Heading as="h1">
            Create notes easily and access them whenever you want in the cloud
          </Heading>
          <Text as="p">
            Now you have a place to keep your notes! With our service you can
            save your notes for free and access them whenever and wherever you
            want! Your notes will always be available and safely stored
          </Text>
          <Button
            textTransform="uppercase"
            borderWidth={1}
            borderColor="violet.600"
            color="violet.600"
            _hover={{
              color: "white",
              bgColor: "violet.600",
            }}
            maxW={300}
            variant="outline"
          >
            Register for free now
          </Button>
        </Flex>
        <Flex mt={[15, 0, 0]} justifyContent="center">
          <Image src={AppDemoImage} alt="Demo" width={600} height={300} />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
