/* eslint-disable react/prop-types */

import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { decrease as cartProcutDecrease, increase as cartProcutIncrease, remove } from "../redux/cartList/actions";
import { decrease, increase, restored } from "../redux/productList/actions";
export default function CartItem({cart}) {

  const products = useSelector((state) => state.product);
    const dispatch = useDispatch()
    const backgroundImageStyle = {
        backgroundImage: `url(${cart?.imgUrl ?? ""})`,
      };
    

    const  increaseCartItemHandler =()=> 
    {
       const currentProdct = products.find((product) => product.id === cart.id)
       if(currentProdct.quantity > 0) 
       {

        dispatch(decrease(cart.id)) // cart a barale home page thke komb
        dispatch(cartProcutIncrease(cart.id)) // increase number of product in cart
       }

    }


    const decreaseCartItemHandler =() => 
    {
       if(cart.quantity > 0) 
       {
        dispatch(increase(cart.id)) // cart a komale home page a barbe
        dispatch(cartProcutDecrease(cart.id)) // eta cart er product number decreae korabe
       }
       
    }


    // for deelteing the cart 

    const handleDeleteCart =()=> 
    {
      dispatch(remove(cart.id))
      dispatch(restored(cart.id, cart.quantity))
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
       <RiDeleteBin6Line onClick={handleDeleteCart} className="cursor-pointer" color="red"  size={26}/>
    </div>
  )
}

