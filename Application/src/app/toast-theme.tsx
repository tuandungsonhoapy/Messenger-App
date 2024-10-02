'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'
import { useTheme } from 'next-themes'

const ToastTheme = () => {
  const { theme } = useTheme()

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme === 'system' ? 'dark' : theme}
      transition={Bounce}
    />
  )
}

export default ToastTheme
