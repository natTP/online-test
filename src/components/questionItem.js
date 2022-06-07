import React from 'react'
import { Radio, Space, Typography } from 'antd'
import FlexContainer from './flexContainer'
import { useDispatch, useSelector } from 'react-redux'

const { Title } = Typography

const QuestionItem = ({ idx, question }) => {
  const answer = useSelector((state) => state.answers[idx])
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch({ type: 'setAnswer', payload: { idx, value: event.target.value } })
  }

  return (
    <FlexContainer direction='column'>
      <Title level={5}>{question?.name}</Title>
      <Radio.Group onChange={handleChange} value={answer}>
        <Space direction='vertical'>
          {question?.choice.map((item) => {
            return (
              <Radio value={item.id} key={item.id}>
                {item.text}
              </Radio>
            )
          })}
        </Space>
      </Radio.Group>
    </FlexContainer>
  )
}

export default QuestionItem
