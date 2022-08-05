import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { NotesContext } from "../../contexts/notesContext";
import { Container } from "./styles";
import { useLocation } from "react-router-dom";
import { GlobalToolsContext } from "../../contexts/globalToolsContext";
import "react-quill/dist/quill.snow.css";

export function Editor({ updateNote }) {
  const [currentContent, setCurrentContent] = useState("");
  const [timer, setTimer] = useState(null);

  const { currentNote, findById } = useContext(NotesContext);
  const { handleLoading } = useContext(GlobalToolsContext);

  const { pathname } = useLocation();

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
    findById(pathname.replace("/dashboard/", "").replace("/edit", ""));
  }, []);

  useEffect(() => {
    if (currentNote) {
      setCurrentContent(currentNote.body);
      handleLoading(false);
    } else {
      handleLoading(true);
    }
  }, [currentNote]);

  return (
    <Container>
      <ReactQuill
        theme="snow"
        value={currentContent}
        className="editor"
        onChange={handleChange}
      />
    </Container>
  );
}
