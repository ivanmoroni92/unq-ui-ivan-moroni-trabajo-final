import { getPokemonImg } from '../services/pokemon'

export const shufflePokemonCards = async (difficulty) => {
  const pokemonCards = []
  const nroCards = switchDifficulty(difficulty)
  const usedIds = new Set()

  while (pokemonCards.length < nroCards) {
    const randomId = Math.floor(Math.random() * 151) + 1

    if (!usedIds.has(randomId)) {
      usedIds.add(randomId)
      const responseImg = await getPokemonImg(randomId)

      pokemonCards.push({
        id: `${randomId}-a`,
        pairId: randomId,
        image: responseImg,
      })
      pokemonCards.push({
        id: `${randomId}-b`,
        pairId: randomId,
        image: responseImg,
      })
    }
  }

  return pokemonCards.sort(() => Math.random() - 0.5)
}

const switchDifficulty = (difficulty) => {
  let numPairs
  switch (difficulty) {
    case 'medium':
      numPairs = 24
      break
    case 'hard':
      numPairs = 64
      break
    case 'easy':
    default:
      numPairs = 16
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

// Verificar si la carta puede ser clickeada
export const isCardClickable = (id, cards, flippedCards, matchedCards) => {
  const clickedCard = cards.find((card) => card.id === id)
  return (
    !matchedCards.includes(clickedCard.pairId) &&
    !flippedCards.some((card) => card.id === id) &&
    flippedCards.length < 2
  )
}

// Manejar cartas emparejadas
export const handleMatchedCards = (
  pairId,
  matchedCards,
  currentPlayer,
  setMatchedCards,
  setPlayers
) => {
  setMatchedCards((prev) => [...prev, pairId])
  setPlayers((prevPlayers) =>
    prevPlayers.map((player) =>
      player.id === currentPlayer ? { ...player, score: player.score + 1 } : player
    )
  )
  return matchedCards.length + 1
}

// Restablecer cartas volteadas
export const resetFlippedCards = (setFlippedCards) => {
  setFlippedCards([])
}

// Manejar el cambio de turno
export const handleTurnSwitch = (mode, switchTurn) => {
  if (mode === 'multi') switchTurn()
}
