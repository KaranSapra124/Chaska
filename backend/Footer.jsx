import React from "react";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://imgs.search.brave.com/Je5Umw1B6T9_zZubyRnwC0x000e5rNFW-9evG8NHQ-Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzcwLzQ4LzM4/LzM2MF9GXzE3MDQ4/MzgyNF9rQ21pbEdy/dXJ0TnUxV3pKQTdQ/ek8ycUFuMTBxUTlU/MS5qcGc"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Chaska
            </span>
          </a>
          <ul className="flex  flex-wrap items-center mb-6 text-lg max-[400px]:text-sm max-[400px]:justify-center font-medium text-black sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-800 sm:mx-auto  dark:border-gray-700 lg:my-8" />
        <span className="block text-md text-black font-semibold sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Chaska™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
