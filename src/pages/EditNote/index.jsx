import Head from "../../components/Head";
import { Container, WarningText } from "./styles";
import { SafeZone } from "../../components/SafeZone";
import { NotesServices } from "../../services/axios/notes";
import { Editor } from "../../components/Editor";
import { useCallback, useContext, useEffect } from "react";
import { GlobalToolsContext } from "../../contexts/globalToolsContext";
import { NotesContext } from "../../contexts/notesContext";
import { GoBackHeader } from "../../components/GoBackHeader";

export function EditNote() {
  const { sidebarIsOpen } = useContext(GlobalToolsContext);
  const { update } = useContext(NotesContext);

  const updateNote = async (oldNote, params) => {
    const updatedNote = await update(oldNote.id, params);
  };

  return (
    <Container>
      <GoBackHeader to="/dashboard" />
      <WarningText>The note is automatically saved</WarningText>

      <SafeZone>
        <Editor updateNote={updateNote} />
      </SafeZone>
    </Container>
  );
}
