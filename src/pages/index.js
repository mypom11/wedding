import { AlertComponent } from '@/components/common/AlertComponent'

import { Layout } from '@/components/layout/Layout'
import { Header } from '@/components/layout/header/Header'
import { MainLayout } from '@/components/layout/header/MainLayout'

import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [headerOpen, setHeaderOpen] = useState(true)
  return (
    <>
      <Head>
        <title>민정기❤️우윤서 WeddingDay</title>
        <meta
          name="description"
          content="05월 25일 12시 / 문수컨벤션 그란데베뉴"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=no;"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <Header headerOpen={headerOpen} /> */}
        <MainLayout setHeaderOpen={setHeaderOpen} />
      </Layout>

      <AlertComponent />
    </>
  )
}
