import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssString, darkTheme } from '@/styles'


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
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
        </Head>
        <body className={darkTheme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
