import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, latitude, longitude } = e.target;

    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        location: {
          type: "Point",
          coordinates: [latitude.value, longitude.value],
        },
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    e.target.reset();
  };

  return (
    <div className="w-full">
      <form
        className="bg-[#F0ECCF] shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <label
          className="text-gray-500 text-sm font-bold mb-2 py-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border w-full my-2 rounded py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
          name="name"
          type="text"
          required
        />
        <h2 className="font-bold text-lg p-2 text-gray-500">
          Enter your location in latitudes and longitudes in Decimal Degrees(DD)
        </h2>
        <label
          className="text-gray-500 text-sm font-bold mb-2 py-4"
          htmlFor="latitude"
        >
          Latitude:
        </label>
        <input
          className="shadow appearance-none border rounded my-2 w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
          name="latitude"
          type="text"
          pattern="-?[0-9]{1,3}\.[0-9]*"
          required
        />
        <label
          className="text-gray-500 text-sm font-bold mb-2 mt-2 py-4"
          htmlFor="longitude"
        >
          Longitude:
        </label>
        <input
          className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
          name="longitude"
          type="text"
          pattern="-?[0-9]{1,3}\.[0-9]*"
          required
        />
        <button
          className="bg-[#3C6255] mt-4 text-[#F0ECCF] hover:text-[#3C6255] hover:bg-[#F0ECCF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Confirm User
        </button>
      </form>

      <button
        onClick={() => navigate("/users")}
        className="bg-[#3C6255] mt-4 text-[#F0ECCF] hover:text-[#3C6255] hover:bg-[#F0ECCF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Find Users in Your Area
      </button>
    </div>
  );
};

export default Form;
