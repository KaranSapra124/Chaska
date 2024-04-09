import VisibilitySensor from "react-visibility-sensor";
import { Spinner } from "@chakra-ui/react";
import { Todays_Special } from "../../../utils/Data";
import { Link } from "react-router-dom";
export const Today_Special = () => {
  let str = "⭐";
  return (
    <>
      <div className="m-auto max-w-2xl px-4 mt-4  sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-3xl text-start font-bold tracking-tight text-gray-900 ">
            Today's Special❤
          </h2>
          <h2 className="text-xl text-start font-bold tracking-tight text-gray-900 ">View All </h2>
        </div>

        <div className="slide-in-elliptic-top-fwd mt-6 flex flex-wrap justify-between gap-x-6 gap-y-10 sm:justify-start lg:justify-between xl:gap-x-8">
          {Todays_Special.map((elem, index) => (
            <div
              key={index}
              className="tilt-in-fwd-tr w-full sm:w-1/2 lg:w-1/4 shadow-xl p-2"
            >
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={elem.image}
                    alt="No Image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold  text-gray-700">
                      <a href="">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {elem.title}
                      </a>
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">{elem.price}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {str.repeat(4)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
