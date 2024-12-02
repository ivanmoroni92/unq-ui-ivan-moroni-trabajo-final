import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const StartContainer = styled.div`
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

export const OptionTitle = styled.h3`
  font-size: 34;
  color: ${colors.YInMnBlue};
  text-align: center;
  margin-bottom: 8px;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-top: 2px solid ${colors.DelftBlue};
  border-bottom: 2px solid ${colors.DelftBlue};
`
