import axios from 'axios'

const apiId = process.env.REACT_APP_API_ID
const apiKey = process.env.REACT_APP_API_KEY

export const getRecipe = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`
  return await axios.get(url)
}
