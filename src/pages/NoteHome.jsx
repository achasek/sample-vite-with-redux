// import NewNote from '../components/NewNote';
import Notes from "../components/Notes";
import NotesFilter from "../components/NotesFilter";
import SearchBar from "../components/SearchBar";
import Notification from "../components/Notification";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { initializeNotes } from "../reducers/noteReducer/noteReducer";

const NoteHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, []);

  return (
    <>
      <h1>Notes</h1>
      <Notification />
      {/* <NewNote /> */}
      <Link to="/notes/create">Add Note</Link>
      <SearchBar />
      <NotesFilter />
      <Notes />
    </>
  );
};

export default NoteHome;
