import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/slices'
import './FIREBASE'

const rootElement = document.getElementById('root');

if(rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>

        </React.StrictMode>,
    )
} else {
    console.log('Root element not found!')
}


