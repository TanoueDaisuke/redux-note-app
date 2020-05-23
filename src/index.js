import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})
store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'state changes are made with actions',
    important: true,
    id: 2
  }
})

const generateId = () => (
  Number( (Math.random() * 1000000).toFixed(0) )
)

const App = () => {
  const addNote = e => {
    e.preventDefault()
    const content = e.target.note.value
    e.target.note.value = ''
    store.dispatch({
      type: 'NEW_NOTE',
      data: {
        content,
        important: false,
        id: generateId()
      }
    })

    // console.log(store.getState()); >>> stateのdataのvalue
  }

  const toggleImportance = id => {
    store.dispatch({
      type: 'TOGGLE_IMPORTANCE',
      data: { id }
    })
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="note" type="text"/>
        <button type="submit">add</button>
      </form>
      <ul>
        {store.getState().map(note => 
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
// const App = () => {
//   return (
//     <div>
//       <ul>
//         {store.getState().map(note => 
//           <li key={note.id}>
//             {note.content} <strong>{note.important ? 'important' : ''}</strong>
//           </li>
//           )}
//       </ul>
//     </div>
//   )
// }

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

store.subscribe(renderApp)

renderApp()