import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

const PhotoShow: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <h1>写真の詳細ページ {slug}</h1>
    </>
  )

}

export default PhotoShow