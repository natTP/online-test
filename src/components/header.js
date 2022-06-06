import React from 'react'
import { PageHeader, Typography, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const { Text } = Typography

const StyledHeader = styled(PageHeader)`
  background-color: white;
`

const Header = () => {
  return (
    <StyledHeader
      title='โปรแกรมทำข้อสอบออนไลน์'
      extra={
        <div>
          <Avatar icon={<UserOutlined />} />
          <Text>ชื่อของผมก็คือออ</Text>
        </div>
      }
    />
  )
}
export default Header
