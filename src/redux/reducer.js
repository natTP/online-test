import { createAction, createReducer } from '@reduxjs/toolkit'
import questions from '../questions'

const initialState = {
  name: '',
  answers: Array(questions.length).fill(0),
  score: 0,
}

const calculateScore = (state) => {
  let score = 0
  for (let idx = 0; idx < questions.length; idx++) {
    if (questions[idx].answerId === state.answers[idx]) score += 1
  }
  return score
}

const setName = createAction('setName')
const setAnswer = createAction('setAnswer')

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setName, (state, action) => {
      state.name = action.payload
    })
    .addCase(setAnswer, (state, action) => {
      const idx = action.payload.idx
      state.answers[idx] = action.payload.value
      state.score = calculateScore(state)
    })
    .addDefaultCase((state, action) => {})
})

export default reducer
