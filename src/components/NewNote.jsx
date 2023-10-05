import "../App.css";
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { createNote } from '../reducers/noteReducer/noteReducer';
// import { setNotification } from '../reducers/notificationReducer/notificationReducer';
import useNewNote from "../customHooks/useNewNote";

const NewNote = () => {
  // const navigate = useNavigate()

  // const dispatch = useDispatch()

  //   // event.target.NOTE.value -- note comes from the name value on the input of the addToDo form; note
  //   const addNote = async (event) => {
  //       event.preventDefault()
  //       const content = event.target.note.value
  //       event.target.note.value = ''
  //       dispatch(createNote(content))
  //       navigate('/notes')
  //       dispatch(setNotification(`you added ${content}`))
  //   }
  const note = useNewNote();

  return (
    // <form onSubmit={addNote}>
    <form onSubmit={note.addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewNote;
