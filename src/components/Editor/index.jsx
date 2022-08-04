import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentNote } from "../../redux/slices/notesSlice";
import { closeSidebar, selectSidebar } from "../../redux/slices/popUpSlice"

import { Container } from "./styles"

export function Editor({classN, updateNote}) {
  
  const sidebarState = useSelector(selectSidebar)
  const currentNoteState = useSelector(selectCurrentNote)
  const dispatch = useDispatch()

  const [currentContent, setCurrentContent] = useState('');

  const [timer, setTimer] = useState(null)

  useEffect(() => {
    setCurrentContent(currentNoteState.body)
  }, [currentNoteState])

  const update = (content) => {
    const title = content.replace(/<(.|\n)*?>/ig, "").slice(0,30)
    updateNote(currentNoteState, {'title': title, 'body': content})
  }

  const handleChange = (content, delta, source) => {
    clearTimeout(timer)
    if(source === 'user') {
      setCurrentContent(content)
      setTimer(setTimeout(() => update(content), 2000))
    }
  }

  return (
    <Container 
    onClick={() => sidebarState && dispatch(closeSidebar())} 
    className={sidebarState ? 'active' : ''}>

      <ReactQuill 
      theme="snow" 
      value={currentContent} 
      className={`editor ${classN}`}
      onChange={handleChange}
      />
      
    </Container>
  );
}