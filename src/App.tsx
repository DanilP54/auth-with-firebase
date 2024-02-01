import './App.css'
import { useRoutes } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'







function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <HomePage />
    }, 
    {
      path: '/login', 
      element: <LoginPage />
    }, 
    {
      path: '/register', 
      element: <RegisterPage />
    }
  ])
  return elements
}

export default App
