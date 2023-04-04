import '@/styles/globals.css'
import AuthProvider from '@/context/authContext'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      {Component.name !== "Login" && Component.name !== "Register" && <Navbar />}
      <Component {...pageProps} />
    </AuthProvider>
  )
}
