import React from 'react'
import pokeomonSVG from '../../assets/International_Pokémon_logo.svg'

import { ImgContainer } from './mixins'

const Component = () => {
  return (
    <ImgContainer>
      <img src={pokeomonSVG} />
      <p>Memotest</p>
    </ImgContainer>
  )
}

export default Component
