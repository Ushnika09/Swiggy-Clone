import { useState,useEffect } from "react"
import useApicalling from "./Apicalling"
import Restaurantcard from "./Restaurantcard"

function Body(){

    const restArr=useApicalling()
    let [fil,setFil]=useState(restArr);
    let [click,setClick]=useState("")

    useEffect(() => {
        setFil(restArr);
    }, [restArr]);

    const clickedStyle = "bg-green-600 shadow-2xl text-white border-1";

    function handelDelivery(restArr){
        let filArr=restArr.filter((ele)=>ele?.info?.sla?.deliveryTime<=35)
        setFil(filArr)
        setClick("delivery")
    }

    function handelRatings(restArr){
        let filArr=restArr.filter((ele)=>ele.info.avgRating>=4.5)
        setFil(filArr)
        setClick("rating")
    }
    function handelReset(restArr){
        setFil(restArr)
        setClick("")
    }

    return (
        <div >
            <div className="mx-22 my-10">
                <h1 className="font-bold text-2xl my-6 ">Restaurants with online food delivery in Bangalore</h1>
                <div className="my-4">
                    <button onClick={()=>handelDelivery(restArr)} className={`border font-medium border-gray-400 px-3 py-2 rounded-3xl ${click === "delivery" ? clickedStyle : ""}`} >Fast Delivery</button>
                    <button className="border  font-medium border-gray-400 ml-5 px-3 py-2 rounded-3xl">New On Swiggy</button>
                    <button className="border font-medium border-gray-400 ml-5 px-3 py-2 rounded-3xl">Pure Veg</button>
                    <button className="border font-medium border-gray-400 ml-5 px-3 py-2 rounded-3xl">Offers</button>
                    <button onClick={()=>handelRatings(restArr)} className={`border font-medium border-gray-400 px-3 py-2 rounded-3xl ml-5 ${click === "rating" ? clickedStyle : ""}`}>Ratings 4.5+</button>
                    <button onClick={()=>handelReset(restArr)} className={`border font-medium border-gray-400 px-3 py-2 rounded-3xl ml-5`}>Reset</button>
                </div>
            </div>
            <div className="m-4 p-2 mx-18 flex flex-wrap gap-6">
                <Restaurantcard restArr={fil}/>
                               
            </div>
        </div>
    )
}

export default Body