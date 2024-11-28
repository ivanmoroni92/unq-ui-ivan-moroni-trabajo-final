import React from 'react'
import { CardWrapper, CardInner, CardFront, CardBack } from './mixins'

const Component = ({ image, flipped, onClick }) => (
  <CardWrapper onClick={onClick}>
    <CardInner flipped={flipped}>
      <CardFront />
      <CardBack>
        <img src={image} alt="Pokemon" />
      </CardBack>
    </CardInner>
  </CardWrapper>
)

export default Component
