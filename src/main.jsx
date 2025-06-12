import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Offers from './Components/Offers.jsx'
import Signin from './Components/Signin.jsx'
import Help from './Components/Help.jsx'
import Cart from './Components/Cart.jsx'
import Body from './Components/Body.jsx'
import RestaurantDetails from './Components/RestaurantDetails.jsx'
// import Error from './Components/Error.jsx'

const appRoute=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    // errorElement:<Error/>,
    children:[
      {
    path:"/",
    element:<Body/>
      },
      {
    path:"/offers",
    element:<Offers/>
    },
    {
      path:"/signin",
      element:<Signin/>
    },
    {
      path:"/Help",
      element:<Help/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/restaurant/:id",
      element:<RestaurantDetails/>
    },
      ]
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoute}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
