import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vider</title>
        <meta name="description" content="Vider, a video chat application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-xl font-bold">Hello world</h1>
    </div>
  )
}

export default Home
