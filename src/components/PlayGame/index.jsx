import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Hook/GameContext'
import { ScoreContainer, ScoreText, IconPlayer } from './mixins'
import {
  shufflePokemonCards,
  isCardClickable,
  handleMatchedCards,
  resetFlippedCards,
  handleTurnSwitch,
} from '../../utils'
import ImagePokemon from '../ImagePokemon'
import Board from './components/Board'
import Player1Icon from '../../assets/images/eve.svg'
import Player2Icon from '../../assets/images/poliwag.svg'

const Component = () => {
  const { setGameState, players, currentPlayer, switchTurn, difficulty, mode, setPlayers } =
    useContext(GameContext)
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])

  useEffect(() => {
    shufflePokemonCards(difficulty).then((shuffledCards) => {
      setCards(shuffledCards)
    })
  }, [])

  const handleCardClick = (id) => {
    if (!isCardClickable(id, cards, flippedCards, matchedCards)) return

    const clickedCard = cards.find((card) => card.id === id)
    const newFlippedCards = [...flippedCards, clickedCard]

    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards

      if (firstCard.pairId === secondCard.pairId) {
        setTimeout(() => {
          const matchedPairs = handleMatchedCards(
            firstCard.pairId,
            matchedCards,
            currentPlayer,
            setMatchedCards,
            setPlayers
          )
          resetFlippedCards(setFlippedCards)
          if (matchedPairs === cards.length / 2) {
            setGameState('end')
          }
        }, 1000)
      } else {
        setTimeout(() => {
          resetFlippedCards(setFlippedCards)
          handleTurnSwitch(mode, switchTurn)
        }, 1000)
      }
    }
  }

  const playerIcons = {
    1: Player1Icon,
    2: Player2Icon,
  }

  const getCurrentPlayerIcon = (currentPlayerId) => {
    const player = players.find((player) => player.id === currentPlayerId)
    return player ? (player.id === 1 ? Player1Icon : Player2Icon) : null
  }

  return (
    <>
      <ImagePokemon />
      <ScoreContainer>
        {mode === 'multi' && (
          <div>
            <ScoreText>
              Turn of:
              <IconPlayer
                src={getCurrentPlayerIcon(currentPlayer)}
                alt={`Icon of ${players.find((player) => player.id === currentPlayer).name}`}
              />
            </ScoreText>
          </div>
        )}
        {players.map((player) => (
          <ScoreText key={player.id}>
            Player
            <IconPlayer src={playerIcons[player.id]} alt={`Icon of ${player.name}`} />:{' '}
            {player.score}
          </ScoreText>
        ))}
      </ScoreContainer>
      <Board
        cards={cards}
        flippedCards={flippedCards}
        matchedCards={matchedCards}
        handleCardClick={handleCardClick}
      />
    </>
  )
}

export default Component
