import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './App.css'
import Navbar from './Components/Navbar'
import Paste from './Components/Paste'
import View from './Components/View'
import Home from './Components/Home'
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: "/pastes",
      element:
        <div>
          <Navbar />
          <Paste />
        </div>
    },
    {
      path: "/pastes/:id",
      element:
        <div>
          <Navbar />
          <View />
        </div>
    }
  ]
)



function App() {
  return (
    <>

    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
