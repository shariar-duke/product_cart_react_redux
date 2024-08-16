/* eslint-disable react/prop-types */

export default function ProductCart({ product }) {
  // eslint-disable-next-line no-unused-vars
  const { imgUrl } = product;

  const backgroundImageStyle = {
    backgroundImage: `url(${product?.imgUrl ?? ""})`,
  };

  console.log;
  return (
    <div className="shadow-2xl rounded-md  max-h-[330px]">
      <div
        className="h-[160px] max:w-[280px]  bg-cover bg-center rounded-md"
        style={backgroundImageStyle}
      ></div>

      <div className="mt-[30px] p-[10px]">
        <p className="text-[16px] font-bold">{product?.productName}</p>
        <span className="text-gray-500 text-[14px]">{product?.category}</span>
        <div className="flex justify-between w-full ">
          <p className="text-[14px] font-bold">BDT {product?.price}</p>
          <p className="text-[14px] font-bold">QTY {product?.quantity} </p>
        </div>
        <button className="text-white text-[14px] font-bold text-lg mt-2 bg-gray-800 hover:bg-gray-900 active:bg-black w-full py-[4px] rounded-md shadow-md cursor-pointer transition-all duration-200">
          Add Product
        </button>
      </div>
    </div>
  );
}
