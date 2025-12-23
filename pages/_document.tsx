import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles'

const GA_TRACKING_ID = 'UA-57420841-1'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link rel="icon" href="/favicon.png" />
          <link rel="alternative" href="/atom.xml" title="@yurtaev" type="application/atom+xml" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="@yurtaev" />
          <meta property="og:url" content="http://yurtaev.link/" />
          <meta property="og:site_name" content="@yurtaev" />
          <meta property="og:description" content="Записки юного мазохист & Программирование через боль" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="@yurtaev" />
          <meta name="twitter:description" content="Записки юного мазохист & Программирование через боль" />
          <meta name="twitter:creator" content="@yurtaev" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
