import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { NotesContext } from "@contexts/NotesContext";
import { useContext } from "react";
import { NoteProps } from "../types/NoteProps";

interface NoteCardProps {
  note: NoteProps;
}

const NoteCard = ({ note }: NoteCardProps) => {
  const formatedTitle = (title: string) => {
    if (title.length >= 20) {
      return title.substring(0, 20) + "...";
    }
    return title;
  };

  const formatedBody = (body: string) => {
    let newBody = body.replace(/<(.|\n)*?>/gi, "").slice(0, 20);

    if (newBody.length >= 20) {
      return newBody.substring(0, 20) + "...";
    }
    return newBody;
  };

  const { Delete } = useContext(NotesContext);

  return (
    <Box
      w={["full", "full", 80]}
      borderWidth={1}
      borderColor="gray.400"
      p={5}
      borderRadius="2xl"
    >
      <Heading fontSize={21}>{formatedTitle(note.title)}</Heading>
      <Text>{formatedBody(note.body)}</Text>

      <Flex mt={5} direction="column" gap={2}>
        <Button colorScheme="violet">Access</Button>
        <Button colorScheme="red" onClick={() => Delete(note._id)}>
          Delete
        </Button>
      </Flex>
    </Box>
  );
};

export default NoteCard;
