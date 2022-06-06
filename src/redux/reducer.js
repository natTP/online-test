import { createAction, createReducer } from '@reduxjs/toolkit'
import questions from '../questions'

const initialState = {
  name: '',
  answers: Array(questions.length).fill(0),
  score: 0,
}

const editName = createAction('setName')
const editAnswer = createAction('setAnswer')

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(editName, (state, action) => {
      state.name = action.payload
    })
    .addCase(editAnswer, (state, action) => {})
    .addDefaultCase((state, action) => {})
})

export default reducer
