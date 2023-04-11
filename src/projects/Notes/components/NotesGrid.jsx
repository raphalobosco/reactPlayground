import AddNote from "./AddNote"
import Note from "./Note"

const NotesGrid = ({ notes, handleAddNote, handleDelete }) => {
    return (
        <div className="noteList">
            {notes.map((note) => <Note id={note.id} text={note.text} date={note.date} handleDelete={handleDelete} />)}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesGrid