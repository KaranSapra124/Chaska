import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { addItem, removeItem } from "../../../utils/cartSlice";
import cartReducer from "../../../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
export const ProductDetails = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const location = useLocation();
  const toast = useToast();
  const { state } = location;
  const [count, setCount] = useState(0);
  //   console.log(state);
  let str = "⭐";
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            {/* <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={state?.mealImages[0]}
                alt="Product Image"
              />
            </div> */}
            <div
              id="controls-carousel"
              className="relative w-full"
              data-carousel="static"
            >
              {/* Carousel wrapper */}
              <div className="relative h-52 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                {/* {state.mealImages.map((elem) => {
                  return ( */}
                <div
                  className=" duration-700 h-20 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src={state.mealImages[count]}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="No Image..."
                  />
                </div>
                {/* );
                })} */}
              </div>
              {/* Slider controls */}
              <button
                type="button"
                onClick={() => {
                  console.log("Clicked");
                  //   console.log(state.mealImages.length);
                  if (count !== 0) {
                    console.log(count, "///");
                    setCount(count - 1);
                  } else {
                    setCount(state.mealImages.length - 1);
                  }
                }}
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                onClick={(i) => {
                  if (count !== state.mealImages.length - 1) {
                    console.log(count, "inc");
                    setCount(count + 1);
                  } else {
                    setCount(0);
                  }
                }}
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="flex -mx-2 mb-4 mt-2">
              <div className="w-1/2 px-2">
                <button
                  onClick={() => {
                    dispatch(addItem(state));
                    toast({
                      title: "Product Added",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    });
                  }}
                  className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {state.mealName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {state.mealDescription.substring(0, 100)}...
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ₹{state.mealPrice}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  In Stock
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Rating:
                {str?.repeat(state?.mealRating)}
              </span>
              {/* <div className="flex items-center mt-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
              </div> */}
            </div>
            {/* <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Size:
              </span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  S
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  M
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  L
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XL
                </button>
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                  XXL
                </button>
              </div>
            </div> */}
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {state.mealDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default ProductDetails;
