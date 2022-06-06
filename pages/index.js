import React from 'react'
import Head from 'next/head'
import { Button, Input } from 'antd'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem 0rem;
`

const StyledInput = styled(Input)`
  border-radius: 7px;
`

const Home = () => {
  return (
    <div>
      <Head>
        <title>โปรแกรมทำข้อสอบออนไลน์</title>
        <meta name='โปรแกรมทำข้อสอบออนไลน์' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FlexContainer>
        <StyledInput placeholder='กรุณากรอกชื่อของท่าน' size='large' />
        <Button block type='primary' size='large' shape='round'>
          เริ่มทำข้อสอบ
        </Button>
      </FlexContainer>
    </div>
  )
}

export default Home
