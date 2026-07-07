import { useCallback, useState } from "react";
import { ProductSearch } from "../../../Components/ProductSearch";

function Inventory() {
  const buyProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
    console.log(products);
  };

  let productlist = [
    { id: 1, name: "Notebook", category: "Stationery", price: 25, stock: 50 },
    { id: 2, name: "Pen", category: "Stationery", price: 10, stock: 100 },
    { id: 3, name: "Pencil", category: "Stationery", price: 8, stock: 80 },
    { id: 4, name: "Eraser", category: "Stationery", price: 5, stock: 70 },
    { id: 5, name: "Sharpener", category: "Stationery", price: 6, stock: 60 },
    { id: 6, name: "Ruler", category: "Stationery", price: 12, stock: 40 },
    {
      id: 7,
      name: "Highlighter",
      category: "Stationery",
      price: 15,
      stock: 35,
    },
    { id: 8, name: "Marker", category: "Stationery", price: 18, stock: 30 },
    { id: 9, name: "Glue Stick", category: "Stationery", price: 14, stock: 45 },
    { id: 10, name: "Scissors", category: "Stationery", price: 22, stock: 25 },
  ];
  const [products, setProducts] = useState(productlist);

  return (
    <div className="">
      <ProductSearch products={productlist} setProducts={setProducts} />
      {products.map((product) => {
        return (
          <li key={product.id} className="z-10">
            {product.name} - ${product.price}
            <br />
            <button
              className=" bg-blue-300 w-[60px]"
              onClick={() => buyProduct(product.id)}
            >
              Buy
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default Inventory;
