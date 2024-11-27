import axios from 'axios'

export const getPokemonImg = async (id) => {
  try {
    const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return request.data.sprites.front_default
  } catch (error) {
    console.log('error ', error)
  }
}
