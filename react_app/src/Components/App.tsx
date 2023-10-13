import { useSelector } from "react-redux";
import { NewNoteInput } from "./NewNoteInput";
import { NotesState } from "../noteReducer";
import { addNote } from "../actions";
import { useDispatch } from "react-redux";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(state => state.notes)
  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }

  return (
    <>
      <NewNoteInput addNote={onAddNote}/>
      <hr />
      <ul>
        {notes.map(note => {
       return <li key={note}>{note}</li>
        })}
      </ul>
    </>
  );
}

export default App;

{/* <div className="App">
<header className="App-header">
   qwewreret
</header>
</div> */}