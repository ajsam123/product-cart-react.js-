import { useContext, useEffect } from "react";
import { CartCtx } from "../context/cart-context";

import Cart from "./Cart";

const CartsContainer = () => {
  const { items } = useContext(CartCtx);

  return items.length ? (
    <Cart />
  ) : (
    <div className="bg-white w-fit h-fit flex flex-col p-8 rounded-xl">
      <h1 className="text-rose-800 font-bold text-2xl items-start">
        Your Cart ({items.length})
      </h1>
      <img
        className="max-w-34"
        src="/images/illustration-empty-cart.svg"
        alt=""
      />
      <span>Your added items will appear here</span>
    </div>
  );
};

export default CartsContainer;
