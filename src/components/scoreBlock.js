import React from 'react'
import styled from 'styled-components'

const StyledBlock = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 7px;
  text-align: center;

  .score {
    font-size: 48px;
  }
`

const ScoreBlock = ({ score, fullScore }) => {
  return (
    <StyledBlock>
      คะแนนรวม
      <div className='score'>
        {score}/{fullScore}
      </div>
    </StyledBlock>
  )
}

export default ScoreBlock
