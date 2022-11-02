import { AppProps } from 'next/app';
import '../styles/global.scss';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
