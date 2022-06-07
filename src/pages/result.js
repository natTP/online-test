import { Typography } from 'antd'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FlexContainer from '../components/flexContainer'
import ScoreBlock from '../components/scoreBlock'
import questions from '../questions'

const { Title } = Typography

const ResultText = styled.span`
  .highlight {
    color: ${(props) => (props.pass ? '#7cb305' : '#cf1322')};
  }
`

const ResultPage = () => {
  const score = useSelector((state) => state.score)

  const isPass = (score) => {
    return score / questions.length >= 0.8
  }

  return (
    <div>
      <Head>
        <title>ผลการทดสอบ | โปรแกรมทำข้อสอบออนไลน์</title>
        <meta name='ผลการทดสอบ' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FlexContainer direction='column'>
        <Title level={2} style={{ textAlign: 'center' }}>
          <ResultText pass={isPass(score)}>
            {isPass(score) ? (
              <>
                ยินดีด้วย คุณสอบ<span className='highlight'>ผ่าน!</span>
              </>
            ) : (
              <>
                เสียใจด้วย คุณสอบ<span className='highlight'>ไม่ผ่าน!</span>
              </>
            )}
          </ResultText>
        </Title>
        <ScoreBlock score={score} />
      </FlexContainer>
    </div>
  )
}

export default ResultPage
