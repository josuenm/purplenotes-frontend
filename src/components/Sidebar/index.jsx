import { Container, SidebarHeader } from "./styles";
import Moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import { NotesServices } from "../../services/axios/notes";
import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/notesContext";
import { GlobalToolsContext } from "../../contexts/globalToolsContext";

export function Sidebar() {
  const [searchState, setSearchState] = useState("");

  const { 
    notes, 
    currentNote, 
    handleCurrentNote, 
    create, 
    search, 
    delete 
  } = useContext(NotesContext);

  const { sidebarIsOpen, handleSidebar } = useContext(GlobalToolsContext);

  const searchNote = async (e) => {
    if (e.key === "Enter") {
      search(searchState);
    }
  };

  const formatTitle = (title) => {
    if (title.length >= 20) {
      return title.substring(0, 20) + "...";
    }
    return title;
  };

  const formatBody = (body) => {
    let newBody = body.replace(/<(.|\n)*?>/gi, "").slice(0, 20);

    if (newBody.length >= 20) {
      return newBody.substring(0, 20) + "...";
    }
    return newBody;
  };

  return (
    <Container className={sidebarIsOpen ? "active" : ""}>
      <SidebarHeader>
        <input
          type="text"
          value={searchState}
          placeholder="Search"
          onChange={({ target }) => setSearchState(target.value)}
          onKeyPress={searchNote}
        />

        <div className="sidebar__info">
          <p className="sidebar__numberOfNotes">
            {notes.length} {notes.length === 1 ? "Note" : "Notes"}
          </p>
          <button onClick={() => create()}>New note</button>
        </div>
      </SidebarHeader>
      <ul>
        {notes.map((note) => (
          <li
            key={note._id}
            onClick={() => {
              handleCurrentNote(note);
              handleSidebar(false);
            }}
          >
            <p className="sidebar__noteTitle">{formatTitle(note.title)}</p>
            <p className="sidebar__notePreview">{formatBody(note.body)}</p>

            <div className="sidebar__noteInfo">
              <span className="sidebar__noteDate">
                {Moment(note.created_at).format("DD/MM")}
              </span>
              <DeleteIcon className="sidebar__deleteIcon" />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
