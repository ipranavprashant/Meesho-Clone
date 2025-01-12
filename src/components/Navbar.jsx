import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import SubCategoriesNavbar from "./SubCategoriesNavbar";
import { useNavigate } from "react-router-dom";
import NavbarCategories from "../utils/NavbarCategories";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1325 });

  return (
    <>
      <div className="flex justify-between items-center mt-5 ml-5 mr-5">
        <div className="flex items-center">
          <img
            src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
            className="w-28 h-10 md:w-36 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="hidden ml-8 lg:block">
            <svg
              className="absolute left-52 top-11 transform -translate-y-1/2 h-4 w-6"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1770_1836)">
                <path
                  d="M19.7695 18.6698L16.0096 14.9098C17.3296 13.3298 18.1296 11.2999 18.1296 9.07989C18.1296 4.05995 14.0697 0 9.05978 0C4.0599 0 0 4.05995 0 9.07989C0 14.0998 4.0599 18.1598 9.05978 18.1598C11.2897 18.1598 13.3297 17.3498 14.9096 16.0098L18.6695 19.7698C18.9695 20.0698 19.4695 20.0698 19.7695 19.7698C20.0795 19.4698 20.0795 18.9698 19.7695 18.6698ZM9.05978 16.5998C4.91988 16.5998 1.54996 13.2298 1.54996 9.07989C1.54996 4.92994 4.91988 1.55998 9.05978 1.55998C13.1997 1.55998 16.5696 4.92994 16.5696 9.07989C16.5696 13.2298 13.1997 16.5998 9.05978 16.5998Z"
                  fill="#8B8BA3"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1770_1836">
                  <rect width="19.9995" height="19.9998" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <input
              className="w-56 h-11 ml-2 md:w-100 rounded-md border border-slate-700 placeholder:text-xs pl-7 md:placeholder:text-sm"
              name="search-box"
              type="text"
              placeholder="Try Saree, Kurti or Search by Product Id, etc."
            />
          </div>
        </div>

        {/* Hamburger Icon */}
        {isMobile && (
          <div className="block">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="h-6 w-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Right section of the navbar */}
        <div className={`flex space-x-10 ${isMobile ? "hidden" : "block"}`}>
          <div className="flex mt-2 cursor-pointer">
            <svg
              viewBox="0 0 16 24"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-pyfCe leNxcK hover h-6 mr-3"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488ZM2.672 5.335v11.469h10.656V5.335H2.672Zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 0 1-1.488-1.488ZM.8 3.36A3.36 3.36 0 0 1 4.16 0h7.68a3.36 3.36 0 0 1 3.36 3.36v17.28A3.36 3.36 0 0 1 11.84 24H4.16A3.36 3.36 0 0 1 .8 20.64V3.36Zm6 16.447a.6.6 0 0 0 0 1.2h2.4a.6.6 0 1 0 0-1.2H6.8Z"
                fill="#333"
              ></path>
            </svg>
            Download App
          </div>
          <div className="w-0.25 h-10 bg-black"></div>

          <div className="mt-2 cursor-pointer">Become a Supplier</div>
          <div className="w-0.25 h-10 bg-black"></div>

          <div className="mt-2 cursor-pointer">Newsroom</div>
          <div className="w-0.25 h-10 bg-black"></div>

          <div className="flex mt-2">
            <img
              src="https://www.meesho.com/assets/svgicons/wishlist-header.svg"
              className="h-8 w-8 mr-4 cursor-pointer"
            />
            <img
              src="https://www.meesho.com/assets/svgicons/cart-header.svg"
              className="h-8 w-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {!isMobile && (
        <>
          <div className="h-0.25 mt-4 bg-slate-400"></div>
          <div
            className={`flex justify-evenly mt-4 overflow-y-hidden  whitespace-nowrap scroll-container space-x-8 scroll-smooth ${
              NavbarCategories.length >= 10 ? "overflow-x-auto" : ""
            }`}
          >
            {NavbarCategories.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer ml-4 hover:border-b-4 hover:scale-105 hover:border-b-[#560D48]"
                >
                  {item}
                  <div className="absolute w-auto opacity-0 -z-50 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:z-50 mt-6">
                    <SubCategoriesNavbar />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-0.25 mt-4 bg-slate-400"></div>
        </>
      )}

      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-2 text-center">
          {NavbarCategories.map((item, index) => {
            return (
              <>
                <div className="cursor-pointer" key={index}>
                  {item}
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
