import React, { useState } from 'react'
import Head from 'next/head'
import { Typography } from 'antd'
import FlexContainer from '../components/flexContainer'
import Button from '../components/button'
import TextField from '../components/textField'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const { Title } = Typography

const Home = () => {
  const name = useSelector((state) => state.name)
  const dispatch = useDispatch()
  const router = useRouter()

  const [inputValue, setInputValue] = useState(name)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = () => {
    dispatch({ type: 'setName', payload: inputValue })
    router.push('/quiz/1')
  }

  return (
    <div>
      <Head>
        <title>โปรแกรมทำข้อสอบออนไลน์</title>
        <meta name='โปรแกรมทำข้อสอบออนไลน์' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FlexContainer direction='column'>
        <Title level={2}>ยินดีต้อนรับสู่โปรแกรมทำข้อสอบออนไลน์</Title>
        <TextField
          placeholder='กรุณากรอกชื่อของท่าน'
          value={inputValue}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>เริ่มทำข้อสอบ</Button>
      </FlexContainer>
    </div>
  )
}

export default Home
