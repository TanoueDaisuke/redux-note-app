import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initializeNotes } from './reducers/noteReducer'
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import Notes from './components/Notes'


const App = () => {  
  const dispatch = useDispatch()

  useEffect(() => {
    // 初回読み込み時にサーバーからnoteデータを取得して、storeに保存
    // noteService.getAll().then(notes => dispatch(initializeNotes(notes)) )
    dispatch(initializeNotes())
  }, [dispatch]) // ← 空配列だと警告が出るので、dispatchを入れた, 他の方法として // eslint-disable-line react-hooks/exhaustive-deps を入れてもいい

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App