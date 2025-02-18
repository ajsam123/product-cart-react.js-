import { createContext, useEffect, useState } from "react";

// Create context
export const CartCtx = createContext({
  items: [],
  addToCart: () => {},
  getProduct: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  deleteFromCart: () => {},
  startNewOrder: () => {},
});

// Function to safely get cart items from localStorage
const getItemsFromStorage = () => {
  const storedItems = localStorage.getItem("cartItems");
  return storedItems ? JSON.parse(storedItems) : [];
};

export const CartProvider = ({ children }) => {
  // ✅ Initialize state from localStorage
  const [items, setItems] = useState(getItemsFromStorage);

  // ✅ Update localStorage whenever `items` changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setItems((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Function to get a product by ID
  const getProduct = (id) => {
    return items.find((product) => product.id === id);
  };

  // Increase quantity of a cart item
  const increaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // Decrease quantity and remove if it reaches 0
  const decreaseQuantity = (id) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item from cart
  const deleteFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Start a new order (empty the cart)
  const startNewOrder = () => {
    setItems([]);
  };

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
