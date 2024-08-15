export default function ProductCart() {
  return (
    <div className="shadow-2xl rounded-md">
     <div className="h-[160px] max:w-[280px] bg-[url('/bgImg.jpg')] bg-cover bg-center rounded-md "></div>

      <div className="mt-[30px] p-[10px]">
        <p className="text-[16px] font-bold">Apple Macbook</p>
        <span className="text-gray-500 text-[14px]">Laptop</span>
        <div className="flex justify-between w-full ">
          <p className="text-[14px] font-bold">BDT 12000</p>
          <p className="text-[14px] font-bold">QTY 20 </p>
        </div>
        <button className="text-white text-[14px] font-bold text-lg mt-2 bg-gray-800 hover:bg-gray-900 active:bg-black w-full py-[4px] rounded-md shadow-md cursor-pointer transition-all duration-200">
          Add Product
        </button>
      </div>
    </div>
  );
}
