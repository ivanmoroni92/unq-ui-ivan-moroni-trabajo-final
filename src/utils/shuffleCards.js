import { getPokemonImg } from '../services/pokemon'

const shufflePokemonCards = async () => {
  const pokemonCards = []
  for (let i = 1; i <= 8; i++) {
    const responseImg = await getPokemonImg(i)
    pokemonCards.push({
      id: `${i}-a`,
      pairId: i,
      image: responseImg,
    })
    pokemonCards.push({
      id: `${i}-b`,
      pairId: i,
      image: responseImg,
    })
  }

  return pokemonCards.sort(() => Math.random() - 0.5)
}

export default shufflePokemonCards
