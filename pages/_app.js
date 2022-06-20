import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'

function Knet({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Knet Concept</title>
        <meta name="description" content="Knet Concept" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="text-center text-white mb-1">
        <h1 className="text-3xl">Knet Payment Gateway Concept</h1>

        <p className="text-lg">
          with{' '}
          <Link href="https://nextjs.org">
            <a target="_blank" className="underline hover:text-gray-300">
              Nextjs
            </a>
          </Link>{' '}
          and{' '}
          <Link href="https://tailwindcss.com">
            <a target="_blank" className="underline hover:text-gray-300">
              Tailwindcss
            </a>
          </Link>
        </p>

        <small className="text-zinc-500">
          *This webapp is not related to Knet
        </small>
        <br />
        <small className="text-zinc-500">
          *This webapp is not related to any bank
        </small>
        <br />
        <small className="text-zinc-500">
          *Boubyan Bank logo used as a demo
        </small>
      </div>

      <Component {...pageProps} />
    </>
  )
}

export default Knet
