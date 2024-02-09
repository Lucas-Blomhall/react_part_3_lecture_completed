import React from "react";
import { useState } from "react";

function ProductCards({}) {
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [productCart, setProductCart] = useState([]);

  function handleBuy(product) {
    console.log("in handle buy");
    console.log(product);
    setProductCart([...productCart, product]);
  }
  // Old
  //   function handleBuy(event) {
  //     console.log("Hello Omar and Kandal besides Raymond");
  //     setNumberOfProducts(numberOfProducts + 1);
  //   }

  function addStar(student) {
    if (student === "Tobias") {
      return <div>*</div>;
    } else if (student === "Giada") {
      return <div>**</div>;
    } else {
      return <div>******</div>;
    }
  }

  const products = [
    {
      id: 1,
      name: "T-Shirt 1",
      price: 19.99,
      features: ["100% Cotton", "Lightweight", "Unisex"],
      isInStock: true,
      imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
    },
    {
      id: 2,
      name: "T-Shirt 2",
      price: 24.99,
      features: ["Polyester Blend", "Breathable", "Unisex"],
      isInStock: false,
      imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
    },
    {
      id: 3,
      name: "T-Shirt 3",
      price: 69.99,
      features: [
        "Wool",
        "Breathable",
        "Female",
        "Wool",
        "Breathable",
        "Female",
      ],
      isInStock: true,
      imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
    },
    // Add more products as needed
  ];

  //   let students = ["Tobias", "Melanie", "Giada", "Omar"];
  //   let language = "SV";
  return (
    <>
      <div className="fixed p-8 bg-white border shadow-xl top-5 right-5 w-52 min-h-32">
        <h3>Product Cart</h3>
        {productCart.map((product) => {
          return <div>{product.name}</div>;
        })}
      </div>
      <div className="grid grid-cols-3 gap-8 my-20">
        {products.map((product) => {
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
        })}
      </div>
    </>
  );
}

export default ProductCards;
