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

const Home: NextPage = () => {
  return (
    <Container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={5}
      h="100vh"
    >
      <Flex direction="column" gap={5} maxW={500}>
        <Heading as="h1">
          Create notes easily and access them whenever you want in the cloud
        </Heading>
        <Text as="p">
          Now you have a place to keep your notes! With our service you can save
          your notes for free and access them whenever and wherever you want!
          Your notes will always be available and safely stored
        </Text>
        <Button textTransform="uppercase" colorScheme="violet">
          Register for free now
        </Button>
      </Flex>
      <Flex alignItems="flex-end">
        <Image src={AppDemoImage} alt="Demo" width={600} height={300} />
      </Flex>
    </Container>
  );
};

export default Home;
