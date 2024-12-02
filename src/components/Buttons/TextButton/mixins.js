import styled from 'styled-components'
import { colors } from '../../../constants/colors'

export const StyledButton = styled.button`
  color: ${colors.YInMnBlue};
  border: none;
  box-shadow: none;
  background: none;

  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 10px;

  &:hover {
    color: ${colors.DarkYellow};
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`
