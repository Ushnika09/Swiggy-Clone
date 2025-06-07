import axios from "axios"
import { useEffect, useState } from "react";

export default  function useApicalling(){
    
    const [restArr,setRestArr]=useState([])
    
     useEffect(() => {
      async function FetchData() {
          try{let api = await axios.get("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.70840&lng=88.43180&carousel=true&third_party_vendor=1");
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