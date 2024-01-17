import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

// store the data of the visitors to checkin
const visitor_checkin = async (_name, _email, _purpose, _toMeet, _address) => {
  const url = "http://127.0.0.1:8000/api/visitors/";
  const name_array = _name.split(" "); // convert of data into first and last name to store in database
  console.log(name_array, _toMeet);
  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: name_array[0],
        last_name: name_array[1],
        email: _email,
        purpose: _purpose,
        to_meet: _toMeet,
        address: _address,
      }),
    });
    if (res.ok) {
      let res_data = await res.json();
      console.log(res_data);
    }
  } catch (error) {
    console.log(error);
  }
};

// request to backend for the available employees and set it to the options available to visitors
const to_meet_func = async (setOptions) => {
  const url = "http://127.0.0.1:8000/api/employees/";
  try {
    let res = await fetch(url);
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
//main function to store the form and functions
export default function CheckInModal() {
  const [options, setOptions] = useState([]); //state to store the array of the response of the data
  // handle the calling of the to_meet functions
  useEffect(() => {
    to_meet_func(setOptions);
  }, []);

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

  return (
    <>
      <div className="h-screen w-full  flex justify-center items-center">
        <div className="h-fit min-w-[240px] w-1/3 xl:w-1/4 flex flex-col justify-center items-center">
          <div className="relative w-full">
            <Link
              to={"/"}
              className="absolute outline outline-white -top-3 -right-3 cursor-pointer rounded-full flex items-center justify-center"
            >
              <IoClose style={close_style} />
            </Link>
          </div>
          <div class="w-full rounded bg-gray-500 bg-opacity-40 text-white overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">CheckIn</div>
              <div className="flex justify-center items-center">
                <form className="w-full max-w-xs">
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Name</label>
                    <input
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block  text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      className="shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  {/* Address */}
                  <div className="mb-6">
                    <label className="block  text-sm font-bold mb-2">
                      Address
                    </label>
                    <input
                      onChange={(event) => {
                        setAddress(event.target.value);
                      }}
                      className="shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Address"
                    />
                  </div>
                  {/* purpose */}
                  <div className="mb-6">
                    <label className="block  text-sm font-bold mb-2">
                      Purpose
                    </label>
                    <input
                      onChange={(e) => {
                        setPurpose(e.target.value);
                        // console.log(purpose);
                      }}
                      className="shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Ex: Interview"
                    />
                  </div>
                  {/* to meet */}
                  <div className="mb-6">
                    <label className="block  text-sm font-bold mb-2">
                      To Meet
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      name="select"
                      defaultValue="employee"
                      onChange={(event) => {
                        // console.log(event.target.value);
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
                      onClick={() => {
                        visitor_checkin(name, email, purpose, toMeet, address);
                        handleCheckIn();
                        console.log("check in");
                      }}
                    >
                      Check In
                    </button>
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
