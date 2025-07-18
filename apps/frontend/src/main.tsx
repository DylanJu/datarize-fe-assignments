import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './query/queryClient.ts'

import './style/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
