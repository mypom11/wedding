import { AlertComponent } from '@/components/common/AlertComponent'
import { GoTop } from '@/components/common/GoTop'
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header headerOpen={headerOpen} />
        <MainLayout setHeaderOpen={setHeaderOpen} />
      </Layout>

      <AlertComponent />
    </>
  )
}
