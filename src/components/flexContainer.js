import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 1rem;
  padding: 1rem 0rem;
`

const FlexContainer = ({ children, direction }) => {
  return <StyledContainer direction={direction}>{children}</StyledContainer>
}

export default FlexContainer
