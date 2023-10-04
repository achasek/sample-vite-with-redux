import { createSlice } from '@reduxjs/toolkit';
import noteService from '../../services/notes';

// THE IDEA HERE:
// is that we want async actions, aka, actions that require communication between client and server,
// to be separated from the noteSlice and be abstracted away in async functions below. Like when we moved the createNote reducer out of the slice and below

// Look at createNote reducer. We are using .push instead of concat or [...]
// We are mutating state argument's array by calling the push method instead of returning a new instance of the array. What's this all about?

// Redux Toolkit utilizes the Immer library with reducers created by createSlice function, which makes it possible to mutate the state argument inside the reducer

// in an instantiation of createSlice, to log the current state, you MUST do it like this
// to console.log state with redux toolkit, we have to do this since immer internalizes the state
// console.log(JSON.parse(JSON.stringify(state)))

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    // old, non-async way that did NOT save votes to backend 
    // upvote(state, action) {
    //   const id = action.payload
    //   const noteToUpvote = state.find(note => note.id === id)
    //   const upvoteNote = {
    //     ...noteToUpvote,
    //     votes: noteToUpvote.votes + 1
    //   }

    //   return state.map(note => 
    //     note.id !== id ? note : upvoteNote
    //   )
    // },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload
    },
    setNote(state, action) {
      return action.payload
    }
  },
})

// can only have 1 default export, but multiple normal exports as seen above with export const funcName

// the created noteSlice is a new object that is more complex than what is coded above.
// if you console.log(noteSlice), you'll see that it a much larger object than what is shown above that has keys like actions, reducer, and so on
export const { toggleImportanceOf, appendNote, setNotes, setNote } = noteSlice.actions

// its weird to see this function return a function, or action-handler
// but with redux thunk, you can do that, allowing us to abstract communication between server and client here away from the components
export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
};

export const showNote = (id) => {
  return async dispatch => {
    const note = await noteService.getOne(id)
    dispatch(setNote(note))
  }
}

export const createNote = (content) => {
  return async dispatch => {
    const newNote = await noteService.createNew(content)
    dispatch(appendNote(newNote))
  }
};

// working on making the toggle of importance persist in backend async in redux
export const toggleImportance = (id, notes) => {
  return async dispatch => {
    const note = notes.find(note => note.id === id);
    const updatedNote = { ...note, important: !note.important };

    const noteAfterEdit = await noteService.edit(id, updatedNote);
    const newNotes = notes.map(note => note.id !== id ? note : noteAfterEdit)

    dispatch(setNotes(newNotes))
  }
};

export const upvote = (id, notes) => {
  return async dispatch => {
    const note = notes.find(note => note.id === id);
    const updatedNote = {...note, votes: note.votes + 1};

    const noteAfterEdit = await noteService.edit(id, updatedNote);
    const newNotes = notes.map(note => note.id !== id ? note : noteAfterEdit);

    dispatch(setNotes(newNotes))
  }
};

export default noteSlice.reducer;