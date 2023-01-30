import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Route, Link} from 'react-router-dom'
import ReactDom from 'react-dom';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

<nav> 
  <Link to="/">Home</Link>
  <Link to="/">About</Link>
</nav>

