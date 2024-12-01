import React, { useContext } from 'react'
import { GameContext } from '../../Hook/GameContext'
import { EndContainer, MenuContainer, ScoreContainet, EndTitle, Score } from './mixins'
import PokemonBotton from '../Botton-Pokemon'
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
        <PokemonBotton onClick={handleRestart}> Restart the game </PokemonBotton>
        <PokemonBotton onClick={handleMenu}> Menu </PokemonBotton>
      </MenuContainer>
    </EndContainer>
  )
}

export default Component
