import { PrismicProvider } from '@prismicio/react'
import { client } from '../services/prismic'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider client={client}>
      <Component {...pageProps} />
    </PrismicProvider>
  )
}

export default MyApp
