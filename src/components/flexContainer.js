import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem 0rem;
`

const FlexContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default FlexContainer
