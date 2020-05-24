import React from 'react'
import { useDispatch } from 'react-redux'

import { filterChange } from '../reducers/filterReducer'


const VisibilityFilter = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <label htmlFor="all">All</label><input id="all" type="radio" name="filter" onChange={() => dispatch(filterChange('ALL'))} />
      <label htmlFor="important">Important</label><input id="important" type="radio" name="filter" onChange={() => dispatch(filterChange('IMPORTANT'))} />
      <label htmlFor="nonimportant">NonImportant</label><input id="nonimportant" type="radio" name="filter" onChange={() => dispatch(filterChange('NONIMPORTANT'))} />
    </div>
  )
}

export default VisibilityFilter