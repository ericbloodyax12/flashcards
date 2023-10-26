import { StrictMode } from 'react'

import { Theme } from '@radix-ui/themes'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '@radix-ui/themes/styles.css'

import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
)
