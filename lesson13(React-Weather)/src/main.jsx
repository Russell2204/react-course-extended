import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/main.scss'
import { Provider } from 'react-redux'
import { store } from './api/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)