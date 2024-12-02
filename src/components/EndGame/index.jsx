import React, { useContext } from 'react'
import { GameContext } from '../../Hook/GameContext'
import { EndContainer, MenuContainer, ScoreContainet, EndTitle, Score } from './mixins'
import YellowButtom from '../Buttons/YellowButton'
import ImagePokemon from '../ImagePokemon'

const Component = () => {
  const { setGameState, score, setScore } = useContext(GameContext)
  const handleMenu = () => {
    setScore(0)
    setGameState('start')
  }

  const handleRestart = () => {
    setScore(0)
    setGameState('playing')
  }
  return (
    <EndContainer>
      <ImagePokemon />
      <ScoreContainet>
        <EndTitle>Game Over!</EndTitle>
        <Score>Score: {score}</Score>
      </ScoreContainet>

      <MenuContainer>
        <YellowButtom onClick={handleRestart}> Restart </YellowButtom>
        <YellowButtom onClick={handleMenu}> Menu </YellowButtom>
      </MenuContainer>
    </EndContainer>
  )
}

export default Component
