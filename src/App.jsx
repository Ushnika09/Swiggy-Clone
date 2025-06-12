import { Outlet } from 'react-router-dom'
import './App.css'
// import Apicalling from './Components/Apicalling'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
export default function App(){

  return(
    <Provider store={appStore}>
        <>
          <Header/>
          {/* <Body/> */}
          <Outlet/>
          <Footer/>
        </>
      </Provider>

  )
}