import styled from 'styled-components'
import pokemonImg from './assets/pokemon.jpg'

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${pokemonImg});
  background-size: cover;
  background-position: center;
`

export const GameContainer = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
`
