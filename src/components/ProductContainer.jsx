import React from "react";
import ProductsCard from "./ProductsCard";
import Product from "../data.json";
import { useContext } from "react";
import { CartCtx } from "../context/cart-context";
// console.log(Product);

const ProductContainer = () => {
  const cartState = useContext(CartCtx);
  return (
    <div className="col-span-2 ">
      <h1 className="font-bold text-3xl text-rose-900 mb-6">Desserts</h1>
      <div className="col-span-2 gap-6 grid grid-cols-1 md:grid-cols-3">
        {Product.map((val, index) => (
          <ProductsCard key={index} id={index} {...val} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
