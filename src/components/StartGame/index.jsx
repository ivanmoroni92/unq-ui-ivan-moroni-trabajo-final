import React, { useContext } from 'react'
import { GameContext } from '../../Hook/GameContext'
import { StartContainer, ImgContainer, MenuContainer, StyledButton } from './mixins'
import pokeomonSVG from '../../assets/International_Pokémon_logo.svg'

const Component = () => {
  const { setGameState } = useContext(GameContext)

  const handlePlaying = () => {
    setGameState('playing')
  }
  return (
    <StartContainer>
      <ImgContainer>
        <img src={pokeomonSVG} />
        <p>Memotes</p>
      </ImgContainer>
      <MenuContainer>
        <StyledButton onClick={() => handlePlaying()}>Single Player</StyledButton>
        <StyledButton onClick={() => handlePlaying()}>Two Player</StyledButton>
        <StyledButton onClick={() => handlePlaying()}>Options</StyledButton>
      </MenuContainer>
    </StartContainer>
  )
}

export default Component
