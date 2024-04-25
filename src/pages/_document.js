import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=01279973901833e94a5f072077ef31b8&autoload=false`}
          strategy="beforeInteractive"
          crossorigin="anonymous"
        />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
          integrity="sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01"
          crossorigin="anonymous"
        ></Script>
        <div id="overlay_drop"></div>
        <div id="bottom_sheet"></div>
      </body>
    </Html>
  )
}
