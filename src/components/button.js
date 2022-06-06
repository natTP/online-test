import React from 'react'
import { Button } from 'antd'

const MyButton = ({ children, type, ...props }) => {
  return (
    <Button
      block
      type={type || 'primary'}
      size='large'
      shape='round'
      {...props}
    >
      {children}
    </Button>
  )
}

export default MyButton
