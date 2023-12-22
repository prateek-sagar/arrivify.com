import React from "react";
import { IoClose } from "react-icons/io5";

export default function CheckInModal(props) {
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
                  <form className="w-full max-w-xs">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        for="username"
                      >
                        First Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="abc@mail.com"
                      />
                    </div>
                    {/* Address */}
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Address
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="abc@mail.com"
                      />
                    </div>
                    {/* purpose */}
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Purpose
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="abc@mail.com"
                      />
                    </div>
                    {/* to meet */}
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        To Meet
                      </label>
                      <input
                        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="abc@mail.com"
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Check In
                      </button>
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
