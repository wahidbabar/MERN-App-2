import React, { useState } from "react";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { latitude, longitude, radius } = e.target;

    const response = await fetch(
      `http://localhost:3001/users/?lat=${latitude.value}&lng=${longitude.value}&rad=${radius.value}`
    );
    const data = await response.json();
    setUsers(data);
    setShowUsers(true);

    e.target.reset();
  };
  return (
    <div className="flex flex-col">
      {showUsers || (
        <form
          className="bg-[#F0ECCF] shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h2 className="font-bold text-lg p-2 text-gray-500">
            Enter the location in latitudes and longitudes Sto find Users in
            your area
          </h2>
          <div className="flex-col lg:flex-row">
            <div>
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
            </div>
            <div>
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
            </div>
            <div className="mt-2 space-x-2">
              <label
                className="text-gray-500 text-sm font-bold mb-2 mt-2 py-4"
                htmlFor="radius"
              >
                Radius:
              </label>
              <select name="radius" className="rounded-lg">
                <option value="10">10km</option>
                <option value="10">20km</option>
                <option value="10">30km</option>
                <option value="10">40km</option>
                <option value="10">50km</option>
              </select>
            </div>
          </div>
          <button
            className="bg-[#3C6255] mt-4 text-[#F0ECCF] hover:text-[#3C6255] hover:bg-[#F0ECCF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Find Users
          </button>
        </form>
      )}

      {showUsers && (
        <div>
          <h1 className="font-bold text-3xl text-[#F0ECCF] mb-3">Users</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
            {users.map((user) => (
              <UserCard key={user._id} user={user} />
            ))}
          </div>
          <button
            className="bg-[#3C6255] mt-4 text-[#F0ECCF] hover:text-[#3C6255] hover:bg-[#F0ECCF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setShowUsers(false)}
          >
            Enter New Location
          </button>
        </div>
      )}
    </div>
  );
};

export default Users;
