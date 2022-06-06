import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import Header from './header'

const { Content } = Layout

const StyledContent = styled(Content)`
  margin: auto;
  padding: 24px;
  height: 100%;
  width: 100%;
  max-width: 720px;
`

const MyLayout = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header />
      <StyledContent>{children}</StyledContent>
    </Layout>
  )
}

export default MyLayout
