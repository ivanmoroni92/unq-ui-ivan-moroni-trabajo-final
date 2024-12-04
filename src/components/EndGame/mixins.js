import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const EndContainer = styled.div`
  width: 600px;
  height: 650px;
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

export const WinnerDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  p {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.NeonGold};
    display: flex;
    align-items: center;
  }
`

export const IconPlayer = styled.img`
  margin-top: 26px;
  width: 150;
  height: 150px;
  border-radius: 50%;
`
