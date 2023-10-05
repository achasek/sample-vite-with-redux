import "../App.css";
// import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  showNote,
  toggleImportance,
  upvote,
} from "../reducers/noteReducer/noteReducer";
import { setNotification } from "../reducers/notificationReducer/notificationReducer";
import {
  nextPage,
  previousPage,
} from "../reducers/paginationReducer/paginationReducer";
// import { Link } from 'react-router-dom';

export const Note = ({ note, handleClick, handleVote }) => {
  // useEffect(() => {
  //   dispatch(showNote())
  // }, []);

  // console.log(note)

  return (
    <li>
      {note.content}
      <br />
      has {note.votes} votes
      <button onClick={handleVote}>Upvote</button>
      <br />
      <strong> {note.important ? "important" : ""}</strong>
      <button onClick={handleClick}>Mark Important</button>
    </li>
  );
};

const Notes = () => {
  // useDispatch hook is used to reference the Redux store defined in main.jsx, defaultly named store. instead of having to import store from main and call it like store.dispatch()
  const dispatch = useDispatch();

  const curPage = useSelector((state) => state.pagination);
  const notes = useSelector((state) => state.notes);

  const notesPerPage = 3;
  const totalPages = Math.ceil(notes.length / notesPerPage);
  const startIdx = (curPage - 1) * notesPerPage;
  const endIdx = startIdx + notesPerPage;
  const notesOnPage = notes.slice(startIdx, endIdx);

  // used to return state.notes, but now this filter only filters out of notes displayed on the curPage and NOT from the entirity of the notes
  const filteredNotes = useSelector((state) => {
    if (state.filter === "ALL") {
      return notesOnPage;
    }
    return state.filter === "IMPORTANT"
      ? notesOnPage.filter((note) => note.important)
      : notesOnPage.filter((note) => !note.important);
  });

  const searchBarInput = useSelector((state) => state.search);

  const handleVote = (id, notes) => {
    dispatch(upvote(id, notes));
    dispatch(setNotification(`you voted for ${notes[id - 1].content}`));
    setTimeout(() => {
      dispatch(setNotification(""));
    }, 5000);
  };

  // makes sure that the page does not go below 0 or beyond total available pages of notes without making extra call to the backend, and notifies user of error handler with notification
  const handlePageChange = (pageNum, prevOrNext) => {
    if (prevOrNext) {
      if (pageNum === totalPages) {
        dispatch(nextPage(curPage));
        dispatch(setNotification("You've reached the last page"));
        setTimeout(() => {
          dispatch(setNotification(""));
        }, 5000);
      } else {
        dispatch(previousPage(curPage + 1));
      }
    } else {
      if (pageNum === 1) {
        dispatch(previousPage(curPage));
        dispatch(setNotification("You've reached the first page"));
        setTimeout(() => {
          dispatch(setNotification(""));
        }, 5000);
      } else {
        dispatch(previousPage(curPage - 1));
      }
    }
  };

  return (
    <>
      <ul>
        {filteredNotes
          .filter((note) => note.content.includes(searchBarInput))
          .map((note) => (
            // <li key={note.id}>
            //   <Link to={`/notes/${note.id}`}>{note.content}</Link>
            // </li>
            <Note
              key={note.id}
              note={note}
              handleClick={() => dispatch(toggleImportance(note.id, notes))}
              handleVote={() => handleVote(note.id, notes)}
            />
          ))}
      </ul>
      <button onClick={() => handlePageChange(curPage, 0)}>previous</button>
      <button onClick={() => handlePageChange(curPage, 1)}>next</button>
    </>
  );
};

export default Notes;
