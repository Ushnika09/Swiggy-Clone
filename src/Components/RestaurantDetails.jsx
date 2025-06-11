import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Locdetails from "./Locdetails"
import Itemcard from "./Itemcard"

function RestaurantDetails() {
  const {id}=useParams()

  return (
    <>
        <Locdetails id={id}/>
        <Itemcard id={id}/>
          
    </>
  )
}

export default RestaurantDetails
