/* Hooks */
import { useState } from 'react'

/* Assets */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/* Router */
import { 
  RouterProvider,
} from "react-router-dom";
import router from "./router.jsx"


/* CSS */
import './App.css'


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
