import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

const StyledInput = styled(Input)`
  border-radius: 7px;
`

const TextField = ({ placeholder, ...props }) => {
  return <StyledInput placeholder={placeholder} size='large' {...props} />
}

export default TextField
