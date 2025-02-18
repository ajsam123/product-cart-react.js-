/* eslint-disable react/prop-types */
import React from "react";

const ModalEach = (props) => {
  return (
    <div>
      <div className="flex justify-between items-center border-b pb-4 border-b-rose-300 ">
        <div className="flex gap-3 items-center">
          <figure>
            <img
              className="rounded-xl overflow-hidden max-h-20"
              src={props.image.thumbnail}
              alt=""
            />
          </figure>
          <div className="flex flex-col gap-2 ">
            <h3 className="font-semibold">{props.name}</h3>
            <div className="flex gap-4">
              <span className="text-red font-bold">{props.quantity}x</span>
              <span className="text-rose-400">${props.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <span className="font-semibold text-rose-900">
          ${(props.quantity * props.price).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ModalEach;
