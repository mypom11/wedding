import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="ko">
      <Head></Head>
      <body>
        <Main />
        <NextScript />

        <div id="overlay_drop"></div>
        <div id="bottom_sheet"></div>
      </body>
    </Html>
  )
}
