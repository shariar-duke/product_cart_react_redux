import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ProductCart from "./ProductCart";

export default function Home() {
  const products = useSelector((state) => state.product);

  

  return (
    <div className="mt-[120px] px-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      <div className="md:col-span-1 lg:col-span-1">
        <AddProduct />
      </div>

      <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-[20px]">
        {products.map((singleProduct) => (
          <ProductCart key={singleProduct.id} product={singleProduct} />
        ))}
      </div>
    </div>
  );
}
