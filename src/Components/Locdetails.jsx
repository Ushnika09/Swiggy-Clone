import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Locdetails({id}) {
  
  const [loc,setLoc]=useState([])
  const [loading,setLoading]=useState(true)


  useEffect(()=>{
    async function calling(){
        try{let api=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        let resp= await axios.get(api)

        console.log(resp.data.data.cards[2]?.card.card.info,"Loc");
        setLoc(resp.data.data.cards[2]?.card.card.info)
      }catch(e){
        console.log(e,"error");
      }finally{
        setLoading(false)
      }
  }
  calling()
  },[id])

  return (
    <>  
        {loading ? <h1>Loading</h1>:
          <div>
            <h1 className="text-3xl font-bold justify-center m-6 items-center flex">{loc.name}</h1>
          <div className=" bg-gray-300 h-0.5 mx-52 my-3 flex items-center justify-center"></div>
          <div className="p-6  bg-amber-100 rounded-lg my-6 mx-56 shadow-2xl">
              <span className="flex font-bold"> 
              <span className="my-1 mr-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg> 
              </span>
              {loc?.avgRating} ({loc?.totalRatingsString}) • {loc?.costForTwoMessage}
            </span>
            <h1 className="font-bold text-orange-700 my-1.5"><u>{loc?.cuisines.join(", ")}</u></h1>
            
            <div className="flex my-1.5">
              <div class="flex flex-col items-center space-y-2 mt-2 mx-2">
                <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                <div class="w-px h-4 bg-gray-300"></div>
                <div class="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <div className="font-medium">
              <h1 className="">Outlet  <span className="text-gray-500 ml-1 font-semibold">{loc?.locality}</span></h1>
              <h1 className="pt-3"> {loc?.sla.slaString.toLowerCase()}</h1>
            </div>
            </div>
        </div>
          </div>
        }
    </>
  )
}

export default Locdetails
