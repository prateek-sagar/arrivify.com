import React from "react";
import { IoClose } from "react-icons/io5";

export default function Login_modal(props) {
  const handleClose = () => {
    props.onClose();
  };
  const close_style = {
    color: "white",
    fontSize: "2em",
    backgroundColor: "black",
    borderRadius: "100%",
  };
  if (!props.visible) return null;

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="relative px-4 pb-4 pt-5 sm:p-6 sm:pb-4 rounded-lg">
                <div className="flex justify-center items-center">
                  <form class="w-full max-w-xs">
                    <div class="mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="username"
                      >
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
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                      >
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
                <div className="absolute -top-3 -right-3 cursor-pointer rounded-full flex items-center justify-center">
                  <IoClose style={close_style} onClick={handleClose} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
