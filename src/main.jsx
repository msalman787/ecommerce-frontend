import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './state/store.js'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <QueryClientProvider client={QueryClient}> */}
    <App />
    {/* </QueryClientProvider > */}
    {/* </Provider> */}
  </React.StrictMode>,
)
