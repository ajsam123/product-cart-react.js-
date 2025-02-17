/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartCtx = createContext({
  items: [
    {
      id: 1,
      price: 0,
      name: "",
      quantity: 0,
    },
  ],
  addToCart: () => {},
  getProduct: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  deleteFromCart: () => {},
  newOrder: () => {},
  startNewOrder: () => {},
});

export const CartProvider = ({ children }) => {
  const [items, setItem] = useState([]);
  const addToCart = (product) => {
    setItem((prev) => {
      const existingProduct = prev.find((items) => items.id === product.id);

      if (existingProduct) {
        return prev.map((items) =>
          items.id === product.id
            ? { ...items, quantity: items.quantity + 1 }
            : items
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const getProduct = (id) => {
    const product = items.find((product) => product.id === id);
    // console.log(product);
    return product;
  };
  const increaseQuantity = (id) => {
    setItem((prevItems) =>
      prevItems.map(
        (product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 } // Create a new object with updated quantity
            : product // Keep other products unchanged
      )
    );
  };
  const deleteFromCart = (id) => {
    setItem((prev) => prev.filter((item) => item.id !== id));
  };
  const decreaseQuantity = (id) => {
    setItem((prev) => {
      return prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  function startNewOrder() {
    setItem([]);
  }

  return (
    <CartCtx.Provider
      value={{
        items,
        addToCart,
        getProduct,
        increaseQuantity,
        decreaseQuantity,
        deleteFromCart,
        startNewOrder,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};
