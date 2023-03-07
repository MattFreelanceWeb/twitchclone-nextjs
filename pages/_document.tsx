import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header/>
        <Sidebar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
