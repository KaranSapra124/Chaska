import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./assets/Components/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./assets/Components/UserView/Home";
import { AboutUs } from "./assets/Components/UserView/AboutUs";
import { SignInModal } from "./assets/Components/UserView/Modals/SignInModal";
import { LogInModal } from "./assets/Components/UserView/Modals/LoginModal";
import { userProfile } from "./assets/utils/Context.js";
import "./index.css";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/About",
//         element: <AboutUs />,
//       },
//       {
//         path: "/SignIn",
//         element: <SignInModal />,
//       },
//       {
//         path: "/LogIn",
//         element: <LogInModal />,
//       },
//     ],
//   },
// ]);
// const func = () => {
//   const [profile, setProfile] = useState("hello");
//   return { profile, setProfile };
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
