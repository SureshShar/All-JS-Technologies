import { ChangeEvent, useState } from "react";
// import "../app"

interface NewNoteInputProps {
    addNote(note: string): void
}

export const NewNoteInput: React.FC<NewNoteInputProps> = (props) => {
    const [note, setNote] = useState("");

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setNote(event.target.value)
    }

    const onAddNoteClick = () => {
        console.log("Button clicked", props.addNote)
        props.addNote(note);
        setNote("");
    }

    return (
        <div>
            <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note" />
            <button onClick={onAddNoteClick}>Add note</button>
        </div>
    )
}