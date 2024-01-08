import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={configureStore()}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  );
