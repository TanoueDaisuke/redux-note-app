import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (content) => {
  const obj = { content, important: false }
  const res = await axios.post(baseUrl, obj)
  return res.data
}

// const toggleImportantUpdate = async (noteData) => {
//   const res = await axios.put(`${baseUrl}/${noteData.id}`, noteData)
//   return res.data
// }

export default { getAll, createNew }