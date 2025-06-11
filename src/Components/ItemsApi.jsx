import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function useItemsApi( {id}) {
  const [itemsArr,setItemsArr]=useState([])

  useEffect(()=>{
    async function calling(){
        try{let api=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        let resp= await axios.get(api)

        console.log(resp.data.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards,"items");
        setItemsArr(resp.data.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
      }catch(e){
        console.log(e,"error");
      }
  }
  calling()
  },[id])

  return (itemsArr)
}

export default useItemsApi
