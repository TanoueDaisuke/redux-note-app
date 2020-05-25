import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleImportanceOf } from '../reducers/noteReducer'
import noteService from '../services/note'

// Noteコンポーネントにはロジックが含まれておらず、表示しているだけなので「presentationalコンポーネント」
const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content}
      <strong> { note.important ? 'important' : '' }</strong>
    </li>
  )
}

// Noteコンポをラップし、イベントハンドラーのロジックがあり、presentationalコンポを配置しているので「containerコンポーネント」
const Notes = () => {
  const dispatch = useDispatch()

  const handleClick = async (note) => {
    const toggledNote = await noteService.toggleImportantUpdate(note)
    dispatch(toggleImportanceOf(toggledNote.id))
  }

  const notes = useSelector(state => {
    if (state.filter === 'ALL') {
      return state.notes
    }
    return state.filer === 'IMPORTANT'
      ? state.notes.filter(note => note.important)
      : state.notes.filter(note => !note.important)
  })
  

  return (
  <ul>
    {notes.map(note => 
      <Note
        key={note.id}
        note={note}
        handleClick={() => handleClick(note) }
      />
    )}
  </ul>
  )
}

export default Notes