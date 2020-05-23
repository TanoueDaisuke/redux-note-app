import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { createNote, toggleImportanceOf } from './reducers/noteReducer'


const App = () => {
  const dispatch = useDispatch()
  const notes = useSelector(state => state)

  const addNote = e => {
    e.preventDefault()
    const content = e.target.note.value
    e.target.note.value = ''

    dispatch(createNote(content))
    // console.log(store.getState()); >>> stateのdataのvalue
  }

  const toggleImportance = id => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" type="text"/>
        <button type="submit">add</button>
      </form>
      <ul>
        {notes.map(note => 
          <li
            key={note.id}
            onClick={() => toggleImportance(note.id)}
          >
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App