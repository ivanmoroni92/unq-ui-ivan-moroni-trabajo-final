import React, { createContext, useState } from 'react'

export const GameContext = createContext(null)

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState('start')
  const [players, setPlayers] = useState([])
  const [currentPlayer, setCurrentPlayer] = useState(null)
  const [mode, setMode] = useState('multi')
  const [difficulty, setDifficulty] = useState('easy')

  const switchTurn = () => {
    if (mode === 'multi') {
      setCurrentPlayer((prev) => {
        const currentIndex = players.findIndex((player) => player.id === prev)
        const nextIndex = (currentIndex + 1) % players.length
        return players[nextIndex].id
      })
    }
  }

  const resetGame = (gameState, mode) => {
    setGameState(gameState)
    setPlayers(
      mode === 'multi'
        ? [
            { id: 1, score: 0 },
            { id: 2, score: 0 },
          ]
        : [{ id: 1, score: 0 }]
    )
    setCurrentPlayer(1)
  }

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        players,
        setPlayers,
        currentPlayer,
        setCurrentPlayer,
        mode,
        setMode,
        difficulty,
        setDifficulty,
        switchTurn,
        resetGame,
      }}
      s
    >
      {children}
    </GameContext.Provider>
  )
}
