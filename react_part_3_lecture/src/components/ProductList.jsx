import React from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({}) {
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [productCart, setProductCart] = useState([]);
  const [counter, setCounter] = useState(0)

  function handleBuy(product) {
    setProductCart([...productCart, product]);
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
        {counter}
        {productCart.map((product) => {
          return <div>{product.name}</div>;
        })}
      </div>
      <div className="grid grid-cols-3 gap-8 my-20">
        {products.map((product) => {
          return (
            <ProductCard product={product} handleBuy={handleBuy}/>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
