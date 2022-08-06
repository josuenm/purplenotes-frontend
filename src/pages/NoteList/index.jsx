import { SafeZone } from "../../components/SafeZone";
import { useContext, useEffect } from "react";
import { NotesContext } from "../../contexts/notesContext";
import { Link } from "react-router-dom";
import { DashboardHeader } from "../../components/DashboardHeader";
import Moment from "moment";
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
  const { notes, create, list } = useContext(NotesContext);

  useEffect(() => {
    list();
  }, []);

  return (
    <Container>
      <Presentation>
        <SafeZone>
          <DashboardHeader />
          <CreateNoteButton onClick={create}>Create Note</CreateNoteButton>
        </SafeZone>
      </Presentation>

      <SafeZone>
        <ListContainer>
          <ListTitle>Note list</ListTitle>
          <ListOfNotesContainer>
            {notes.length > 0 ? (
              notes.map((note) => <Card note={note} key={note._id} />)
            ) : (
              <Warning title="Nothing to list" />
            )}
          </ListOfNotesContainer>
        </ListContainer>
      </SafeZone>
    </Container>
  );
};
