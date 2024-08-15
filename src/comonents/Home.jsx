import AddProduct from "./AddProduct";
import ProductCart from "./ProductCart";

export default function Home() {
  return (
    <div className="mt-[120px] px-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      <div className="md:col-span-1 lg:col-span-1">
        <AddProduct />
      </div>
      
      <div className="md:col-span-1 lg:col-span-2 grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-[20px]">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
}
