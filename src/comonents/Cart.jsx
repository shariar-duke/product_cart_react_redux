import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import PriceBox from "./PriceBox";
export default function Cart() {
  const allCarts = useSelector((state) => state.cart);
  console.log("All the carts are", allCarts);
  return (
    <div className="mt-[120px] px-[30px] grid grid-cols-3 gap-[36px]">
      <div className="col-span-2">
        <p className="font-bold text-[20px] mb-[26px]">Shopping Cart</p>
        <div className="flex flex-col gap-[16px]">
          {allCarts &&
            allCarts.map((cart) => <CartItem key={cart.id} cart={cart} />)}
        </div>
      </div>
      <div className="col-span-1">
        <PriceBox />
      </div>
    </div>
  );
}
