import { getPokemonImg } from '../services/pokemon'

export const shufflePokemonCards = async (difficulty) => {
  const pokemonCards = []
  const nroCards = switchDifficulty(difficulty)
  for (let i = 1; i <= nroCards; i++) {
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

const switchDifficulty = (difficulty) => {
  let numPairs
  switch (difficulty) {
    case 'medium':
      numPairs = 12
      break
    case 'hard':
      numPairs = 32
      break
    case 'easy':
    default:
      numPairs = 8
      break
  }
  return numPairs
}

export const getCardSize = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return '100px'
    case 'medium':
      return '80px'
    case 'hard':
      return '48px'
    default:
      return '100px'
  }
}

export const getGridColumns = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return 4
    case 'medium':
      return 5
    case 'hard':
      return 8
    default:
      return 4
  }
}
