import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

const IllustsShow: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <h1>イラストの詳細ページ {slug}</h1>
    </>
  )

}

export default IllustsShow