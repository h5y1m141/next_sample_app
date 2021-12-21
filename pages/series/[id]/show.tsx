import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

const SeriesShow: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>シリーズの詳細ページ {id}</h1>
    </>
  )

}

export default SeriesShow