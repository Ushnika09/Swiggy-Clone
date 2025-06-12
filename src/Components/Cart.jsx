import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset, deleteItem } from '../utils/cartSlice'

const Cart = () => {

  const dispatch=useDispatch()
  function handleClear(){
    dispatch(reset())
  }

  function handleDelete(id){
    dispatch(deleteItem(id))
  }

  const cartItems=useSelector((store)=>store.cart.items)
  return (
    <div className='flex flex-col'>
      {
        cartItems.map((item)=>{
          console.log(item, "🧾 cart item");
          return(
            <div className="mx-56  ">
        <div className="flex justify-between m-6  rounded-lg p-6 ">
          <div className=" p-3 m-2">
            <h1 className="text-2xl">₹ {item?.card.info.price/100}</h1> 
            <h1 className="text-2xl font-bold my-1">{item?.card.info.name}</h1>
          </div>          
            <div className='relative'>
          <img className="rounded-lg shadow-2xl w-96 h-64 " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card.info.imageId}`} alt="" />      
          <button onClick={()=>handleDelete(item)} className="absolute -bottom-4 right-20 bg-white hover:bg-gray-200  font-bold text-red-400 p-2 px-6 border shadow-2xl border-black rounded-lg">REMOVE</button>  
            </div>
        </div>
      </div>
          )
        })
      }
      {cartItems.length ? 
      <button  className="shadow-2xl hover:bg-red-300  font-bold bg-red-900 text-white p-2 px-6 border m-3.5 mx-auto rounded-lg" onClick={()=>handleClear()}>Clear Cart</button>:
      <h1 className='h-96 justify-center flex items-center text-2xl text-orange-700 font-bold'>Cart is empty</h1>}   
      </div>
  )
}

export default Cart