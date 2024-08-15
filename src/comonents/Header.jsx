import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="fixed top-0 w-full py-[24px] px-[40px] bg-[#272727] flex justify-between">
      <img src="/logo.png" alt="logo" className="h-[40px] w-[40px]" />
      <div className="flex gap-[10px] justify-center items-center">
        <div className="flex justify-center items-center">
          <Link to="/">
            <p className="text-white font-bold text-[16px] cursor-pointer ">
              Home
            </p>
          </Link>
        </div>
        <Link to="/cart">
          <div className="flex justify-center items-center mr-[30px] cursor-pointer">
            <CiShoppingCart size={28} color="white" />
            <p className="text-white  font-bold text-[16px]">2</p>
          </div>
        </Link>

        <img src="/logo2.png" alt="logo" className="h-[40px] w-[40px]" />
      </div>
    </div>
  );
}
