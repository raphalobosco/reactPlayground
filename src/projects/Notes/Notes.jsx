import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NotesGrid from './components/NotesGrid'
import './notes.scss'
import Search from './components/Search'

const Notes = () => {

    const [notes, setNotes] = useState(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
        return savedNotes ? savedNotes :
            [
                {
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
            ]
    });


    // Handle search
    const [search, setSearch] = useState('')


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



    // //Retrieve Data
    // useEffect(() => {
    //     const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    //     if (savedNotes) {
    //         setNotes(savedNotes);
    //     }
    // }, []);

    //Save to LocalStorage
    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        );
    }, [notes]);


    return (
        <div>
            <h1 className='title'>Notes App</h1>
            <Search handleSearch={setSearch} />
            <NotesGrid
                notes={notes.filter((note) => note.text.toLowerCase().includes(search))}
                handleAddNote={addNote}
                handleDelete={deleteNote}
            />
        </div>
    )
}

export default Notes;