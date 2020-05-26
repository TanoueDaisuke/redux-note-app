import noteService from '../services/note'

const noteReducer = (state = [], action) => {
  console.log(action.type);
  
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.data)
    case 'INIT_NOTES':
      return action.data
    case 'TOGGLE_IMPORTANCE':
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return state.map(note => 
        note.id !== id ? note : changedNote  
      )
    default:
      return state;
  }
}


export const createNote = content => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(content)
    dispatch({
      type: 'NEW_NOTE',
      data: newNote
    })
  }
}

export const toggleImportanceOf = note => {
  return async dispatch => {
    const updatedNote = await noteService.toggleImportantUpdate(note)
    
    dispatch({
      type: 'TOGGLE_IMPORTANCE',
      data: { id: updatedNote.id }
    })
  }
  // return {
  //   type: 'TOGGLE_IMPORTANCE',
  //   data: { id }
  // }
}

// action変更したOBJだけでなく、dbとの通信まで行う
// そして同期処理を行うdispatch関数を返却
export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}

export default noteReducer

// export関連を上のようにすればimport noteReducer, { createNote, toggleImportanceOf } from ...で呼び出せる