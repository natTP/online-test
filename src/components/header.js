import React from 'react'
import { useSelector } from 'react-redux'
import { PageHeader, Typography, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const { Text } = Typography

const StyledHeader = styled(PageHeader)`
  background-color: white;
  margin-bottom: 1rem;
  .ant-page-header-heading-title {
    color: #1890ff;
  }
`

const Header = () => {
  const name = useSelector((state) => state.name)

  return (
    <StyledHeader
      title='โปรแกรมทำข้อสอบออนไลน์'
      extra={
        name && (
          <div>
            <Avatar icon={<UserOutlined />} />
            <Text>{name}</Text>
          </div>
        )
      }
    />
  )
}
export default Header
