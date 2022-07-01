import type { NextPage } from 'next'
import Head from 'next/head'
import Appbar from '../components/Appbar'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Uplyft</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Appbar />
      
      <main>
        <p className='text-center px-8 py-16 text-6xl'>Discuss with the people about the things you love. Create your own community, join Uplyft today</p>
      </main>
    </div>
  )
}

export default Home
