import { useState } from "react"

const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('')
    const limit = 150

    const handleChange = (e) => {
        if (limit - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }
    }

    const handleSave = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }


    return (
        <div className="note new">
            <textarea cols="10" rows="8" placeholder="Type to add new note..." onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <span>{limit - noteText.length} remaining</span>
                <button className="save" onClick={handleSave}>Save</button>
            </div>

        </div>
    )
}

export default AddNote