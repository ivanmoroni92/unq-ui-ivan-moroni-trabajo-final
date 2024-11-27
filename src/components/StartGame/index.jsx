import React, { useContext } from 'react'
import { GameContext } from '../../Hook/GameContext'
import {} from './mixins'

const Component = () => {
  const { setGameState } = useContext(GameContext)

  const handlePlaying = () => {
    setGameState('playing')
  }
  return (
    <div>
      <h1>¡Bienvenido al Juego de Memoria Pokémon!</h1>
      <button onClick={() => handlePlaying()}>Inicir Juego</button>
    </div>
  )
}

export default Component
