import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import questions from '../../questions'
import Button from '../../components/button'
import QuestionItem from '../../components/questionItem'
import FlexContainer from '../../components/flexContainer'

const QuizPage = () => {
  const router = useRouter()
  const { idx } = router.query

  const question = questions[idx - 1]

  return (
    <div>
      <Head>
        <title>โปรแกรมทำข้อสอบออนไลน์ | ข้อ {idx}</title>
        <meta name={`โปรแกรมทำข้อสอบออนไลน์ | ข้อ ${idx}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <QuestionItem question={question} />
      <FlexContainer direction='row'>
        <Button type='default'>
          <LeftOutlined /> ข้อที่แล้ว
        </Button>
        <Button>
          ข้อถัดไป <RightOutlined />
        </Button>
      </FlexContainer>
    </div>
  )
}

export default QuizPage
