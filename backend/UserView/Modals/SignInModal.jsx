import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Toast,
  useToast,
  Img,
} from "@chakra-ui/react";
import {
  useDisclosure,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import userMethod from "../Method/UserMethod";
import ownerMethod from "../../OwnerView/Methods/ownerMethod";
export const SignInModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  // const formData = new FormData()
  let pic = "";
  const [img, setImg] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    PhnNum: "",
    email: "",
    password: "",
    userPic: "",
  });
  const [adminformData, setAdminFormData] = useState({
    fname: "",
    lname: "",
    PhnNum: "",
    email: "",
    password: "",
    userPic: "",
  });
  const formDataObj = new FormData();
  const toast = useToast();

  const handleChangeInput = (e) => {
    if (isAdmin) {
      if (e.target.type === "file") {
        setAdminFormData((prev) => ({
          ...prev,
          userPic: e.target.files[0],
        }));
      } else {
        setAdminFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
      console.log(adminformData);
    } else {
      if (e.target.type === "file") {
        setFormData((prev) => ({
          ...prev,
          userPic: e.target.files[0],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
      console.log(formData);
    }
  };

  const handleSubmit = () => {
    console.log(img);

    console.log(formData);
    if (isAdmin) {
      ownerMethod(
        "/create-user",
        adminformData,
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for Multer to parse correctly
          },
        }
      );
      toast({
        status: "success",
        description: "User Created!",
        isClosable: true,
      });
    } else {
      userMethod(
        "/create-user",
        formData,
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for Multer to parse correctly
          },
        }
      );
      toast({
        status: "success",
        description: "User Created!",
        isClosable: true,
      });
    }
  };

  const handleUploadImage = (e) => {
    pic = e.target.files[0];
    console.log(pic);
    formDataObj.append("userPic", pic);
    if (isAdmin) {
      ownerMethod("/upload-img", formDataObj, setImg, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for Multer to parse correctly
        },
      });
    } else {
      userMethod("/upload-img", formDataObj, setImg, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for Multer to parse correctly
        },
      });
    }
  };
  useEffect(() => {
    !isAdmin
      ? setFormData((prev) => ({
          ...prev,
          userPic: img,
        }))
      : setAdminFormData((prev) => ({
          ...prev,
          userPic: img,
        }));
  }, [img]);

  return (
    <>
      <div
        style={{
          background: "none",
          padding: "1px",
        }}
        onClick={onOpen}
      >
        Sign In
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel className="text-sm font-medium text-gray-700">
                Choose Profile Picture
              </FormLabel>
              <div className="mt-1  flex flex-row items-center justify-between">
                <div className="items-center flex">
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    {/* Placeholder for the uploaded image */}
                    {img == "" ? (
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 011.414 0l3.586 3.586A2 2 0 019.586 7H14a2 2 0 012 2v6a2 2 0 01-2 2h-1.586l-1.707 1.707a2 2 0 01-2.828 0l-3.586-3.586a1 1 0 010-1.414l10-10zM16 7.414V5a1 1 0 00-1-1H6.414l8 8H16a1 1 0 001-1V8.414l-1-1zM5 18v2a1 1 0 001 1h12a1 1 0 001-1v-2H5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <>
                        <Img
                          src={`${
                            import.meta.env.VITE_Backend_Url
                          }/uploads/${img}`}
                        />
                      </>
                    )}
                  </span>
                  <label
                    htmlFor="userPic"
                    className="ml-5 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm leading-4 font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                  >
                    Upload
                    <input
                      id="userPic"
                      name="userPic"
                      type="file"
                      className="sr-only"
                      onChange={(e) => {
                        handleUploadImage(e);
                      }}
                    />
                  </label>
                </div>
                <button
                  onClick={() => {
                    setIsAdmin(!isAdmin);
                  }}
                  className="ml-5 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm leading-4 font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                >
                  Admin
                </button>
              </div>
            </FormControl>
            {/* Form */}
            {!isAdmin ? (
              <>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input
                    ref={initialRef}
                    name="fname"
                    placeholder="First name"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input
                    placeholder="Last name"
                    name="lname"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    placeholder="Phone Number"
                    type="number"
                    name="PhnNum"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </FormControl>
              </>
            ) : (
              <>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    ref={initialRef}
                    name="fname"
                    placeholder="First name"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    placeholder="Last name"
                    name="lname"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    placeholder="Phone Number"
                    type="number"
                    name="PhnNum"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={(e) => {
                      handleChangeInput(e);
                    }}
                  />
                </FormControl>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
