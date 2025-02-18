import { useContext, useState } from "react";
import { CartCtx } from "../context/cart-context";
import Modal from "./Modal";

const Cart = () => {
  const { items, deleteFromCart } = useContext(CartCtx);

  // Calculate total price
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white w-full max-h-fit p-6 rounded-xl flex gap-6 flex-col">
      <h1 className="text-rose-700 font-bold text-2xl">
        Your Cart ({items.reduce((acc, cur) => acc + cur.quantity, 0)})
      </h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="lg:flex justify-between items-center border-b pb-4 border-rose-300 md:block"
        >
          <div>
            <h2 className="font-bold">{item.name}</h2>
            <div className="flex gap-4">
              <span className="text-rose-700 font-medium">
                {item.quantity}x
              </span>
              <span className="text-gray-400">@${item.price.toFixed(2)}</span>
              <span className="text-rose-300 font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
          <figure
            className="w-4 h-4 border grid place-items-center rounded-full border-rose-300 cursor-pointer"
            onClick={() => deleteFromCart(item.id)}
          >
            <img src="/images/icon-remove-item.svg" alt="Remove Item" />
          </figure>
        </div>
      ))}
      {/* Order Total */}
      <div className="flex justify-between">
        <span className="font-semibold">Order Total:</span>
        <h1 className="font-extrabold text-2xl text-black">
          ${totalPrice.toFixed(2)}
        </h1>
      </div>

      {/* Confirm Order Button */}
      <button
        className="bg-red p-3 text-white rounded-xl font-bold "
        onClick={() => setShowModal(true)}
      >
        Confirm Order
      </button>
      {showModal && <Modal />}
    </div>
  );
};

export default Cart;
