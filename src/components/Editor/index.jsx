import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import { NotesContext } from "../../contexts/notesContext";

import { Container } from "./styles";
import { GlobalToolsContext } from "../../contexts/globalToolsContext";

export function Editor({ updateNote }) {
  const [currentContent, setCurrentContent] = useState("");
  const [timer, setTimer] = useState(null);

  const { currentNote } = useContext(NotesContext);
  const { sidebarIsOpen } = useContext(GlobalToolsContext);

  const update = (content) => {
    const title = content.replace(/<(.|\n)*?>/gi, "").slice(0, 30);
    updateNote(currentNote, { title: title, body: content });
  };

  const handleChange = (content, delta, source) => {
    clearTimeout(timer);
    if (source === "user") {
      setCurrentContent(content);
      setTimer(setTimeout(() => update(content), 2000));
    }
  };

  useEffect(() => {
    if (currentNote) {
      setCurrentContent(currentNote.body);
    }
  }, [currentNote]);

  return (
    <Container>
      <ReactQuill
        theme="snow"
        value={currentContent}
        className={sidebarIsOpen ? "editor active" : "editor"}
        onChange={handleChange}
      />
    </Container>
  );
}
