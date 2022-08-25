import LogoImage from "@assets/images/white-logo.png";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { NotesContext } from "@contexts/NotesContext";
import { UserContext } from "@contexts/UserContext";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import NoteCard from "src/components/NoteCard";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "purplenotes.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

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
  const { Exit, user } = useContext(UserContext);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={2}
      bgColor="violetOpacity"
      borderBottomWidth={1}
      borderBottomColor="violet.500"
      __css={{ backdropFilter: "blur(6px)" }}
    >
      <Container py={2} display="flex" justifyContent="space-between">
        <Image src={LogoImage} alt="Logo" width={160} height={25} />
        <Menu>
          <MenuButton
            as={Button}
            style={{ backgroundColor: "transparent" }}
            color="white"
            borderWidth={1}
            borderColor="white"
            rightIcon={<IoMdArrowDropdown />}
          >
            {user && user?.name.length > 6
              ? user?.name.substring(0, 6) + "..."
              : user?.name}
          </MenuButton>
          <MenuList>
            <NextLink href="/dashboard/userEdit">
              <MenuItem>User edit</MenuItem>
            </NextLink>
            <MenuItem onClick={Exit}>Exit</MenuItem>
          </MenuList>
        </Menu>
      </Container>
    </Box>
  );
};

const Dashboard: NextPage = () => {
  const { List, Create, notes } = useContext(NotesContext);

  useEffect(() => {
    List();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard | Purple Notes</title>
      </Head>
      <Header />
      <Flex
        bgColor="violet.600"
        w="100%"
        py={24}
        justify="center"
        align="center"
      >
        <Button onClick={Create}>Create new note</Button>
      </Flex>
      <Container py={12}>
        <Heading fontSize={21}>Notes:</Heading>

        <Flex
          w={["full", "full", "full"]}
          mx="auto"
          mt={12}
          direction={["column", "column", "row"]}
          justify="center"
          gap={[5, 5, 16]}
          flexWrap="wrap"
        >
          {notes.length >= 1 ? (
            notes.map((item) => <NoteCard note={item} key={item._id} />)
          ) : (
            <Flex w="full" justify="center">
              <Text textAlign="center">Nothing to list</Text>
            </Flex>
          )}
        </Flex>
      </Container>
    </>
  );
};

export default Dashboard;
