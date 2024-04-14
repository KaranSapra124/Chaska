import React, { useState, useEffect } from "react";
import userMethod from "../Method/UserMethod";
import { useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../utils/cartSlice";

export const ProductCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const [product, setProducts] = useState([]);
  let str = "⭐";
  const handleShow = (prod) => {
    navigate("/Product", {
      state: prod,
    });
  };
  useEffect(() => {
    userMethod("/get-products", null, setProducts);
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="flex justify-center border  flex-auto w-full h-fit ">
          <Select placeholder="Select a cuisine" className="transition-all duration-1000 mt-1 mb-1 w-56 py-2 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500">
            {filterCuisines.map((elem, index) => {
              return (
                <option key={index} value={elem}>
                  {elem}
                </option>
              );
            })}
          </Select>
          <Select placeholder="Select a Price" className="transition-all duration-1000 mt-1 mb-1 w-56  py-2 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500">
            {filterPrice.map((elem, index) => {
              return (
                <option key={index} value={elem}>
                  {elem}
                </option>
              );
            })}
          </Select>
          {/* <Select className="transition-all duration-1000 mt-1 mb-1 w-56  py-2 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500">
            {filterCuisines.map((elem, index) => {
              return (
                <option key={index} value={elem}>
                  {elem}
                </option>
              );
            })}
          </Select> */}
        </div>

        {product?.length !== 0 ? (
          product.map((elem, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    handleShow(elem);
                  }}
                  className=" relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg"
                >
                  {/* <a
                    className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                    href="#"
                  > */}
                  <img
                    className="object-fit h-52"
                    src={elem.mealImages[0]}
                    alt="product image"
                  />
                  {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    39% OFF
                  </span> */}
                  {/* </a> */}
                  <div className="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl tracking-tight text-slate-900">
                        {elem?.mealName}
                      </h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-3xl font-bold text-slate-900">
                          ₹{elem?.mealPrice}
                        </span>
                        {/* <span className="text-sm text-slate-900 line-through">
                        $699
                      </span> */}
                      </p>
                      <div className="flex items-center">
                        {/* <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg> */}
                        {str.repeat(elem?.mealRating)}

                        {/* Add more stars if needed */}
                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                          {elem?.mealRating}
                        </span>
                      </div>
                    </div>
                    <span class="bg-black text-gray-200 text-xs font-medium  px-2.5 py-0.5 rounded">
                      {elem?.mealCategory}
                    </span>
                    <button
                      onClick={() => {
                        dispatch(addItem(elem));
                      }}
                      className="mt-2 w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Add to cart
                    </button>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <h1 className="m-auto mt-52 mb-20 text-2xl border-2 p-2 bg-pink-500 text-white rounded border-none">
            Nothing To Show!
          </h1>
        )}
      </div>
    </>
  );
};

const filterCuisines = ["Non Veg", "Veg", "Chinese", "Italian"];
const filterPrice = ["500","1000","1500","2000"];
// const filter = ["Non Veg", "Veg", "Chinese", "Italian"];
