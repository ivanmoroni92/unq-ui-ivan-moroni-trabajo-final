import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const PlayingContainer = styled.div`
  width: 600px;
  height: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const ScoreContainer = styled.div`
  width: 600px;
  height: 20px;
  background-color: ${colors.YInMnBlue};
  color: ${colors.NeonGold};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  margin: 16px 0px;
`
