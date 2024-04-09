import { useState } from "react";
import { Navbar } from "./assets/Components/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./assets/Components/UserView/Home";
import { AboutUs } from "./assets/Components/UserView/AboutUs";
import { SignInModal } from "./assets/Components/UserView/Modals/SignInModal";
import { LogInModal } from "./assets/Components/UserView/Modals/LoginModal";
import { userProfile, ownerProfile } from "./assets/utils/Context";
import { ProfilePage } from "./assets/Components/UserView/Pages/ProfilePage";
import OwnerLayout from "./assets/Components/OwnerView/Pages/ownerLayout";
import { useLocation } from "react-router-dom";
// import { addProductModal } from "./assets/Components/OwnerView/Modals/addProduct";
// import AddProductModal from "../src/assets/Components/OwnerView/Modals/addProduct";
import { ProductLayout } from "./assets/Components/OwnerView/Components/productLayout";
import { ProductCard } from "./assets/Components/UserView/Pages/ProductCard";

function App() {
  const [profile, setProfile] = useState(1);
  const [ownerprofile, setOwnerProfile] = useState("Hello");
  // const location = useLocation();
  const path = window.location.pathname.includes("owner");
  // console.log(path);
  const isOwner = window.location.pathname.includes("owner");
  const [bool, setBool] = useState(false);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/About",
          element: <AboutUs />,
        },
        {
          path: "/SignIn",
          element: <SignInModal />,
        },
        {
          path: path ? "/owner/Login" : "/Login",
          element: <LogInModal />,
        },
        {
          path: isOwner ? "/owner/Profile" : "/Profile",
          element: <ProfilePage />,
        },
        {
          path: "/meals",
          element: <ProductCard />,
        },
      ],
    },
    {
      path: "/owner/dashboard",
      element: <OwnerLayout />,
      children: [
        {
          path: "/owner/dashboard/products",
          element: <ProductLayout />,
        },
      ],
    },
  ]);

  return (
    <>
      <ownerProfile.Provider
        value={{
          ownerprofile: ownerprofile,
          setOwnerProfile: setOwnerProfile,
          bool,
          setBool,
        }}
      >
        <userProfile.Provider
          value={{ profile: profile, setProfile: setProfile }}
        >
          <RouterProvider router={routes}></RouterProvider>
        </userProfile.Provider>
      </ownerProfile.Provider>
    </>
  );
}

export default App;
