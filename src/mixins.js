import styled from 'styled-components'
import pokemonImg from './assets/images/pokemon.jpg'
import { colors } from './constants/colors'

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
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.background};
  border-radius: 15px;
  padding: 16px;
  box-shadow: 0px 5px 15px ${colors.shadow};
`
