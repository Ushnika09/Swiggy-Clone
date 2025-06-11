import axios from "axios"
import { useEffect, useState } from "react";

export default  function useApicalling(){
    
    const [restArr,setRestArr]=useState([])
    
     useEffect(() => {
      async function FetchData() {
          try{let api = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
          let resp = api.data;

          console.log(resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name);

          setRestArr(resp.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
          }catch(e){
          console.log("Error fetching:", e);
          }
    }
    FetchData();
  }, []); // ✅ fixed: run only once on mount
    
   console.log(restArr,"restARR1");
    return(restArr)
}