import React from "react";

export default function NavBar() {
  return (
    <div className="w-full bg-black h-12 flex justify-center items-center fixed top-0">
      <div className="w-1/2  text-white text-2xl px-[10%]">Arrivify</div>
      <div className="w-1/2 grid grid-flow-col justify-end items-center gap-4 px-[10%] h-full overflow-hidden">
        <button className="outline outline-2 hover:bg-white hover:text-black w-fit px-2 h-8 text-white text-base rounded-full">
          CheckIn
        </button>
        <button className="outline outline-2 hover:bg-white hover:text-black w-fit px-2 h-8 text-white text-base rounded-full">
          Login
        </button>
      </div>
    </div>
  );
}
