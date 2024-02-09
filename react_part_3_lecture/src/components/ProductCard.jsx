import React from "react";

function ProductCard({ product, handleBuy }) {
  return (
    <div key={product.id} className="border shadow-lg">
      <div>
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="p-8">
        {product.name}
        <div>{product.price}</div>
        <div className="flex flex-wrap mt-4">
          {product.features.map((feature, index) => {
            return (
              <span
                key={feature + index}
                className="px-4 py-2 my-2 mr-2 bg-gray-300 rounded-full bg-opacity-35"
              >
                {feature}
              </span>
            );
          })}
        </div>
        {product.isInStock === false && (
          <div className="text-red-500">Not in stock</div>
        )}
        {
          <button
            onClick={() => handleBuy(product)}
            className="px-4 py-2 shadow-md rounded-xl hover:bg-gray-100 hover:transition-all"
          >
            Add to cart
          </button>
        }
      </div>
    </div>
  );
}

export default ProductCard;
