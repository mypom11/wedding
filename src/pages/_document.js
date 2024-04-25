import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react'

export default function Document() {
  return (
    <Html lang="ko">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
        <div id="overlay_drop"></div>
        <div id="bottom_sheet"></div>
      </body>
    </Html>
  )
}
