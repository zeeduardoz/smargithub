import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, HashRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from './context/AuthContext'
import { GithubProvider } from './context/GithubContext'

import Routes from './routes'
import GlobalStyle from './global'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <GithubProvider>
        <ToastContainer
          autoClose={3000}
          position="top-right"
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
        <GlobalStyle />
        <HashRouter>
          <Router basename="/smargithub">
            <Routes />
          </Router>
        </HashRouter>
      </GithubProvider>
    </AuthProvider>
  </StrictMode>,
  document.getElementById('root')
)
