import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadFromLocalStorage,
  selectedProduct,
} from "../../redux/productSlice";
import ProductCart from "./views/ProductCart";
import ProductSpecs from "./views/ProductSpecs";

const ProductDetail = () => {
  const product = useSelector(selectedProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product === null) {
      dispatch(loadFromLocalStorage());
    }
  }, [product, dispatch]);

  return (
    <div className="container pt-10 m-auto">
      {product !== null && (
        <div className="flex flex-col md:flex-row  md:justify-between items-center md:items-start">
          <img
            src={require(`../../assets/shoes/${product.image}`)}
            alt={product.name}
            className="rounded-3xl w-60 lg:w-96 lg:h-[32rem]  object-cover mb-5"
          />
          <ProductSpecs
            title={product?.title}
            priceValue={product["price-value"]}
            priceOriginal={product["price-original"]}
            discount={product?.discount}
            material={product?.material}
            color={product?.color}
            category={product?.category}
            condition={product?.condition}
            weight={product?.weight}
          />
          <ProductCart
            stock={product?.stock}
            priceValue={product["price-value"]}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
