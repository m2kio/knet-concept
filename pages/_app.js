import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Tailwindcss!</h1>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
