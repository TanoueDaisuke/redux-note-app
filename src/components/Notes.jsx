import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleImportanceOf } from '../reducers/noteReducer'

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
  const notes = useSelector(state => state)
  const dispatch = useDispatch()

  return (
  <ul>
    {notes.map(note => 
      <Note
        key={note.id}
        note={note}
        handleClick={() => dispatch(toggleImportanceOf(note.id))}
      />
    )}
  </ul>
  )
}

export default Notes