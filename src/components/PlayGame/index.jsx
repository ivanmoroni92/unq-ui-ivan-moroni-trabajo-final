import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Hook/GameContext'
import shufflePokemonCards from '../../utils/shuffleCards'
import ImagePokemon from '../ImagePokemon'
import Board from './components/Board'

const Component = () => {
  const { setGameState, score, setScore } = useContext(GameContext)
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])

  useEffect(() => {
    shufflePokemonCards().then((shuffledCards) => {
      setCards(shuffledCards)
    })
  }, [])

  const handleCardClick = (id) => {
    if (flippedCards.length === 2) return

    const clickedCard = cards.find((card) => card.id === id)

    if (matchedCards.includes(clickedCard.pairId) || flippedCards.some((card) => card.id === id)) {
      return
    }

    const newFlippedCards = [...flippedCards, clickedCard]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards

      if (firstCard.pairId === secondCard.pairId) {
        setMatchedCards((prev) => [...prev, firstCard.pairId])
        setScore((prev) => prev + 1)

        setTimeout(() => {
          setFlippedCards([])

          if (matchedCards.length + 1 === cards.length / 2) {
            setGameState('end')
          }
        }, 1000)
      } else {
        setTimeout(() => {
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  return (
    <div>
      <ImagePokemon />
      <p>Puntos: {score}</p>
      <Board
        cards={cards}
        flippedCards={flippedCards}
        matchedCards={matchedCards}
        handleCardClick={handleCardClick}
      />
    </div>
  )
}

export default Component
