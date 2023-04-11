import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NotesGrid from './components/NotesGrid'
import './notes.scss'

const Notes = () => {

    const [notes, setNotes] = useState([{
        id: uuidv4(),
        text: 'Title',
        date: '13/04/2023'
    },
    {
        id: uuidv4(),
        text: 'Title 02',
        date: '13/04/2023'
    },
    {
        id: uuidv4(),
        text: 'Title 03',
        date: '13/04/2023'
    },
    ])

    const addNote = (text) => {
        const date = new Date()
        const newNote = {
            id: uuidv4(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id)
        setNotes(newNotes)
    }




    return (
        <div>
            <NotesGrid
                notes={notes}
                handleAddNote={addNote}
                handleDelete={deleteNote}
            />
        </div>
    )
}

export default Notes