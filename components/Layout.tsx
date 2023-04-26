import React, { ReactNode } from 'react'
import Header from '../components/Header'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header></Header>
    {children}
    <footer>
      <hr />
      <span>Integral Quiz - 2023</span>
    </footer>
  </div>
)

export default Layout