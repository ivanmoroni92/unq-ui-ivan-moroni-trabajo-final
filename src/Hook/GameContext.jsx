import React, { createContext, useState } from 'react'

export const GameContext = createContext(null)

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState('start')
  const [points, setPoints] = useState(0)

  return (
    <GameContext.Provider value={{ gameState, setGameState, points, setPoints }}>
      {children}
    </GameContext.Provider>
  )
}
