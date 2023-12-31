import React, { useState } from "react";
import Login_modal from "./components/Login_modal";
import CheckInModal from "./components/CheckInModal";
import VisitorsCard from "./components/VisitorsCard";
export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showVisitorsCard, setShowVisitorsCard] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseCheckIn = () => setShowCheckIn(false);
  const handleCloseVisitorsCard = () => setShowVisitorsCard(false);
  const handleCheckInWindow = () => {
    setShowCheckIn(false);
    setShowVisitorsCard(true);
  };
  return (
    // whole screen
    <>
      <div className="w-full h-screen bg-white flex-col justify-center items-center inline-flex">
        <ul className="self-stretch grow shrink basis-0 px-4 py-8 flex-col justify-center items-center gap-4 inline-flex md:flex-row md:gap-8 md:py-12 md:px-8 lg:p-12 lg:gap-16">
          <li className="grow shrink basis-0 self-stretch bg-zinc-300 flex flex-col justify-center items-center rounded-xl hover:scale-105 duration-300 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl shadow-xl group-hover:shadow-2xl shadow-gray-400">
            <h1 className="w-full px-4 md:px-8 font-Yantramanav font-black text-6xl md:text-7xl lg:text-8xl py-4 md:py-8">
              For <br /> Visitors
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
          </li>
          <li className="grow shrink basis-0 self-stretch bg-zinc-300 flex flex-col justify-center items-center rounded-xl hover:scale-105 duration-300 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl shadow-xl group-hover:shadow-2xl shadow-gray-400">
            <h1 className="w-full px-4 md:px-8 font-Yantramanav font-black text-6xl md:text-7xl lg:text-8xl py-4 md:py-8">
              For <br /> Employees
            </h1>
            <p className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <button
                onClick={() => {
                  setShowLogin(true);
                }}
                className="relative px-5 py-2.5 font-Yantramanav font-black text-xl uppercase transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 cursor-pointer"
              >
                Login
              </button>
            </p>
          </li>
        </ul>
      </div>
      {/* Modal Code */}
      <Login_modal onClose={handleCloseLogin} visible={showLogin} />
      <CheckInModal
        onClose={handleCloseCheckIn}
        checkin={handleCheckInWindow}
        visible={showCheckIn}
      />
      <VisitorsCard
        onclose={handleCloseVisitorsCard}
        visible={showVisitorsCard}
      />
    </>
  );
}
