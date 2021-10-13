import Head from 'next/head'
import {Header, Footer, Main} from "../components";
// import Link from 'next/link'
// import Image from 'next/image'
// import { Link as Scroll } from 'react-scroll'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Takara's page</title>
        <meta property="description" content="ポートフォリオ" />
        <link rel="icon" href="/fwywd.png" />
      </Head>
      
      <Header />
      <Main />
      <Footer />

    </div>
  )
}
