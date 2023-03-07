import Head from 'next/head'
import { Inter } from 'next/font/google'
import Games from '@/components/Games/Games'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt | Twitch Clone</title>
        <meta name="description" content="twitch clone using the twith api Generated by create next app and create by matt: https://matt-portfolio-mattfreelanceweb.vercel.app/ using technos: html css tailwindcss js react nextjs"  />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='absolute top-16 left-60 p-12 text-3xl'>
        hello let&apos;s build something awesome
        <Games/>
      </main>
    </>
  )
}
