import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Button from '../../components/button'
import FlexContainer from '../../components/flexContainer'
import QuestionItem from '../../components/questionItem'
import questions from '../../questions'

const { Text } = Typography

const QuizPage = () => {
  const answers = useSelector((state) => state.answers)
  const router = useRouter()
  let { idx } = router.query

  if (
    !Array(questions.length)
      .fill()
      .map((_, i) => '' + (i + 1))
      .includes(idx)
  ) {
    return <Text>This question does not exist.</Text>
  }

  idx = parseInt(idx)

  const question = questions[idx - 1]
  const answer = answers[idx - 1]

  const handleBackwardClick = () => {
    if (idx > 1) router.push(`/quiz/${idx - 1}`)
  }

  const handleForwardClick = () => {
    if (idx < questions.length) router.push(`/quiz/${idx + 1}`)
    else router.push('/result')
  }

  return (
    <div>
      <Head>
        <title>โปรแกรมทำข้อสอบออนไลน์ | ข้อ {idx}</title>
        <meta name={`โปรแกรมทำข้อสอบออนไลน์ | ข้อ ${idx}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Text type='secondary'>{`ข้อที่ ${idx} จาก ${questions.length}`}</Text>
      <QuestionItem idx={idx - 1} question={question} />
      <FlexContainer direction='row'>
        <Button
          type='default'
          disabled={idx === 1}
          onClick={handleBackwardClick}
        >
          <LeftOutlined /> ข้อที่แล้ว
        </Button>
        <Button onClick={handleForwardClick} disabled={answer === 0}>
          ข้อถัดไป <RightOutlined />
        </Button>
      </FlexContainer>
    </div>
  )
}

export default QuizPage
