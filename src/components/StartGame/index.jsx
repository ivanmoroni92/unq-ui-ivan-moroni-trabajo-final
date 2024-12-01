import React, { useContext } from 'react'
import { GameContext } from '../../Hook/GameContext'
import { StartContainer, MenuContainer } from './mixins'
import PokemonBotton from '../Botton-Pokemon'
import ImagePokemon from '../ImagePokemon'

const Component = () => {
  const { setGameState } = useContext(GameContext)

  const handlePlaying = () => {
    setGameState('playing')
  }
  return (
    <StartContainer>
      <ImagePokemon />
      <MenuContainer>
        <PokemonBotton onClick={handlePlaying}>Single Player </PokemonBotton>
        <PokemonBotton onClick={handlePlaying}>Two Player</PokemonBotton>
        <PokemonBotton onClick={handlePlaying}>Options </PokemonBotton>
      </MenuContainer>
    </StartContainer>
  )
}

export default Component
