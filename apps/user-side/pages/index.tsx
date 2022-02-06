import Head from 'next/head'
import { Button } from 'ui/Button'

const Home = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Button />
  </div>
)

export default Home
