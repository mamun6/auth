import reactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"



reactDom.createRoot(document.getElementById('root')).render( 
<BrowserRouter>
<App />
</BrowserRouter>)