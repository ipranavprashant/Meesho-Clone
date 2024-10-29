import { useNavigate } from "react-router-dom";
const OrderConfirmation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-around p-8 ">
        <img
          src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
          className="w-28 h-10 md:w-36 cursor-pointer"
        />
        <div className="w-72 flex">
          <div>
            <div className="rounded-full  text-xs text-blue-400 border border-blue-400 h-7 w-7 flex justify-center items-center">
              1
            </div>
            <p className="text-xs">Review</p>
          </div>
          <div className="w-full h-0.5 mt-3 bg-gray-300"></div>
          <div>
            <div className="rounded-full  text-xs text-blue-400 border border-blue-400 h-7 w-7 flex justify-center items-center">
              2
            </div>
            <p className="text-xs">Payment</p>
          </div>
        </div>
      </div>
      <div className="w-full h-0.25 bg-black"></div>

      <div className="grid grid-cols-1 lg:grid-cols-[50%,50%] gap-8 mt-5 ml-5">
        <div>
          <div className="w-4/6 ml-auto mr-auto lg:ml-auto lg:mr-0">
            <p className="font-bold text-lg pt-4 pb-4">Product Details</p>
            <div className="h-10 w-full border  flex items-center rounded-md">
              Estimated Delivery by Thursday, 07th Nov
            </div>
            <div className="border rounded-sm p-4 flex justify-between">
              <div className="flex">
                <img
                  className="h-12 w-12 rounded-sm"
                  src="https://images.meesho.com/images/marketing/fc6dbe28-a648-4f66-8a35-3899a8e99048.png"
                  alt="Thumbnail 1"
                />
                <div className="ml-4">
                  <b>Kashvi Ensemble Kurtis</b>
                  <p>₹182</p>
                  <p>All issue easy returns</p>
                  <span>Size: M</span>&nbsp;⋆&nbsp;
                  <span>Qty: 1</span>
                </div>
              </div>
              <button className="mb-auto text-pink-700 font-semibold">
                Edit
              </button>
            </div>

            <div className="flex justify-between border h-10 w-full rounded-md p-2">
              <p className="text-slate-500">Sold by: Fabtrep</p>
              <p className="text-slate-500">Free Delivery</p>
            </div>
          </div>

          <p className="font-bold text-lg pt-12 pb-4 ml-20 md:ml-56">
            Delivery Address
          </p>

          <div className="border rounded-sm p-4 flex justify-between w-4/6 ml-auto mr-auto lg:ml-auto lg:mr-0 ">
            <div className="ml-4">
              <p className="text-slate-500 font-bold">Pranav Prashant</p>
              <p className="text-slate-600">
                Imli Chatti chowk , Near Maripur Overbridge , Muzaffarpur, Bihar
                - 842001
              </p>
              <p className="text-slate-600">8877237996</p>
            </div>
            <button className="mb-auto text-pink-700 font-semibold">
              Change
            </button>
          </div>
        </div>

        <div className="w-96 border p-4 ml-auto mr-auto">
          <p>Price Details (1 Items)</p>
          <div className="flex justify-between">
            <p>Total Product Price</p>
            <p>+182</p>
          </div>
          <div className="w-full bg-black h-0.25 mt-4 mb-4"></div>
          <div className="flex justify-between">
            <p>Order Total</p>
          </div>
          <div className="bg-pink-50 w-full text-xs h-8 flex items-center justify-center">
            Clicking on Continue will not deduct any money
          </div>
          <button
            className="border w-full h-12 bg-pink-700 text-white font-bold rounded-md"
            onClick={() => {
              navigate("/product/buy/payment-gateway");
            }}
          >
            Continue
          </button>
          <img
            className="mt-2"
            src="https://images.meesho.com/images/marketing/1588578650850.webp"
          />
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
