import React, { useState } from "react";
import Login_modal from "./components/Login_modal";
import CheckInModal from "./components/CheckInModal";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseCheckIn = () => setShowCheckIn(false);
  return (
    // whole screen
    <>
      <div className=" h-screen">
        {/* List of Login and Check in  */}
        <ul className="w-full h-full md:flex flex-row justify-evenly items-center ">
          <li className="md:w-1/2 md:h-full h-1/2 flex flex-col items-center justify-center">
            {/* Check in card */}
            <div className="rounded-md w-2/3 h-4/5 flex flex-col items-center justify-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl shadow-xl group-hover:shadow-2xl shadow-gray-400">
              <h1 className="font-Yantramanav font-black text-6xl my-20">
                For Visitors
              </h1>
              <p className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <button
                  onClick={() => {
                    setShowCheckIn(true);
                  }}
                  className="relative px-5 py-2.5 font-Yantramanav font-black text-xl uppercase transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 cursor-pointer"
                >
                  Check In
                </button>
              </p>
            </div>
          </li>
          <li className="md:w-1/2 md:h-full h-1/2 flex flex-col items-center justify-center">
            {/* Login Card */}
            <div className="rounded-md w-2/3 h-4/5 flex flex-col items-center justify-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl shadow-xl group-hover:shadow-2xl shadow-gray-400 overflow-hidden">
              <h1 className="font-Yantramanav left-20 font-black text-6xl my-20">
                For Employees
              </h1>
              <p className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <button
                  onClick={() => {
                    setShowLogin(true);
                  }}
                  className="px-5 py-2.5 uppercase transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 cursor-pointer"
                >
                  Login
                </button>
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* Modal Code */}
      <Login_modal onClose={handleCloseLogin} visible={showLogin} />
      <CheckInModal onClose={handleCloseCheckIn} visible={showCheckIn} />
    </>
  );
}
