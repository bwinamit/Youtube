import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Utils/store.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}><App />
  </Provider>
    
  </>,
)
