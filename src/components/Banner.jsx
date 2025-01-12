import BannerImage from "../assets/BannerImage.webp";
import { useMediaQuery } from "react-responsive";

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: 1125 });

  return (
    <>
      {!isMobile && (
        <>
          <div className="flex justify-center mt-8 mb-8 md: visible">
            <div className="flex bg-pink-50 md:w-3/4 justify-between">
              <div className="mt-auto mb-auto space-y-7 ml-8 mr-8">
                <b className="text-5xl">
                  Lowest Prices <br />
                  Best Quality Shopping
                </b>
                <div className="flex bg-white justify-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                      className="h-6 w-6"
                    />
                    <span>
                      Free
                      <br /> Delivery
                    </span>
                  </div>

                  <p className="flex items-center">|</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.meesho.com/images/pow/cod_jamun.svg"
                      className="h-6 w-6"
                    />
                    <span>
                      Cash on
                      <br /> Delivery
                    </span>
                  </div>
                  <p className="flex items-center">|</p>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.meesho.com/images/pow/easyReturns_jamun.svg"
                      className="w-6 h-6"
                    />
                    <span>
                      Easy
                      <br /> Returns
                    </span>
                  </div>
                </div>
                <button
                  className="border w-72 h-12 bg-[#9F2089] text-white font-bold rounded-md flex items-center justify-center space-x-2"
                  onClick={() => {
                    window.location.href = "https://meesho.com";
                  }}
                >
                  <img
                    src="https://images.meesho.com/images/marketing/1721995049215.png"
                    alt="Logo"
                    className="w-6 h-6"
                  />
                  <span>Download the Meesho App</span>
                </button>
              </div>

              <div>
                <img src={BannerImage} alt="Banner.png" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Banner;
