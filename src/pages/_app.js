import '@/styles/globals.css'
import AuthProvider from '@/context/authContext'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  )
}
