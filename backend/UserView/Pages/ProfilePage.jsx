import React, { useContext } from "react";
import { userProfile } from "../../../utils/Context";
import CustomerDashboard from "./OrderSummary";
import { useLocation } from "react-router-dom";

export const ProfilePage = () => {
  const { profile } = useContext(userProfile);
  const location = useLocation();
  const path = location.pathname.includes("owner");
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center ">
      {!path ? (
        <>
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md shadow-black">
            {/* Profile Image */}
            <div className="flex items-center justify-center">
              <img
                src={`${import.meta.env.VITE_Backend_Url}/uploads/${
                  profile.userPic
                }`}
                alt="Profile Image"
                className="h-24 w-24 rounded-full"
              />
            </div>

            {/* Profile Information */}
            <div className="mt-6">
              {/* Email */}
              <div className="flex items-center mb-4">
                <span className="text-gray-600 mr-4">Email:</span>
                <span className="text-gray-800 font-bold text-lg">
                  {profile.email}
                </span>
              </div>
              {/* Username */}
              <div className="flex items-center mb-4">
                <span className="text-gray-600 mr-4">Username:</span>
                <span className="text-gray-800 font-bold text-lg">
                  {profile.fName} {profile.lName}
                </span>
              </div>
              {/* Phone Number */}
              <div className="flex items-center mb-4">
                <span className="text-gray-600 mr-4">Phone Number:</span>
                <span className="text-gray-800 font-bold text-lg">
                  +91 {profile.PhnNum}
                </span>
              </div>
            </div>
            <CustomerDashboard />
          </div>
        </>
      ) : (
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md shadow-black">
          {/* Profile Image */}
          <div className="flex items-center justify-center">
            <img
              src={`${import.meta.env.VITE_Backend_Url}/uploads/${
                profile.adminPic
              }`}
              alt="Profile Image"
              className="h-24 w-24 rounded-full"
            />
          </div>

          {/* Profile Information */}
          <div className="mt-6">
            {/* Email */}
            <div className="flex items-center mb-4">
              <span className="text-gray-600 mr-4">Email:</span>
              <span className="text-gray-800 font-bold text-lg">
                {profile.adminEmail}
              </span>
            </div>
            {/* Username */}
            <div className="flex items-center mb-4">
              <span className="text-gray-600 mr-4">Username:</span>
              <span className="text-gray-800 font-bold text-lg">
                {profile.adminfName} {profile.adminlName}
              </span>
            </div>
            {/* Phone Number */}
            <div className="flex items-center mb-4">
              <span className="text-gray-600 mr-4">Phone Number:</span>
              <span className="text-gray-800 font-bold text-lg">
                +91 {profile.adminPhnNum}
              </span>
            </div>
          </div>
          <CustomerDashboard />
        </div>
      )}
    </div>
  );
};
