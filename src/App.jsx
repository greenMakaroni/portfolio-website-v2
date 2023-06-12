/* Hooks */
import { useState } from 'react'

/* Assets */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/* Router & Navigation*/
import { RouterProvider} from "react-router-dom"
import router from "./router.jsx"
import Navigation from './components/navigation/Navigation'


/* CSS */
import './App.css'


function App() {

  return (
    <>  
        <Navigation />
        <RouterProvider router={router} />
    </>
  )
}

export default App
