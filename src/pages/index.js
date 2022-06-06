import React from 'react'
import Head from 'next/head'
import { Typography } from 'antd'
import FlexContainer from '../components/flexContainer'
import Button from '../components/button'
import TextField from '../components/textField'

const { Title } = Typography

const Home = () => {
  return (
    <div>
      <Head>
        <title>โปรแกรมทำข้อสอบออนไลน์</title>
        <meta name='โปรแกรมทำข้อสอบออนไลน์' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FlexContainer direction='column'>
        <Title level={2}>ยินดีต้อนรับสู่โปรแกรมทำข้อสอบออนไลน์</Title>
        <TextField placeholder='กรุณากรอกชื่อของท่าน' />
        <Button>เริ่มทำข้อสอบ</Button>
      </FlexContainer>
    </div>
  )
}

export default Home
