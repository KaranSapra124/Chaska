import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure, Button, Input } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "@chakra-ui/react";
import { saveItem, getItem } from "../../utils/cartSlice";

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  let cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveItem(cartItems));
  }, [cartItems]);

  // useEffect(() => {
  //   cartItems = JSON.parse(localStorage.getItem("cart"));
  // }, []);

  return (
    <>
      <i
        ref={btnRef}
        colorScheme="teal"
        className="fa-solid fa-cart-shopping"
        onClick={onOpen}
      ></i>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart !</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
            <div className="container mx-auto py-8 ">
              {cartItems.length !== 0 ? (
                <h1 className="text-3xl font-semibold mb-8 text-center">
                  Your Cart
                </h1>
              ) : (
                <h1 className="text-3xl font-semibold mb-8">
                  Your Cart Is Empty!
                </h1>
              )}
              <div className=" flex flex-wrap gap-6">
                {cartItems?.length !== 0 &&
                  cartItems?.map((product, i) => (
                    <div
                      key={i}
                      className="bg-white shadow-md rounded-md overflow-hidden w-full"
                    >
                      <img
                        src={product.mealImages[0]}
                        alt={product.mealName}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">
                          {product.mealName}
                        </h2>
                        <Badge colorScheme="green" className="mb-2">
                          {product.mealCategory}
                        </Badge>

                        <p className="text-gray-600 font-semibold">
                          ₹{product.mealPrice}
                        </p>
                        <div className="mt-4 flex justify-between items-center">
                          <button className="mr-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Remove
                          </button>
                          {/* <div>
                            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2">
                              -
                            </button>
                            <span className="px-3"> */}
                          {/* Quantity1Replace with quantity */}
                          {/* </span>
                            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md ml-2">
                              +
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-8 flex justify-end">
                {cartItems.length !== 0 && (
                  <button className="bg-blue-500 w-full hover:font-semibold text-white px-6 py-3 rounded-md hover:bg-blue-600">
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
