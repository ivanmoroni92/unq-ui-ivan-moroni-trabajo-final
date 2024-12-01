import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const EndContainer = styled.div`
  width: 600px;
  height: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreContainet = styled.div``

export const EndTitle = styled.h3`
  color: ${colors.YInMnBlue};
  font-size: 34px;
  font-weight: bold;
`

export const Score = styled.p`
  font-size: 18px;
  color: ${colors.NeonGold};
  font-weight: 300px;
  margin-top: 8px;
`

export const PikachuImg = styled.img`
  background-color: #fff;

  object-fit: cover;
`
