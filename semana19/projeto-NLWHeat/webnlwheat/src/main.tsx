import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import { AuthProvider } from './contexts/auth'
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      {/* Com isso, todas as páginas da aplicação (<App/>) terão acesso aos dados inseridos no AuthProvider. */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
