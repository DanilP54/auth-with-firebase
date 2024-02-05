import './App.css'
import { useRoutes } from 'react-router-dom'
import HomePage from './components/HomePage'
import FormContainer from './components/FormContainer'


function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <HomePage />
    }, 
    {
      path: '/login', 
      element: <FormContainer />
    }, 
  ])
  return elements
}

export default App
