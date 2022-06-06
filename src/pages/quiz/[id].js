import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const QuizPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Head>
        <title>โปรแกรมทำข้อสอบออนไลน์ | ข้อ {id}</title>
        <meta name={`โปรแกรมทำข้อสอบออนไลน์ | ข้อ ${id}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {id}
    </div>
  )
}

export default QuizPage
