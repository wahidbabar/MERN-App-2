import React from "react";
import Navbar from "../Navbar";
import Users from "../Users";

const UsersPage = () => {
  return (
    <div className="w-screen h-screen bg-[#3C6255]">
      <Navbar />
      <div className="items-center justify-center max-w-7xl mx-auto p-10">
        <Users />
      </div>
    </div>
  );
};

export default UsersPage;
