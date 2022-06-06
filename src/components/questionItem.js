import React from 'react'
import { Radio, Space, Typography } from 'antd'
import FlexContainer from './flexContainer'

const { Title, Text } = Typography

const QuestionItem = ({ question }) => {
  const onChange = (event) => {
    console.log('radio checked', event.target.value)
  }

  return (
    <FlexContainer direction='column'>
      <Title level={5}>{question?.name}</Title>
      <Radio.Group onChange={onChange}>
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
