/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const ProductCard = ({ ProductCumSellerDetail }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${ProductCumSellerDetail.product.id}`);
    // <ProductPage product={product} />;
  };

  return (
    <div className="border p-4 m-2 cursor-pointer" onClick={handleClick}>
      <div>
        <img
          src={ProductCumSellerDetail.product.imageUrl}
          alt={ProductCumSellerDetail.product.display_name}
          // className="h-full"
        />
      </div>
      <div>
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
        <div className="mt-2 mb-2">
          <p className="text-xs text-slate-500 bg-slate-200 w-24 h-5 rounded-lg text-center">
            {ProductCumSellerDetail.product.delivery}
          </p>
        </div>
        <span className="inline-block text-lg text-white bg-green-600 w-14 h-7 rounded-2xl text-center">
          {ProductCumSellerDetail.product.rating}
          <span className="text-xs">★</span>
        </span>
        <span className="text-xs text-slate-500 ml-2">
          {ProductCumSellerDetail.product.reviews} Reviews
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
