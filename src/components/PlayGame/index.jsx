import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Hook/GameContext'
import { getPokemonImg } from '../../services/pokemon'

const Component = () => {
  const { setGameState, points } = useContext(GameContext)
  const [pokemonImg, setPokemonImg] = useState(null)

  useEffect(() => {
    getPokemonImg('25').then((pokemonImg) => {
      setPokemonImg(pokemonImg)
    })
  }, [])

  const handleEndGame = () => {
    setGameState('end')
  }

  return (
    <div>
      <h1>Juego en curso</h1>
      <p>Puntos: {points}</p>
      <img src={pokemonImg} alt="Pokemon" />
      <button onClick={handleEndGame}>Terminar Juego</button>
    </div>
  )
}

export default Component
