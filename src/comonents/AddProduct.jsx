export default function AddProduct() {
  return (
    <div className="max-w-[400px] rounded-md p-[20px] shadow-xl">
      <form action="">
        <p className="text-center font-bold text-[20px]"> Add New Product </p>
        <div className="mt-[20px]">
          <label
            htmlFor="productName"
            className="block text-gray-600  font-bold mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
          />
        </div>

        <div>
          <label htmlFor="category"        className="block text-gray-600  font-bold my-2">Category</label>
          <input
            type="text"
            name="category"
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
          />
        </div>

        <div>
          <label className="block text-gray-600  font-bold my-2"  htmlFor="imageUrl"  >Image Url</label>
          <input
            type="text"
            name="imageUrl"
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
          />
        </div>

        <div className="flex  my-2 gap-[10px]">
          <div>
            <label className="block text-gray-600  font-bold my-2"  htmlFor="productName">Price </label>
            <input
              type="number"
              name="productName"
              className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-600  font-bold my-2"  htmlFor="productName">Quantity</label>
            <input
              type="number"
              name="productName"
              className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
            />
          </div>
        </div>
         <div className="flex justify-center items-center">
         <button className="text-white text-[16px] font-bold text-lg mt-4 bg-gray-800 hover:bg-gray-900 active:bg-black px-[30px] py-[6px] rounded-md shadow-md cursor-pointer transition-all duration-200">
  Add Product
</button>
         </div>
       
      </form>
    </div>
  );
}
