import styled from 'styled-components'
import { colors } from '../../constants/colors'

export const StartContainer = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const ImgContainer = styled.div`
  text-align: center;
  color: ${colors.DarkYellow};
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 4px black;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledButton = styled.button`
  background-color: #ffcb03;
  color: ${colors.YInMnBlue};
  border: 2px solid ${colors.DelftBlue};
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 10px;

  &:hover {
    background-color: ${colors.YInMnBlue};
    color: ${colors.DarkYellow};
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #ffcc00;
  }
`
