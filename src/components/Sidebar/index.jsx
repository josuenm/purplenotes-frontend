import { Container } from "./styles"
import Moment from "moment"
import DeleteIcon from '@mui/icons-material/Delete';
import { NotesServices } from "../../services/notes"
import { useState } from "react";
import { closeSidebar } from "../../redux/slices/popUpSlice";
import { currentNote, updateNotes, selectNotes } from "../../redux/slices/notesSlice";
import { useDispatch, useSelector } from "react-redux";

export function Sidebar({isOpen, getNotes}) {

    const notes = useSelector(selectNotes)
    const dispatch = useDispatch()

    const [search, setSearch] = useState("")

    const newNote = async () => {
        try {
            await NotesServices.create()
            getNotes()
        } catch(e) {
            console.log(e)
        }
    }

    const deleteNote = async (id) => {
        await NotesServices.deleteNote(id)
        getNotes()
    }

    const searchNote = async (e) => {
        if(e.key === 'Enter') {
            const response = await NotesServices.search(search)
            dispatch(updateNotes(response.data))
        }
    }

    const formatTitle = (title) => {
        if(title.length >= 20) {
            return title.substring(0, 20) + "..."
        } else {
            return title
        }
    }

    const formatBody = (body) => {
        let newBody = body.replace(/<(.|\n)*?>/ig, "").slice(0,20)
        
        if(newBody.length >= 20) {
            return newBody.substring(0, 20) + "..."
        } else {
            return newBody
        }
    }

    return (
        <Container className={isOpen ? 'active' : ''}>
            <input 
            type="text" 
            value={search} 
            placeholder="Search" 
            onChange={({target}) => setSearch(target.value)} 
            onKeyPress={searchNote}
            />

            <div className="sidebar__info">
                <p className="sidebar__numberOfNotes">{notes.length} Notes</p>
                <button onClick={newNote}>New note</button>
            </div>
            <ul>
                {
                    notes.map((note) => (
                        <li key={note._id} onClick={() => {
                            dispatch(currentNote({title: note.title, body: note.body, id: note._id}))
                            dispatch(closeSidebar())
                        }}>
                            <p className="sidebar__noteTitle">{formatTitle(note.title)}</p>
                            <p className="sidebar__notePreview">{formatBody(note.body)}</p>
                            
                            <div className="sidebar__noteInfo">
                                <span className="sidebar__noteDate">
                                    {Moment(note.created_at).format('DD/MM')}
                                </span>
                                <DeleteIcon 
                                className="sidebar__deleteIcon" 
                                onClick={() => deleteNote(note._id)} />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </Container>
    )
}