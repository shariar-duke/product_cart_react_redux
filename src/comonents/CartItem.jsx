/* eslint-disable react/prop-types */

import { RiDeleteBin6Line } from "react-icons/ri";
export default function CartItem({cart}) {

    const backgroundImageStyle = {
        backgroundImage: `url(${cart?.imgUrl ?? ""})`,
      };
    
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
        <p className="text-[20px] font-medium cursor-pointer">+</p>
        <p className="text-[20px] font-medium cursor-pointer">{cart?.quantity}</p>
        <p className="text-[20px] font-medium cursor-pointer">-</p>
       </div>
       <RiDeleteBin6Line className="cursor-pointer" color="red"  size={26}/>
    </div>
  )
}

