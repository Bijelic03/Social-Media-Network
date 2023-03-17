import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
export function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () =>
        window.innerWidth >= 960 && setOpenNav(false) && setOpenSearch(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography className="text-lg font-semibold ">
        <a
          href="#"
          className="flex items-center text-white hover:text-gray-200"
        >
          Home page
        </a>
      </Typography>
      <Typography className="text-lg font-semibold  ">
        <a
          href="#"
          className="flex items-center  text-white  hover:text-gray-200"
        >
          Account
        </a>
      </Typography>
      <Typography className="text-lg font-semibold">
        <a
          href="#"
          className="flex items-center  text-white hover:text-gray-200"
        >
          Sign in
        </a>
      </Typography>
      <Typography className=" text-lg font-semibold ">
        <a
          href="#"
          className="flex items-center text-white hover:text-gray-200 "
        >
          Sign out
        </a>
      </Typography>
      <h1 className="text-6x3"></h1>
    </ul>
  );

  const inputSearch = (
    <form className=" px-4 ">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className=" w-full font-semibold py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
      </div>
    </form>
  );
  return (
    <Navbar className="shadow-md shadow-gray-400		bg-gradient-to-r from-green-400 to-blue-500	 mx-auto  py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Typography className="font-semibold text-xl mr-4 cursor-pointer py-1.5 font-sans">
          <span>Social Network</span>
        </Typography>
        <div className="w-1/3 hidden lg:block">{inputSearch}</div>
        {openSearch ? (
          <div className="w-1/2 lg:hidden">{inputSearch}</div>
        ) : (
          <>
            {" "}
            <Button className="p-2 text-white bg-purple-600 rounded-full  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                onClick={() => !setOpenSearch(!openSearch)}
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </>
        )}
        <div>
          <Button
            className="p-2 text-white bg-purple-600 rounded-full  lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}
