import React, { useContext } from 'react'
import { GameContext } from '../../Hook/GameContext'

const Component = () => {
  const { setGameState, score, setScore } = useContext(GameContext)
  const handleRestart = () => {
    setScore(0)
    setGameState('start')
  }
  return (
    <div>
      <h1>¡Juego Terminado!</h1>
      <p>Puntos obtenidos: {score}</p>
      <button onClick={handleRestart}>Reiniciar Juego</button>
    </div>
  )
}

export default Component
