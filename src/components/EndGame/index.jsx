import React, { useContext } from 'react'
import { GameContext } from '../../Hook/GameContext'
import { MenuContainer, ScoreContainet, EndTitle, Score, IconPlayer } from './mixins'
import YellowButtom from '../Buttons/YellowButton'
import ImagePokemon from '../ImagePokemon'
import Player1Icon from '../../assets/images/eve.svg'
import Player2Icon from '../../assets/images/poliwag.svg'

const Component = () => {
  const { resetGame, players, mode } = useContext(GameContext)

  const winner =
    mode === 'multi'
      ? players.reduce((prev, current) => (current.score > prev.score ? current : prev), players[0])
      : players[0]

  const handleMenu = () => {
    resetGame('start', mode)
  }

  const handleRestart = () => {
    resetGame('playing', mode)
  }

  const getPlayerIcon = (playerId) => {
    switch (playerId) {
      case 1:
        return <IconPlayer src={Player1Icon} alt="Player 1 Icon" />
      case 2:
        return <IconPlayer src={Player2Icon} alt="Player 2 Icon" />
      default:
        return null
    }
  }

  return (
    <>
      <ImagePokemon />
      <ScoreContainet>
        <EndTitle>Winner!</EndTitle>

        {mode === 'multi' ? (
          <>
            <Score>
              Player {winner.id} - Score: {winner.score}
            </Score>
            {getPlayerIcon(winner.id)}
          </>
        ) : (
          <>
            <Score>Player 1 - Score: {players[0].score}</Score>
            {getPlayerIcon(1)}
          </>
        )}
      </ScoreContainet>

      <MenuContainer>
        <YellowButtom onClick={handleRestart}>Restart</YellowButtom>
        <YellowButtom onClick={handleMenu}>Menu</YellowButtom>
      </MenuContainer>
    </>
  )
}

export default Component
