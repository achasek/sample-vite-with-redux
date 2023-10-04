import {
  Routes, Route, useMatch
} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import NoteHome from './pages/NoteHome';
import NewNote from './components/NewNote';
// import Note from './components/Notes';

function App() {
  // const dispatch = useDispatch()
  // const notes = useSelector(state => state.notes)

  // const handleVote = (id, notes) => {
  //   dispatch(upvote(id, notes))
  //   dispatch(setNotification(`you voted for ${notes[id].content}`))
  //   setTimeout(() => {
  //     dispatch(setNotification(''))
  //   }, 5000)
  // }

  // const match = useMatch('/notes/:id')
  // const note = match 
  //   ? notes.find(note => note.id === Number(match.params.id))
  //   : null

  // console.log(match) // match.params.id === '1'
  // console.log(note && note.id)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/notes" element={<NoteHome />}/>
        <Route path="/notes/create" element={<NewNote />}/>
        {/* <Route path="/notes/:id" element={<Note note={note} handleClick={() => dispatch(toggleImportance(note.id, notes))} handleVote={() => handleVote(note.id, notes)} />}/> */}
      </Routes>
      <Nav />
    </>
  );
}

export default App;
