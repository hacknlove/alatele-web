import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
          <link rel="manifest" href="/site.webmanifest"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
          <meta name="msapplication-TileColor" content="#00aba9"></meta>
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
          <img id="fondo" src="/plato.jpg" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
