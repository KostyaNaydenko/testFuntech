import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/global.css'
import MainPage from './pages/NFT/MainPage'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <MainPage />
    </ThemeProvider>
  )
}

export default App
