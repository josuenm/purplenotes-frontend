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
} from "@chakra-ui/react";
import { NextPage } from "next";
import NextImage from "next/image";
import NextLink from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import NoteCard from "src/components/NoteCard";

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
            Josué
          </MenuButton>
          <MenuList>
            <NextLink href="/dashboard/userEdit">
              <MenuItem>User edit</MenuItem>
            </NextLink>
            <MenuItem>Exit</MenuItem>
          </MenuList>
        </Menu>
      </Container>
    </Box>
  );
};

const Dashboard: NextPage = () => {
  const notes = [
    {
      _id: 1,
      title: "New note",
      body: "<p>New note hahahaha</p>",
    },
    {
      _id: 2,
      title: "New note",
      body: "<p>New note hahahaha</p>",
    },
    {
      _id: 3,
      title: "New note",
      body: "<p>New note hahahaha</p>",
    },
    {
      _id: 4,
      title: "New note",
      body: "<p>New note hahahaha</p>",
    },
    {
      _id: 5,
      title: "New note",
      body: "<p>New note hahahaha</p>",
    },
    {
      _id: 6,
      title: "New note",
      body: "<p>New note hahahaha</p>",
    },
  ];

  return (
    <>
      <Header />
      <Flex
        bgColor="violet.600"
        w="100%"
        py={24}
        justify="center"
        align="center"
      >
        <Button>Create new note</Button>
      </Flex>
      <Container py={12}>
        <Heading fontSize={21}>Notes:</Heading>

        <Flex
          w={["full", "full", "fit-content"]}
          mx="auto"
          mt={12}
          direction={["column", "column", "row"]}
          gap={5}
          flexWrap="wrap"
        >
          {notes.map((item) => (
            <NoteCard note={item} key={item._id} />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default Dashboard;
