import React, { useContext } from 'react'
import PlayGame from './components/PlayGame'
import StartGame from './components/StartGame'
import EndGame from './components/EndGame'
import { GameContext } from './Hook/GameContext'
import { PageContainer, GameContainer } from './mixins'

function App() {
  const { gameState } = useContext(GameContext)
  return (
    <PageContainer>
      <GameContainer>
        {gameState === 'start' && <StartGame />}
        {gameState === 'playing' && <PlayGame />}
        {gameState === 'end' && <EndGame />}
      </GameContainer>
    </PageContainer>
  )
}

export default App
