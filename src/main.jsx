import React from 'react'
import ReactDOM from 'react-dom/client'
// Імпорт стилів нормалізації
import 'modern-normalize'
import App from './components/App'

import './index.css'
import './components/App.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
