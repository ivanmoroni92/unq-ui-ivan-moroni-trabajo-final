import React, { createContext, useState } from 'react'

export const GameContext = createContext(null)

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState('start')
  const [score, setScore] = useState(0)
  const [difficulty, setDifficulty] = useState('easy')

  return (
    <GameContext.Provider
      value={{ gameState, setGameState, score, setScore, difficulty, setDifficulty }}
    >
      {children}
    </GameContext.Provider>
  )
}
