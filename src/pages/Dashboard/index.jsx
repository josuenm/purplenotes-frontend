import { Container } from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { NotesServices } from "../../services/axios/notes";
import { Editor } from "../../components/Editor";
import { useContext } from "react";
import { GlobalToolsContext } from "../../contexts/globalToolsContext";
import { NotesContext } from "../../contexts/notesContext";

export function Dashboard() {
  const { sidebarIsOpen } = useContext(GlobalToolsContext);
  const { update } = useContext(NotesContext);

  const updateNote = async (oldNote, params) => {
    const updatedNote = await update(oldNote.id, params);
  };

  return (
    <Container>
      {sidebarIsOpen && <Sidebar />}

      <Editor updateNote={updateNote} />
    </Container>
  );
}
