import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Login_modal() {
  const close_style = {
    color: "white",
    fontSize: "2em",
    backgroundColor: "black",
    borderRadius: "100%",
  };

  return (
    <>
      <div className="h-screen w-full  flex justify-center items-center">
        <div className="h-fit w-1/2   grid justify-center items-center">
          <div className="relative w-auto">
            <Link
              to={"/"}
              className="absolute outline outline-white -top-3 -right-3 cursor-pointer rounded-full flex items-center justify-center"
            >
              <IoClose style={close_style} />
            </Link>
          </div>
          <div class="max-w-sm rounded bg-gray-500 bg-opacity-40 text-white overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Login</div>
              <div className="flex justify-center items-center">
                <form class="w-full max-w-xs">
                  <div class="mb-4">
                    <label class="block  text-sm font-bold mb-2" for="username">
                      Username
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div class="mb-6">
                    <label class="block  text-sm font-bold mb-2" for="password">
                      Password
                    </label>
                    <input
                      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      autoComplete="off"
                      placeholder="******************"
                    />
                    <p class="text-red-500 text-xs italic">
                      Please choose a password.
                    </p>
                  </div>
                  <div class="flex items-center justify-between">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Sign In
                    </button>
                    <a
                      class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
