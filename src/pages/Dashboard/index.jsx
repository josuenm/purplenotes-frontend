import { Container } from "./styles"
import { Sidebar } from "../../components/Sidebar"
import { useCallback, useEffect } from "react"
import { NotesServices } from "../../services/notes"
import { Editor } from "../../components/Editor"
import { useSelector } from "react-redux"
import { selectSidebar } from "../../redux/slices/popUpSlice"
import { updateNotes, currentNote, clearCurrentNote } from "../../redux/slices/notesSlice"
import { useDispatch } from "react-redux"

export function Dashboard() {
    const dispatch = useDispatch()
    const sidebarState = useSelector(selectSidebar)

    const getNotes = useCallback(( async () => {
        const response = await NotesServices.allNotes()
        if(response.data.length > 0) {
            dispatch(updateNotes(response.data.reverse()))
            const firstData = {
                title: response.data[0].title,
                body: response.data[0].body,
                id: response.data[0]._id
            }
            dispatch(currentNote(firstData))
        } else {
            dispatch(updateNotes([]))
            dispatch(clearCurrentNote())
        }
    }), [dispatch])

    const updateNote = async (oldNote, params) => {
        const updatedNote = await NotesServices.update(oldNote.id, params)
        
        const newNote = {
            title: updatedNote.data.title, 
            body: updatedNote.data.body,
            id: updatedNote.data._id
        }

        await getNotes(newNote)
    }

    useEffect(()=> {
        getNotes()
    }, [getNotes])

    return (
        <Container>
            <Sidebar isOpen={sidebarState} getNotes={getNotes} />

            <Editor classN={sidebarState ? 'active' : ''} updateNote={updateNote}/>
        </Container>
    )
}