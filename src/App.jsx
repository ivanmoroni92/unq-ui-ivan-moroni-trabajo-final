import React, { useContext } from 'react'
import PlayGame from './components/PlayGame'
import StartGame from './components/StartGame'
import EndGame from './components/EndGame'
import { GameContext } from './Hook/GameContext'

function App() {
  const { gameState } = useContext(GameContext)

  return (
    <>
      {gameState === 'start' && <StartGame />}
      {gameState === 'playing' && <PlayGame />}
      {gameState === 'end' && <EndGame />}
    </>
  )
}

export default App
