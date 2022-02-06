import Head from 'next/head'
import { Button } from 'ui/Button'

const Home = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Button />
    <div
      style={{ height: '100px', width: '100px' }}
      className="rounded-4xl bg-blue-900"
    >
      ssss
    </div>
  </div>
)

export default Home
