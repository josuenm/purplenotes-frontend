import { Container } from "./styles";
import { SafeZone } from "../../components/SafeZone";
import { NotesServices } from "../../services/axios/notes";
import { Editor } from "../../components/Editor";
import { useCallback, useContext, useEffect } from "react";
import { GlobalToolsContext } from "../../contexts/globalToolsContext";
import { NotesContext } from "../../contexts/notesContext";

export function EditNote() {
  const { sidebarIsOpen } = useContext(GlobalToolsContext);
  const { update } = useContext(NotesContext);

  const updateNote = async (oldNote, params) => {
    const updatedNote = await update(oldNote.id, params);
  };

  return (
    <Container>
      <SafeZone>
        <Editor updateNote={updateNote} />
      </SafeZone>
    </Container>
  );
}
