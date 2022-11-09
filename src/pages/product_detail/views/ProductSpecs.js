import React, { useState } from "react";
import { rupiahFormat } from "../../../utils/currencyFormatter";

const ProductSpecs = ({
  title,
  discount,
  priceValue,
  priceOriginal,
  storeLocation,
  category,
  material,
  color,
  condition,
  weight,
}) => {
  const [detail, setDetail] = useState(1);
  return (
    <div className="max-w-2xl mx-3 mb-5">
      <h1 className="text-3xl font-extrabold mb-5">{title}</h1>
      <h1 className="text-4xl font-extrabold">{rupiahFormat(priceValue)}</h1>
      {discount !== "0" && (
        <div className="flex gap-1 items-center mt-1 mb-3">
          <h5 className="text-sm bg-rose-100 font-bold text-red-500 w-12 text-center rounded-md">
            {discount}
          </h5>
          <h5 className="text-xl line-through text-gray">
            {rupiahFormat(priceOriginal)}
          </h5>
        </div>
      )}
      <div className="my-5 relative flex gap-5 w-full border-t border-b border-slate-400 h-12">
        <div
          onClick={() => setDetail(1)}
          className={`${
            detail === 1
              ? "border-light-green text-light-green"
              : "border-transparent"
          } duration-300 cursor-pointer border-b-2 px-4 h-full flex items-center`}
        >
          Detail
        </div>
        <div
          onClick={() => setDetail(2)}
          className={`${
            detail === 2
              ? "border-green-500 text-green-500"
              : "border-transparent"
          } duration-300 cursor-pointer border-b-2 px-4 h-full flex items-center`}
        >
          Spesifikasi
        </div>
      </div>

      <div
        className={`${
          detail === 1 ? "opacity-100 block" : "opacity-0 hidden"
        } duration 700
            flex flex-col gap-4 text-lg`}
      >
        <div>
          <span>Kondisi: </span>
          <span className="font-bold">{condition}</span>
        </div>
        <div>
          <span>Berat Satuan: </span>
          <span className="font-bold">{weight}</span>
        </div>
        <div>
          <span>Kategori: </span>
          <span className="font-bold">{category}</span>
        </div>
      </div>
      <div
        className={`${
          detail === 2 ? "opacity-100 block" : "opacity-0 hidden"
        } duration 700
        flex flex-col gap-4 text-lg`}
      >
        <div className={`flex flex-col gap-3`}>
          <p className="font-bold text-lg">Info Produk</p>
          <div>
            <span>
              Bahan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
            </span>
            <span className="font-bold">{material}</span>
          </div>
          <div>
            <span>Warna &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </span>
            <span className="font-bold">{color}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecs;
