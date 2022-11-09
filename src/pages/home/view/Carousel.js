import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../../component/card/card";
import { selectOneProduct } from "../../../redux/productSlice";

const Carousel = ({ productData }) => {
  const productList = productData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (id) => {
    let productDetail = productList.filter((item) => item.id === id);
    dispatch(selectOneProduct(productDetail[0]));
    navigate(`detail/${id}`, { state: productDetail[0] });
  };
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current?.offsetWidth * currentIndex >= maxScrollWidth?.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, [productList]);
  return (
    <div className="2xl:container 2xl:mx-auto 2xl:px-0 pt-3 pb-24">
      <div className="carousel mx-auto">
        <div className="relative overflow-hidden h-half-screen flex items-center">
          <div className="flex justify-between absolute top left w-[98%] h-full">
            <button
              onClick={movePrev}
              className="text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-20 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("prev")}
            >
              <div className="rounded-full border-2 w-16 h-16 duration-300  border-transparent hover:border-blue-800 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-black"
                  size="lg"
                />
                <span className="sr-only">Prev</span>
              </div>
            </button>
            <button
              onClick={moveNext}
              className="text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-20 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("next")}
            >
              <div className="rounded-full border-2 w-16 h-16 duration-300 border-transparent hover:border-blue-800 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-black"
                  size="lg"
                />
                <span className="sr-only">Next</span>
              </div>
            </button>
          </div>
          <img
            src={require("../../../assets/etalase.webp")}
            alt="etalase"
            className={`absolute left-0 top-0 w-80 object-cover h-full z-0 rounded-3xl duration-300 ${
              currentIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            ref={carousel}
            className={`relative flex gap-20 h-[30rem] items-center overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-10`}
          >
            {productList.length !== 1 &&
              productList.map((item, index) => {
                return (
                  <Card
                    key={index}
                    className="carousel-item relative snap-start"
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    priceValue={item["price-value"]}
                    priceOriginal={item["price-original"]}
                    storeLocation={item["store-loaction"]}
                    discount={item.discount}
                    onClick={() => handleClick(item.id)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
