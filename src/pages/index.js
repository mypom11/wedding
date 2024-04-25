import { AlertComponent } from '@/components/common/AlertComponent'
import { Analytics } from '@vercel/analytics/react'
import { Layout } from '@/components/layout/Layout'
import { MainLayout } from '@/components/layout/header/MainLayout'

import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [headerOpen, setHeaderOpen] = useState(true)
  return (
    <>
      <Head>
        <title>민정기❤️우윤서 WeddingDay</title>
        <meta property="og:url" content="https://yswoo.jkmin.store" />
        <meta property="og:title" content="민정기❤️우윤서 WeddingDay" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="05월 25일 12시 / 문수컨벤션 그란데베뉴"
        />
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
      <Analytics />
      <Layout>
        <MainLayout setHeaderOpen={setHeaderOpen} />
      </Layout>

      <AlertComponent />
    </>
  )
}
