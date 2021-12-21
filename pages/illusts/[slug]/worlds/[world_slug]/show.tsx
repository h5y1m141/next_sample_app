import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

const IllustWorldsShow: NextPage = () => {
  const router = useRouter()
  const { world_slug } = router.query

  return (
    <>
      <h1>イラストに紐づくWorldの詳細ページです！ {world_slug}</h1>
    </>
  )

}

export default IllustWorldsShow