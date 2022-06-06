import React from 'react'
import Head from 'next/head'
import FlexContainer from '../src/components/flexContainer'
import Button from '../src/components/button'
import TextField from '../src/components/textField'

const Home = () => {
  return (
    <div>
      <Head>
        <title>โปรแกรมทำข้อสอบออนไลน์</title>
        <meta name='โปรแกรมทำข้อสอบออนไลน์' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FlexContainer>
        <TextField placeholder='กรุณากรอกชื่อของท่าน' />
        <Button>เริ่มทำข้อสอบ</Button>
      </FlexContainer>
    </div>
  )
}

export default Home
