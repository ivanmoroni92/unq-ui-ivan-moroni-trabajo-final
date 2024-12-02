import React from 'react'

import { StyledButton } from './mixins'

const Component = ({ onClick, children, className }) => {
  return (
    <StyledButton onClick={() => onClick()} className={className}>
      {children}
    </StyledButton>
  )
}

export default Component
