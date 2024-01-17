import React from "react";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    // whole screen
    <>
      <NavBar />
      <div className="w-full bg-white flex-col justify-center items-center inline-flex">
        <div className="w-full grid grid-cols-1 h-[100dvh]">
          <ul className="self-stretch grow shrink basis-0 px-4 py-8 flex-col justify-center items-center gap-4 inline-flex md:flex-row md:gap-8 md:py-12 md:px-8 lg:p-12 lg:gap-16 mt-4">
            <li className="grow shrink basis-0 self-stretch flex flex-col justify-center items-center rounded-xl duration-300 bg-red-300">
              <h1 className="w-full px-4 md:px-8 font-Yantramanav font-black text-6xl md:text-7xl lg:text-8xl py-4 md:py-8">
                For <br /> Visitors
              </h1>
              <Link
                to={"/checkin"}
                class="bg-blue-500 hover:bg-blue-700 text-xl text-white font-medium py-2 px-4 rounded-full"
              >
                CheckIn
              </Link>
            </li>
            <li className="grow shrink basis-0 self-stretch flex flex-col justify-center items-center rounded-xl duration-300 bg-yellow-200">
              <h1 className="w-full px-4 md:px-8 font-Yantramanav font-black text-6xl md:text-7xl lg:text-8xl py-4 md:py-8">
                For <br /> Employees
              </h1>
              <Link
                to={"/login"}
                class="bg-blue-500 hover:bg-blue-700 text-xl text-white font-medium py-2 px-4 rounded-full"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
        {/* to be add in future */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
