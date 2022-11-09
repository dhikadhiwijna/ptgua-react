import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryAsync, selectCategory } from "../../../redux/categorySlice";
import { productAsync, selectProduct } from "../../../redux/productSlice";
import Carousel from "./Carousel";

const ProductList = () => {
  const category = useSelector(selectCategory);
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryAsync());
    dispatch(productAsync());
  }, [dispatch]);

  return (
    <div className="container p-4 rounded-xl shadow-lg">
      <div className=" gap-2 mb-10 hidden md:flex">
        {category !== null &&
          category.map((item, index) => (
            <div
              key={index}
              className="flex px-3 py-1 items-center cursor-pointer bg-white rounded-3xl border border-slate-100"
            >
              <img
                src={require(`../../../assets/kategory/${item.image}`)}
                alt={item.title}
                className="w-8"
              />
              <span className="text-gray text-lg">{item.title}</span>
            </div>
          ))}
      </div>
      <Carousel productData={product} />
    </div>
  );
};

export default ProductList;
