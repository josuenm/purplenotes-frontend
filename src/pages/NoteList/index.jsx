import {
  AccessButton,
  ButtonSet,
  Container,
  CreateNoteButton,
  DeleteButton,
  ListContainer,
  ListOfNotesContainer,
  ListTitle,
  NoteCard,
  NoteCardDate,
  NoteCardDescription,
  NoteCardInfo,
  NoteCardTitle,
  Presentation,
  WarningContainer,
  WarningText,
} from "./styles";
import { SafeZone } from "../../components/SafeZone";
import { useContext } from "react";
import { NotesContext } from "../../contexts/notesContext";
import { Link } from "react-router-dom";
import Moment from "moment";

export const Warning = ({ title }) => {
  return (
    <WarningContainer>
      <WarningText>{title}</WarningText>
    </WarningContainer>
  );
};

export const Card = ({ note }) => {
  const formatedTitle = (title) => {
    if (title.length >= 20) {
      return title.substring(0, 20) + "...";
    }
    return title;
  };

  const formatedBody = (body) => {
    let newBody = body.replace(/<(.|\n)*?>/gi, "").slice(0, 20);

    if (newBody.length >= 20) {
      return newBody.substring(0, 20) + "...";
    }
    return newBody;
  };

  const { deleteNote } = useContext(NotesContext);

  return (
    <NoteCard>
      <NoteCardInfo>
        <NoteCardTitle>{formatedTitle(note.title)}</NoteCardTitle>
        <NoteCardDescription>{formatedBody(note.body)}</NoteCardDescription>
        <NoteCardDate>
          Created at {Moment(note.created_at).format("DD/MM")}
        </NoteCardDate>
      </NoteCardInfo>
      <ButtonSet>
        <Link to={`/dashboard/${note._id}/edit`}>
          <AccessButton>Access</AccessButton>
        </Link>
        <DeleteButton onClick={() => deleteNote(note._id)}>Delete</DeleteButton>
      </ButtonSet>
    </NoteCard>
  );
};

export const NoteList = () => {
  const { notes, create } = useContext(NotesContext);

  return (
    <Container>
      <Presentation>
        <SafeZone>
          <CreateNoteButton onClick={create}>Create Note</CreateNoteButton>
        </SafeZone>
      </Presentation>
      <SafeZone>
        <ListContainer>
          <ListTitle>Note list</ListTitle>
          <ListOfNotesContainer>
            {/* {notes.length > 0 ? (
              notes.map((note) => <Card data={note} key={note._id} />)
            ) : (
              <Warning title="Nothing to list" />
            )} */}
            {notes.length > 0 ? (
              notes.map((note) => <Card note={note} key={note._id} />)
            ) : (
              <></>
            )}
          </ListOfNotesContainer>
        </ListContainer>
      </SafeZone>
    </Container>
  );
};
