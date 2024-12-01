import React from 'react'

import { StyledButton } from './mixins'

const Component = ({ onClick, children }) => {
  return <StyledButton onClick={() => onClick()}>{children}</StyledButton>
}

export default Component
