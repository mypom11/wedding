import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="ko">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=01279973901833e94a5f072077ef31b8&autoload=false`}
          strategy="beforeInteractive"
        />

        <div id="overlay_drop"></div>
        <div id="bottom_sheet"></div>
      </body>
    </Html>
  )
}
