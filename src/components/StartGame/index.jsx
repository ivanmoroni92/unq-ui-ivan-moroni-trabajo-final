import React, { useContext, useState } from 'react'
import { GameContext } from '../../Hook/GameContext'
import { StartContainer, MenuContainer, OptionsContainer, OptionTitle } from './mixins'
import YellowButton from '../Buttons/YellowButton'
import ImagePokemon from '../ImagePokemon'
import TextBotton from '../Buttons/TextButton'
import Arrow from '../../assets/right-arrow-svgrepo-com.svg'
const Component = () => {
  const { setGameState, difficulty, setDifficulty } = useContext(GameContext)
  const [showOptions, setShowOptions] = useState(false)

  const handlePlaying = () => {
    setGameState('playing')
  }

  const handleGoBack = () => {
    setShowOptions(false)
  }

  const handleOptions = () => {
    setShowOptions(true)
  }

  const handleSetDifficulty = (level) => {
    setDifficulty(level)
  }

  return (
    <StartContainer>
      <ImagePokemon />
      <MenuContainer>
        {showOptions ? (
          <>
            <OptionTitle> Options : </OptionTitle>
            <OptionsContainer>
              <YellowButton
                onClick={() => handleSetDifficulty('easy')}
                className={difficulty === 'easy' ? 'selected' : ''}
              >
                Easy
              </YellowButton>
              <YellowButton
                onClick={() => handleSetDifficulty('medium')}
                className={difficulty === 'medium' ? 'selected' : ''}
              >
                Medium
              </YellowButton>
              <YellowButton
                onClick={() => handleSetDifficulty('hard')}
                className={difficulty === 'hard' ? 'selected' : ''}
              >
                Hard
              </YellowButton>
            </OptionsContainer>
            <TextBotton onClick={handleGoBack}>Back</TextBotton>
          </>
        ) : (
          <>
            <YellowButton onClick={handlePlaying}>Single Player </YellowButton>
            <YellowButton onClick={handlePlaying}>Two Player</YellowButton>
            <YellowButton onClick={handleOptions}>Options </YellowButton>
          </>
        )}
      </MenuContainer>
    </StartContainer>
  )
}

export default Component
