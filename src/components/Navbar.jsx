import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mt-5">
        <div className="flex">
          <div>
            <FontAwesomeIcon
              icon={faBars}
              className="h-5 w-5 mt-3 ml-6 mr-3 cursor-pointer"
            />
          </div>
          <div>
            <img
              src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
              className="h-10 w-20 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex mr-5">
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
      <div className="ml-6 mr-6">
        <input
          className="w-full h-12 bg-slate-200 rounded-md"
          name="search-box"
          type="text"
          placeholder="Search for Sarees, Kurtis, Cosmetics, etc."
        />
      </div>
    </>
  );
};

export default Navbar;
