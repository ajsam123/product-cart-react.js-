import { useContext } from "react";
import ModalEach from "./ModalEach";
import { CartCtx } from "../context/cart-context";

const Modal = () => {
  const { items, startNewOrder } = useContext(CartCtx);
  return (
    <div>
      <div className="fixed w-full h-full top-0 left-0 bg-black/55 z-50 grid place-items-center px-4">
        <div className="bg-white w-full max-w-[600px] p-8 rounded-xl max-h-4/5 overflow-y-scroll">
          <figure className="mb-4">
            <img src="/images/icon-order-confirmed.svg" alt="" />
          </figure>
          <h1 className="font-extrabold text-4xl mb-2">Order Confirmed</h1>
          <span className="text-rose-400">We hope you enjoy your food!</span>
          <div className="bg-rose-100 p-4 mt-6 rounded-[10px]">
            {items.map((item) => (
              <ModalEach {...item} key={item.id} />
            ))}
          </div>
          <button
            className="bg-red w-full mt-6 py-2 rounded-full text-rose-50 font-semibold"
            onClick={startNewOrder}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
