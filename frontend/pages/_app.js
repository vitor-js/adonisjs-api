import { ToastContainer } from 'react-toastify'
import GlobalStyle from '../styles/globals'

import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
