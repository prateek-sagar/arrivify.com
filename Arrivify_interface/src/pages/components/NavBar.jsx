import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
    console.log(localStorage.getItem("access_token"));
  }, [isAuth]);

  return (
    <div className="w-full bg-black bg-opacity-60 h-12 flex justify-center items-center fixed top-0">
      <div className="w-1/2 text-white text-2xl px-[10%]">Arrivify</div>
      <div className="w-1/2 grid grid-flow-col justify-end items-center gap-4 px-[10%] h-full overflow-hidden">
        {isAuth ? (
          <Link
            to={"/logout"}
            className="outline outline-2 hover:bg-white hover:text-black w-fit px-2 h-8 text-white text-base rounded-full flex items-center justify-center"
          >
            Logout
          </Link>
        ) : (
          <>
            <Link
              to={"/checkin"}
              className="outline outline-2 hover:bg-white hover:text-black w-fit px-2 h-8 text-white text-base rounded-full flex items-center justify-center"
            >
              CheckIn
            </Link>
            <Link
              to={"/login"}
              className="outline outline-2 hover:bg-white hover:text-black w-fit px-2 h-8 text-white text-base rounded-full flex items-center justify-center"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
