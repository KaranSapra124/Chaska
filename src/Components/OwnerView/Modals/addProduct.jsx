import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import ownerMethod from "../Methods/ownerMethod";

const AddProductModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const PicData = new FormData();
  const [formData, setFormData] = useState({
    mealName: "",
    mealRating: "",
    mealCategory: "",
    mealImages: [],
    mealPrice: "",
    mealDescription:""
  });

  const Toast = useToast();

  const handleFileChange = (event) => {
    const files = event.target.files;
    setUploadedFiles([...uploadedFiles, ...files]);
    // console.log(uploadedFiles);
  };

  const handleUploadImage = () => {
    uploadedFiles.forEach((file) => {
      PicData.append("mealImages", file);
    });
    // console.log(PicData);
    ownerMethod("/upload-product", PicData, setFormData, {
      headers: {
        "Content-Type": "multipart/form-data", // Important for Multer to parse correctly
      },
    });
  };

  const handleUploadProduct = async () => {
    await ownerMethod("/add-product", formData, null);
    Toast({
      title: "Product Added!",
      description: "Your Product is Added",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  const handleChangeInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button
        bg={"red"}
        color={"white"}
        _hover={{ bg: "gray" }}
        width={"fit-content"}
        onClick={onOpen}
      >
        Add New
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="Product name"
                name="mealName"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Rating</FormLabel>
              <Input
                placeholder="Product rating"
                name="mealRating"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Category</FormLabel>
              <Input
                placeholder="Product category"
                name="mealCategory"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Upload Product Images</FormLabel>
              <Input
                type="file"
                multiple
                onChange={handleFileChange}
                name="mealImages"
              />
              <div className="flex">
                {uploadedFiles.map((file, index) => {
                  return (
                    <div className="flex flex-row" key={index}>
                      <img
                        className="h-20 p-2"
                        src={URL.createObjectURL(file)}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => {
                  handleUploadImage();
                }}
                className="bg-gray-300 p-2 m-1 rounded font-semibold hover:bg-gray-400"
              >
                Upload Images
              </button>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Price</FormLabel>
              <Input
                placeholder="Product price"
                name="mealPrice"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Product Description</FormLabel>
              <Input
                placeholder="Product Description.."
                name="mealDescription"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUploadProduct}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProductModal;
