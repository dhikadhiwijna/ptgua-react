import {
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Navbar() {
  return (
    <div className="min-w-full duration-300 py-2 lg:py-4 sticky top-0 left-0 right-0 z-50 border-none shadow-md h-16 bg-white">
      <div className="flex justify-center items-center fixed top-0 h-16 w-full">
        <div className="flex items-center h-10">
          <input
            className="h-full xl:w-screen lg:w-half-full-screen md:w-3/4 max-w-6xl p-2 border border-slate-100 text-sm text-gray-900 rounded-l-md outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="cari produk..."
          />
          <div className="bg-slate-100 w-8 h-full flex items-center rounded-r-md border-1 border-slate-100">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-slate-500"
              width={50}
            />
          </div>
        </div>
        <div className="w-20 flex justify-center items-center cursor-pointer border-r border-slate-700 h-8">
          <FontAwesomeIcon icon={faCartShopping} className="text-slate-600" />
        </div>

        <div className="flex gap-2 items-center ml-5 cursor-pointer">
          <FontAwesomeIcon icon={faCircleUser} size="xl" />
          <span>Hi Customer,</span>
        </div>
      </div>
    </div>
  );
}
