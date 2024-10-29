/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
    // <ProductPage product={product} />;
  };

  return (
    <div className="border p-4 m-2 cursor-pointer" onClick={handleClick}>
      <div>
        <img
          src={product.imageUrl}
          alt={product.display_name}
          className="h-60"
        />
      </div>
      <div>
        <p className="text-slate-500 text-lg">{product.display_name}</p>
        <div>
          <span className="font-bold text-2xl">₹{product.price}</span>{" "}
          <del className="text-slate-500">₹{product.original_price}</del>{" "}
          <span className="font-bold text-green-600">{product.discount}</span>
        </div>
        <div className="mt-2 mb-2">
          <p className="text-xs text-slate-500 bg-slate-200 w-24 h-5 rounded-lg text-center">
            {product.delivery}
          </p>
        </div>
        <span className="inline-block text-lg text-white bg-green-600 w-14 h-7 rounded-2xl text-center">
          {product.rating}
          <span className="text-xs">★</span>
        </span>
        <span className="text-xs text-slate-500 ml-2">
          {product.reviews} Reviews
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
