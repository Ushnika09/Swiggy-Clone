import Restaurantcard from "./Restaurantcard"

function Body(){
    return (
        <div >
            <div className="mx-22 my-10">
                <h1 className="font-bold text-2xl my-8">Restaurants with online food delivery in Siliguri</h1>
                <div className="my-4">
                    <button className="border font-medium border-gray-400 px-3 py-2 rounded-3xl">Fast Delivery</button>
                    <button className="border font-medium border-gray-400 ml-5 px-3 py-2 rounded-3xl">New On Swiggy</button>
                    <button className="border font-medium border-gray-400 ml-5 px-3 py-2 rounded-3xl">Pure Veg</button>
                    <button className="border font-medium border-gray-400 ml-5 px-3 py-2 rounded-3xl">Offers</button>
                    <button className="border font-medium border-gray-400 ml-5 px-3 py-2 rounded-3xl">Ratings 4.0+</button>
                </div>
            </div>
            <div className="m-4 p-2 mx-18 flex flex-wrap gap-6">
                <Restaurantcard/>
                <Restaurantcard/>
                <Restaurantcard/>
                
            </div>
        </div>
    )
}

export default Body