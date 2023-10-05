import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNote } from "../reducers/noteReducer/noteReducer";
import { setNotification } from "../reducers/notificationReducer/notificationReducer";

const useNewNote = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // event.target.NOTE.value -- note comes from the name value on the input of the addToDo form; note
  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    dispatch(createNote(content));
    navigate("/notes");
    dispatch(setNotification(`you added ${content}`));
  };

  return {
    addNote,
  };
};

export default useNewNote;
