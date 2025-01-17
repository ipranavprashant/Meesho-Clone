// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import ProductCumSellerDetails from "../utils/ProductCumSellerDetails";

const ProductList = () => {
  // const [products, setProducts] = useState([]);

  // const fetchItemList = async () => {
  //   const API_URL = "https://www.meesho.com/api/v1/products/filterConfig";
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };

  //   const payload = {
  //     page_id: "3kc",
  //     type: "plp_listing",
  //     requestDetails: null,
  //   };

  //   try {
  //     const response = await axios.post(API_URL, payload, { headers });
  //     const data = await response.data;
  //     const productList = data.all_filters.flatMap((filter) =>
  //       filter.values.map((value) => ({
  //         //   imageUrl: value.image_url,
  //         imageUrl:
  //           "https://images.meesho.com/images/marketing/fc6dbe28-a648-4f66-8a35-3899a8e99048.png",
  //         display_name: value.display_name,
  //         price: 152,
  //         original_price: 197,
  //         discount: "14% off",
  //         delivery: "Free Delivery",
  //         rating: 3.6,
  //         reviews: 755,
  //       }))
  //     );

  //     setProducts(productList);
  //   } catch (err) {
  //     console.error("Error fetching products:", err);
  //   }
  // };

  // useEffect(() => {
  //   fetchItemList();
  // }, []);

  // const dummyItem = [];
  // for (var i = 0; i < 12; i++) {
  //   dummyItem.push({
  //     imageUrl:
  //       "https://images.meesho.com/images/marketing/fc6dbe28-a648-4f66-8a35-3899a8e99048.png",
  //     display_name: "Jeans",
  //     price: 152,
  //     original_price: 197,
  //     discount: "14% off",
  //     delivery: "Free Delivery",
  //     rating: 3.6,
  //     reviews: 755,
  //   });
  // }

  // useEffect(() => {
  //   setProducts(dummyItem);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-12">
          <Filter />
        </div>
        <div className="flex flex-wrap justify-center">
          {/* // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:ml-60"> */}
          {ProductCumSellerDetails.map((ProductCumSellerDetail, index) => {
            return (
              <ProductCard
                key={index}
                ProductCumSellerDetail={ProductCumSellerDetail}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
