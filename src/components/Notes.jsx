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
  const dispatch = useDispatch()

  // 引数はstateオブジェクト, そのオブジェクトのキー名を変数とした
  const notes = useSelector(({ filter, notes}) => {
    if (filter === 'ALL') {
      return notes
    }
    return filter === 'IMPORTANT'
      ? notes.filter(note => note.important)
      : notes.filter(note => !note.important)
  })
  

  return (
  <ul>
    {notes.map(note => 
      <Note
        key={note.id}
        note={note}
        handleClick={() => dispatch(toggleImportanceOf(note)) }
      />
    )}
  </ul>
  )
}

export default Notes