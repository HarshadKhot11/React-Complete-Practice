import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Check} from './App.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Check />
  </StrictMode>
)