import React, { useContext } from 'react'
import { GameContext } from '../../Hook/GameContext'

const Component = () => {
  const { setGameState, points } = useContext(GameContext)

  const handleEndGame = () => {
    setGameState('end')
  }

  return (
    <div>
      <h1>Juego en curso</h1>
      <p>Puntos: {points}</p>
      <button onClick={handleEndGame}>Terminar Juego</button>
    </div>
  )
}

export default Component
