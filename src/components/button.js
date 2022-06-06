import React from 'react'
import { Button } from 'antd'

const MyButton = ({ children, type }) => {
  return (
    <Button block type={type || 'primary'} size='large' shape='round'>
      {children}
    </Button>
  )
}

export default MyButton
