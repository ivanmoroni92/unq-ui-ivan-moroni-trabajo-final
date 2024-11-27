import React, { useContext } from 'react'
import { GameContext } from '../../Hook/GameContext'

const Component = () => {
  const { setGameState, points } = useContext(GameContext)
  const handleRestart = () => {
    setGameState('start')
  }
  return (
    <div>
      <h1>¡Juego Terminado!</h1>
      <p>Puntos obtenidos: {points}</p>
      <button onClick={handleRestart}>Reiniciar Juego</button>
    </div>
  )
}

export default Component
