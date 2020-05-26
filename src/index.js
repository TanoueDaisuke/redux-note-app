import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

// (例)
// {
//   notes : [{ content: 'reducer defines how redux store works', important: true, id: 1 }, {......}],
//   filter: 'ALL'
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
