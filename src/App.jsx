import { Outlet } from 'react-router-dom'
import './App.css'
// import Apicalling from './Components/Apicalling'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Header from './Components/Header'
export default function App(){

  return(
    <>
    <Header/>
    {/* <Body/> */}
    <Outlet/>
    <Footer/>
    </>

  )
}