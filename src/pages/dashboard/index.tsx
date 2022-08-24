import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import NoteCard from "src/components/NoteCard";

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
  ];

  return (
    <>
      <Flex
        bgColor="violet.600"
        w="100%"
        py={16}
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
