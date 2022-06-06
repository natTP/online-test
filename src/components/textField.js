import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

const StyledInput = styled(Input)`
  border-radius: 7px;
`

const TextField = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} size='large' />
}

export default TextField
