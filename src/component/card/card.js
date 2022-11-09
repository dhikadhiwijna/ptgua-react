import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { rupiahFormat } from "../../utils/currencyFormatter";

const Card = ({
  id,
  image,
  title,
  priceValue,
  priceOriginal,
  storeLocation,
  discount,
  onClick,
}) => {
  return (
    <div>
      {id === 0 ? (
        <div className="relative w-56 h-64 opacity-0 -z-10" />
      ) : (
        <div
          onClick={onClick}
          className="bg-white rounded-lg shadow-lg w-56 h-96 cursor-pointer"
        >
          <img
            src={require(`../../assets/shoes/${image}`)}
            alt={title}
            className="w-full h-52 object-cover overflow-hidden rounded-t-lg"
          />
          <div className="py-3 px-2">
            <p className="text-black mb-3 mx-auto text-md line-clamp-2">
              {title}
            </p>
            <p className="font-bold text-xl">{rupiahFormat(priceValue)}</p>
            {discount !== "0" && (
              <div className="flex gap-2 items-center my-2">
                <h5 className="text-sm bg-rose-100 text-red-500 w-12 text-center font-bold rounded-md">
                  {discount}
                </h5>
                <h5 className="text-md text-gray line-through">
                  {rupiahFormat(priceOriginal)}
                </h5>
              </div>
            )}

            <div className="flex gap-2 items-center my-3">
              <FontAwesomeIcon icon={faHome} className="text-gray" size="sm" />
              <p className="text-gray">{storeLocation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
