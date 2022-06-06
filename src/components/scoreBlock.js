import React from 'react'
import styled from 'styled-components'
import questions from '../questions'

const StyledBlock = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 7px;
  text-align: center;

  .score {
    font-size: 48px;
  }
`

const ScoreBlock = () => {
  return (
    <StyledBlock>
      คะแนนรวม
      <div className='score'>/{questions.length}</div>
    </StyledBlock>
  )
}

export default ScoreBlock
