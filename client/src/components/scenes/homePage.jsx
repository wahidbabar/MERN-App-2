import React from "react";
import Navbar from "../Navbar";
import Form from "../Form";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-[#3C6255]">
      <Navbar />
      <div className="items-center justify-center max-w-7xl mx-auto p-10">
        <Form />
      </div>
    </div>
  );
};

export default HomePage;
