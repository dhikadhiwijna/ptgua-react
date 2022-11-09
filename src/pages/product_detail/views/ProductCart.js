import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { rupiahFormat } from "../../../utils/currencyFormatter";

const ProductCart = ({ stock, priceValue }) => {
  const [total, setTotal] = useState(1);

  const handleIncrement = () => {
    if (total === parseInt(stock)) {
      return;
    }
    setTotal((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    if (total === 0 || total == null) {
      return setTotal((prevValue) => prevValue);
    }
    setTotal((prevValue) => prevValue - 1);
  };

  const handleChangeInput = (e) => {
    const { value } = e.target;

    if (parseInt(value) <= 0 || !value.length) {
      return setTotal(0);
    }

    if (parseInt(value) >= parseInt(stock)) {
      return setTotal(stock);
    }
    let absValue = parseInt(Math.abs(value));
    return setTotal(absValue);
  };
  return (
    <div className="p-4 w-96 rounded-lg border-gray shadow-[0_5px_10px_1px_rgba(0,0,0,0.1)] flex flex-col mb-10">
      <h3 className="font-extrabold text-xl py-3">
        {" "}
        Atur jumlah yang akan dibeli
      </h3>
      <div className="flex lg:flex-row items-center justify-start flex-col">
        <div className="flex my-3 border border-gray/30 rounded-md bg-white">
          <button
            onClick={handleDecrement}
            className="w-6 h-8 text-gray text-lg cursor-pointer rounded-l-md flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faMinus}
              className="text-slate-500"
              width={40}
            />
          </button>
          <input
            className="h-8 w-24 outline-none focus:border-none flex justify-center text-center"
            value={total}
            type="number"
            max={stock}
            onChange={handleChangeInput}
          />
          <button
            onClick={handleIncrement}
            className="w-6 h-8 text-gray text-lg cursor-pointer rounded-r-md flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="text-slate-500"
              width={40}
            />
          </button>
        </div>
        <div className="flex md:flex-col lg:flex-row text-start pl-2 text-lg">
          <p>Stok Total:</p>
          <p className="text-orange ml-2 font-bold">Sisa {stock}</p>
        </div>
      </div>
      <div className="flex justify-end text-sm mb-2">
        <span className="line-through">{rupiahFormat(priceValue)}</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <p className="text-gray text-xl">Subtotal</p>
        <p className="text-xl font-bold ml-3">
          {rupiahFormat(total * parseInt(priceValue))}
        </p>
      </div>
      <button className="bg-light-green hover:bg-lime-500 duration-300 rounded-md py-3 my-3 text-white">
        Beli
      </button>
    </div>
  );
};

export default ProductCart;
