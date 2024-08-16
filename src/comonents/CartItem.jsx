/* eslint-disable react/prop-types */

import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../redux/productList/actions";
export default function CartItem({cart}) {
   
    const dispatch = useDispatch()
    const backgroundImageStyle = {
        backgroundImage: `url(${cart?.imgUrl ?? ""})`,
      };
    

    const  increaseCartItemHandler =()=> 
    {
       dispatch(decrease(cart.id)) // cart a barale home page thke komb
    }


    const decreaseCartItemHandler =() => 
    {
        dispatch(increase(cart.id)) // cart a komale home page a barbe
    }
  return (
    <div className="border border-gray-200 shadow-lg rounded-lg flex  p-[14px]  items-center">
       <div className="flex flex-1 gap-[12px]">
        <div className="h-[80px] w-[140px] rounded-md bg-cover bg-center" style={backgroundImageStyle}></div>
         <div className="flex flex-col gap-[5px]  h-full">
            <p className="text-[16px] font-bold text-black-200">{cart?.productName}</p>
            <p className="text-[14px] font-bold text-gray-600"> {cart?.category} </p>
            <p className="text-[16px] font-bold text-gray">{cart?.price}</p>
         </div>
       </div>
       <div className="flex flex-1  gap-[14px]">
        <p onClick={increaseCartItemHandler} className="text-[20px] font-medium cursor-pointer">+</p>
        <p className="text-[20px] font-medium cursor-pointer">{cart?.quantity}</p>
        <p onClick={decreaseCartItemHandler}  className="text-[20px] font-medium cursor-pointer">-</p>
       </div>
       <RiDeleteBin6Line className="cursor-pointer" color="red"  size={26}/>
    </div>
  )
}

