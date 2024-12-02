import React, { useContext } from 'react'
import { CardWrapper, CardInner, CardFront, CardBack } from './mixins'
import { GameContext } from '../../../../../Hook/GameContext'
import { getCardSize } from '../../../../../utils'

const Component = ({ image, flipped, onClick }) => {
  const { difficulty } = useContext(GameContext)
  const cardSize = getCardSize(difficulty)

  return (
    <CardWrapper onClick={onClick}>
      <CardInner $flipped={flipped} $size={cardSize}>
        <CardFront />
        <CardBack>
          <img src={image} alt="Pokemon" />
        </CardBack>
      </CardInner>
    </CardWrapper>
  )
}
export default Component
