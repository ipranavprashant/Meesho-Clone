import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

import ProductCumSellerDetails from "../utils/ProductCumSellerDetails";

const ProductPage = () => {
  const navigate = useNavigate();
  // const product = {
  //   imageUrl:
  //     "https://images.meesho.com/images/marketing/fc6dbe28-a648-4f66-8a35-3899a8e99048.png",
  //   display_name: "Dummy Product",
  //   price: 152,
  //   original_price: 197,
  //   discount: "14% off",
  //   delivery: "Free Delivery",
  //   rating: 3.6,
  //   reviews: 755,
  // };

  const [activeIndex, setActiveIndex] = useState(0);
  const [sizeActiveIndex, setSizeActiveIndex] = useState();

  useScrollToTop();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const { id } = useParams();

  const ProductCumSellerDetail = ProductCumSellerDetails.find(
    (item) => item.product.id === id
  );

  if (!ProductCumSellerDetail) {
    return <div>No Product with the given id!</div>;
  }

  return (
    <>
      <Navbar />
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5 ml-5"> */}
      <div className="grid grid-cols-1 lg:grid-cols-[5%,30%,55%] gap-8 mt-5 ml-5 mr-4 lg:mr-0">
        {/* Thumbnails Section */}
        <div className="flex justify-center space-x-4 lg:space-x-0 lg:flex-col lg:justify-start lg:space-y-4 lg:items-center">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <>
                <img
                  key={index}
                  className={`"h-12 w-12 rounded-lg cursor-pointer hover:scale-110 border" ${
                    index === activeIndex
                      ? "h-14 w-14 border border-blue-950"
                      : ""
                  }`}
                  src={ProductCumSellerDetail.product.imageUrl}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setActiveIndex(index)}
                />
              </>
            );
          })}
        </div>

        {/* Main Product Image and Buttons */}
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-md h-auto border">
            <img
              className="w-full h-100 rounded-lg"
              src={ProductCumSellerDetail.product.imageUrl}
              alt="Main Product"
            />
          </div>
          <div className="flex space-x-4 mt-5">
            <button className="border w-36 sm:w-44 h-12 border-pink-700 text-pink-700 font-bold rounded-md">
              Add to Cart
            </button>
            <button
              className="border w-36 sm:w-44 h-12 bg-pink-700 text-white font-bold rounded-md"
              onClick={() => {
                navigate("/product/buy");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-4">
          {/* Product Info */}
          <div className="border-2 p-4 lg:p-8 rounded-lg">
            <p className="text-slate-500 text-lg">
              {ProductCumSellerDetail.product.display_name}
            </p>
            <div>
              <span className="font-bold text-2xl">
                ₹{ProductCumSellerDetail.product.price}
              </span>{" "}
              <del className="text-slate-500">
                ₹{ProductCumSellerDetail.product.original_price}
              </del>{" "}
              <span className="font-bold text-green-600">
                {ProductCumSellerDetail.product.discount}
              </span>
            </div>
            <p className="mt-2 mb-2 text-xs text-slate-500 bg-slate-200 w-24 h-5 rounded-lg text-center">
              {ProductCumSellerDetail.product.delivery}
            </p>
            <span className="inline-block text-lg text-white bg-green-600 w-14 h-7 rounded-2xl text-center">
              {ProductCumSellerDetail.product.rating}
              <span className="text-xs">★</span>
            </span>
            <span className="text-xs text-slate-500 ml-2">
              {ProductCumSellerDetail.product.reviews} Reviews
            </span>
          </div>

          {/* Size Selection */}
          <div className="border-2 p-4 lg:p-8 rounded-lg">
            <b className="text-black text-lg">Select Size</b>
            <div className="flex space-x-3 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                <span
                  key={index}
                  className={`"inline-block text-lg w-14 h-8 border-2 rounded-2xl text-center cursor-pointer hover:scale-105" ${
                    sizeActiveIndex === index ? "border-black" : ""
                  }`}
                  onClick={() => setSizeActiveIndex(index)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="border-2 p-4 lg:p-8 rounded-lg">
            <b className="text-black text-lg">Product Details</b>
            <p className="text-slate-600 text-sm">
              Name : {ProductCumSellerDetail.productDetails.name}
              <br />
              Fabric : {ProductCumSellerDetail.productDetails.fabric}
              <br />
              Sleeve Length :{" "}
              {ProductCumSellerDetail.productDetails.sleeveLength}
              <br />
              Pattern : {ProductCumSellerDetail.productDetails.pattern}
              <br />
              Combo of : Combo of 2<br />
              Sizes : S (Bust Size : 36 in, Length: 42 in), M (Bust Size : 38
              in), L (Bust Size : 40 in), XL (Bust Size : 42 in), XXL (Bust Size
              : 44 in)
              <br />
              <br />
              Printed kurtis combo pack of 2<br />
              Country of Origin : India
            </p>
          </div>

          {/* Seller Details */}
          <div className="border-2 p-4 lg:p-8 rounded-lg">
            <b className="text-black text-lg">Sold By</b>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  className="h-14 w-14"
                  src={ProductCumSellerDetail.sellerDetails.shopLogo}
                  alt="Seller Logo"
                />
                <p className="font-semibold">
                  {ProductCumSellerDetail.sellerDetails.shopName}
                </p>
              </div>
              <button className="border w-36 h-10 border-pink-700 text-pink-700 font-bold rounded-md">
                View Shop
              </button>
            </div>
            <div className="ml-16 flex mt-4 space-x-4 sm:space-x-20">
              <div className="text-center">
                <span className="block text-lg text-blue-500 border bg-white w-14 h-7 rounded-2xl">
                  {ProductCumSellerDetail.sellerDetails.rating}★
                </span>
                <p className="text-sm">
                  {ProductCumSellerDetail.sellerDetails.ratingsCount} Ratings
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">
                  {ProductCumSellerDetail.sellerDetails.followers}
                </p>
                <p className="text-sm">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">
                  {ProductCumSellerDetail.sellerDetails.products}
                </p>
                <p className="text-sm">Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
