import { useSelector } from "react-redux";
import { NewNoteInput } from "./NewNoteInput";
import { NotesState } from "../noteReducer";
import { addNote } from "../actions";
import { useDispatch } from "react-redux";
import { Observable } from "rxjs";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(state => state.notes)
  const dispatch = useDispatch()

  const observable = new Observable((observer) => {
    try {
      observer.next("How")
      observer.next("are")
      observer.next("You")
      setInterval(() => {
        observer.next("From setinterval")
      }, 2000)
      observer.complete()      
    } catch (error) {
      observer.error(error)
    }
  })

  // const observer = observable.subscribe(
  //   (n) => console.log(n),
  //   (error) => console.log(error),
  //   () => console.log("Subscription completed")
  // )

  // Passin a function
  const observer = observable.subscribe((n) => {
    console.log(n);
  })

  // setTimeout(() => {
  //   observer.unsubscribe()
  // }, 6000)





   
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