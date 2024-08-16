import { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "../redux/productList/actions";
export default function AddProduct() {
  const [state, setState] = useState({
    productName: "",
    category: "",
    imgUrl: "",
    price: "",
    quantity: "",
  });

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value 

    setState({
        ...state,
        [name] : value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(added(state))

  
  };
  return (
    <div className="max-w-[400px] rounded-md p-[20px] shadow-xl">
      <form onSubmit={handleSubmit} action="">
        <p className="text-center font-bold text-[20px]"> Add New Product </p>
        <div className="mt-[20px]">
          <label
            htmlFor="productName"
            className="block text-gray-600 font-bold mb-2"
          >
            Product Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="productName"
            id="productName"
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-gray-600  font-bold my-2"
          >
            Category
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="category"
            id="category"
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
          />
        </div>

        <div>
          <label
            className="block text-gray-600  font-bold my-2"
            htmlFor="imgUrl"
          >
            Image Url
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="imgUrl"
            id="imgUrl"
            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
          />
        </div>

        <div className="flex  my-2 gap-[10px]">
          <div>
            <label
              className="block text-gray-600  font-bold my-2"
              htmlFor="price"
            >
              Price{" "}
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="price"
              id="price"
              className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
            />
          </div>
          <div>
            <label
              className="block text-gray-600  font-bold my-2"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="quantity"
              id="quantity"
              className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black-500 w-full"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={false}
            className="text-white text-[16px] font-bold text-lg mt-4 bg-gray-800 hover:bg-gray-900 active:bg-black px-[30px] py-[6px] rounded-md shadow-md cursor-pointer transition-all duration-200"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}


//  Online Images links : 

// https://media.istockphoto.com/id/2151210881/photo/a-caucasian-male-is-shopping-online-using-a-laptop-and-a-credit-card.jpg?s=1024x1024&w=is&k=20&c=6nhg2jWDVXexSoD40GUEbrvwClPJ7Jf7q28nDAdn1C0=


// https://media.istockphoto.com/id/1028869800/photo/close-up-of-a-hands-of-a-businessman-on-a-keyboard.jpg?s=1024x1024&w=is&k=20&c=RSzIHxirMQmzsrqnm7vUuTIjBhaGLaYZQxGpzNVDqzQ=


// https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D