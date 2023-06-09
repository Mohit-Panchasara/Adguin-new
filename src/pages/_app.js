import '@/styles/globals.css'
import Navbar from '@/infrastructure/ui/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />    
    </>
  )
}
