import React from 'react'
import { useDispatch } from 'react-redux'

import { createNote } from '../reducers/noteReducer'
import noteService from '../services/note'

const NewNote = () => {
  const dispatch = useDispatch()

  const addNote = e => {
    e.preventDefault()
    const content = e.target.note.value
    e.target.note.value = ''

    const newNote = noteService.createNew(content)
    dispatch(createNote(newNote))
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" type="text"/>
      <button type="submit">add</button>
    </form>
  )
}

export default NewNote