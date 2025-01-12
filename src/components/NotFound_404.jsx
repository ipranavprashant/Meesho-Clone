import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const NotFound_404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[100vh] space-y-5">
        <img
          src="https://www.meesho.com/assets/error_500.svg"
          alt="not-found.png"
          className="h-48 w-48"
        />
        <p>
          We couldn&apos;t find what you were looking for. Please try again.
        </p>
        <button
          className="border w-72 h-12 bg-[#9F2089] text-white font-bold rounded-md flex items-center justify-center space-x-2"
          onClick={() => {
            window.location.reload();
          }}
        >
          <svg
            width="20"
            height="20"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white"
          >
            <path
              d="M10 0a10 10 0 0 1 6.833 2.717V1.05a.833.833 0 0 1 1.667 0v3.742c0 .46-.373.833-.833.833h-3.742a.833.833 0 0 1 0-1.667h1.8A8.333 8.333 0 1 0 18.333 10 .833.833 0 0 1 20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0Z"
              fill="#666"
            ></path>
          </svg>
          <span>Reload</span>
        </button>

        <button
          className="border w-72 h-12 bg-[#9F2089] text-white font-bold rounded-md flex items-center justify-center space-x-2"
          onClick={() => {
            navigate("/home");
          }}
        >
          <FaHome size={"20px"} />
          <span>Home</span>
        </button>
      </div>

      <Footer />
    </>
  );
};

export default NotFound_404;
