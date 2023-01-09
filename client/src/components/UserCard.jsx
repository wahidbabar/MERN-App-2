import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-[#F0ECCF] text-[#3C6255] rounded-lg p-3 hover:scale-110 transition-all duration-300 ease-in-out">
      <p className="font-semibold">{user.userName}</p>
      <p>Latitude: {user.location.coordinates[0]}</p>
      <p>Longitude: {user.location.coordinates[1]}</p>
      <p>Distance to your location: {Math.floor(user.distance / 1000)} km</p>
    </div>
  );
};

export default UserCard;
