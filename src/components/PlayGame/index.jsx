import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../Hook/GameContext'
import { getPokemonImg } from '../../services/pokemon'
import Card from './components/Card'

const Component = () => {
  const { setGameState, points } = useContext(GameContext)
  const [pokemonImg, setPokemonImg] = useState(null)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    getPokemonImg('25').then((pokemonImg) => {
      setPokemonImg(pokemonImg)
    })
  }, [])

  const handleEndGame = () => {
    setGameState('end')
  }

  const handleCart = () => {
    setFlipped(!flipped)
  }

  return (
    <div>
      <h1>Juego en curso</h1>
      <p>Puntos: {points}</p>
      <Card image={pokemonImg} flipped={flipped} onClick={handleCart} />
      <button onClick={handleEndGame}>Terminar Juego</button>
    </div>
  )
}

export default Component
