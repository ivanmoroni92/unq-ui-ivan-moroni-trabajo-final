import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const PlayingContainer = styled.div`
  width: 600px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const ScoreContainer = styled.div`
  width: 600px;
  height: 30px;
  background-color: ${colors.YInMnBlue};
  color: ${colors.NeonGold};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  margin: 16px 0px;
`
export const ScoreText = styled.p`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.NeonGold};
`

export const IconPlayer = styled.img`
  margin-left: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`
