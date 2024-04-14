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
} from "@chakra-ui/react";
import {
  useDisclosure,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import userMethod from "../Method/UserMethod";
import { userProfile } from "../../../utils/Context";
import { useLocation, useNavigate } from "react-router-dom";
import ownerMethod from "../../OwnerView/Methods/ownerMethod";
export const LogInModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { profile, setProfile } = useContext(userProfile);
  // console.log(profile);
  const initialRef = useRef(null);
  const Location = useLocation();
  const { pathname } = Location;
  const path = pathname.includes("owner");
  console.log(path);
  const finalRef = useRef(null);
  // const [bool, setBool] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();

  const handleChangeInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const authCookie = async (user) => {
    if (!path) {
      const result = await userMethod("/log-user", { email: user }, setProfile);
      // console.log(result, "////");

      if (result) {
        navigate("/Profile");
        toast({
          title: "Logged in succesfully!",
          status: "success",
          isClosable: true,
        });
        document.cookie = `userDetails=${
          result.email
        } expires=${new Date().setDate(new Date().getDate() + 5)}`;
      } else {
        toast({
          title: "Invalid Password Or Email",
          status: "error",
          isClosable: true,
        });
      }
    }
  };

  useEffect(() => {
    if (path && document.cookie.includes("adminId")) {
      const result = ownerMethod("/log-user", null, setProfile);
      if (result) {
        navigate("/owner/Profile");
        toast({
          title: "Logged in succesfully!",
          status: "success",
          isClosable: true,
        });
      }
    }
  }, []);

  return (
    <>
      <div
        style={{
          background: "none",
          padding: "1px",
        }}
        onClick={() => {
          onOpen();
          if (!path) {
            const cookie = document.cookie.split(";");
            const userCookie = cookie.find((elem) => {
              return elem.includes("userDetails");
            });
            const user = userCookie.substring(
              0,
              userCookie.indexOf("expires") - 1
            );
            const userEmail = user.substring(
              user.indexOf("=") + 1,
              user.length
            );
            // console.log(userEmail);
            const cookieEmail = userEmail;
            authCookie(cookieEmail);
            onClose();
          }
        }}
      >
        Log In
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log into your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={async () => {
                if (!path) {
                  const result = await userMethod(
                    "/log-user",
                    formData,
                    setProfile
                  );
                  console.log(result);

                  if (result) {
                    navigate("/Profile");
                    toast({
                      title: "Logged in succesfully!",
                      status: "success",
                      isClosable: true,
                    });
                    document.cookie = `userDetails=${
                      result.email
                    } expires=${new Date().setDate(new Date().getDate() + 5)}`;
                  } else {
                    toast({
                      title: "Invalid Password Or Email",
                      status: "error",
                      isClosable: true,
                    });
                  }
                } else {
                  const result = await ownerMethod(
                    "/log-user",
                    formData,
                    setProfile
                  );
                  console.log(result);

                  if (result) {
                    navigate("/owner/Profile");
                    toast({
                      title: "Logged in succesfully!",
                      status: "success",
                      isClosable: true,
                    });
                    document.cookie = `AdminDetails=${
                      result.adminEmail
                    } expires=${new Date().setDate(new Date().getDate() + 5)}`;
                  } else {
                    toast({
                      title: "Invalid Password Or Email",
                      status: "error",
                      isClosable: true,
                    });
                  }
                }
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
