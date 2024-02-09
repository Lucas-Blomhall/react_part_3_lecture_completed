import React from "react";
import { useState, useEffect } from "react";

function UseEffectProducts() {
  const [shopProducts, setShopProducts] = useState([]);
  const [searchWord, setSearchWord] = useState("");
    // FETCH EVERY TIME searchWord is updated  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchWord}`);
        const data = await response.json();
        setShopProducts(data["products"]);
        console.log("In useeffect");
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [searchWord]);
//     //  FETCH ONLY ONCE!
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await fetch("https://dummyjson.com/products");
//         const data = await response.json();
//         setShopProducts(data["products"]);
//         console.log("In useeffect");
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchProducts();
//   }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-auto">
        <h1 className="text-7xl">Products</h1>
        <div className="container mx-auto">
          <input
            type="text"
            placeholder="Search for a product"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          {searchWord}
          <div className="container grid grid-cols-3 mx-auto">
            {shopProducts.map((product) => {
              return (
                <div key={product.id} className="p-8 border shadow-lg">
                  <div>{product.title}</div>
                  <div>{product.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseEffectProducts;
