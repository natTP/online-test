import React from 'react'
import Head from 'next/head'
import { Typography } from 'antd'
import FlexContainer from '../components/flexContainer'
import ScoreBlock from '../components/scoreBlock'
import styled from 'styled-components'

const { Title } = Typography

const ResultText = styled.span`
  color: ${(props) => (props.pass ? '#7cb305' : '#cf1322')};
`

const ResultPage = () => {
  return (
    <div>
      <Head>
        <title>ผลการทดสอบ | โปรแกรมทำข้อสอบออนไลน์</title>
        <meta name='ผลการทดสอบ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FlexContainer direction='column'>
        <Title level={2} style={{ textAlign: 'center' }}>
          ยินดีด้วย คุณสอบ<ResultText pass={true}>ผ่าน!</ResultText>
        </Title>
        <ScoreBlock />
      </FlexContainer>
    </div>
  )
}

export default ResultPage
