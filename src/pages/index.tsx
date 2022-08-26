import LogoImage from "@assets/images/logo.png";
import MobileApp from "@assets/images/mobile-app.png";
import AppDemoImage from "@assets/images/presentation.png";
import {
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
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
      zIndex={5}
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
      <Head>
        <title>
          Purple Notes - Create notes easily and access them whenever you want
          in the cloud
        </title>
      </Head>
      <Header />
      <Container
        display="flex"
        flexDirection="column"
        gap={20}
        minH="100vh"
        py={[20, 28, 28]}
      >
        <Flex
          flexDirection={["column", "column", "row"]}
          justifyContent={["center", "center", "space-between"]}
          alignItems={["flex-start", "flex-start", "center"]}
          gap={5}
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
            <NextLink href="/register">
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
            </NextLink>
          </Flex>
          <Flex mt={[15, 0, 0]} justifyContent="center">
            <Image src={AppDemoImage} alt="Demo" width={600} height={300} />
          </Flex>
        </Flex>

        <Flex
          flexDirection={["column", "column", "row"]}
          justifyContent={["center", "space-between", "space-between"]}
          alignItems={["flex-start", "flex-start", "center"]}
          gap={[12, 0, 0]}
        >
          <Flex
            w="full"
            mt={[15, 0, 0]}
            justifyContent={["center", "flex-start", "flex-start"]}
          >
            <Image src={MobileApp} alt="Mobile app" w="full" />
          </Flex>
          <Flex
            direction="column"
            gap={5}
            minW={[0, 0, 400, 550]}
            mt={[14, 14, 0, 0]}
          >
            <Heading as="h1">Download purple notes app</Heading>
            <Text as="p">
              Install Expo Go and launch purple notes directly from your mobile.
            </Text>
            <Link href="https://expo.dev/@josuenm/purple-notes" target="_blank">
              <Button
                textTransform="uppercase"
                bgColor="black"
                color="white"
                _hover={{
                  color: "white",
                  bgColor: "gray.800",
                }}
                maxW={300}
              >
                Access mobile app
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
