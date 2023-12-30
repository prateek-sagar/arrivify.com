import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

// request to backend for the available employees and set it to the options available to visitors
const to_meet = async (setOptions) => {
  try {
    let res = await fetch("http://127.0.0.1:8000/api/employees/");
    if (res.ok) {
      let data = await res.json();
      setOptions(data.data);
      // console.log(data.data[0].id);
    }
  } catch (error) {
    console.log(error);
  }
  // console.log("to meet data");
};

export default function CheckInModal(props) {
  const [options, setOptions] = useState([]); //state to store the array of the response of the data
  // handle the calling of the to_meet functions
  useEffect(() => {
    to_meet(setOptions);
  }, []);

  const handleClose = () => {
    props.onClose();
  };

  //different states to store the details of the user
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [toMeet, setToMeet] = useState(1); // who want to meet the visitors

  // store the close style
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
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                      </label>
                      <input
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                      </label>
                      <input
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    {/* Address */}
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Address
                      </label>
                      <input
                        onChange={(event) => {
                          setAddress(event.target.value);
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter Address"
                      />
                    </div>
                    {/* purpose */}
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Purpose
                      </label>
                      <input
                        onChange={(e) => {
                          setPurpose(e.target.value);
                          console.log(purpose);
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Ex: Interview"
                      />
                    </div>
                    {/* to meet */}
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        To Meet
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        name="select"
                        defaultValue="employee"
                        onChange={(event) => {
                          console.log(event.target.value);
                          setToMeet(event.target.value);
                        }}
                      >
                        {options.map((options) => (
                          <option key={options.id} value={options.id}>
                            {options.designation}
                          </option>
                        ))}
                      </select>
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
