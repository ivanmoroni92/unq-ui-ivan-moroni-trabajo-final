import React, { useContext, useState } from 'react'
import { GameContext } from '../../Hook/GameContext'
import { MenuContainer, OptionsContainer, OptionTitle } from './mixins'
import YellowButton from '../Buttons/YellowButton'
import ImagePokemon from '../ImagePokemon'
import TextBotton from '../Buttons/TextButton'

const Component = () => {
  const { setGameState, difficulty, setDifficulty, setPlayers, setMode, setCurrentPlayer } =
    useContext(GameContext)
  const [showOptions, setShowOptions] = useState(false)

  const handlePlaying = (mode) => {
    setMode(mode)
    setPlayers(
      mode === 'multi'
        ? [
            { id: 1, score: 0 },
            { id: 2, score: 0 },
          ]
        : [{ id: 1, score: 0 }]
    )
    setCurrentPlayer(1)
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
    <>
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
            <YellowButton onClick={() => handlePlaying('single')}>Single Player</YellowButton>
            <YellowButton onClick={() => handlePlaying('multi')}>Two Player</YellowButton>
            <YellowButton onClick={handleOptions}>Options </YellowButton>
          </>
        )}
      </MenuContainer>
    </>
  )
}

export default Component
