export default function PriceBox() {
  return (
    <div className="max-w-[400px] rounded-md p-[20px] shadow-xl border border-gray-200">
      <p className="text-center font-bold text-[20px]">Bill Details</p>

      <div className="mt-[30px] flex flex-col gap-[6px]">
        <div className="flex justify-between">
          <p className="text-gray-600 text-[16px]">Sub Total</p>
          <p className="text-gray-600 text-[16px]">BDT 30000</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600 text-[16px]">Discount</p>
          <p className="text-gray-600 text-[16px]">BDT 0</p>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600 text-[16px]">Discount</p>
          <p className="text-gray-600 text-[16px]">BDT 0</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-[16px]">Total</p>
          <p className="font-bold text-[16px]">BDT 30000</p>
        </div>
        <button className="w-full bg-black text-white rounded-lg text-[16px] font-bold bg-[#272727] mt-[20px] py-[4px]">Place Order</button>
      </div>
    </div>
  );
}
