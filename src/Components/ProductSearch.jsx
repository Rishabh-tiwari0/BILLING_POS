import React, { useState } from "react";

export const ProductSearch = ({ products }) => {
  const [searchProducts, setSearchProducts] = useState([]);
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm),
    );
    setSearchProducts(filteredProducts);
  };
  console.log(searchProducts);
  return (
    <div className="h-11 w-full bg-white mt-1.5">
      <input
        type="text"
        className="h-full w-full border-none focus:outline-none"
        placeholder="Search products..."
        onChange={handleSearch}
      />

      <div
        className={`border-2 border-gray-950 relative  h-fit w-full bg-white  `}
      >
        <span>
          {searchProducts.length != 0 ? (
            searchProducts.map((product) => (
              <div key={product.id}>
                <span>{product.name}</span>
                <span>${product.price}</span>
              </div>
            ))
          ) : (
            <li>No products found</li>
          )}
        </span>
      </div>
    </div>
  );
};
``;
