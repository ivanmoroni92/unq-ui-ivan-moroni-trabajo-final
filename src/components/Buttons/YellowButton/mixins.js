import styled from 'styled-components'
import { colors } from '../../../constants/colors'

export const StyledButton = styled.button`
  width: 160px;
  background-color: ${colors.DarkYellow};
  color: ${colors.YInMnBlue};
  border: 2px solid ${colors.DelftBlue};
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 10px;

  &:hover,
  &.selected {
    background-color: ${colors.YInMnBlue};
    color: ${colors.DarkYellow};
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #ffcc00;
  }
`
